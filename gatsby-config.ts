import type { GatsbyConfig } from "gatsby";

const title = "Coded Cards";
const themeColor = "#112233";
const config: GatsbyConfig = {
  siteMetadata: {
    title: title,
    siteUrl: `https://coded.cards`,
    themeColor: themeColor
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "name": title,
        "short_name": title,
        "start_url": "/",
        "theme_color": themeColor,
        "display": "browser",
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `$theme-color: ${themeColor};`
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }
  ]
};

export default config;
