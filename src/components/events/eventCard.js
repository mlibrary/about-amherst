import React from "react"
import {Link} from "gatsby"

const EventCard = ({event, cardStyle}) => {
  const {title, summary} = event.frontmatter
  const slug = event.fields.slug

  return (
        <li className="media my-4 event-card-container">
          <Link to={slug}>
          <div className="media-body">
            <h5 className="mt-0 mb-1">{title}</h5>
            <p>{summary}</p>
          </div>
          </Link>
        </li>
  )
}

export default EventCard
