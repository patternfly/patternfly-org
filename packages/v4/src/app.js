import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { MDXTemplate, MDXChildTemplate } from 'theme-patternfly-org/templates/mdx';
import getRoutes from './routes';
import LayoutOptions from '../patternfly-docs.config.js';
import ConfigContext from 'theme-patternfly-org/helpers/configContext';
import '../patternfly-docs.css.js';

const isProd = process.env.NODE_ENV === 'production';
const isPrerender = process.env.PRERENDER;

if (!isProd) {
  // Ignore `pathPrefix` in dev mode
  LayoutOptions.pathPrefix = '';
}
const { routes, groupedRoutes } = getRoutes(true);
LayoutOptions.routes = routes;
LayoutOptions.groupedRoutes = groupedRoutes;

// Export for SSR
export const App = () => (
  <ConfigContext.Provider value={LayoutOptions}>
    <Router basepath={LayoutOptions.pathPrefix} id="ws-router">
      {Object.entries(LayoutOptions.routes).map(([path, props]) => {
        const { Component } = props;
        if (Component) {
          return <Component key={path} path={path} default={path === '/404'} />;
        }
        const { sources, designSnippet, id } = props;
        return (
          <MDXTemplate
            key={path}
            path={path + '/*'}
            layoutOptions={LayoutOptions}
            designSnippet={designSnippet}
            id={id}
            sources={sources}
          />
        );
      })}
    </Router>
  </ConfigContext.Provider>
);

// Don't use ReactDOM in SSR
if (!isPrerender) {
  const renderFn = isProd ? ReactDOM.hydrate : ReactDOM.render;
  renderFn(<App />, document.getElementById('root'));
}
