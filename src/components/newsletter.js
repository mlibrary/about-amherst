import React from "react"

const Newsletter = ({newsletter}) => {
  return (
    <div className="text-light">
      <h2 className="sr-only">{newsletter.heading}</h2>
      <p>{newsletter.description}</p>
      <a className="btn btn-primary" href={newsletter.url}>{newsletter.buttonLabel}</a>
    </div>
  )
}

export default Newsletter
