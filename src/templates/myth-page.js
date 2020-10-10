import React from "react"
import { graphql } from "gatsby"
import rehypeReact from "rehype-react"

import LayoutArticle from "../components/LayoutArticle"
import WidgetAgency from "../components/WidgetAgency"
import WidgetAmbiguity from "../components/WidgetAmbiguity"
import RichLink from "../components/markdown-custom-components/RichLink"
import Todo from "../components/markdown-custom-components/Todo"
import DosDonts from "../components/DosDonts"
import CallToAction from "../components/CallToAction"

const AlignRight = ({ children }) => {
  return (
    <div style={{ textAlign: "right", fontSize: "0.8em", marginTop: "-5px" }}>
      {children}
    </div>
  )
}

export default ({
  data,
  location,
  pageContext: { title, theme, isDraft, previewImage },
}) => {
  const { pathname } = location
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      "agency-widget": WidgetAgency,
      "ambiguity-widget": WidgetAmbiguity,
      "rich-link": RichLink,
      "dos-donts": DosDonts,
      todo: Todo,
      "call-to-action": CallToAction,
      "align-right": AlignRight,
    },
  }).Compiler

  return (
    <LayoutArticle
      currentLocation={pathname}
      title={title}
      abstract={data.text.frontmatter.abstract}
      metaDescription={data.text.frontmatter.metaDescription}
      isDraft={isDraft}
      previewImage={previewImage}
      theme={theme}
      toc={data.text.tableOfContents}
      addendumSections={data.addendumSections.nodes.map(
        ({ htmlAst, ...things }) => ({
          ...things,
          renderedHtml: renderAst(htmlAst),
        })
      )}
    >
      {renderAst(data.text.htmlAst)}
    </LayoutArticle>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    text: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      htmlAst
      tableOfContents(absolute: false, maxDepth: 2)
      frontmatter {
        abstract
        metaDescription
      }
    }
    addendumSections: allMarkdownRemark(
      filter: { frontmatter: { article: { eq: $slug } } }
      sort: { fields: frontmatter___position, order: ASC }
    ) {
      nodes {
        htmlAst
        tableOfContents(absolute: false, maxDepth: 3)
        frontmatter {
          title
        }
      }
    }
  }
`
