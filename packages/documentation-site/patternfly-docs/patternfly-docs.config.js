const componentsData = require('./pages/landing-pages/components/components-data.json');
// This module is shared between NodeJS and babelled ES5, if this extension only build
// exclude the other side nav items.
if (process.env.EXTENSIONS_ONLY === 'true') { 
  module.exports = {
    hasGdprBanner: false,
    hasFooter: false,
    hasVersionSwitcher: false,
    hasDarkThemeSwitcher: true,
    hasRTLSwitcher: false,
    sideNavItems: [
      { section: 'extensions' }
    ],
    topNavItems: [
    ],
    port: 8003
  };
} else {
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
}
};
