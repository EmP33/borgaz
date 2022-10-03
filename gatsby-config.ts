module.exports = {
  siteMetadata: {
    title: `BOR-GAZ Ełk`,
    description: `auto serwis i sklep części zamiennych,; dostawy gazów technicznych oraz opału,; wykonawstwo instalacji wod-kan i c.o.; pompy ciepła i kolektory słoneczne.`,
    author: `Emp33`,
  },
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don`t need to define it here (just if you need to change the options)
  plugins: [
    {
      resolve: `gatsby-plugin-react-leaflet`,
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
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
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `subpages`,
        path: `${__dirname}/src/subpages`,
      },
    },
  ],
  jsxRuntime: `automatic`,
};
