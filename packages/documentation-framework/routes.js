// This module is shared between NodeJS and babelled ES5
const { makeSlug, slugger } = require('@patternfly/documentation-framework/helpers/slugger');
const { asyncComponentFactory } = require('@patternfly/documentation-framework/helpers/asyncComponentFactory');
const clientRoutes = require('./routes-client'); // Webpack replaces this import: patternfly-docs.routes.js
const generatedRoutes = require('./routes-generated'); // Webpack replaces this import: patternfly-docs/generated/index.js

const routes = {
  ...clientRoutes,
  ...generatedRoutes
};

const defaultOrder = 50;

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
    const { section, subsection = null, id, title, source, hideNavItem, relPath, sortValue = null, subsectionSortValue = null } = pageData;
    pageData.slug = slug;
    // add section to groupedRoutes obj if not yet created
    accum[section] = accum[section] || {};
    // define data for page to be added to groupedRoutes obj
    const data = {
      id,
      section,
      subsection,
      title,
      slug: makeSlug(source, section, id, true, subsection),
      sources: [],
      hideNavItem,
      relPath,
      ...(sortValue && { sortValue }),
      ...(subsectionSortValue && { subsectionSortValue })
    }
    // add page to groupedRoutes obj section or subsection
    if (subsection) {
      // add subsection to section
      accum[section][subsection] = accum[section][subsection] || {};
      accum[section][subsection].isSubsection = true;
      // add page to subsection
      accum[section][subsection][id] = accum[section][subsection][id] || data;
      accum[section][subsection][id].sources.push(pageData);
      // nav item ordering
      if (sortValue) {
        accum[section][subsection].sortValue = sortValue;
      }
      if (subsectionSortValue) {
        accum[section][subsection].subsectionSortValue = subsectionSortValue;
      }
    } else {
      // add page to section
      accum[section][id] = accum[section][id] || data;
      accum[section][id].sources.push(pageData);
      // nav item ordering
      if (sortValue) {
        accum[section][id].sortValue = sortValue;
      }
    }

    return accum;
  }, {});

const sourceOrder = {
  react: 1,
  'react-next': 1.1,
  'react-composable': 1.2,
  'react-deprecated': 1.3,
  'react-legacy': 1.4,
  'react-demos': 2,
  html: 3,
  'html-demos': 4,
  'design-guidelines': 99,
  'accessibility': 100
};

const sortSources = ({ source: s1 }, { source: s2 }) => {
  const s1Index = sourceOrder[s1] || defaultOrder;
  const s2Index = sourceOrder[s2] || defaultOrder;
  if (s1Index === defaultOrder && s2Index === defaultOrder) {
    return s1.localeCompare(s2);
  }

  return s1Index > s2Index ? 1 : -1;
}

const getDefaultDesignGuidelines = ({ id, section, slug, title }) => {
  const Component = () => require('@patternfly/documentation-framework/templates/design-guidelines').DesignGuidelineTemplate
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
      let pageDataArr = [];
      // Loop through each page in expandable subsection
      if (pageData.isSubsection) {
        Object.entries(pageData).map(([section, ids]) => {
          // only push nested page objects
          if (ids && ids?.id) {
            pageDataArr.push(ids);
          }
        })
      } else {
        pageDataArr = [pageData];
      }
      pageDataArr.forEach(pageDataObj => {
        const { slug } = pageDataObj;
        // Remove source routes for `app.js`
        pageDataObj.sources.forEach(({ slug }) => {
          delete routes[slug];
        });
        // Sort sources for tabs
        pageDataObj.sources = pageDataObj.sources.sort(sortSources);
        // Add grouped route
        routes[slug] = pageDataObj;
      });
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
          path,
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
