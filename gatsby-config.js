module.exports = {
  siteMetadata: {
    title: `AI Myths`,
    description: `Myths, misconceptions & inaccuracies render AI systems opaque. Check out the resources we provide to tackle 8 of the most common myths about ‘artificial intelligence.’`,
    author: ``,
    siteUrl: "https://aimyths.org",
    defaultPreviewImage: "/images/twitter-main.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ai-myths`,
        short_name: `aimyths`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: { className: "remark-autolink-headers" },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-plugin-fathom",
      options: {
        // Fathom server URL. Defaults to `cdn.usefathom.com`
        //trackingUrl: "your-fathom-instance.com",
        // Unique site id
        siteId: "FOZHQKLE",
        // Domain whitelist
        whitelistHostnames: [],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    "gatsby-plugin-sass",
  ],
}
