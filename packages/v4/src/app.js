import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { SideNavLayout } from 'theme-patternfly-org/layouts';
import { MDXTemplate } from 'theme-patternfly-org/templates/mdx';
import { routes, groupedRoutes } from './routes';
import { PageSection, SkipToContent } from '@patternfly/react-core';
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
    {isPrerender
      ? child
      : (
        <Suspense fallback={
          <PageSection id="main-content">
            <div style={{ height: '100vh' }} />
          </PageSection>
        }>
          {child}
        </Suspense>
      )}
  </SideNavLayout>
)

// Export for SSR
export const App = () => (
  <ConfigContext.Provider value={LayoutOptions}>
    <SkipToContent href="#main-content">Skip to Content</SkipToContent>
      <Router basepath={LayoutOptions.pathPrefix} id="ws-router">
          {Object.entries(LayoutOptions.routes).map(([path, props]) => {
            const { Component } = props;
            if (Component) {
              return (
                <AppRoute key={path} path={path} default={path === '/404'} child={<Component />} />
              );
            }
            const { sources, designSnippet, id } = props;
            return (
              <AppRoute key={path} path={path + '/*'} child={<MDXTemplate
                layoutOptions={LayoutOptions}
                designSnippet={designSnippet}
                id={id}
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
  ReactDOM.render(<App />, document.getElementById('root'));
}
