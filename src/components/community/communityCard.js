import React from "react"
import {Link} from "gatsby"

const CommunityCard = ({singleCommunity, cardStyle}) => {
  const {title, summary, date} = singleCommunity.frontmatter
  const slug = singleCommunity.fields.slug
  

  return (
    <div className="blog-card-container">
      <Link to={slug}>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{summary}</p>
                <p className="published"><small className="text-muted">Published {date}</small></p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CommunityCard
