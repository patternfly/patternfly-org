import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SideNav from '../../../components/_core/Documentation/SideNav';
import Layout from '../../../components/layout';
import SEO from '../../../components/seo';
import {
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';
import { MDXRenderer } from 'gatsby-mdx';

class Notes extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            allMdx(filter: {fileAbsolutePath: {glob: "**/patternfly-next/RELEASE-NOTES.md"}}) {
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
            <Layout sideNav={<SideNav />}>
              <SEO title="Core Release Notes" />
              <PageSection className="markdown-body" variant={PageSectionVariants.light}>
                <div className="pf-c-content">
                  {data.allMdx.nodes.length > 0
                    ? <MDXRenderer>{data.allMdx.nodes[0].code.body}</MDXRenderer>
                    : 'No release notes.'}
                </div>
              </PageSection>
            </Layout>
        )}} />
    );
  }
}

export default Notes;
