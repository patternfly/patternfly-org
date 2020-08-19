import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { SideNavLayout } from 'theme-patternfly-org/layouts';
import { MDXTemplate } from 'theme-patternfly-org/templates/mdx';
import { routes, groupedRoutes, getAsyncComponent } from './routes';
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
LayoutOptions.getAsyncComponent = getAsyncComponent;

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
            path={path}
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
  function render() {
    const renderFn = isProd ? ReactDOM.hydrate : ReactDOM.render;
    renderFn(<App />, document.getElementById('root'));
  }
  // On first load, await promise for the current page to avoid flashing a "Loading..." state
  const Component = getAsyncComponent(null, LayoutOptions.pathPrefix);
  if (Component) {
    Component.preload().then(render);
  }
  else {
    render();
  }
}
