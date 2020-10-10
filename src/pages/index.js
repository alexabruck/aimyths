import React from "react"
import { useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Jellyfish from "../components/Jellyfish"
import AIMythsFrontPageTitle from "../components/AIMythsFrontPageTitle"
import NewsItem from "../components/NewsItem"
import LinkButton from "../components/LinkButton"

import "./index.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query FrontPageNewsQuery {
      newsItems: allFile(
        filter: { relativeDirectory: { eq: "news" } }
        sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      ) {
        nodes {
          id
          childMarkdownRemark {
            html
            frontmatter {
              title
              date(formatString: "DD.MM.YYYY")
            }
          }
        }
      }
      introText: file(relativePath: { eq: "landing-page/intro.md" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `)

  const newsItems = data.newsItems.nodes.map(el => ({
    id: el.id,
    date: el.childMarkdownRemark.frontmatter.date,
    title: el.childMarkdownRemark.frontmatter.title,
    richText: el.childMarkdownRemark.html,
  }))

  const hasNews = !!newsItems[0]

  return (
    <Layout dark hideLogo>
      <div className="page-index">
        <SEO title="Home" />
        <div className="page-index__title">
          <AIMythsFrontPageTitle />
        </div>
        <div
          className="page-index__intro-text"
          dangerouslySetInnerHTML={{
            __html: data.introText.childMarkdownRemark.html,
          }}
        ></div>

        <Jellyfish />
        {hasNews && (
          <div className="page-index__news-section">
            <h2>News</h2>
            <NewsItem item={newsItems[0]} shortened={true} />
            <LinkButton to="/news">See more</LinkButton>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
