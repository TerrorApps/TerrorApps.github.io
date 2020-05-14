import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            <Link className="nav-link text-white" to="/privacy">
              Privacy
            </Link>
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            c.2020, Terror LLC
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
