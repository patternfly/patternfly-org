import React from 'react';
import { Link } from 'gatsby';
import { PageSection, Title } from '@patternfly/react-core';
import { SideNavLayout } from '../layouts/sideNavLayout/sideNavLayout';

const Page404 = ({ location }) => {
  return (
    <SideNavLayout location={location} hideSideNav showGdprBanner={true}>
      <PageSection className="ws-section" style={{ height: '70vh' }}>
        <Title size="2xl" headingLevel="h1">404 - Page not found</Title>
        <p><Link to="/">Go home.</Link></p>
      </PageSection>
    </SideNavLayout>
  );
}

export default Page404;
