import React from "react"

const Catalog = ({catalog}) => {
  const catalogImage = catalog.catalogImage.childImageSharp ? catalog.catalogImage.childImageSharp.fluid.src : catalog.catalogImage
  return (
    <div className="catalog-wrapper">
      <h2 className="sr-only">{catalog.heading}</h2>
      <figure><img src={catalogImage} alt="Catalog Cover" className="catalog-image"/></figure>
      <div dangerouslySetInnerHTML={{ __html: catalog.catalogPdf }} />
    </div>
  )
}

export default Catalog