import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
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
            allMdx(filter: {fileAbsolutePath: {glob: "**/RELEASE-NOTES.md"}}) {
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
          const reactNotes = data.allMdx.nodes.find(node => node.fileAbsolutePath.indexOf('patternfly-react') >= 0)
          const coreNotes = data.allMdx.nodes.find(node => node.fileAbsolutePath.indexOf('patternfly-next') >= 0)
          return (
            <Layout>
              <SEO title="Release Notes" />
              <PageSection>
                <p>PatternFly is available as a set of NPM packages periodically released. There are CSS/HTML and React distributions. The release notes per-distrubution until the latest release are listed below.</p>
                <Split>
                  <SplitItem>
                    <h1>PatternFly-Next Release Notes</h1>
                    <MDXRenderer>
                      {coreNotes.code.body}
                    </MDXRenderer>
                  </SplitItem>
                  <SplitItem>
                    <h1>PatternFly-React Release Notes</h1>
                    <MDXRenderer>
                      {reactNotes.code.body}
                    </MDXRenderer>
                  </SplitItem>
                </Split>
              </PageSection>
            </Layout>
        )}} />
    );
  }
}

export default Notes;
