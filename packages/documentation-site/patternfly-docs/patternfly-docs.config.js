const componentsData = require('./pages/landing-pages/components/components-data.json');

// This module is shared between NodeJS and babelled ES5
module.exports = {
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
  hasDarkThemeSwitcher: true,
  hasRTLSwitcher: true,
  componentsData,
  sideNavItems: [
    { section: 'get-started' },
    { section: 'design-foundations' },
    { section: 'accessibility' },
    { section: 'UX writing' },
    { section: 'components' },
    { section: 'patterns' },
    { section: 'extensions' }, 
    { section: 'charts' },
    { section: 'topology' },
    { section: 'layouts' },  
    { section: 'utility-classes' },
    { section: 'developer-resources' },
    { section: 'training' }, 
  ],
  topNavItems: [],
  port: 8003,
};
