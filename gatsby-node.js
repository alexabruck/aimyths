exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const mythPageTemplate = require.resolve(`./src/templates/myth-page.js`)
  const contentStructure = require("./src/content-structure")

  /*const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  */

  contentStructure.myths.forEach(myth => {
    createPage({
      path: myth.link,
      component: mythPageTemplate,
      context: {
        slug: myth.link,
        title: myth.title,
        isDraft: myth.isDraft,
        theme: myth.topic,
        previewImage: myth.previewImage,
      },
    })
  })
}
