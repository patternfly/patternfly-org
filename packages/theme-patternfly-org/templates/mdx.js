import React from 'react';
import { PageSection, Title, PageSectionVariants, BackToTop } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import { Router, useLocation } from '@reach/router';
import { CSSVariables, PropsTable, TableOfContents, Link, AutoLinkHeader, InlineAlert } from '../components';
import { capitalize, getTitle, slugger, trackEvent } from '../helpers';
import './mdx.css';

const MDXChildTemplate = ({
  Component,
  source,
  toc = [],
  index = 0
}) => {
  const {
    propComponents = [],
    sourceLink,
    cssPrefix = [],
    optIn,
    beta,
    katacodaBroken,
    katacodaLayout
  } = Component.getPageData();
  const cssVarsTitle = cssPrefix.length > 0 && 'CSS variables';
  const propsTitle = propComponents.length > 0 && 'Props';
  if (propsTitle && !toc.find(item => item.text === propsTitle)) {
    toc.push({ text: propsTitle });
    toc.push(propComponents.map(propComponent => ({ text: propComponent.name })));
  }
  if (cssVarsTitle && !toc.find(item => item.text === cssVarsTitle)) {
    toc.push({ text: cssVarsTitle });
  }
  // We don't add `id`s in anchor-header.js for items where id === slugger(text)
  // in order to save ~10KB bandwidth.
  if (toc.length > 1) {
    const ensureID = tocItem => {
      if (Array.isArray(tocItem)) {
        tocItem.forEach(ensureID);
      }
      else if (!tocItem.id) {
        tocItem.id = slugger(tocItem.text)
      }
    }
    ensureID(toc);
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
          This Beta component is currently under review and is still open for further evolution. It is available for use in product.
          Beta components are considered for promotion on a quarterly basis. Please join in and give us your feedback or submit any questions on the <a href="https://forum.patternfly.org/">PatternFly forum</a> or via <a href="//slack.patternfly.org/" target="_blank" rel="noopener noreferrer">Slack</a>.
          To learn more go to our <a href="https://github.com/patternfly/patternfly-org/tree/main/beta-component-promotion">Beta components</a> page on GitHub.
        </InlineAlert>
      )}
      {katacodaBroken && (
        <InlineAlert variant="warning" title="Down for maintenance">
          The embedded version of our tutorials are broken, but you can still access our tutorials on <a href="https://www.katacoda.com/patternfly">Katacoda.com <ExternalLinkAltIcon /></a>.
        </InlineAlert>
      )}
    </React.Fragment>
  );
  // Create dynamic component for @reach/router
  const ChildComponent = () => (
    <div className="pf-u-display-flex ws-mdx-child-template">
      {toc.length > 1 && (
        <TableOfContents items={toc} />
      )}
      <div className={katacodaLayout? "ws-mdx-content-katacoda" : "ws-mdx-content"}>
        <div className={katacodaLayout ? "" : "ws-mdx-content-content"}>
          {InlineAlerts}
          <Component />
          {propsTitle && (
            <React.Fragment>
              <AutoLinkHeader size="h2" className="ws-h2" id="props">
                {propsTitle}
              </AutoLinkHeader>
              {propComponents.map(component => (
                <PropsTable
                  key={component.name}
                  title={component.name}
                  rows={component.props}
                  allPropComponents={propComponents}
                />
              ))}
            </React.Fragment>
          )}
          {cssVarsTitle && (
            <React.Fragment>
              <AutoLinkHeader size="h2" className="ws-h2" id="css-variables">
                {cssVarsTitle}
              </AutoLinkHeader>
              <CSSVariables prefix={cssPrefix} />
            </React.Fragment>
          )}
          {!katacodaLayout && sourceLink && (
            <React.Fragment>
              <br />
              <a href={sourceLink} target="_blank" onClick={() => trackEvent('view_source_click', 'click_event', source.toUpperCase())}>View source on GitHub</a>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
  ChildComponent.displayName = `MDXChildTemplate${Component.displayName}`;
  return <ChildComponent key={source} path={source} default={index === 0} />;
}

export const MDXTemplate = ({
  title,
  sources = [],
  path
}) => {
  const sourceKeys = sources.map(v => v.source);
  const isSinglePage = sourceKeys.length === 1;
  const { pathname } = useLocation();
  const { katacodaLayout } = sources[0].Component.getPageData();
  let activeSource = pathname.replace(/\/$/, '').split('/').pop();
  if (!sourceKeys.includes(activeSource)) {
    activeSource = sourceKeys[0];
  }

  if (typeof document !== 'undefined') {
    document.title = getTitle(title);
  }

  return (
    <React.Fragment>
      <PageSection
        className={isSinglePage ? 'ws-docs-title' : ''}
        variant={isSinglePage ? PageSectionVariants.default : PageSectionVariants.light}
      >
        {!katacodaLayout && <Title size="4xl" headingLevel="h1" id="ws-page-title">
          {title}
        </Title>}
      </PageSection>
      {!isSinglePage && (
        <PageSection className="pf-m-light pf-u-pb-0 pf-u-pt-0">
          <div className="pf-c-tabs ws-source-tabs">
            <ul className="pf-c-tabs__list">
              {sourceKeys.map((source, index) => (
                <li
                  key={source}
                  className={css(
                    'pf-c-tabs__item',
                    activeSource === source && 'pf-m-current'
                  )}
                  // Send clicked tab name for analytics
                  onClick={() => trackEvent('tab_click', 'click_event', source.toUpperCase())}
                >
                  <Link className="pf-c-tabs__link" to={`${path}${index === 0 ? '' : '/' + source}`}>
                    {capitalize(source.replace('html', 'HTML').replace(/-/g, ' '))}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </PageSection>
      )}
      <PageSection id="main-content" className={isSinglePage ? 'pf-m-fill' : 'pf-m-fill pf-m-light'}>
        {isSinglePage && (
            <MDXChildTemplate {...sources[0]} />
        )}
        {!isSinglePage && (
          <Router className="pf-u-h-100" primary={false}>
            {sources
              .map((source, index) => {
                source.index = index;
                return source;
              })
              .map(MDXChildTemplate)
            }
          </Router>
        )}
      </PageSection>
      <BackToTop className="ws-back-to-top" scrollableSelector="#ws-page-main" />
    </React.Fragment>
  );
}
