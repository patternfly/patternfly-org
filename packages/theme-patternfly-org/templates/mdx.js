import React from 'react';
import { Router } from '@reach/router';
import { PageSection, SkipToContent, Title, Accordion, AccordionContent, AccordionItem, AccordionToggle } from '@patternfly/react-core';
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
  location,
  id,
  layoutOptions,
  designSnippet,
  sources = {},
  path,
  children
}) => {
  const [expandedItems, setExpandedItems] = React.useState({});

  const PropsSection = () => (
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
  );


  const isSinglePage = Object.keys(sources).length === 1;

  const toggleExpandedItem = itemName => {
    console.log('toggle', itemName);
    expandedItems[itemName] = !expandedItems[itemName];
    setExpandedItems(Object.assign({}, expandedItems));
  }

  return (
    <React.Fragment>
      <SkipToContent href="#main-content">Skip to Content</SkipToContent>
      <SideNavLayout location={location} {...layoutOptions}>
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
