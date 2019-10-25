import React from 'react';
import SideNav from './SideNav';
import Layout from '../../layout';
import { Alert, PageSection, PageSectionVariants } from '@patternfly/react-core';
import { MDXRenderer } from 'gatsby-mdx';
import AutoLinkHeader from '@content/AutoLinkHeader';
import Section from '../../section';
import SEO from '../../seo';
import './styles.scss';
import Tokens from '../../css-variables';
import Example from '../Example';
import { Location } from '@reach/router';

export const CoreContext = React.createContext({});

export default class Documentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFull: false };
  }

  componentDidMount() {
    // need to check if full after initial render, as the statically built site
    // (and the page that is presented on first load) is not full-screen otherwise
    if (this.state.isFull !== window.location.search.length > 0) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        isFull: window.location.search.length > 0
      });
    }
  }

  render() {
    const { children, className = '', docs = '', heading = '', variablesRoot, data } = this.props;
    const { isFull } = this.state;

    return (
      <Location>
        {({ location }) => {
          let matchingChild = children;
          if (isFull) {
            // requesting full screen view of an example
            const queryObject = Example.parseQueryString(location.search.substr(1));
            matchingChild = React.Children.toArray(children).filter((child, i) => {
              return encodeURI(child.props.heading) === queryObject.component;
            });
          }
          const changeHeadingLevel = (html, level) => {
            const modifiedHtml = html.replace(/<h2/g, `<${level} class="pf-u-mt-xl pf-u-mb-sm"`).replace(/h2>/g, `${level}>`);
            return modifiedHtml;
          };
          const changeTableResponsiveness = html => html.replace(/<table>/g, '<table class="pf-m-grid">')
          const HTML_DOCS = { __html: changeTableResponsiveness(changeHeadingLevel(docs, 'h3')) };
          return !isFull ? (
            <CoreContext.Provider value={{ coreClass: className || '' }}>
              <Layout sideNav={<SideNav />}>
                <SEO title="HTML" />
                <PageSection variant={PageSectionVariants.light} className="pf-site-background-medium">
                  <AutoLinkHeader size="md" is="h1" className="pf4-site-framework-title">HTML</AutoLinkHeader>
                  <AutoLinkHeader size="4xl" is="h2" suffix="-title" className="pf-u-mt-sm pf-u-mb-md">{heading}</AutoLinkHeader>
                  {location.pathname.indexOf('experimental') >= 0 &&
                    <Alert isInline variant="info" title="Experimental feature" style={{ marginBottom: 'var(--pf-global--spacer--md)' }}>
                      This is an experimental feature in the early stages of testing. It's not intended for production use.
                    </Alert>
                  }
                  {data && data.pageContext && data.pageContext.description &&
                    <Section className={className}>
                      <MDXRenderer>
                        {data.pageContext.description.code.body}
                      </MDXRenderer>
                    </Section>
                  }
                  <Section>
                    <AutoLinkHeader anchorOnly className="pf-site-toc">Examples</AutoLinkHeader>
                    <AutoLinkHeader anchorOnly className="pf-site-toc">Documentation</AutoLinkHeader>
                    {variablesRoot && <AutoLinkHeader anchorOnly className="pf-site-toc">CSS variables</AutoLinkHeader>}
                  </Section>
                  <Section title="Examples" headingLevel="h3">
                    {children}
                  </Section>
                </PageSection>
                <PageSection variant={PageSectionVariants.light} className="pf-site-background-medium">
                  <Section title="Documentation" headingLevel="h2">
                    <div className="Documentation Documentation__docsection" dangerouslySetInnerHTML={HTML_DOCS} />
                  </Section>
                </PageSection>
                {variablesRoot && <PageSection variant={PageSectionVariants.light} className="pf-site-background-medium">
                  <Section title="CSS variables" headingLevel="h3">
                    <Tokens variables={variablesRoot} />
                  </Section>
                </PageSection>}
              </Layout>
            </CoreContext.Provider>
          ) : (
            <CoreContext.Provider value={{ coreClass: className || '' }}>
              {matchingChild}
            </CoreContext.Provider>
          );
        }}
      </Location>
    );
  }
}
