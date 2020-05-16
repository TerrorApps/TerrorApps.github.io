import React, { ReactNode } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

interface ContentProps {
  children: ReactNode
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={8}>{children}</Col>
      </Row>
    </Container>
  )
}

export default Content
