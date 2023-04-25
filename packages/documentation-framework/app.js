import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Router, useLocation } from '@reach/router';
import 'client-styles'; // Webpack replaces this import: patternfly-docs.css.js
import { SideNavLayout } from '@patternfly/documentation-framework/layouts';
import { Footer } from '@patternfly/documentation-framework/components';
import { MDXTemplate } from '@patternfly/documentation-framework/templates/mdx';
import { routes, groupedRoutes, fullscreenRoutes, getAsyncComponent } from './routes';
import { trackEvent } from './helpers';
import './components/autoLinkHeader/autoLinkHeader.css';
import './components/cssVariables/cssVariables.css';
import './components/tableOfContents/tableOfContents.css';
import './components/example/example.css';
import './components/footer/footer.css';
import './components/sideNav/sideNav.css';
import './components/topNav/topNav.css';
import './layouts/sideNavLayout/sideNavLayout.css';

const AppRoute = ({ child, title, path }) => {
  const pathname = useLocation().pathname;
  if (typeof window !== 'undefined' && window.gtag) {
    gtag('config', process.env.googleAnalyticsID, {
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
      {process.env.hasFooter && <Footer />}
    </React.Fragment>
  );
}

const SideNavRouter = () => {
  const pathname = useLocation().pathname.replace(process.env.pathPrefix, '');
  const componentsData = process?.env?.componentsData;
  return (
    <SideNavLayout groupedRoutes={groupedRoutes} navOpen={true} >
      <Router id="ws-page-content-router">
        {Object.entries(routes)
          .map(([path, { Component, title, sources, id }]) => Component
            ? <AppRoute
                key={path}
                path={path}
                default={path === '/404'}
                child={<Component />}
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
                    id={id}
                    componentsData={componentsData}
                  />
                }
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
    const container = document.getElementById('root');
    if (isProd) {
        hydrateRoot(container, <App />);
    } else {
        createRoot(container).render(<App />);
    }
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
