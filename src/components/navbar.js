import React, {useState} from "react"
import {Link} from "gatsby"

const Navbar = () => {
  const [isOpen, setNav] = (useState(false))
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src="/assets/AmherstLogo.svg" alt="" height="70" width="auto" className="navbar-brand-logo" /> <h1 id="title" className="sr-only">Amherst College Press</h1>
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
            <li className="nav-item dropdown">
              <button className="dropdown-menu-top-link text-dark bg-light dropdown-toggle" id="dropdownMenuLinkAbout" data-toggle="dropdown" aria-expanded="false">
                About
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/about">About Us</a>                
                <a className="dropdown-item" href="/contact">Contact Us</a>
                <a className="dropdown-item" href="/internships">Internships</a>
              </div>
            </li>
            <li className="nav-item">
              <a href="https://www.fulcrum.org/amherst" className="nav-link text-dark">
                Books
              </a>
            </li>
            <li className="nav-item">
              <a href="/series" className="nav-link text-dark">
                Series
              </a>
            </li>
            <li className="nav-item dropdown">
              <button className="dropdown-menu-top-link text-dark bg-light dropdown-toggle" id="dropdownMenuLinkForAuthors" data-toggle="dropdown" aria-expanded="false">
                For Authors
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/authors">Prospective Authors</a>                
                <a className="dropdown-item" href="/currentauthors">Current Authors</a>
              </div>
            </li>            
            <li className="nav-item">
              <Link to="/blog" className="nav-link text-dark">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/conferences" className="nav-link text-dark">
                Conferences
              </Link>
            </li>            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
