import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { MDXTemplate } from 'theme-patternfly-org/templates/mdx';
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

console.log('routes', routes)
// const embeddedRout = embeddedPages
//   .map(({ DocComponent, slug: nestedSlug, propComponents, sourceLink, toc, optIn, beta, katacodaBroken }) => {
//     if (propComponents && propComponents.length > 0) {
//       toc.push('Props');
//     }
//     // Create dynamic component for @reach/router
//     const RoutedComponent = () => (
//       <React.Fragment>
//         {optIn && (
//           <InlineAlert title="Opt-in feature">
//             {optIn}
//           </InlineAlert>
//         )}
//         {beta && (
//           <InlineAlert title="Beta feature">
//             This Beta component is currently under review, so please join in and give us your feedback on the <a href="https://forum.patternfly.org/">PatternFly forum</a>.
//           </InlineAlert>
//         )}
//         {katacodaBroken && (
//           <InlineAlert variant="danger" title="Down for maintenance">
//             This Beta component is currently under review, so please join in and give us your feedback on the <a href="https://forum.patternfly.org/">PatternFly forum</a>.
//           </InlineAlert>
//         )}
//         {toc && <TableOfContents items={toc} />}
//         <DocComponent />
//         {sourceLink && (
//           <a href={sourceLink} target="_blank">View source on Github.</a>
//         )}
//       </React.Fragment>
//     );
//     RoutedComponent.displayName = `Routed${DocComponent.displayName}`;
// {cssPrefixes.length > 0 && (
//   <Accordion>
//     <AccordionItem>
//       <AccordionToggle
//         onClick={() => toggleExpandedItem('css-variables')}
//         isExpanded={expandedItems['css-variables']}
//       >
//         CSS Variables
//       </AccordionToggle>
//       <AccordionContent isHidden={!expandedItems['css-variables']}>
//         <CSSVariablesSection />
//       </AccordionContent>
//     </AccordionItem>
//   </Accordion>
// )}
//     const nestedPath = nestedSlug.replace(path.substr(0, path.length - 1), '');
//     return <RoutedComponent key={nestedPath} path={nestedPath} default={isSinglePage} />;
//   })

// Export for SSR
export const App = () => (
  <ConfigContext.Provider value={LayoutOptions}>
    <Router basepath={LayoutOptions.pathPrefix} id="ws-router">
      {Object.entries(LayoutOptions.routes).map(([path, props]) => {
        const { Component } = props;
        if (Component) {
          return <Component key={path} path={path} />;
        }
        const { sources, designSnippet, id } = props;
        return (
          <MDXTemplate
            key={path}
            path={path}
            layoutOptions={LayoutOptions}
            designSnippet={designSnippet}
            id={id}
            sources={sources}
          >
            {Object.values(sources).map(({ source, Component }) =>
              <Component key={source} path={source} />
            )}
          </MDXTemplate>
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
