import React from 'react';
import SideNav from './SideNav';
import Layout from '../../layout';
import FullPageExampleLayout from '@siteComponents/FullPageExampleLayout';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';
import AutoLinkHeader from '@content/AutoLinkHeader';
import { Location } from '@reach/router';
import Section from '../../section';
import SEO from '../../seo';
import './styles.scss';
import Tokens from '../../css-variables';
import MarkdownDescription from '../../MarkdownDescription';

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
    const { children, className = '', docs = '', heading = '', variablesRoot } = this.props;
    const HTML_DOCS = { __html: docs };
    return !this.state.isFull ? (
      <Location>
      {({ location }) => {
        // console.log(location);
        const currentPath = location.pathname;
        let componentType = 'Components';
        if (currentPath.indexOf('/layouts/') > -1) {
          componentType = 'Layouts';
        } else if (currentPath.indexOf('/utilities/') > -1) {
          componentType = 'Utilities';
        } else if (currentPath.indexOf('/demos/') > -1) {
          componentType = 'Demos';
        } else if (currentPath.indexOf('/upgrades/') > -1) {
          componentType = 'Upgrades';
        }
        // ignore above and just set to HTML for now
        componentType = 'HTML';
        return (
          <Layout sideNav={<SideNav />}>
            <SEO title="React" />
            <PageSection variant={PageSectionVariants.light} className="pf-w-section-border">
              <AutoLinkHeader size="md" is="h1">{componentType}</AutoLinkHeader>
              <AutoLinkHeader size="4xl" is="h2">{heading}</AutoLinkHeader>
              <MarkdownDescription path={currentPath} />
            </PageSection>
            <PageSection variant={PageSectionVariants.light} className="pf-w-section-border">
              <Section title="Examples" headingLevel="h3" className={className}>
                {children}
              </Section>
            </PageSection>
            <PageSection variant={PageSectionVariants.light}>
              <Section title="Documentation" headingLevel="h3">
                <div className="Documentation Documentation__docsection" dangerouslySetInnerHTML={HTML_DOCS} />
              </Section>
            </PageSection>
            {variablesRoot && <PageSection variant={PageSectionVariants.light}>
              <Section title="CSS Variables" headingLevel="h3">
                <Tokens variables={variablesRoot} />
              </Section>
            </PageSection>}
          </Layout>
        )
      }}
    </Location>
    ) : (
      <FullPageExampleLayout>
        <div className={className}>
          <h1 className="pf-screen-reader">{this.props.heading} full example</h1>
          {children}
        </div>
      </FullPageExampleLayout>
    );
  }
}
