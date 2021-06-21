module.exports = {
  siteMetadata: {
    title: `Polymath Techinical Challenge`,
    description: `Polymath Labs developer technical skills assessment challenge
    It is important for us to understand where and how we can position you within the Polymath Labs organization, should we decide to have you join us. 
    By you developing and presenting this sample application, you will help us establish your level (Junior, Intermediate, Expert). 
    You are expected to produce original work, but you are free to use all resources available to you on the Internet to help guide your decisions.`,
    author: `@nziranziza`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
