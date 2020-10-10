import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const ContactSuccessPage = () => (
  <Layout dark>
    <SEO title="Contact - Success" />
    <div style={{ textAlign: "center" }}>
      <h1>Thank you for your message.</h1>
      <p>
        <Link to="/">Back to AIMyths</Link>
      </p>
    </div>
  </Layout>
)

export default ContactSuccessPage
