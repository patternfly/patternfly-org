import React from 'react';
import { Title, PageSection } from '@patternfly/react-core';

const centerStyle = {
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const IndexPage = () => {
  return (
    <PageSection variant="light" style={centerStyle}>
      <div style={{ flex: 'none', textAlign: 'center' }}>
        <Title size="4xl" headingLevel="h1">
          My extension docs
        </Title>
        <Title size="2xl" headingLevel="h2">
          {'Hi people!'}
        </Title>
        <p>Welcome to my extension docs.</p>
      </div>
    </PageSection>
  );
};

export default IndexPage;
