import React from 'react';
import ChatIcon from '@patternfly/react-icons/dist/esm/icons/chat-icon';
import QuestionIcon from '@patternfly/react-icons/dist/esm/icons/question-icon';
import CatalogIcon from '@patternfly/react-icons/dist/esm/icons/catalog-icon';
import MailBulkIcon from '@patternfly/react-icons/dist/esm/icons/mail-bulk-icon';
import { Grid, GridItem, PageSection, Split, SplitItem, Title } from '@patternfly/react-core';

const GetInTouchPage = () => (
  <PageSection id="main-content" variant="light" style={{ padding: 'var(--pf-global--spacer--xl)' }}>
    <Title size="4xl" className="pf-u-mb-lg ws-page-title" headingLevel="h1">Get in touch</Title>

    <p className="ws-mdx-p">Get involved with the PatternFly community. Get answers to your questions and share your knowledge with others.</p>

    <p className="ws-mdx-p">We are here to help.</p>

    <Grid sm={12} md={6} gutter="sm" className="pf-u-my-lg pf-l-grid pf-m-all-12-col-on-sm pf-m-all-6-col-on-md pf-m-gutter" style={{ maxWidth: '450px' }}>
      <GridItem>
        <Split>
          <SplitItem style={{ marginRight: '12px' }}><ChatIcon /></SplitItem>
          <SplitItem isFilled>
            <Title size="lg" className="ws-title" headingLevel="h2">Chat with us</Title>
            <a href="//slack.patternfly.org/" target="_blank" rel="noopener noreferrer">Slack</a>
          </SplitItem>
        </Split>
      </GridItem>
      <GridItem>
        <Split>
          <SplitItem style={{ marginRight: '12px' }}><MailBulkIcon /></SplitItem>
          <SplitItem isFilled>
            <Title size="lg" className="ws-title" headingLevel="h2">Stay in the loop</Title>
            <a href="//www.redhat.com/mailman/listinfo/patternfly" target="_blank" rel="noopener noreferrer">PatternFly mailing list</a>
          </SplitItem>
        </Split>
      </GridItem>
      <GridItem>
        <Split>
          <SplitItem style={{ marginRight: '12px' }}><QuestionIcon /></SplitItem>
          <SplitItem isFilled>
            <Title size="lg" className="ws-title" headingLevel="h2">Ask a question</Title>
            <a href="//forum.patternfly.org/" target="_blank" rel="noopener noreferrer">PatternFly forum</a>
          </SplitItem>
        </Split>
      </GridItem>
      <GridItem>
        <Split>
          <SplitItem style={{ marginRight: '12px' }}><CatalogIcon /></SplitItem>
          <SplitItem isFilled>
            <Title size="lg" className="ws-title" headingLevel="h2">Read the latest</Title>
            <a href="//medium.com/patternfly" target="_blank" rel="noopener noreferrer">PatternFly Medium</a>
          </SplitItem>
        </Split>
      </GridItem>
    </Grid>
  </PageSection>
);

export default GetInTouchPage;
