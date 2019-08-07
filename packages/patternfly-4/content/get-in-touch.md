---
path: "/get-in-touch"
---

import { ChatIcon, QuestionIcon, BlogIcon, MailBulkIcon } from '@patternfly/react-icons';
import { Grid, GridItem, Split, SplitItem } from '@patternfly/react-core';
import AutoLinkHeader from '@content/AutoLinkHeader';

<AutoLinkHeader is="h1" className="pf-u-mb-lg">Get in touch</AutoLinkHeader>

Get involved with the PatternFly community. Get answers to your questions and share your knowledge with others.

We are here to help.

<Grid sm={12} md={6} gutter className="pf-u-my-lg" style={{ maxWidth: '450px' }}>
  <GridItem>
    <Split>
      <SplitItem style={{ marginRight: '12px' }}><h3><ChatIcon /></h3></SplitItem>
      <SplitItem isFilled>
        <h3>Chat with us</h3>
        <a href="https://patternfly.slack.com" target="_blank" rel="noopener noreferrer">Slack</a>
      </SplitItem>
    </Split>
  </GridItem>
  <GridItem>
    <Split>
      <SplitItem style={{ marginRight: '12px' }}><h3><MailBulkIcon /></h3></SplitItem>
      <SplitItem isFilled>
        <h3>Stay in the loop</h3>
        <a href="https://www.redhat.com/mailman/listinfo/patternfly" target="_blank" rel="noopener noreferrer">PatternFly mailing list</a>
      </SplitItem>
    </Split>
  </GridItem>
  <GridItem>
    <Split>
      <SplitItem style={{ marginRight: '12px' }}><h3><QuestionIcon /></h3></SplitItem>
      <SplitItem isFilled>
        <h3>Ask a question</h3>
        <a href="https://forum.patternfly.org/" target="_blank" rel="noopener noreferrer">PatternFly forum</a>
      </SplitItem>
    </Split>
  </GridItem>
  <GridItem>
    <Split>
      <SplitItem style={{ marginRight: '12px' }}><h3><BlogIcon /></h3></SplitItem>
      <SplitItem isFilled>
        <h3>Read the latest</h3>
        <a href="https://blog.patternfly.org/" target="_blank" rel="noopener noreferrer">PatternFly blog</a>
      </SplitItem>
    </Split>
  </GridItem>
</Grid>