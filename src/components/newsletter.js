import React from "react"

const Newsletter = ({newsletter}) => {
  return (
    <div className="container">
      <div className="row"> 
        <div className="col-md-6">
          <h2 className="sr-only">{newsletter.heading}</h2>
          <p>{newsletter.description}</p>
        </div>
        <div className="col-md-6 text-center">
          <a className="btn btn-secondary" href={newsletter.url}>{newsletter.buttonLabel}</a>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
