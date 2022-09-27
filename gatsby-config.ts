module.exports = {
  siteMetadata: {
    title: `BOR-GAZ Ełk`,
    description: `auto serwis i sklep części zamiennych,; dostawy gazów technicznych oraz opału,; wykonawstwo instalacji wod-kan i c.o.; pompy ciepła i kolektory słoneczne.`,
    author: `Emp33`,
  },
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    `gatsby-plugin-image`,
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
        name: `borgaz-website`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
  ],
  jsxRuntime: `automatic`,
};
