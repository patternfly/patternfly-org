/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

import { Page, PageHeader, Brand, Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';
import { Location } from '@reach/router';
import logo from '../images/logo.svg';

const TrainingLayout = ({ trainingType, katacodaId, location }) => {
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    prInfo: envVars(name: { eq: "PR_INFO" }) {
      num
      url
    }
    sitePlugin(name: { eq: "gatsby-theme-patternfly-org" }) {
      pluginOptions {
        context
      }
    }
  }
  `);
  const { title } = data.site.siteMetadata;
  const { num, url } = data.prInfo;
  const { context: pageSource } = data.sitePlugin.pluginOptions;
  const fileName = trainingType + '/' + katacodaId;

  let headerTitle = title;
  if (pageSource === 'org') {
    headerTitle = <Brand src={logo} alt="Patternfly Logo" />;
  } else if (num) {
    headerTitle = `PR #${num}`;
  }

  // TODO: use location
  const Breadcrumbs = (
    <Breadcrumb>
      <BreadcrumbItem to="#">{trainingType}</BreadcrumbItem>
      <BreadcrumbItem to="#" isActive>
        {katacodaId}
      </BreadcrumbItem>
    </Breadcrumb>
  );
  
  const Header = (
    <PageHeader
      logo={headerTitle}
      logoProps={{
        href: url || '/'
      }}
      showNavToggle
      toolbar={Breadcrumbs}
    />
  );

  // Wrap in a div to force scrolling the same content
  // TODO: Extract SEO to component
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <script src="//katacoda.com/embed.js"></script>
      </Helmet>
      <Page header={Header} style={{ height: '100vh' }}>
        <div id="katacoda-scenario-1"
          data-katacoda-id={'patternfly/courses/' + fileName}
          data-katacoda-color="004d7f"
          style={{ height: '100%'}} />
      </Page>
    </div>
  );
}

export default TrainingLayout;
