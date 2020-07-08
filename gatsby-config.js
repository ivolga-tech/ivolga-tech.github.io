module.exports = {
  siteMetadata: {
    title: `iVolga Technologies`,
    description: `iVolga Technologies - разработка веб-сервисов, мобильных приложений и игр.`,
    author: `iVolga Technologies`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "test-gatsby-app",
        accessToken: process.env.API_KEY,
        schemas: {
          "homepage": require('./src/schemas/homepage.json')
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `iVolga Technologies - разработка веб-сервисов, мобильных приложений и игр.`,
        short_name: `iVolga`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `./src/assets/img/icons/favicon-196х196.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
