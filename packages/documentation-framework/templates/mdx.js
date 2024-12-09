import React from 'react';
import {
  PageSection,
  Title,
  Tooltip,
  PageSectionVariants,
  Button,
  BackToTop,
  Flex,
  FlexItem,
  PageGroup,
  Page,
  Content,
  Label,
  Stack,
  StackItem,
} from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import { Router, useLocation } from '@reach/router';
import {
  CSSVariables,
  PropsTable,
  TableOfContents,
  Link,
  AutoLinkHeader,
  InlineAlert,
} from '../components';
import { capitalize, getTitle, slugger, trackEvent } from '../helpers';
import './mdx.css';
import { convertToReactComponent } from '@patternfly/ast-helpers';
import { FunctionsTable } from '../components/functionsTable/functionsTable';

const MDXChildTemplate = ({ Component, source, toc = [], index = 0, id }) => {
  const {
    propComponents = [],
    sourceLink,
    cssPrefix = [],
    optIn,
    beta,
    deprecated,
    template,
    newImplementationLink,
    functionDocumentation = [],
  } = Component.getPageData();
  const cssVarsTitle = cssPrefix.length > 0 && 'CSS variables';
  const propsTitle = propComponents.length > 0 && 'Props';
  if (propsTitle && !toc.find((item) => item.text === propsTitle)) {
    toc.push({ text: propsTitle });
    toc.push(
      propComponents.map((propComponent) => ({ text: propComponent.name }))
    );
  }
  if (cssVarsTitle && !toc.find((item) => item.text === cssVarsTitle)) {
    toc.push({ text: cssVarsTitle });
    if (cssPrefix.length > 1) {
      toc.push(
        cssPrefix.map((cssPrefix) => ({ text: `Prefixed with '${cssPrefix}'` }))
      );
    }
  }
  // We don't add `id`s in anchor-header.js for items where id === slugger(text)
  // in order to save ~10KB bandwidth.
  if (toc.length > 1) {
    const ensureID = (tocItem) => {
      if (Array.isArray(tocItem)) {
        tocItem.forEach(ensureID);
      } else if (!tocItem.id) {
        tocItem.id = slugger(tocItem.text);
      }
    };
    ensureID(toc);
  }

  const isComponentCodeDocs = [
    'react',
    'react-demos',
    'html',
    'html-demos',
    'react-templates',
  ].includes(source);

  const InlineAlerts = (optIn ||
    beta ||
    deprecated ||
    source === 'react-deprecated' ||
    source === 'html-deprecated' ||
    // TODO: remove hardcoded Tile when Core PR merges
    // https://github.com/patternfly/patternfly/pull/7178
    id === 'Tile' ||
    template ||
    source === 'react-template') && (
    <StackItem>
      {optIn && <InlineAlert title="Opt-in feature">{optIn}</InlineAlert>}
      {beta && (
        <InlineAlert title="Beta feature">
          This beta component is currently under review and is still open for
          further evolution. It is available for use in product. Beta components
          are considered for promotion on a quarterly basis. Please join in and
          give us your feedback or submit any questions on the{' '}
          <a href="https://forum.patternfly.org/">PatternFly forum</a> or via{' '}
          <a
            href="//slack.patternfly.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slack
          </a>
          . To learn more about the process, visit our{' '}
          <Link to="/get-started/about-patternfly#beta-components">
            about page
          </Link>{' '}
          or our{' '}
          <a href="https://github.com/patternfly/patternfly-org/tree/main/beta-component-promotion">
            Beta components
          </a>{' '}
          page on GitHub.
        </InlineAlert>
      )}
      {(deprecated ||
        source === 'react-deprecated' ||
        source === 'html-deprecated' ||
        // TODO: remove hardcoded Tile when Core PR merges
        // https://github.com/patternfly/patternfly/pull/7178
        id === 'Tile') && (
        <InlineAlert title="Deprecated feature" variant="warning">
          This component implementation has been deprecated in favor of a newer
          solution, and is no longer being maintained or enhanced.
          {newImplementationLink && (
            <React.Fragment>
              You can find the{' '}
              <Link to={newImplementationLink}>
                updated implementation here
              </Link>
              .
            </React.Fragment>
          )}{' '}
          To learn more about deprecated components, visit{' '}
          <Link to="/get-started/about-patternfly#deprecated-components">
            about PatternFly.
          </Link>
        </InlineAlert>
      )}
      {(template || source === 'react-template') && (
        <InlineAlert title="Templates" variant="info">
          {`This page showcases templates for the ${id.toLowerCase()} component. A template combines a component with logic that supports a specific use case, with a streamlined API that offers additional, limited customization.`}
        </InlineAlert>
      )}
    </StackItem>
  );
  // Create dynamic component for @reach/router
  const ChildComponent = () => (
    <div className={source !== 'landing-pages' ? 'pf-v6-l-flex' : ''}>
      {toc.length > 1 && <TableOfContents items={toc} />}
      <Stack
        hasGutter
        style={{ ...(source !== 'landing-pages' && { maxWidth: '825px' }) }}
      >
        {InlineAlerts}
        <Component />
        {functionDocumentation.length > 0 && (
          <StackItem>
            <AutoLinkHeader
              headingLevel="h2"
              className="pf-v6-c-content--h2"
              id="functions"
            >
              Functions
            </AutoLinkHeader>
            <FunctionsTable functionDescriptions={functionDocumentation} />
          </StackItem>
        )}
        {propsTitle && (
          <StackItem>
            <AutoLinkHeader
              headingLevel="h2"
              className="pf-v6-c-content--h2"
              id="props"
            >
              {propsTitle}
            </AutoLinkHeader>
            {propComponents.map((component) => (
              <PropsTable
                key={component.name}
                title={component.name}
                description={component.description}
                rows={component.props}
                allPropComponents={propComponents}
              />
            ))}
          </StackItem>
        )}
        {cssPrefix.length > 0 && (
          <StackItem>
            <AutoLinkHeader
              headingLevel="h2"
              className="pf-v6-c-content--h2"
              id="css-variables"
            >
              {cssVarsTitle}
            </AutoLinkHeader>
            {cssPrefix.map((prefix, index) => (
              <CSSVariables
                key={index}
                autoLinkHeader={cssPrefix.length > 1}
                prefix={prefix}
              />
            ))}
          </StackItem>
        )}
        {sourceLink && (
          <StackItem>
            <br />
            <a
              href={sourceLink}
              target="_blank"
              onClick={() =>
                trackEvent(
                  'view_source_click',
                  'click_event',
                  source.toUpperCase()
                )
              }
            >
              Edit this page on GitHub
            </a>
          </StackItem>
        )}
      </Stack>
    </div>
  );
  ChildComponent.displayName = `MDXChildTemplate${Component.displayName}`;
  return <ChildComponent key={source} path={source} default={index === 0} />;
};

export const MDXTemplate = ({
  title,
  sources = [],
  path,
  id,
  componentsData,
}) => {
  const isDeprecated =
    sources.some(
      (source) =>
        source.source === 'react-deprecated' ||
        source.source === 'html-deprecated'
    ) &&
    !sources.some(
      (source) => source.source === 'react' || source.source === 'html'
    );
  const isBeta = sources.some(
    (source) =>
      source.beta &&
      source.source !== 'react-next' &&
      source.source !== 'react-templates'
  );
  const isDemo =
    sources.some(
      (source) =>
        source.source === 'react-demos' || source.source === 'html-demos'
    ) &&
    !sources.some(
      (source) => source.source === 'react' || source.source === 'html'
    );
  // Build obj mapping source names to text displayed on tabs
  const tabNames = sources.reduce((acc, curSrc) => {
    const { source, tabName } = curSrc;
    // use tabName for tab name if present, otherwise default to source
    const tabLinkText =
      tabName || capitalize(source.replace('html', 'HTML').replace(/-/g, ' '));
    acc[source] = tabLinkText;
    return acc;
  }, {});
  const sourceKeys = Object.keys(tabNames);
  const isSinglePage = sourceKeys.length === 1;

  let isDevResources,
    isComponent,
    isExtension,
    isChart,
    isPattern,
    isLayout,
    isUtility,
    isUpgrade;

  const getSection = () => {
    return sources.some((source) => {
      switch (source.section) {
        case 'developer-resources':
          isDevResources = true;
          return;
        case 'components':
          isComponent = true;
          return;
        case 'extensions':
          isExtension = true;
          return;
        case 'charts':
          isChart = true;
          return;
        case 'patterns':
          isPattern = true;
          return;
        case 'layouts':
          isLayout = true;
          return;
        case 'utilities':
          isUtility = true;
          return;
        case 'get-started':
          if (source.source.includes('upgrade')) {
            isUpgrade = true;
          }
          return;
      }
    });
  };

  // hide tab if it doesn't include the strings below
  const hideTabName = sourceKeys.some(
    (e) => e.includes('pages') || e.includes('training')
  );
  const { pathname } = useLocation();
  let activeSource = pathname.replace(/\/$/, '').split('/').pop();
  // get summary text, convert to JSX to display above tabs on component pages
  const componentDasherized = id.split(' ').join('-').toLowerCase();
  const summary = componentsData?.[componentDasherized]?.summary;
  let SummaryComponent;
  if (summary) {
    const summaryCode = convertToReactComponent(`<p>${summary}</p>`).code;
    const getSummaryComponent = new Function('React', 'Link', summaryCode);
    SummaryComponent = getSummaryComponent(React, Link);
  }

  if (!sourceKeys.includes(activeSource)) {
    activeSource = sourceKeys[0];
  }

  if (typeof document !== 'undefined') {
    document.title = getTitle(title);
  }

  const getClassName = () => {
    getSection();
    if (isChart || isDevResources || isExtension) {
      if (isSinglePage) {
        return 'pf-m-light-100';
      }
      return 'pf-m-light';
    } else if (isUtility || isPattern || isLayout || isComponent || isUpgrade) {
      return 'pf-m-light';
    }
    return 'pf-m-light-100';
  };

  const showTabs =
    (!isSinglePage && !hideTabName) || isComponent || isUtility || isPattern;

  return (
    <React.Fragment>
      <PageGroup>
        <PageSection
          className={getClassName()}
          variant={!isSinglePage ? PageSectionVariants.light : ''}
          isWidthLimited
        >
          <Content isEditorial>
            <Flex alignItems={{ default: 'alignItemsCenter' }}>
              <FlexItem>
                <Title headingLevel="h1" size="4xl" id="ws-page-title">
                  {title}
                </Title>
              </FlexItem>
              <FlexItem>
                <Flex display={{ default: 'inlineFlex' }}>
                  {isDeprecated && (
                    <FlexItem spacer={{ default: 'spacerSm' }}>
                      <Tooltip content="Deprecated components are available for use but are no longer being maintained or enhanced.">
                        <Button variant="plain" hasNoPadding>
                          <Label color="grey">Deprecated</Label>
                        </Button>
                      </Tooltip>
                    </FlexItem>
                  )}
                  {isDemo && (
                    <FlexItem spacer={{ default: 'spacerSm' }}>
                      <Tooltip content="Demos show how multiple components can be used in a single design.">
                        <Button variant="plain" hasNoPadding>
                          <Label color="purple">Demo</Label>
                        </Button>
                      </Tooltip>
                    </FlexItem>
                  )}
                  {isBeta && (
                    <FlexItem spacer={{ default: 'spacerSm' }}>
                      <Tooltip content="This beta component is currently under review and is still open for further evolution.">
                        <Button variant="plain" hasNoPadding>
                          <Label color="blue">Beta</Label>
                        </Button>
                      </Tooltip>
                    </FlexItem>
                  )}
                </Flex>
              </FlexItem>
            </Flex>
            {isComponent && summary && <SummaryComponent />}
          </Content>
        </PageSection>
        {showTabs && (
          <PageSection
            id="ws-sticky-nav-tabs"
            stickyOnBreakpoint={{ default: 'top' }}
            type="tabs"
          >
            <div className="pf-v6-c-tabs pf-m-page-insets pf-m-no-border-bottom">
              <ul className="pf-v6-c-tabs__list">
                {sourceKeys.map((source, index) => (
                  <li
                    key={source}
                    className={css(
                      'pf-v6-c-tabs__item',
                      activeSource === source && 'pf-m-current'
                    )}
                    // Send clicked tab name for analytics
                    onClick={() =>
                      trackEvent(
                        'tab_click',
                        'click_event',
                        source.toUpperCase()
                      )
                    }
                  >
                    <Link
                      className="pf-v6-c-tabs__link"
                      to={`${path}${index === 0 ? '' : '/' + source}`}
                    >
                      {tabNames[source]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </PageSection>
        )}
        <PageSection id="main-content" isFilled className="pf-m-light-100">
          {isSinglePage && <MDXChildTemplate {...sources[0]} id={id} />}
          {!isSinglePage && (
            <Router className="pf-v6-u-h-100" primary={false}>
              {sources
                .map((source, index) => {
                  source.index = index;
                  return source;
                })
                .map(MDXChildTemplate)}
            </Router>
          )}
        </PageSection>
        <BackToTop
          className="ws-back-to-top"
          scrollableSelector="#ws-page-main"
        />
      </PageGroup>
    </React.Fragment>
  );
};
