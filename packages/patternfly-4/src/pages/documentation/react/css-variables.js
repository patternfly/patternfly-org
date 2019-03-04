import React from 'react'
import SideNav from '../../../components/_react/Documentation/SideNav';
import Tokens from '../../../components/css-variables';
import Layout from '../../../components/layout';
import SEO from '../../../components/seo';
import Section from '../../../components/section';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';

const ReactTokens = () => (
  <Layout sideNav={<SideNav />}>
    <SEO title="Global CSS Variables" />
    <PageSection variant={PageSectionVariants.light}>
      <Section title="Global CSS Variables" size="3xl" headingLevel="h1">
        <Tokens sideNav={<SideNav />} variables="pf-global" />
      </Section>
    </PageSection>
  </Layout>
)

export default ReactTokens;
