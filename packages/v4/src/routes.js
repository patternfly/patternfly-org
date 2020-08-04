const { makeSlug } = require('theme-patternfly-org/helpers/slugger');

// This module is shared between NodeJS and babelled ES5
module.exports = canRequireJSX => {
  const routes = {
    '/': {
      Component: canRequireJSX && require('./pages/home').default,
    },
    '/get-in-touch': {
      Component: canRequireJSX && require('./pages/get-in-touch').default,
      title: 'Get in touch'
    },
    '/404': {
      Component: canRequireJSX && require('theme-patternfly-org/pages/404').default,
      title: '404 Error'
    },
    ...(canRequireJSX
      ? Object.values(require('./generated')).reduce((acc, val) => {
        acc[val.slug] = val;
        delete val.slug;

        return acc;
      }, {})
      : require('./generated/index.cjs'))
  };

  // Group routes by section, id
  const groupedRoutes = Object.entries(routes)
    .filter(([_slug, { id, section }]) => id && section)
    .reduce((accum, [slug, pageData]) => {
      const { section, id, source } = pageData;
      accum[section] = accum[section] || {};
      accum[section][id] = accum[section][id] || {
        id,
        designSnippet: null,
        slug: makeSlug(source, section, id, true),
        sources: {}
      };

      pageData.slug = slug;
      if (source === 'design-snippets') {
        accum[section][id].designSnippet = pageData;
      }
      else {
        accum[section][id].sources[source] = pageData;
      }

      return accum;
    }, {});

  Object.entries(groupedRoutes)
    .forEach(([_section, ids]) => {
      Object.entries(ids).forEach(([_id, pageData]) => {
        const { designSnippet, slug, sources } = pageData;
        // Remove source routes for `app.js`
        if (canRequireJSX) {
          Object.entries(sources).forEach(([_source, { slug }]) => {
            delete routes[slug];
          });
        }
        // Add grouped route
        routes[slug] = pageData;
        // Remove route for design-snippets
        if (designSnippet) {
          delete routes[designSnippet.slug];
        }
      })
    });

  return { routes, groupedRoutes };
};
