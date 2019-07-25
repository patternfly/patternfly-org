import React from 'react';
import { graphql } from 'gatsby';
import { PageSection, PageSectionVariants, Card, CardHeader } from '@patternfly/react-core';
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
import './gettingStarted.scss';

const components = {
  code: class LiveEditWrapper extends React.Component {
    render() {
      return (
        <LiveEdit scope={this.getScope()} className={this.props.className}>
          {this.props.children}
        </LiveEdit>
      );
    }
  },
  pre: React.Fragment
};
for (let i = 1; i <= 6; i++) {
  components[`h${i}`] = props => {
    let inner = props.children.length > 0 ? props.children[1] : props.children;
    return <CardHeader><AutoLinkHeader size="lg" is="h4" {...props}>{inner}</AutoLinkHeader></CardHeader>;
  }
}

const MdxPF4Template = ({ data }) => {
  const cssPrefix = data.mdx.frontmatter.cssPrefix;
  let section = data.mdx.frontmatter.section;
  if (!section)
    section = 'component';
  
  return (
    <Layout sideNav={<SideNav />} className="ws-documentation">
      <SEO title="React" />
      <PageSection variant={PageSectionVariants.light} className="section-border pf-site-background-medium">
        <AutoLinkHeader size="md" is="h1" className="pf4-site-framework-title">React</AutoLinkHeader>
        <AutoLinkHeader size="4xl" is="h2" className="pf-u-mt-sm pf-u-mb-md">
          {data.mdx.frontmatter.title}
        </AutoLinkHeader>
        {data.description &&
          <Section>
            <MDXRenderer>
              {data.description.code.body}
            </MDXRenderer>
          </Section>
        }
        <Section>
          <AutoLinkHeader anchorOnly className="pf-site-toc">Examples</AutoLinkHeader>
          {data.props && <AutoLinkHeader anchorOnly className="pf-site-toc">Props</AutoLinkHeader>}
          {cssPrefix && <AutoLinkHeader anchorOnly className="pf-site-toc">CSS Variables</AutoLinkHeader>}
        </Section>
        <Section title="Examples" headingLevel="h3">
          <Section className="ws-live-demo">
            <MDXProvider components={components}>
              <Card className="react-example-card">
                <MDXRenderer>
                  {data.mdx.code.body}
                </MDXRenderer>
              </Card>
            </MDXProvider>
          </Section>
        </Section>
      </PageSection>

      {data.props && 
        <PageSection>
          <Section title="Props" headingLevel="h3">	
            {data.props.nodes.map(component =>
              <PropsTable
                name={component.name}
                description={component.description}
                props={component.props}
              />
            )}
          </Section>
        </PageSection>}

      {cssPrefix && <PageSection variant={PageSectionVariants.light} className="pf-site-background-medium">
        <Section title="CSS Variables" headingLevel="h3">
          <Tokens variables={cssPrefix} />
        </Section>
      </PageSection>
      }
    </Layout>
  );
};

// Test queries in http://localhost:8000/___graphql
// See how to filter from: https://www.gatsbyjs.org/docs/graphql-reference/
// We want the markdown from gatsby-mdx
// We want component metadata from gatsby-transformer-react-docgen-typescript
// for ALL components in that folder
export const pageQuery = graphql`
query GetComponent($fileAbsolutePath: String!, $propComponents: [String]!, $reactUrl: String!) {
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
  props: allComponentMetadata(filter: { name: { in: $propComponents } }) {
    nodes {
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
        tsType {
          name
          raw
        }
        defaultValue {
          value
        }
      }
    }
  }
  description: mdx(frontmatter: {reactUrl: {eq: $reactUrl}}) {
    code {
      body
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
