const componentsData = require('./content/components/landing-page/components-data.json');
// This module is shared between NodeJS and babelled ES5, if this extension only build
// exclude the other side nav items.
if (process.env.EXTENSIONS_ONLY === 'true') {
  module.exports = {
    hasGdprBanner: false,
    hasFooter: false,
    hasVersionSwitcher: false,
    hasThemeSwitcher: true,
    hasHighContrastSwitcher: false,
    hasRTLSwitcher: false,
    hasFeedbackButton: true,
    sideNavItems: [
      { section: 'extensions' }
    ],
    topNavItems: [
    ],
    port: 8003
  };
} else {
  module.exports = {
    googleAnalyticsID: 'G-XRM3R81HJ6',
    algolia: {
      apiKey: 'a8fb1726b78594ff97a3418757514404',
      appId: '79P4ZBH7A3',
      indexName: 'patternfly'
    },
    hasGdprBanner: true,
    hasFooter: true,
    hasVersionSwitcher: true,
    hasDesignGuidelines: true,
    hasThemeSwitcher: true,
    hasFeedbackButton: true,
    hasHighContrastSwitcher: true,
    componentsData,
    sideNavItems: [
      {
        title: 'Learn',
        items: [
          { text: 'About us', href: '/about-us' },
          { section: 'get-started' },
          { section: 'releases' }
        ],
        hasDivider: true
      },
      {
        title: 'Design and develop',
        items: [
          { section: 'components' },
          { section: 'patterns' },
          { section: 'extensions' },
          { section: 'foundations-and-styles' },
          { section: 'accessibility' },
          { section: 'AI' },
          { section: 'content-design' },
          { section: 'developer-guides' }
        ]
      }
    ],
    topNavItems: [],
    port: 8003,
}
};
