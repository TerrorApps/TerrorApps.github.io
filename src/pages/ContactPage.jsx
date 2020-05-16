import React, { Component } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import Hero from "components/Hero"
import Content from "components/Content"

class ContactPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    }
  }

  handleChange = event => {
    const { target } = event
    const value = target.type === "checkbox" ? target.checked : target.value
    const { name } = target

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({
      disabled: true, // edge case to not submit more than ONCE in same session
      // emailSent: false, // testing post-email messages
    })
  }

  render() {
    const { name, email, message, disabled, emailSent } = this.state
    // eslint-disable-next-line react/prop-types
    const { title } = this.props
    return (
      <div>
        <Hero title={title} />
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control id="full-name" name="name" type="text" value={name} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">E-mail</Form.Label>
              <Form.Control id="email" name="email" type="email" value={email} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Full Name</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows={3}
                value={message}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button className="d-inline-block" variant="primary" type="submit" disabled={disabled}>
              Send
            </Button>

            {emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
            {emailSent === false && <p className="d-inline error-msg">Email Not Sent</p>}
          </Form>
        </Content>
      </div>
    )
  }
}

export default ContactPage
