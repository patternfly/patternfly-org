import React from 'react';
import { graphql } from 'gatsby';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';
import AutoLinkHeader from '@content/AutoLinkHeader';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from '../components/mdx-renderer';
import SideNav from '../components/_react/Documentation/SideNav';
import Section from '../components/section';
import LiveEdit from '../components/_react/liveEdit';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Tokens from '../components/css-variables';
import PropsTable from '../components/_react/propsTable';
import './template.scss';

let liveEditCount = 0;
const components = {
  code: class LiveEditWrapper extends React.Component {
    render() {
      return (
        <LiveEdit scope={this.getScope()} id={'' + liveEditCount++} className={this.props.className}>
          {this.props.children}
        </LiveEdit>
      );
    }
  },
  pre: React.Fragment,
};
for (let i = 1; i <= 6; i++) {
  components[`h${i}`] = props => <AutoLinkHeader is={`h${i}`} {...props}>{props.children}</AutoLinkHeader>;
}

const MdxPF4Template = ({ data }) => {
  // Exported components in the folder (i.e. src/components/Alerts/[Alert, AlertIcon, AlertBody])
  // We *should* use the MDXRenderer scope to get the names of these, but that's pretty difficult
  const propComponents = data.metadata ? data.metadata.edges
    .map(edge => edge.node.name)
    .filter(name => name) // Some HOCs don't get docgenned properly (like TabContent)
    .filter(name => data.mdx.code.body.indexOf(name) !== -1)
    : [];

  // Finally, the props for each relevant component!
  const props = data.metadata ? data.metadata.edges
    .filter(edge => propComponents.indexOf(edge.node.name) !== -1)
    .map(edge => { return { name: edge.node.name, props: edge.node.props } })
    : [];

  const cssPrefix = data.mdx.frontmatter.cssPrefix;
  let section = data.mdx.frontmatter.section;
  if (!section)
    section = 'component';
  
  return (
    <Layout sideNav={<SideNav />} className="ws-documentation">
      <SEO title="Docs" keywords={['gatsby', 'application', 'react']} />
      <PageSection>
        <AutoLinkHeader size="4xl" is="h1" style={{ textTransform: 'capitalize' }}>
          {data.mdx.frontmatter.title} {section.indexOf('-') === -1 ? section : ''}
        </AutoLinkHeader>
        <MDXProvider components={components}>
          <MDXRenderer>
            {data.mdx.code.body}
          </MDXRenderer>
        </MDXProvider>
      </PageSection>

      {props.length > 0 && props.map(component =>
        <PageSection key={component.name}>
          <PropsTable
            name={component.name}
            description={component.description}
            props={component.props}
            />
        </PageSection>
      )}

      {cssPrefix && <PageSection variant={PageSectionVariants.light} className="pf-site-background-medium">
        <Section title="CSS Variables" headingLevel="h3">
          <Tokens variables={cssPrefix} />
        </Section>
      </PageSection>}
    </Layout>
  );
};

// Test queries in http://localhost:8000/___graphql
// See how to filter from: https://www.gatsbyjs.org/docs/graphql-reference/
// We want the markdown from gatsby-mdx
// We want component metadata from gatsby-transformer-react-docgen-typescript
// for ALL components in that folder
export const pageQuery = graphql`
query GetComponent($fileAbsolutePath: String!, $pathRegex: String!) {
  mdx(fileAbsolutePath: { eq: $fileAbsolutePath }) {
    code {
      body
    }
    frontmatter {
      title
      section
      cssPrefix
    }
  }
  metadata: allComponentMetadata(filter: {path: {regex: $pathRegex}}) {
    edges {
      node {
        path
        name
        description
        props {
          name
          description
          required
          type {
            name
          }
          defaultValue {
            value
          }
        }
      }
    }
  }
  allGetStartedNavigationJson {
    edges {
      node {
        text
        path
      }
    }
  }
  allDesignGuidelinesNavigationJson {
    edges {
      node {
        text
        path
        subNav {
          text
          path
        }
      }
    }
  }
}
`;

export default MdxPF4Template;