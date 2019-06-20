import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';
import { MDXRenderer } from 'gatsby-mdx';

export default () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(filter: {fileAbsolutePath: {glob: "**/RELEASE-NOTES.md"}}) {
        nodes {
          fileAbsolutePath
          code {
            body
          }
        }
      }
    }
  `);

  const reactNotes = data.allMdx.nodes.find(node => node.fileAbsolutePath.indexOf('patternfly-react') >= 0)
  const coreNotes = data.allMdx.nodes.find(node => node.fileAbsolutePath.indexOf('patternfly-next') >= 0)

  return (
    <Layout>
      <SEO title="Blog" />
      <PageSection variant={PageSectionVariants.light}>
        <h1>PatternFly-Next Release Notes</h1>
        <MDXRenderer>
          {coreNotes.code.body}
        </MDXRenderer>
        <h1>PatternFly-React Release Notes</h1>
        <MDXRenderer>
          {reactNotes.code.body}
        </MDXRenderer>
      </PageSection>
    </Layout>
  );
}

