import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  PageSection,
  PageSectionVariants,
  Bullseye
} from '@patternfly/react-core';
import orb from '../images/patternfly-orb.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <PageSection variant={PageSectionVariants.darker} style={{height: 'calc(100vh - 76px)'}}>
      <Bullseye>
        <img src={orb} alt="PatternFly logo" />
      </Bullseye>
    </PageSection>
  </Layout>
)

export default IndexPage
