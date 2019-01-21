import React from 'react'
import Layout from '../../components/layout';
import SideNav from '../../components/_core/Documentation/SideNav';
import SEO from '../../components/seo';

const DocsCorePage = () => (
  <Layout sideNav={<SideNav />}>
    <SEO title="Core" />
  </Layout>
)

export default DocsCorePage;
