import React from "react"
import Img from "gatsby-image"

const Catalog = ({catalog}) => {
  return (
    <div className="catalog-wrapper">
      <h2 className="sr-only">{catalog.heading}</h2>
      <figure><Img fluid={catalog.catalogImage.childImageSharp.fluid} alt="Catalog Cover" className="catalog-image"/></figure>
      <div dangerouslySetInnerHTML={{ __html: catalog.catalogPdf }} />
    </div>
  )
}

export default Catalog