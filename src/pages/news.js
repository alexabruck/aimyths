import React from "react"
import { useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import NewsItem from "../components/NewsItem"

import "./news.css"

export default () => {
  const data = useStaticQuery(graphql`
    query NewsQuery {
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
    }
  `)

  const newsItems = data.newsItems.nodes.map(el => ({
    id: el.id,
    date: el.childMarkdownRemark.frontmatter.date,
    title: el.childMarkdownRemark.frontmatter.title,
    richText: el.childMarkdownRemark.html,
  }))

  return (
    <Layout dark>
      <h1 className="news__title">News</h1>
      {newsItems.map(item => (
        <div className="news__item" key={item.id}>
          <NewsItem item={item} />
        </div>
      ))}
    </Layout>
  )
}
