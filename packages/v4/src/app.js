import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useLocation } from '@reach/router';
import { SideNavLayout } from 'theme-patternfly-org/layouts';
import { Footer } from 'theme-patternfly-org/components';
import { MDXTemplate } from 'theme-patternfly-org/templates/mdx';
import { routes, groupedRoutes, fullscreenRoutes, getAsyncComponent } from './routes';
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

const AppRoute = ({ child }) => {
  const location = useLocation();
  if (typeof window !== 'undefined' && window.ga) {
    window.ga('set', 'page', location.pathname);
    window.ga('send', 'pageview');
  }

  return (
    <React.Fragment>
      {child}
      {LayoutOptions.hasFooter && <Footer />}
    </React.Fragment>
  );
}

const SideNavRouter = () => (
  <SideNavLayout>
    <Router id="ws-page-content-router">
      {Object.entries(LayoutOptions.routes)
        .map(([path, { Component, title, sources }]) => Component
          ? <AppRoute key={path} path={path} default={path === '/404'} child={<Component />} />
          : (
            <AppRoute key={path} path={path + '/*'} child={<MDXTemplate
              path={path}
              layoutOptions={LayoutOptions}
              title={title}
              sources={sources}
            />} />
          )
        )
      }
    </Router>
  </SideNavLayout>
);

const FullscreenComponent = ({ Component, title }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    Component.preload().then(() => setIsLoaded(true));
  }, []);
  const { examples = {} } = Component.getPageData();
  const Example = examples[title];
  return isLoaded ? <Example isFullscreen={false} isFullscreenPreview /> : <Component /> // ;
};

// Export for SSR
export const App = () => (
  <ConfigContext.Provider value={LayoutOptions}>
    <Router basepath={LayoutOptions.pathPrefix} id="ws-router">
      <SideNavRouter path="/*" />
      {Object.entries(fullscreenRoutes)
        .map(([path, { title, Component }]) =>
          <FullscreenComponent
            key={path}
            path={path}
            Component={Component}
            title={title}
          />
        )
      }
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
