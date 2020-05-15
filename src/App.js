import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Terror Apps",
      headerLinks: [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "About",
          path: "/about",
        },
        {
          title: "Contact",
          path: "/contact",
        },
      ],
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
    };
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Container className="p-0" fluid={true}>
          <Navbar expand="lg">
            <Navbar.Brand>
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/rreyes/image/upload/v1588809670/terror_apps_logo_rprbvp.png"
                  width="100px"
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
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                description={this.state.home.description}
              />
            </Route>
            <Route path="/about" exact>
              <AboutPage title={this.state.about.title} />
            </Route>
            <Route path="/contact" exact>
              <ContactPage title={this.state.contact.title} />
            </Route>
            <Route path="/privacy" exact>
              <PrivacyPage title={this.state.privacy.title} />
            </Route>
          </Switch>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
