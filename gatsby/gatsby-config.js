require("dotenv").config();


module.exports = {
  siteMetadata: {
    title: "DanteBaked",
    siteUrl: "http://www.dantebaked.com",
    description: "DanteBaked Good Foods"
  },
  plugins: [
    {
      resolve: `gatsby-source-formium`,
      options: {
        projectId: "600d70ebd0a32c0001f4a2e1",
        accessToken: "dEEwV72iksjCk9lFMCeasLNuODVhICjWZQLVpzTu0ZkPXAOVqWqPFxmVdh1dXJ7c",
      },
    },
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

console.log("ENV");
console.log(process.env.GATSBY_SANITY_KEY)
