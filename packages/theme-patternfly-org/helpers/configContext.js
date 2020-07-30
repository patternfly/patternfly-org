import React from 'react';

export default React.createContext({
  pathPrefix: null,
  hideSideNav: false,
  hasGdprBanner: false,
  hasFooter: false,
  hasSearch: false,
  hasVersionSwitcher: false,
  sideNavItems: [],
  topNavItems: [],
  prnum: null,
  prurl: null
});
