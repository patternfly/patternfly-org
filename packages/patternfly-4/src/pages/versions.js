import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  PageSection,
  PageSectionVariants,
  Split,
  SplitItem,
  Title
} from '@patternfly/react-core';
import { MDXRenderer } from 'gatsby-mdx';
import axios from 'axios';

// https://github.com/topheman/npm-registry-browser/blob/master/NOTES.md#api-proxy-for-development
const headers = { headers: {
  "Accept": "application/vnd.npm.install-v1+json; q=1.0, application/json; q=0., */*",
  "X-Requested-With": "XMLHttpRequest"} };

class Versions extends React.Component {
  state = {
    '@patternfly/patternfly': {},
    '@patternfly/react-core': {},
    '@patternfly/react-charts': {},
    '@patternfly/react-icons': {},
    '@patternfly/react-inline-edit-extension': {},
    '@patternfly/react-integration': {},
    '@patternfly/react-styled-system': {},
    '@patternfly/react-styles': {},
    '@patternfly/react-tokens': {},
    '@patternfly/react-topology': {},
    '@patternfly/react-virtualized-extension': {},
    sections: require('../../static/versions.json')
  };

  componentDidMount() {
    Object.keys(this.state).filter(pack => pack.startsWith('@')).forEach(pack => {
      axios.get(`https://cors-anywhere.herokuapp.com/https://registry.npmjs.org/${pack}`, headers)
        .then(({ data }) => this.setState({[pack]: { versions: data['dist-tags'] }}));
    });
    if (typeof window !== 'undefined') {
      axios.get('/versions.json')
        .then(({ data }) => this.setState({ sections: data }));
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Versions" />
        <PageSection>
          <p>PatternFly is available as a set of NPM packages periodically released. The releases are listed below.</p>
          <Split gutter="md">
            {this.state.sections && Object.entries(this.state.sections).map(([section, releases]) =>
              <SplitItem key={section}>
                <Title size="h1">{section}</Title>
                <ul>
                  {releases.map(release => 
                    <li key={release.name}>
                      <a href={`/${release.latest ? 'v4' : release.date}`}>{release.name} ({release.date})</a>
                    </li>
                  )}
                </ul>
              </SplitItem>
            )}
          </Split>
        </PageSection>
        <PageSection>
          <p>If you're feeling brave, you can try our latest prereleases.</p>
            {Object.entries(this.state).filter(([key, val]) => key.startsWith('@')).map(([key, val]) => 
            <p key={key}>{key} {val.versions ? val.versions.prerelease || val.versions.latest : `https://registry.npmjs.org/${key}`}</p>
          )}
        </PageSection>
      </Layout>
    );
  }
}

export default Versions;
