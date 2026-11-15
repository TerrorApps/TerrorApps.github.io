import React, { useState } from "react"

// There is no form backend yet, so submitting opens the visitor's mail client addressed to support.
// Swap handleSubmit for a POST once an endpoint exists.
const CONTACT_EMAIL = "support@terrorllc.com"

const ContactForm: React.FC = () => {
  const [opened, setOpened] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const message = String(data.get("message") || "").trim()
    const subject = `Terror inquiry${name ? ` from ${name}` : ""}`
    const body = `${message}\n\n${name}${email ? ` <${email}>` : ""}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body
    )}`
    setOpened(true)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="contact-message">What do you want to track?</label>
        <textarea id="contact-message" name="message" rows={4} required />
      </div>
      <div className="form__actions">
        <button className="btn btn--primary" type="submit">
          Send
        </button>
        {opened && (
          <span className="form__status" role="status">
            Opening your email app. If nothing happens, write to {CONTACT_EMAIL}.
          </span>
        )}
      </div>
    </form>
  )
}

export default ContactForm
