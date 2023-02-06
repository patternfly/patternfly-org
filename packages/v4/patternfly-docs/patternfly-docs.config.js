const componentsData = require('./components-data.json');
// const illustrations = require('./images/component-illustrations');

// This module is shared between NodeJS and babelled ES5
module.exports = {
  pathPrefix: '/v4',
  googleAnalyticsID: 'UA-47523816-6',
  algolia: {
    apiKey: 'a8fb1726b78594ff97a3418757514404',
    appId: '79P4ZBH7A3',
    indexName: 'patternfly'
  },
  hasGdprBanner: true,
  hasFooter: true,
  hasVersionSwitcher: true,
  hasDesignGuidelines: true,
  hasDarkThemeSwitcher: false,
  componentsData,
  // illustrations,
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
