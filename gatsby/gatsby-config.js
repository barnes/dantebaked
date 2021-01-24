module.exports = {
  siteMetadata: {
    title: "Boilerplate",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "wrqc5xz8",
        dataset: "production",
        watchMode: true,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
