import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useLocation } from '@reach/router';
import { SideNavLayout } from '@breakaway/theme-patternfly-org/layouts';
import { Footer } from '@breakaway/theme-patternfly-org/components';
import { MDXTemplate } from '@breakaway/theme-patternfly-org/templates/mdx';
import { routes, groupedRoutes, fullscreenRoutes, getAsyncComponent } from './routes';
import { trackEvent } from './helpers';
import 'client-styles';

const AppRoute = ({ child, katacodaLayout, title, path }) => {
  const pathname = useLocation().pathname;
  if (typeof window !== 'undefined' && window.gtag) {
    gtag('config', 'UA-47523816-6', {
      'page_path': pathname,
      'page_title': (title || pathname)
    });
  }
  // Send 404 event if redirected to 404 page
  if (path === '/404' && pathname.split('/').pop() !== '404') {
    trackEvent('404_redirect', 'redirect', pathname);
  }
  return (
    <React.Fragment>
      {child}
      {!katacodaLayout && process.env.hasFooter && <Footer />}
    </React.Fragment>
  );
}

const SideNavRouter = () => {
  const pathname = useLocation().pathname.replace(process.env.pathPrefix, '');
  const navOpen = !routes[pathname] || !routes[pathname].katacodaLayout;
  return (
    <SideNavLayout groupedRoutes={groupedRoutes} navOpen={navOpen} >
      <Router id="ws-page-content-router">
        {Object.entries(routes)
          .map(([path, { Component, title, sources, katacodaLayout }]) => Component
            ? <AppRoute
                key={path}
                path={path}
                default={path === '/404'}
                child={<Component />}
                katacodaLayout={katacodaLayout}
                title={title}
              />
            : <AppRoute
                key={path}
                path={path + '/*'}
                child={
                  <MDXTemplate
                    path={path}
                    title={title}
                    sources={sources}
                  />
                }
                katacodaLayout={katacodaLayout}
                title={title}
              />
          )
        }
      </Router>
    </SideNavLayout>
  );
}

const FullscreenComponent = ({ Component, title }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    Component.preload().then(() => setIsLoaded(true));
  }, []);
  const { examples = {} } = Component.getPageData();
  const Example = examples[title];
  return isLoaded ? <Example isFullscreen={false} isFullscreenPreview /> : <Component />;
};

// Export for SSR
export const App = () => (
  <Router basepath={process.env.pathPrefix} id="ws-router">
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
);

const isProd = process.env.NODE_ENV === 'production';
const isPrerender = process.env.PRERENDER;
// Don't use ReactDOM in SSR
if (!isPrerender) {
  function render() {
    const renderFn = isProd ? ReactDOM.hydrate : ReactDOM.render;
    renderFn(<App />, document.getElementById('root'));
  }
  // On first load, await promise for the current page to avoid flashing a "Loading..." state
  const Component = getAsyncComponent(null);
  if (Component) {
    Component.preload().then(render);
  }
  else {
    render();
  }
}
