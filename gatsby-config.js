module.exports = {
  siteMetadata: {
    title: `Scampitown`,
    description: `Scampitown is an interactive comic project that takes its inspiration from traditional illustration and storytelling`,
    author: `@tomgreen`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Scampitown`,
        short_name: `scampitown`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
        display: `minimal-ui`,
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    `gatsby-plugin-offline`
  ]
};
