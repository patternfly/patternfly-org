import React from 'react';
import SideNav from './SideNav';
import Layout from '../../layout';
import FullPageExampleLayout from '@siteComponents/FullPageExampleLayout';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';
import { MDXRenderer } from 'gatsby-mdx';
import AutoLinkHeader from '@content/AutoLinkHeader';
import Section from '../../section';
import SEO from '../../seo';
import './styles.scss';
import Tokens from '../../css-variables';

export const CoreContext = React.createContext({});

export default class Documentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFull: false };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      isFull: window.location.pathname.indexOf('-full') > 0
    });
  }

  render() {
    const { children, className = '', docs = '', heading = '', variablesRoot, data } = this.props;
    const examples = React.Children.toArray(children);
    const changeHeadingLevel = (html, level) => {
      const modifiedHtml = html.replace(/<h2/g, `<${level} class="pf-u-mt-xl pf-u-mb-sm"`).replace(/h2>/g, `${level}>`);
      return modifiedHtml;
    };
    const changeTableResponsiveness = html => html.replace(/<table>/g, '<table class="pf-m-grid">')
    const HTML_DOCS = { __html: changeTableResponsiveness(changeHeadingLevel(docs, 'h4')) };
    return !this.state.isFull ? (
      <CoreContext.Provider value={{ coreClass: className || '' }}>
        <Layout sideNav={<SideNav />}>
          <SEO title="HTML" />
          <PageSection variant={PageSectionVariants.light} className="pf-site-background-medium">
            <AutoLinkHeader size="md" is="h1" className="pf4-site-framework-title">HTML</AutoLinkHeader>
            <AutoLinkHeader size="4xl" is="h2" className="pf-u-mt-sm pf-u-mb-md">{heading}</AutoLinkHeader>
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
              {variablesRoot && <AutoLinkHeader anchorOnly className="pf-site-toc">CSS Variables</AutoLinkHeader>}
            </Section>
            <Section title="Examples" headingLevel="h3">
              {children}
            </Section>
          </PageSection>
          <PageSection variant={PageSectionVariants.light} className="pf-site-background-medium">
            <Section title="Documentation" headingLevel="h3">
              <div className="Documentation Documentation__docsection" dangerouslySetInnerHTML={HTML_DOCS} />
            </Section>
          </PageSection>
          {variablesRoot && <PageSection variant={PageSectionVariants.light} className="pf-site-background-medium">
            <Section title="CSS Variables" headingLevel="h3">
              <Tokens variables={variablesRoot} />
            </Section>
          </PageSection>}
        </Layout>
      </CoreContext.Provider>
    ) : (
      <CoreContext.Provider value={{ coreClass: className || '' }}>
        <FullPageExampleLayout>
          <div className={className}>
            <h1 className="pf-screen-reader">{this.props.heading} full example</h1>
            {children}
          </div>
        </FullPageExampleLayout>
      </CoreContext.Provider>
    );
  }
}
