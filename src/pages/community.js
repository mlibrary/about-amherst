import React from "react"
import {graphql} from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import CommunityList from "../components/community/communityList"

const Community = ({data}) => {
  const community = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Community" />
      <div className="container page-container">
        <div className="row text-right">
          <div className="col-md-12">
            <p className="social scala-sans">Connect with us  <a href="https://www.instagram.com/amherstcollegepress/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" classname="social-link fb" aria-hidden="false"><title>Instagram</title><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></a>
              <a href="http://www.twitter.com/AmCollPress"><svg width="24px" height="24px" viewBox="0 0 24 24" className="social-link tw" aria-hidden="false"><title>Twitter</title><path d="M22,5.8a8.6,8.6,0,0,1-2.36.65,4.07,4.07,0,0,0,1.8-2.27,8.1,8.1,0,0,1-2.6,1A4.1,4.1,0,0,0,11.75,8a4.73,4.73,0,0,0,.09.93A11.6,11.6,0,0,1,3.39,4.62,4.2,4.2,0,0,0,2.83,6.7a4.09,4.09,0,0,0,1.82,3.4A4,4,0,0,1,2.8,9.6v0a4.11,4.11,0,0,0,3.29,4A4.2,4.2,0,0,1,5,13.81a4,4,0,0,1-.78-.07,4.14,4.14,0,0,0,3.83,2.85A8.22,8.22,0,0,1,3,18.34a6.37,6.37,0,0,1-1-.06,11.48,11.48,0,0,0,6.29,1.84A11.58,11.58,0,0,0,20,8.46c0-.18,0-.36,0-.53A8.31,8.31,0,0,0,22,5.8Z"></path></svg></a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
          <h1>Amherst College Campus &amp; Community</h1>
            <p>Amherst College Press is proud to participate in the life and community at Amherst College and the greater Pioneer Valley. We are particularly invested in raising awareness about open access and working towards more inclusive scholarly publishing practices. And we are always eager to partner with organizations, community groups, and colleagues at other academic and public libraries. <a href="/contact">Reach out to us</a> if you would like to learn more about open access humanities book publishing, to request a publishing workshop on your campus, or to simply say hi.</p>
            <p>As one of the only university presses based at a liberal arts college, Amherst College Press is committed to developing opportunities for Amherst College undergraduates to become involved in the work of the press. Read more about the <a href="/internships">Amherst College Press internship program here</a>.</p>
            <p>Below you'll find resources created by our interns, including blog posts, book lists, author interviews, and more.</p>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <CommunityList community={community} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "community" } }
    },
    sort: {
      fields: frontmatter___date,
      order: DESC
    }
  ) {
    edges {
      node {
        id
        fields{
          slug
        }
        html
        frontmatter {
          title
          summary
          date(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
}
`

export default Community