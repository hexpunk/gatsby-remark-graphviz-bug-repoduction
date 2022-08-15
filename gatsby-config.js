module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-graphviz"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/md/",
      },
    },
  ],
};
