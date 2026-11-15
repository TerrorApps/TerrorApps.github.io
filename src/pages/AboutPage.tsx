import React from "react"
import { Link } from "react-router-dom"
import Page from "components/Page"

const AboutPage: React.FC = () => {
  return (
    <Page>
      <h1>About Terror</h1>
      <p>
        Terror LLC is a data company for trading card game stores. We connect a store&apos;s singles and sealed
        inventory to its events, staff hours and cash flow, then build a plan to grow sales and keep revising it as the
        numbers come in.
      </p>
      <p>
        Behind that work sits Cardpool, our API and data lake of TCG card data, prices, images and metadata. Cardpool is
        in early access, and API keys are issued on request.
      </p>
      <p>
        Want to talk about your store or Cardpool? <Link to="/#contact">Get in touch</Link>.
      </p>
    </Page>
  )
}

export default AboutPage
