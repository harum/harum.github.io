module.exports = {
  siteMetadata: {
    title: 'My Blog',
  },
  plugins: [
    'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
};
