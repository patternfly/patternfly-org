---
id: Contact
section: community
---

import { Grid, GridItem, Split, SplitItem, Title } from '@patternfly/react-core';
import ChatIcon from '@patternfly/react-icons/dist/esm/icons/chat-icon';
import QuestionIcon from '@patternfly/react-icons/dist/esm/icons/question-icon';
import CatalogIcon from '@patternfly/react-icons/dist/esm/icons/catalog-icon';
import MailBulkIcon from '@patternfly/react-icons/dist/esm/icons/mail-bulk-icon';
import TwitterIcon from '@patternfly/react-icons/dist/esm/icons/twitter-icon';

The PatternFly community is never finished growing, and we want to keep it that way. Feel free to reach out whenever — we’re always open.

<Grid sm={12} md={6} gutter="sm" className="pf-u-my-lg pf-l-grid pf-m-all-12-col-on-sm pf-m-all-6-col-on-md pf-m-gutter" style={{ maxWidth: '450px' }}>
  <GridItem>
    <Split>
      <SplitItem style={{ marginRight: '12px' }}><ChatIcon /></SplitItem>
      <SplitItem isFilled>
        <Title size="lg" className="ws-title" headingLevel="h4">Chat with us</Title>
        <a href="//slack.patternfly.org/" target="_blank" rel="noopener noreferrer">Slack</a>
      </SplitItem>
    </Split>
  </GridItem>
  <GridItem>
    <Split>
      <SplitItem style={{ marginRight: '12px' }}><MailBulkIcon /></SplitItem>
      <SplitItem isFilled>
        <Title size="lg" className="ws-title" headingLevel="h4">Stay in the loop</Title>
        <a href="//www.redhat.com/mailman/listinfo/patternfly" target="_blank" rel="noopener noreferrer">PatternFly mailing list</a>
      </SplitItem>
    </Split>
  </GridItem>
  <GridItem>
    <Split>
      <SplitItem style={{ marginRight: '12px' }}><QuestionIcon /></SplitItem>
      <SplitItem isFilled>
        <Title size="lg" className="ws-title" headingLevel="h4">Ask a question</Title>
        <a href="//forum.patternfly.org/" target="_blank" rel="noopener noreferrer">PatternFly forum</a>
      </SplitItem>
    </Split>
  </GridItem>
  <GridItem>
    <Split>
      <SplitItem style={{ marginRight: '12px' }}><CatalogIcon /></SplitItem>
      <SplitItem isFilled>
        <Title size="lg" className="ws-title" headingLevel="h4">Read the latest</Title>
        <a href="//medium.com/patternfly" target="_blank" rel="noopener noreferrer">PatternFly Medium</a>
      </SplitItem>
    </Split>
  </GridItem>
  <GridItem>
    <Split>
      <SplitItem style={{ marginRight: '12px' }}><TwitterIcon /></SplitItem>
      <SplitItem isFilled>
        <Title size="lg" className="ws-title" headingLevel="h4">Send us a Tweet</Title>
        <a href="//twitter.com/patternfly" target="_blank" rel="noopener noreferrer">PatternFly Twitter</a>
      </SplitItem>
    </Split>
  </GridItem>
</Grid>

