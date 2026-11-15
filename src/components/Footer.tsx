import React from "react"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="wordmark">Terror</span>
          <span>Mobile apps, SaaS and consulting.</span>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <Link to="/#services">Services</Link>
            <Link to="/#api">Cardpool</Link>
          </div>
          <div className="footer__col">
            <Link to="/about">About</Link>
            <Link to="/#contact">Contact</Link>
          </div>
          <div className="footer__col">
            <Link to="/privacy">Privacy</Link>
          </div>
        </div>
        <span className="footer__copy">© 2026 Terror LLC</span>
      </div>
    </footer>
  )
}

export default Footer
