module.exports = {
  siteMetadata: {
    title: `88.5 KURE`,
    description: `Radio PWA`,
    author: `@jroush`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Webplayer for 88.5 KURE`,
        short_name: `88.5 KURE`,
        start_url: `/`,
        background_color: `#c41e3a`,
        theme_color: `#FFCC00`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
