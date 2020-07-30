import React from 'react';
import { PageSection, SkipToContent, Title } from '@patternfly/react-core';
import { SideNavLayout } from '../layouts';
import { AutoLinkHeader, CSSVariables, PropsTable, TableOfContents, Link } from '../components';
import './mdx.css';

const InlineAlert = ({
  title,
  variant = 'info',
  children
}) => (
  <Alert
    variant={variant}
    title={title}
    className="pf-u-my-md"
    style={{ marginBottom: '1rem' }}
    isInline
  >
    {children}
  </Alert>
);

export const MDXTemplate = ({
  id,
  designSnippet,
  sources = {},
  path,
  children
}) => {
  const isSinglePage = Object.keys(sources).length === 1;

  return (
    <React.Fragment>
      <SkipToContent href="#main-content">Skip to Content</SkipToContent>
      <SideNavLayout>
        <PageSection id="main-content" className="ws-section">
          <Title size="4xl" headingLevel="h1" className="ws-page-title">
            {id}
          </Title>
          {designSnippet && React.createElement(designSnippet.Component)}
          {!isSinglePage && (
            <ul>
              {Object.keys(sources)
                .map(source => (
                  <li key={source}>
                    <Link to={source}>
                      {source}
                    </Link>
                  </li>
                ))
              }
            </ul>
          )}
          {isSinglePage
            ? React.createElement(Object.values(sources)[0].Component)
            : children
          }
        </PageSection>
      </SideNavLayout>
    </React.Fragment>
  );
}

export const MDXChildTemplate = ({
  Component,
  source,
  propComponents,
  sourceLink,
  toc,
  optIn,
  beta,
  katacodaBroken,
  cssPrefix
}) => {
  if (propComponents && propComponents.length > 0 && !toc.includes('Props')) {
    toc.push('Props');
  }
  const InlineAlerts = (
    <React.Fragment>
      {optIn && (
        <InlineAlert title="Opt-in feature">
          {optIn}
        </InlineAlert>
      )}
      {beta && (
        <InlineAlert title="Beta feature">
          This Beta component is currently under review, so please join in and give us your feedback on the <a href="https://forum.patternfly.org/">PatternFly forum</a>.
        </InlineAlert>
      )}
      {katacodaBroken && (
        <InlineAlert variant="danger" title="Down for maintenance">
          The embedded version of our tutorials are broken, but you can still access our tutorials on <a href="https://www.katacoda.com/patternfly">Katacoda.com</a>.
        </InlineAlert>
      )}
    </React.Fragment>
  );
  // Create dynamic component for @reach/router
  const ChildComponent = () => (
    <div className="ws-mdx-child">
      {toc && toc.length > 1 && (
        <TableOfContents items={toc} />
      )}
      <div>
        {InlineAlerts}
        <Component />
        {cssPrefix && cssPrefix.length > 0 && (
          <React.Fragment>
            <AutoLinkHeader headingLevel="h2" id="props" size="h2" className="ws-h2">
              CSS Variables
            </AutoLinkHeader>
            <CSSVariables prefix={cssPrefix} />
          </React.Fragment>
        )}
        {false && (
          <React.Fragment>
            <AutoLinkHeader headingLevel="h2" id="props" size="h2" className="ws-h2">
              Props
            </AutoLinkHeader>
            {props.map(component => (
              <PropsTable
                key={component.name}
                caption={`${component.name} properties`}
                rows={component.props} />
            ))}
          </React.Fragment>
        )}
        {sourceLink && (
          <a href={sourceLink} target="_blank">View source on Github.</a>
        )}
      </div>
    </div>
  );
  ChildComponent.displayName = `Routed${Component.displayName}`;
  return <ChildComponent key={source} path={source} default={source === 'react'} />;
}
