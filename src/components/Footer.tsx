import React from "react"
import { Link } from "react-router-dom"

// Blog and EULA have no pages yet; they render as placeholders, as in the design.
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="wordmark">Terror</span>
          <span>Data and apps for TCG stores.</span>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <Link to="/#data">Data</Link>
            <Link to="/#api">Cardpool API</Link>
            <Link to="/#apps">Apps</Link>
            <Link to="/#work">Work</Link>
          </div>
          <div className="footer__col">
            <a href="#">Blog</a>
            <Link to="/about">About</Link>
            <Link to="/#contact">Contact</Link>
          </div>
          <div className="footer__col">
            <Link to="/privacy">Privacy</Link>
            <a href="#">EULA</a>
          </div>
        </div>
        <span className="footer__copy">© 2026 Terror LLC</span>
      </div>
    </footer>
  )
}

export default Footer
