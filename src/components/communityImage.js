import React from "react"
import Img from "gatsby-image"

const CommunityImage = ({communityImage}) => {
  return (
    <div>
    <h2>{communityImage.heading}</h2>
    <a href="/community">
      <figure><Img fluid={communityImage.communityImage.childImageSharp.fluid} alt="" className="map-image"/></figure>
      <p>{communityImage.description}</p>
    </a>
    </div>
  )
}

export default CommunityImage