import React from 'react';
import { Link } from 'theme-patternfly-org/components';
import { PageSection, Title } from '@patternfly/react-core';

const Page404 = () => (
  <PageSection className="ws-section">
    <Title size="xl" className="pf-u-mb-lg ws-page-title" headingLevel="h1">
      404 - Page not found
    </Title>
    <ul>
      <li><Link to="/">Home</Link></li>
    </ul>
  </PageSection>
);

export default Page404;
