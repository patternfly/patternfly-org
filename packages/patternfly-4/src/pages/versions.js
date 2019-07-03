import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';
import { MDXRenderer } from 'gatsby-mdx';
import axios from 'axios';

// https://github.com/topheman/npm-registry-browser/blob/master/NOTES.md#api-proxy-for-development
const getDistTag = pack => {
  return axios.get(`https://cors-anywhere.herokuapp.com/https://registry.npmjs.org/${pack}`,
    { headers: {"X-Requested-With": "XMLHttpRequest"} });
}

class Versions extends React.Component {
  state = {
    '@patternfly/react-core': {},
    '@patternfly/react-charts': {},
    '@patternfly/react-inline-edit-extension': {},
    '@patternfly/react-integration': {},
    '@patternfly/react-styled-system': {},
    '@patternfly/react-styles': {},
    '@patternfly/react-tokens': {},
    '@patternfly/react-topology': {},
    '@patternfly/react-virtualized-extension': {},
    '@patternfly/react-icons': {},
  };

  constructor(props) {
    super(props);
    Object.keys(this.state).forEach(pack => {
      getDistTag(pack)
        .then(({ data }) => this.setState({[pack]: { versions: data['dist-tags'] }}));
    });
  }

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
              <SEO title="Versions" />
              <PageSection>
                {Object.entries(this.state).map(([key, val]) => (
                <p key={key}>{key} {JSON.stringify(val.versions ? val.versions : `https://registry.npmjs.org/${key}`)}</p>
                ))}
              </PageSection>
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
        )}} />
    );
  }
}

export default Versions;
