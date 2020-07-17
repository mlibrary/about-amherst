import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="container page-container">
      <SEO title="404: Not found" />
      <h1 className="mb-3">NOT FOUND</h1>
      <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
