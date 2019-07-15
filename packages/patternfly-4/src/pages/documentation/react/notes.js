import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Layout from '../../../components/layout';
import SEO from '../../../components/seo';
import {
  PageSection,
  PageSectionVariants,
  Split,
  SplitItem
} from '@patternfly/react-core';
import { MDXRenderer } from 'gatsby-mdx';

class Notes extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            allMdx(filter: {fileAbsolutePath: {glob: "**/patternfly-react/RELEASE-NOTES.md"}}) {
              nodes {
                fileAbsolutePath
                code {
                  body
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <Layout>
              <SEO title="Release Notes" />
              <PageSection>
                {data.allMdx.nodes.length > 0
                  ? <MDXRenderer>{data.allMdx.nodes[0].code.body}</MDXRenderer>
                  : 'No release notes.'}
              </PageSection>
            </Layout>
        )}} />
    );
  }
}

export default Notes;
