import React from 'react';
import SideNavLayout from 'gatsby-theme-patternfly-org/layouts/sideNavLayout';
import { ChatIcon, QuestionIcon, BlogIcon, MailBulkIcon } from '@patternfly/react-icons';
import { Grid, GridItem, PageSection, PageSectionVariants, Split, SplitItem } from '@patternfly/react-core';
import AutoLinkHeader from 'gatsby-theme-patternfly-org/components/autoLinkHeader';
import "./get-in-touch.css";

const GetInTouch = ({ location }) => (
  <SideNavLayout location={location} hideSideNav>
    <PageSection
      variant={PageSectionVariants.light}
      className="ws-section ws-get-in-touch"
    >
      <h1 className="pf-u-mb-lg ws-title">Get in touch</h1>

      <p className="ws-mdx-p">Get involved with the PatternFly community. Get answers to your questions and share your knowledge with others.</p>

      <p className="ws-mdx-p">We are here to help.</p>

      <Grid sm={12} md={6} gutter="sm" class="pf-u-my-lg pf-l-grid pf-m-all-12-col-on-sm pf-m-all-6-col-on-md pf-m-gutter" style={{ maxWidth: '450px' }}>
        <GridItem>
          <Split>
            <SplitItem style={{ marginRight: '12px' }}><h3><ChatIcon /></h3></SplitItem>
            <SplitItem isFilled>
              <h3 className="ws-title">Chat with us</h3>
              <a href="https://patternfly.slack.com" target="_blank" rel="noopener noreferrer">Slack</a>
            </SplitItem>
          </Split>
        </GridItem>
        <GridItem>
          <Split>
            <SplitItem style={{ marginRight: '12px' }}><h3><MailBulkIcon /></h3></SplitItem>
            <SplitItem isFilled>
              <h3 className="ws-title">Stay in the loop</h3>
              <a href="https://www.redhat.com/mailman/listinfo/patternfly" target="_blank" rel="noopener noreferrer">PatternFly mailing list</a>
            </SplitItem>
          </Split>
        </GridItem>
        <GridItem>
          <Split>
            <SplitItem style={{ marginRight: '12px' }}><h3><QuestionIcon /></h3></SplitItem>
            <SplitItem isFilled>
              <h3 className="ws-title">Ask a question</h3>
              <a href="https://forum.patternfly.org/" target="_blank" rel="noopener noreferrer">PatternFly forum</a>
            </SplitItem>
          </Split>
        </GridItem>
        <GridItem>
          <Split>
            <SplitItem style={{ marginRight: '12px' }}><h3><BlogIcon /></h3></SplitItem>
            <SplitItem isFilled>
              <h3 className="ws-title">Read the latest</h3>
              <a href="https://blog.patternfly.org/" target="_blank" rel="noopener noreferrer">PatternFly blog</a>
            </SplitItem>
          </Split>
        </GridItem>
      </Grid>
    </PageSection>
  </SideNavLayout>
);

export default GetInTouch;
