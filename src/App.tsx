import React, { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom"

import Nav from "./components/Nav"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import PrivacyPage from "./pages/PrivacyPage"

// Route changes keep the scroll position by default; jump to the hash target, or to the top when there is none.
const ScrollToHash: React.FC = () => {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash, key])

  return null
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToHash />
      <div className="site">
        <Nav />
        <main className="site__main">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/privacy" exact component={PrivacyPage} />
            {/* The privacy policy links to /contact; the form now lives on the home page. */}
            <Redirect from="/contact" to="/#contact" />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
