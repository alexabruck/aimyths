import React from "react"
import { useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const PrivacyPolicyPage = () => {
  const data = useStaticQuery(graphql`
    query PrivacyPolicyQuery {
      text: file(relativePath: { eq: "privacy-policy/index.md" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `)
  return (
    <Layout dark>
      <SEO title="Privacy Policy" />
      <h1>Privacy Policy</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.text.childMarkdownRemark.html,
        }}
      ></div>
    </Layout>
  )
}
export default PrivacyPolicyPage
