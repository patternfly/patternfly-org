## gatsby-theme-patternfly-org

This theme generates slugs (urls) and templated pages (`mdx.js`) from [`mdx` files](https://mdxjs.com/playground/) processed by [gatsby-plugin-mdx](https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/). It generates templated fullscreen page from either [Handlebars](https://handlebarsjs.com/) or [react-live](https://github.com/FormidableLabs/react-live) code blocks in the mdx.

### Usage

We publish this theme [on npm.](https://www.npmjs.com/package/gatsby-theme-patternfly-org) Install it with your package manager.

`npm i gatsby-theme-patternfly-org`

`yarn add gatsby-theme-patternfly-org`

Provide or install the following dependencies:
```
"@patternfly/patternfly": "^2.33.5",
"@patternfly/react-core": "^3.113.0",
"@patternfly/react-icons": "^3.14.8",
"@patternfly/react-table": "^2.22.28",
"@patternfly/react-tokens": "^2.6.31",
"gatsby": "^2.6.0"
```

Configure your `gatsby-config.js` like this:
```js
{
  resolve: `gatsby-theme-patternfly-org`,
  options: {
    context: 'org', // Default context
    hiddenPages: ['withOuia'], // By title
    sideNav: {
      core: [
        { section: 'overview' },
      ],
      react: [
        { section: 'overview' },
      ],
      get_started: [
        { text: 'About', path: '/get-started/about' },
      ],
    },
    topNavItems: [
      {
        text: 'Get started',
        path: '/get-started/about',
        contexts: ['get-started']
      },
      {
        text: 'Get in touch',
        path: '/get-in-touch'
      }
    ]
  }
},
```

### Structure
```sh
gatsby-theme-patternfly-org
├── components
├── gatsby-config.js <- Let us use React Helmet
├── gatsby-node.js <- Pipelines GraphQL data to generate slugs and creates pages
├── gatsby-ssr.js <- Adds attributes to the static HTML
├── global.css <- 100% page height
├── helpers <- Files shared between SSR and browser
├── images
├── layouts
│   ├── sideNavLayout.css
│   └── sideNavLayout.js <- The main layout we use
├── package.json
├── pages <- Pages shared across all 3 sites
│   ├── globalCSSVariables.js
│   └── redHatFont.js
├── README.md
└── templates
    ├── fullscreen.css
    ├── fullscreenHtml.js
    ├── fullscreenMdx.js
    ├── mdx.css
    └── mdx.js <- How we render our mdx files
```

The highlights of this plugin are `gatsby-node.js`, `mdx.js`, and `sideNavLayout.js`. Each file has been documented.

