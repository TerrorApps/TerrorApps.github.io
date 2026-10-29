import React from "react"
import { Link } from "react-router-dom"

// Blog has no page yet; it renders as a placeholder, as in the design.
const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <Link className="wordmark" to="/">
        Terror
      </Link>
      <div className="nav__links">
        <Link className="nav__link" to="/#data">
          Data
        </Link>
        <Link className="nav__link" to="/#api">
          API
        </Link>
        <Link className="nav__link" to="/#apps">
          Apps
        </Link>
        <Link className="nav__link" to="/#work">
          Work
        </Link>
        <a className="nav__link" href="#">
          Blog
        </a>
        <Link className="nav__link" to="/about">
          About
        </Link>
        <Link className="btn btn--primary btn--sm" to="/#contact">
          Book a demo
        </Link>
      </div>
    </nav>
  )
}

export default Nav
