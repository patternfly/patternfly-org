// This module is shared between NodeJS and babelled ES5
const generatedRoutes = require('./generated');
const { makeSlug } = require('theme-patternfly-org/helpers/slugger');
const { asyncComponentFactory } = require('theme-patternfly-org/helpers/asyncComponentFactory');

const isClient = Boolean(process.env.NODE_ENV);

const routes = {
  '/': {
    SyncComponent: isClient && require('./pages/home').default
  },
  '/get-in-touch': {
    Component: () => import(/* webpackChunkName: "get-in-touch/index" */ './pages/get-in-touch'),
    title: 'Get in touch'
  },
  '/404': {
    SyncComponent: isClient && require('theme-patternfly-org/pages/404').default,
    title: '404 Error'
  },
  ...generatedRoutes
};

for (let route in routes) {
  const pageData = routes[route];
  if (pageData.SyncComponent) {
    pageData.Component = pageData.SyncComponent;
  }
  else if (pageData.Component) {
    pageData.Component = asyncComponentFactory(route, pageData);
  }
}

// Save a copy of all routes for path matching on first load
const allRoutes = Object.assign({}, routes);

// Group routes by section, id
const groupedRoutes = Object.entries(routes)
  .filter(([_slug, { id, section }]) => id && section)
  .reduce((accum, [slug, pageData]) => {
    const { section, id, title, source } = pageData;
    accum[section] = accum[section] || {};
    accum[section][id] = accum[section][id] || {
      id,
      title,
      slug: makeSlug(source, section, id, true),
      sources: []
    };

    pageData.slug = slug;
    accum[section][id].sources.push(pageData);

    return accum;
  }, {});

const sourceOrder = {
  react: 1,
  html: 2
};
const defaultOrder = 99;

const sortSources = ({ source: s1 }, { source: s2 }) => {
  const s1Index = sourceOrder[s1] || defaultOrder;
  const s2Index = sourceOrder[s2] || defaultOrder;
  if (s1Index === defaultOrder && s2Index === defaultOrder) {
    return s1.localeCompare(s2);
  }

  return s1Index > s2Index ? 1 : -1;
}

Object.entries(groupedRoutes)
  .forEach(([_section, ids]) => {
    Object.values(ids).forEach(pageData => {
      const { slug } = pageData;
      // Remove source routes for `app.js`
      pageData.sources.forEach(({ slug }) => {
        delete routes[slug];
      });
      // Sort sources for tabs
      pageData.sources = pageData.sources.sort(sortSources);
      // Add grouped route
      routes[slug] = pageData;
    })
  });

function getAsyncComponent(url, pathPrefix) {
  if (!url && typeof window !== 'undefined') {
    url = window.location.pathname.replace(/\/$/, '') || '/';
  }
  // Normalize path for matching
  url = url.replace(pathPrefix, '');
  let res;

  if (allRoutes[url]) {
    res = allRoutes[url].Component;
  }
  else if (routes[url]) {
    res = routes[url].sources[0].Component;
  }

  if (res && res.preload) {
    return res;
  }

  return null;
}

module.exports = {
  routes,
  groupedRoutes,
  getAsyncComponent
};
