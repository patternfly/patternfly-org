import React from 'react';
import { SideNavLayout } from 'gatsby-theme-patternfly-org/layouts';
import { ChatIcon, QuestionIcon, CatalogIcon, MailBulkIcon } from '@patternfly/react-icons';
import { Grid, GridItem, PageSection, PageSectionVariants, Split, SplitItem, Title } from '@patternfly/react-core';
import "./get-in-touch.css";

const GetInTouch = ({ location }) => {
  if (typeof window !== 'undefined') {
    require('../qualtrics.js');
  }
  return (
  <SideNavLayout location={location} hideSideNav showGdprBanner={true} pageTitle="Get in touch">
    <PageSection
      variant={PageSectionVariants.light}
      className="ws-section ws-get-in-touch"
    >
      <h1 className="pf-u-mb-lg ws-title">Get in touch</h1>

      <p className="ws-mdx-p">Get involved with the PatternFly community. Get answers to your questions and share your knowledge with others.</p>

      <p className="ws-mdx-p">We are here to help.</p>

      <Grid sm={12} md={6} gutter="sm" className="pf-u-my-lg pf-l-grid pf-m-all-12-col-on-sm pf-m-all-6-col-on-md pf-m-gutter" style={{ maxWidth: '450px' }}>
        <GridItem>
          <Split>
            <SplitItem style={{ marginRight: '12px' }}><h3><ChatIcon /></h3></SplitItem>
            <SplitItem isFilled>
              <Title size="lg" className="ws-title" headingLevel="h2">Chat with us</Title>
              <a href="https://patternfly.slack.com" target="_blank" rel="noopener noreferrer">Slack</a>
            </SplitItem>
          </Split>
        </GridItem>
        <GridItem>
          <Split>
            <SplitItem style={{ marginRight: '12px' }}><h3><MailBulkIcon /></h3></SplitItem>
            <SplitItem isFilled>
              <Title size="lg" className="ws-title" headingLevel="h2">Stay in the loop</Title>
              <a href="https://www.redhat.com/mailman/listinfo/patternfly" target="_blank" rel="noopener noreferrer">PatternFly mailing list</a>
            </SplitItem>
          </Split>
        </GridItem>
        <GridItem>
          <Split>
            <SplitItem style={{ marginRight: '12px' }}><h3><QuestionIcon /></h3></SplitItem>
            <SplitItem isFilled>
              <Title size="lg" className="ws-title" headingLevel="h2">Ask a question</Title>
              <a href="https://forum.patternfly.org/" target="_blank" rel="noopener noreferrer">PatternFly forum</a>
            </SplitItem>
          </Split>
        </GridItem>
        <GridItem>
          <Split>
            <SplitItem style={{ marginRight: '12px' }}><h3><CatalogIcon /></h3></SplitItem>
            <SplitItem isFilled>
              <Title size="lg" className="ws-title" headingLevel="h2">Read the latest</Title>
              <a href="https://medium.com/patternfly" target="_blank" rel="noopener noreferrer">PatternFly Medium</a>
            </SplitItem>
          </Split>
        </GridItem>
      </Grid>
    </PageSection>
  </SideNavLayout>
)};

export default GetInTouch;
