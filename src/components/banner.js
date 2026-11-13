import React from "react"

const Banner = ({ html }) => (
  <section className="site-banner" aria-label="Announcement">
    <div className="container" dangerouslySetInnerHTML={{ __html: html }} />
  </section>
)

export default Banner