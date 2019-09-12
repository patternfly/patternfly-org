import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <PageSection variant={PageSectionVariants.light}>
      <p>WIP</p>
      <Link to="/">Go back to the homepage</Link>
    </PageSection>
  </Layout>
);

export default BlogPage;
