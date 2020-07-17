import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import Title from '../components/title'
import {graphql} from 'gatsby'

const Join = ({data}) => {
  const title = data.markdownRemark.frontmatter.title
  const html = data.markdownRemark.html
  return (
    <Layout>
      <SEO title={title} />
      <div className="jumbotron join-jumbo">
        <div className="container">
          <Title title={title}/>
          <p className="join-tag lead">Changing the status quo in scholarly communications</p>
          <p>With the support of more than 50 liberal arts institutions, we publish peer-reviewed, born digital, open access monographs at no cost to our authors or their academic institutions.</p>
            <div className="join-cta">
              <a class="btn btn-primary btn-lg" href="https://forms.gle/3kDMmHqjVC3a7w358" role="button">Make a Membership Pledge »</a>
            </div>
        </div>
      </div>
      <div className="container page-container join-us">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query joinPage($id: String!) {
  	markdownRemark(id: {eq: $id}) {
      html
      frontmatter{
        title
      }
    }
  }
`

export default Join
