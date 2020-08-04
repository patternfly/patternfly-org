import React from 'react';
import { PageSection, SkipToContent, Title } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import { Router, useLocation } from '@reach/router';
import { SideNavLayout } from '../layouts';
import { AutoLinkHeader, CSSVariables, PropsTable, TableOfContents, Link, AccordionHeader } from '../components';
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

const MDXChildTemplate = ({
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
  const cssVarsTitle = cssPrefix.length > 0 && 'CSS variables';
  const propsTitle = propComponents.length > 0 && 'Props';
  if (propsTitle && !toc.includes(propsTitle)) {
    toc.push(propsTitle);
  }
  if (cssVarsTitle && !toc.includes(cssVarsTitle)) {
    toc.push(cssVarsTitle);
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
        {propsTitle && (
          <AccordionHeader title={propsTitle} titleId="props">
            {propComponents.map(component => (
              <PropsTable
                key={component.name}
                caption={`${component.name} properties`}
                rows={component.props} />
            ))}
          </AccordionHeader>
        )}
        {cssVarsTitle && (
          <AccordionHeader title={cssVarsTitle} titleId="css-variables">
            <CSSVariables prefix={cssPrefix} />
          </AccordionHeader>
        )}
        {sourceLink && (
          <a href={sourceLink} target="_blank">View source on Github.</a>
        )}
      </div>
    </div>
  );
  ChildComponent.displayName = `MDXChildTemplate${Component.displayName}`;
  return <ChildComponent key={source} path={source} default={source === 'react'} />;
}

export const MDXTemplate = ({
  id,
  designSnippet,
  sources = {}
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
          type={isSinglePage ? 'default' : 'nav'}
        >
          <Title size="4xl" headingLevel="h1" className="ws-page-title">
            {id}
          </Title>
          {designSnippet &&
            <designSnippet.Component />
          }
          {!isSinglePage && (
            <div className="pf-c-tabs ws-source-tabs">
              <ul className="pf-c-tabs__list">
                {sourceKeys.map(source => (
                  <li
                    key={source}
                    className={css(
                      'pf-c-tabs__item',
                      activeSource === source && 'pf-m-current'
                    )}
                  >
                    <Link className="pf-c-tabs__link" to={source}>
                      {source === 'html'
                        ? 'HTML'
                        : capitalize(source.replace(/-/g, ' '))}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {isSinglePage && (
            <MDXChildTemplate {...Object.values(sources)[0]} />
          )}
        </PageSection>
        {!isSinglePage && (
          <PageSection id="main-content" className="ws-child-section">
            <Router className="pf-u-h-100" primary={false}>
              {Object.values(sources).map(MDXChildTemplate)}
            </Router>
          </PageSection>
        )}
      </SideNavLayout>
    </React.Fragment>
  );
}
