import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import SideNav from '../../../components/_react/Documentation/SideNav';
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
            <Layout sideNav={<SideNav />}>
              <SEO title="React Release Notes" />
              <PageSection className="markdown-body">
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
