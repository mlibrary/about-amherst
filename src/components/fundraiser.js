import React from "react"

const Fundraiser = ({fundraiser}) => {
  return (
    <div className="text-dark">
      <h2 className="sr-only">{fundraiser.heading}</h2>
      <p>{fundraiser.description}</p>
      <a className="btn btn-primary" href={fundraiser.url}>{fundraiser.buttonLabel}</a>
    </div>
  )
}

export default Fundraiser
