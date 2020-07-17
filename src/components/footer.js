import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

export const titleQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
}
`

const Footer = () => {
    const data = useStaticQuery(titleQuery)
    const {title} = data.site.siteMetadata
    const now = new Date()
    const year = now.getFullYear()

    return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <a href="/" className="text-light mb-2 scala-sans"><img src="/assets/LeverLogo-PMS292.svg" alt="" height="100" width="auto" className="block" /> Lever Press</a>
            <small className="text-light d-block">Amherst, MA</small>      
            <small className="d-block"><a className="text-light" href="mailto:info@leverpress.org">info@leverpress.org</a></small>      
            <p className="social">
              <a href="https://www.facebook.com/LeverPress/"><svg width="24px" height="24px" viewBox="0 0 24 24" className="social-link fb" aria-hidden="false"><title>Facebook</title><path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7h-1.6c-1.25,0-1.49.59-1.49,1.47v1.92h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"></path></svg></a>
              <a href="https://twitter.com/lever_press"><svg width="24px" height="24px" viewBox="0 0 24 24" className="social-link tw" aria-hidden="false"><title>Twitter</title><path d="M22,5.8a8.6,8.6,0,0,1-2.36.65,4.07,4.07,0,0,0,1.8-2.27,8.1,8.1,0,0,1-2.6,1A4.1,4.1,0,0,0,11.75,8a4.73,4.73,0,0,0,.09.93A11.6,11.6,0,0,1,3.39,4.62,4.2,4.2,0,0,0,2.83,6.7a4.09,4.09,0,0,0,1.82,3.4A4,4,0,0,1,2.8,9.6v0a4.11,4.11,0,0,0,3.29,4A4.2,4.2,0,0,1,5,13.81a4,4,0,0,1-.78-.07,4.14,4.14,0,0,0,3.83,2.85A8.22,8.22,0,0,1,3,18.34a6.37,6.37,0,0,1-1-.06,11.48,11.48,0,0,0,6.29,1.84A11.58,11.58,0,0,0,20,8.46c0-.18,0-.36,0-.53A8.31,8.31,0,0,0,22,5.8Z"></path></svg></a>
            </p>  
          </div>
          <div className="col-md-2">
            <h5>Our Partners</h5>
            <ul className="list-unstyled text-small">
              <li><a href="https://acpress.amherst.edu/" className="text-light">Amherst College Press</a></li>
              <li><a href="http://www.oberlingroup.org/" className="text-light">Oberlin Group</a></li>
              <li><a href="https://www.publishing.umich.edu" className="text-light">Michigan Publishing</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Peer Review</h5>
            <ul className="list-unstyled text-small">
              <li><a href="/peerreview" className="text-light">Our Commitments and Guidelines</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Book Series</h5>
            <ul className="list-unstyled text-small">
              <li><a href="/series#asianetwork" className="text-light">ASIANetwork Books</a></li>
              <li><a href="/series#multimodal" className="text-light">Multimodal Monographs</a></li>
              <li><a href="/series#re-editions" className="text-light">Re-Editions</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
          <small className="text-light d-block mb-3">© {year} <a aria-label="Creative Commons Attribution Non-Commercial No Derivatives 4.0 International license" rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
                <img alt="Creative Commons Attribution Non-Commercial No Derivatives 4.0 International license" src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png" />
              </a> · <a className="text-light" href="https://fulcrum.org/accessibility/">Accessibility</a> · <a className="text-light" href="https://fulcrum.org/preservation">Preservation</a></small>    
          </div>
          <div className="col-md-6 text-right">
            <small className="text-white scala-sans">Powered by</small> <a href="https://fulcrum.org/"><img className="fulcrum" src="/assets/fulcrum-full-white.svg" alt="Fulcrum logo" height="20" width="auto" /></a>
          </div>
        </div>
      </div>  
    </footer>
  )
}

export default Footer
