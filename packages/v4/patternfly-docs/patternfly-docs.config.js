const componentsData = require('./components-data.json');

// This module is shared between NodeJS and babelled ES5
module.exports = {
  pathPrefix: '/v4',
  googleAnalyticsID: 'UA-47523816-6',
  algolia: {
    apiKey: '4f56601621c4396613bbc652fdb9f42e',
    appId: 'L2WU7VRBB7',
    indexName: 'v4-archive-patternfly'
  },
  hasGdprBanner: true,
  hasFooter: true,
  hasVersionSwitcher: true,
  hasDesignGuidelines: true,
  hasDarkThemeSwitcher: false,
  componentsData,
  sideNavItems: [
    { section: 'get-started' },
    { section: 'developer-resources' },
    { section: 'accessibility' },
    { section: 'guidelines' },
    { section: 'UX writing' },
    { section: 'components' },
    { section: 'extensions' },
    { section: 'topology' },
    { section: 'charts' },
    { section: 'demos' },
    { section: 'layouts' },
    { section: 'utilities' },
    { section: 'contribute' },
    { section: 'training' },
    { href: '/community' }
  ],
  topNavItems: [],
  port: 8003,
};
