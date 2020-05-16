import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

interface HeroProps {
  title: string
  subTitle?: string
  description?: string
}

const Hero: React.FC<HeroProps> = ({ title, subTitle, description }) => {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            {title && <h1 className="display-1 font-weight-bold">{title}</h1>}
            {subTitle && <h3 className="display-4 font-weight-light">{subTitle}</h3>}
            {description && <h3 className="lead font-weight-light">{description} </h3>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Hero
