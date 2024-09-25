/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://web-estatica-veronica.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
          omitKeys: [
            "xmlnsDc",
            "xmlnsCc",
            "xmlnsRdf",
            "xmlnsSvg",
            "xmlnsSodipodi",
            "xmlnsInkscape",
          ],
        },
      },
    },
    `styled-components`,
    `html-to-image`,
    `file-saver`,
    `downloadjs`,
    `react-toastify`,
  ],
};
