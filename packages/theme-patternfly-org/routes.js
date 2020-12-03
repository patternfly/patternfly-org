// This module is shared between NodeJS and babelled ES5
const { makeSlug, slugger } = require('theme-patternfly-org/helpers/slugger');
const { asyncComponentFactory } = require('theme-patternfly-org/helpers/asyncComponentFactory');
const clientRoutes = require('./routes-client'); // Webpack replaces this import
const generatedRoutes = require('./routes-generated'); // Webpack replaces this import

const routes = {
  ...clientRoutes,
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
const isNull = o => o === null || o === undefined;

const groupedRoutes = Object.entries(routes)
  .filter(([_slug, { id, section }]) => !isNull(id) && !isNull(section))
  .reduce((accum, [slug, pageData]) => {
    const { section, id, title, source, katacodaLayout, hideNavItem } = pageData;
    accum[section] = accum[section] || {};
    accum[section][id] = accum[section][id] || {
      id,
      section,
      title,
      slug: makeSlug(source, section, id, true),
      sources: [],
      katacodaLayout,
      hideNavItem
    };

    pageData.slug = slug;
    accum[section][id].sources.push(pageData);

    return accum;
  }, {});

const sourceOrder = {
  react: 1,
  'react-demos': 2,
  html: 3,
  'html-demos': 4,
  'design-guidelines': 99
};
const defaultOrder = 50;

const sortSources = ({ source: s1 }, { source: s2 }) => {
  const s1Index = sourceOrder[s1] || defaultOrder;
  const s2Index = sourceOrder[s2] || defaultOrder;
  if (s1Index === defaultOrder && s2Index === defaultOrder) {
    return s1.localeCompare(s2);
  }

  return s1Index > s2Index ? 1 : -1;
}

const getDefaultDesignGuidelines = ({ id, section, slug, title }) => {
  const Component = () => require('theme-patternfly-org/templates/design-guidelines').DesignGuidelineTemplate
  const pageData = {
    id,
    section,
    slug: `${slug}/design-guidelines`,
    source: 'design-guidelines',
    title,
    Component
  };

  Component.getPageData = () => pageData;

  return pageData;
}

Object.entries(groupedRoutes)
  .forEach(([_section, ids]) => {
    Object.values(ids).forEach(pageData => {
      const { slug, section } = pageData;
      // Remove source routes for `app.js`
      pageData.sources.forEach(({ slug }) => {
        delete routes[slug];
      });
      // Add design guidelines if doesn't exist
      if (
        ['components', 'charts', 'layouts', 'demos'].includes(section) &&
        !pageData.sources.map(({ source }) => source).includes('design-guidelines') &&
        process.env.hasDesignGuidelines
      ) {
        pageData.sources.push(getDefaultDesignGuidelines(pageData));
      }
      // Sort sources for tabs
      pageData.sources = pageData.sources.sort(sortSources);
      // Add grouped route
      routes[slug] = pageData;
    })
  });

function getAsyncComponent(url) {
  if (!url && typeof window !== 'undefined') {
    url = window.location.pathname.replace(/\/$/, '') || '/';
  }
  // Normalize path for matching
  url = url.replace(process.env.pathPrefix, '');
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

const fullscreenRoutes = Object.entries(allRoutes)
  .filter(([, { examples, fullscreenExamples }]) => examples || fullscreenExamples)
  .reduce((acc, val) => {
    const [path, { Component, examples = [], fullscreenExamples = [] }] = val;
    examples
      .concat(fullscreenExamples)
      .forEach(title => {
        const slug = `${path}/${slugger(title)}`;
        acc[slug] = {
          title,
          Component,
          isFullscreen: true,
          isFullscreenOnly: fullscreenExamples.includes(title)
        };
      });
    return acc;
  }, {});

module.exports = {
  routes,
  groupedRoutes,
  fullscreenRoutes,
  getAsyncComponent
};
