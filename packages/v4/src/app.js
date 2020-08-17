import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { SideNavLayout } from 'theme-patternfly-org/layouts';
import { MDXTemplate } from 'theme-patternfly-org/templates/mdx';
import { routes, groupedRoutes } from './routes';
import LayoutOptions from '../patternfly-docs.config.js';
import ConfigContext from 'theme-patternfly-org/helpers/configContext';
import '../patternfly-docs.css.js';

const isProd = process.env.NODE_ENV === 'production';
const isPrerender = process.env.PRERENDER;

if (!isProd) {
  // Ignore `pathPrefix` in dev mode
  LayoutOptions.pathPrefix = '';
}
LayoutOptions.routes = routes;
LayoutOptions.groupedRoutes = groupedRoutes;

const AppRoute = ({ child, ...props }) => (
  <SideNavLayout {...props}>
    {child}
  </SideNavLayout>
);

// Export for SSR
export const App = () => (
  <ConfigContext.Provider value={LayoutOptions}>
    <Router basepath={LayoutOptions.pathPrefix} id="ws-router">
      {Object.entries(LayoutOptions.routes).map(([path, props]) => {
        const { Component } = props;
        if (Component) {
          return <AppRoute key={path} path={path} default={path === '/404'} child={<Component />} />;
        }
        const { title, sources } = props;
        return (
          <AppRoute key={path} path={path + '/*'} child={<MDXTemplate
            layoutOptions={LayoutOptions}
            title={title}
            sources={sources}
          />} />
        );
      })}
    </Router>
  </ConfigContext.Provider>
);

// Don't use ReactDOM in SSR
if (!isPrerender) {
  // Hydrate is broken with <Suspense> nodes. See enableSuspenseServerRenderer.
  // Instead of using a custom build of React, for now just rerender the whole tree
  // into the root. We can just put the homepage in the main bundle using `SyncComponent`
  // in routes.js
  const renderFn = isProd ? ReactDOM.hydrate : ReactDOM.render;
  renderFn(<App />, document.getElementById('root'));
}
