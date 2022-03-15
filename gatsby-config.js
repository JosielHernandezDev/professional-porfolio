module.exports = {
  pathPrefix:"/professional-porfolio",
  siteMetadata: {
    title: `Josiel Hernandez`,
    description: `Hi ✌ I'm a passionate 💻 Front End Developer. I have more than 3 years of experience 🤓 🎊 in JS frameworks and libraries, even so, I keep learning to improve🥇`,
    author: `JosielHernandezDev`,
    siteUrl: `https://josiel-hernandez.github.io`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locales`,
        path: `${__dirname}/locales`
      },
    },
    // {
    //   resolve: `gatsby-plugin-react-i18next`,
    //   options: {
    //     localeJsonSourceName: `locales`, // name given to `gatsby-source-filesystem` plugin.
    //     languages: ['es', 'en'],
    //     defaultLanguage: 'es',
    //     fallbackLanguage: 'es',
    //     // if you are using Helmet, you must include siteUrl, and make sure you add http:https
    //     siteUrl: `https://josiel-hernandez.github.io`,
    //     // you can pass any i18next options
    //     i18nextOptions: {
    //       interpolation: {
    //         escapeValue: false, // not needed for react as it escapes by default
    //       },
    //       keySeparator: false,
    //       nsSeparator: false,
    //     },
    //     pages: [
    //       // {
    //       //   matchPath: '/:lang?/blog/:uid',
    //       //   getLanguageFromPath: true,
    //       //   excludeLanguages: ['es']
    //       // },
    //       {
    //         matchPath: '/',
    //         languages: ['es','en']
    //       }
    //     ],
    //   },
    // },
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
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
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Josiel Hernandez`,
    //     short_name: `Josiel H`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     // This will impact how browsers show your PWA/website
    //     // https://css-tricks.com/meta-theme-color-and-trickery/
    //     // theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
    //   },
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
