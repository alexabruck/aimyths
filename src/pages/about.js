import React from "react"
import { useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"

import "./about.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      aboutText: file(relativePath: { eq: "about/index.md" }) {
        id
        childMarkdownRemark {
          html
        }
      }
      authorsText: file(relativePath: { eq: "about/authors.md" }) {
        id
        childMarkdownRemark {
          html
        }
      }
    }
  `)
  return (
    <Layout dark>
      <div className="about-page__container">
        <div className="about-page__container__flex">
          <div className="about-page__container__main">
            <div
              dangerouslySetInnerHTML={{
                __html: data.aboutText.childMarkdownRemark.html,
              }}
            ></div>
          </div>
          <div className="about-page__container__side">
            <div
              dangerouslySetInnerHTML={{
                __html: data.authorsText.childMarkdownRemark.html,
              }}
            ></div>
          </div>
        </div>
        <div className="about-page__contact-section">
          <h2 id="contact">Contact</h2>
          <ContactForm />
        </div>
      </div>
    </Layout>
  )
}
