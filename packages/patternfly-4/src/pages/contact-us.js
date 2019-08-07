import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';

const ContactUsPage = () => (
  <Layout>
    <SEO title="Contact us" />
    <PageSection variant={PageSectionVariants.light}>
      <p>Contact us</p>
      <Link to="/">Go back to the homepage</Link>
    </PageSection>
  </Layout>
);

export default ContactUsPage;
