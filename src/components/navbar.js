import React, {useState} from "react"
import {Link} from "gatsby"

const Navbar = () => {
  const [isOpen, setNav] = (useState(false))
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src="/assets/AmherstLogo.svg" alt="" height="70" width="auto" className="navbar-brand-logo" aria-labelledby="title"/> <h1 id="title" className="sr-only">Amherst College Press</h1>
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navbar" className={
          isOpen
            ? "collapse navbar-collapse flex-row show"
            : "collapse navbar-collapse flex-row-reverse"
          }
        >
          <ul className="navbar-nav float-right">
            <li className="nav-item">
              <Link to="/about" className="nav-link text-dark">
                About
              </Link>
            </li>
            <li>
              <a href="https://www.fulcrum.org/amherst" className="nav-link text-dark">
                Books
              </a>
            </li>
            <li>
              <a href="/series" className="nav-link text-dark">
                Series
              </a>
            </li>
            <li>
              <Link to="/authors" className="nav-link text-dark">
                Publish With Us
              </Link>
            </li>
            <li>
              <Link to="/currentauthors" className="nav-link text-dark">
                For Current Authors
              </Link>
            </li>
            <li>
              <Link to="/blog" className="nav-link text-dark">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/conferences" className="nav-link text-dark">
                Conferences
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link text-dark">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
