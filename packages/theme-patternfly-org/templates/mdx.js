import React from 'react';
import { PageSection, SkipToContent, Title, Tabs, Tab } from '@patternfly/react-core';
import { useLocation } from '@reach/router';
import { SideNavLayout } from '../layouts';
import { AutoLinkHeader, CSSVariables, PropsTable, TableOfContents, Link } from '../components';
import { capitalize } from '../helpers';
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

const sourceOrder = {
  react: 1,
  'design-guidelines': 2
};
const defaultOrder = 99;

const sortSources = (s1, s2) => {
  const s1Index = sourceOrder[s1] || defaultOrder;
  const s2Index = sourceOrder[s2] || defaultOrder;
  if (s1Index === defaultOrder && s2Index === defaultOrder) {
    return s1.localeCompare(s2);
  }

  return s1Index > s2Index ? 1 : -1;
}
  

export const MDXTemplate = ({
  id,
  designSnippet,
  sources = {},
  path,
  children
}) => {
  const sourceKeys = Object.keys(sources).sort(sortSources);
  const isSinglePage = sourceKeys.length === 1;
  const { pathname } = useLocation();
  let activeSource = pathname.split('/').pop();
  if (!sourceKeys.includes(activeSource)) {
    activeSource = 'react';
  }

  return (
    <React.Fragment>
      <SkipToContent href="#main-content">Skip to Content</SkipToContent>
      <SideNavLayout>
        <PageSection
          id={isSinglePage ? 'main-content' : 'nav-content'}
          className="ws-first-section"
          type={isSinglePage ? 'default' : 'nav'}
        >
          <Title size="4xl" headingLevel="h1" className="ws-page-title">
            {id}
          </Title>
          {designSnippet && React.createElement(designSnippet.Component)}
          {!isSinglePage && (
            <Tabs activeKey={activeSource} className="ws-source-tabs">
              {sourceKeys.map(source => (
                <Tab
                  key={source}
                  eventKey={source}
                  title={(
                    <Link to={source}>
                      {capitalize(source.replace(/-/g, ' '))}
                    </Link>
                  )}
                />
              ))}
            </Tabs>
          )}
          {isSinglePage && (
            React.createElement(Object.values(sources)[0].Component)
          )}
        </PageSection>
        {!isSinglePage && (
          <PageSection id="main-content" className="ws-child-section">
            {children}
          </PageSection>
        )}
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
      <div className="ws-mdx-content">
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
  ChildComponent.displayName = `Route${Component.displayName}`;
  return <ChildComponent key={source} path={source} default={source === 'react'} />;
}
