module.exports = {
  pathPrefix: `/devquestions`,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-107917910-7',
      },
    },
  ],
  siteMetadata: {
    title: 'devquestions.co',
  },
}
