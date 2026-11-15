import React from "react"
import { Link } from "react-router-dom"
import Page from "components/Page"

const AboutPage: React.FC = () => {
  return (
    <Page>
      <h1>About Terror</h1>
      <p>
        Terror LLC builds mobile apps and SaaS products, and helps mid-size businesses plan, build and run custom
        software.
      </p>
      <p>
        A lot of our work has been with trading card game stores, where we connect inventory, events, staff hours and
        cash flow so a store can see what is working. Cardpool, our API of TCG card data, prices, images and metadata,
        is one of our products. It is in early access, and API keys are issued on request.
      </p>
      <p>
        Have something you want built? <Link to="/#contact">Get in touch</Link>.
      </p>
    </Page>
  )
}

export default AboutPage
