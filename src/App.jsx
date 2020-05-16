import React, { Component } from "react"
// import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import PrivacyPage from "./pages/PrivacyPage"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      home: {
        title: "Terror Apps",
        subTitle: "Awesome projects by awesome devs",
        description: "See awesome projects below",
      },
      about: {
        title: "About Us",
      },
      contact: {
        title: "Contact Us",
      },
      privacy: {
        title: "Terror Apps",
      },
    }
  }

  render() {
    const { home, about, contact, privacy } = this.state
    return (
      <Router>
        <Container className="p-0" fluid>
          <Navbar expand="lg">
            <Navbar.Brand>
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/rreyes/image/upload/v1588809670/terror_apps_logo_rprbvp.png"
                  width="100px"
                  alt="Terror Logo"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
                <Link className="nav-link text-white" to="/about">
                  About
                </Link>
                <Link className="nav-link text-white" to="/contact">
                  Contact
                </Link>
                <Link to="/privacy" />
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route path="/" exact>
              <HomePage title={home.title} subTitle={home.subTitle} description={home.description} />
            </Route>
            <Route path="/about" exact>
              <AboutPage title={about.title} />
            </Route>
            <Route path="/contact" exact>
              <ContactPage title={contact.title} />
            </Route>
            <Route path="/privacy" exact>
              <PrivacyPage title={privacy.title} />
            </Route>
          </Switch>
          <Footer />
        </Container>
      </Router>
    )
  }
}

export default App
