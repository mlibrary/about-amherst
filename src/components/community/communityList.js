import React from "react"
import CommunityCard from "./communityCard"

const CommunityList = ({community, cardStyle}) => {
  return (
    <section className="blog-card-list">
    {
      community.map(({node}) => {
        return <CommunityCard key={node.id} singleCommunity={node} cardStyle={cardStyle}/>
      })
    }
    </section>
  )
}

export default CommunityList
