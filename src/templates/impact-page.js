import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import Title from '../components/title'
import {graphql} from 'gatsby'
import ReactMarkdown from "react-markdown";

const Impact = ({data}) => {
  const {
    title,
    readershipMapDescription,
    googleDataStudioDescription
  } = data.markdownRemark.frontmatter

  // When we have markdown in the frontmatter, we need to process it
  // with ReactMarkdown (or something) or something similar.
  // When it's in the "html"/not frontmatter, we would "dangerouslySetInnerHTML"

  return (
    <Layout>
      <SEO title={title} />
      <div className="container page-container">
        <Title title={title} />
        <div className="readership-map">
          <ReactMarkdown source={readershipMapDescription} />
          <div className="readership-map-embed">
            <iframe title="Amherst College Press Readership Map" frameborder="0" height="650" width="100%" src="https://maps.publishing.umich.edu/readership-map/?filter.view=202426456"></iframe>
          </div>
        </div>
        <div className="google-data-studio">
          <ReactMarkdown source={googleDataStudioDescription} />
          <div className="embed-responsive embed-responsive-1by1">
            <iframe title="Amherst College Press Usage Report" className="embed-responsive-item" src="https://datastudio.google.com/embed/reporting/2de5b039-ff9d-4848-851c-ecd5cb36a7ed/page/9LCE"></iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query impactPage($id: String!) {
  	markdownRemark(id: {eq: $id}) {
      frontmatter{
        title
        readershipMapDescription
        googleDataStudioDescription
      }
    }
  }
`

export default Impact
