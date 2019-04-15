import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Example from '../../example';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';
import AutoLinkHeader from '@content/AutoLinkHeader';
import PropsTable from '../propsTable';
import PropsTableTs from '../propsTableTs';
import Section from '../../section';
import Layout from '../../layout';
import { Location } from '@reach/router';
import SideNav from './SideNav';
import SEO from '../../seo';
import './styles.scss';
import Tokens from '../../css-variables';
import MarkdownDescription from '../../MarkdownDescription';

const propTypes = {
  data: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  examples: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.func,
      title: PropTypes.string,
      description: PropTypes.string,
      getContainerProps: PropTypes.func,
      displayName: PropTypes.string,
      live: PropTypes.bool,
      liveScope: PropTypes.object
    })
  ),
  components: PropTypes.objectOf(PropTypes.func),
  enumValues: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.any)),
  variablesRoot: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  rawExamples: PropTypes.array,
  images: PropTypes.array,
  fullPageOnly: PropTypes.bool
};

const defaultProps = {
  description: '',
  examples: [],
  components: {},
  enumValues: {},
  variablesRoot: null,
  rawExamples: [],
  images: [],
  fullPageOnly: false
};

class Documentation extends React.PureComponent {
  render() {
    const { data, title, description, examples, components, enumValues, variablesRoot, fullPageOnly, rawExamples, images } = this.props;
    const makeDescription = html => ({ __html: html });
    const getDocGenInfo = name => data.allComponentMetadata.edges.find(edge => edge.node.displayName === name);
    const getDocGenInfoTs = name => data.allTsDocsJson.edges[0].node.data.find(edge => edge.name === `${name}Props`);
    return (
      <Location>
        {({ location }) => {
          // console.log(location);
          const currentPath = location.pathname;
          let componentType = 'Components';
          if (currentPath.indexOf('/layouts/') > -1) {
            componentType = 'Layouts';
          } else if (currentPath.indexOf('/utilities/') > -1) {
            componentType = 'Utilities';
          } else if (currentPath.indexOf('/demos/') > -1) {
            componentType = 'Demos';
          } else if (currentPath.indexOf('/upgrades/') > -1) {
            componentType = 'Upgrades';
          }
          // ignore above and just set to React for now
          componentType = 'React';
          return (
            <Layout sideNav={<SideNav />} className="ws-documentation">
              <SEO title="React" />
              <PageSection variant={PageSectionVariants.light} className="section-border pf-u-pt-md pf-site-background-medium">
                <AutoLinkHeader size="md" is="h1" className="pf4-site-framework-title">{componentType}</AutoLinkHeader>
                <AutoLinkHeader size="4xl" is="h2" className="pf-u-mt-sm pf-u-mb-md">{title}</AutoLinkHeader>
                <MarkdownDescription path={currentPath} />
              </PageSection>
              <PageSection variant={PageSectionVariants.light} className="section-border">
                {Boolean(description) && (
                  <p className="description pf-u-mb-md" dangerouslySetInnerHTML={makeDescription(description)} />
                )}
                <Section title="Examples" headingLevel="h3">
                  {examples.map((exampleObj, i) => {
                    const ComponentExample = exampleObj.component;
                    const rawExample = rawExamples.find(
                      example => example.name === ComponentExample.name
                    );
                    return (
                      <Example
                        key={i}
                        title={exampleObj.title}
                        description={exampleObj.description}
                        raw={rawExample.file}
                        path={rawExample.path}
                        images={images}
                        fullPageOnly={fullPageOnly}
                        live={exampleObj.live}
                        liveScope={exampleObj.liveScope}
                        name={ComponentExample.name}
                        {...(exampleObj.getContainerProps ? exampleObj.getContainerProps() : {})}
                      >
                        <ComponentExample />
                      </Example>
                    );
                  })}
                </Section>
              </PageSection>
              <PageSection variant={PageSectionVariants.light} className="pf-site-background-medium">
                {Object.entries(components).map(([componentName]) => {
                  // Loop through the components and find the docGen info for each one
                  // Only generate docs for props for javascript code.
                  const componentDocsJs = getDocGenInfo(componentName);
                  if (componentDocsJs) {
                    return (
                      <PropsTable
                        key={componentName}
                        name={componentName}
                        description={componentDocsJs.node.description}
                        props={componentDocsJs.node.props}
                        enumValues={enumValues}
                      />
                    );
                  }
                  let componentDocsTs;
                  if (!componentDocsJs) {
                    componentDocsTs = getDocGenInfoTs(componentName);
                    if (componentDocsTs) {
                      return <PropsTableTs key={componentName} name={componentName} props={componentDocsTs.children} />;
                    }
                  }
                  return null;
                })}
              </PageSection>
              {variablesRoot && <PageSection variant={PageSectionVariants.light} className="pf-site-background-medium">
                <Section title="CSS Variables" headingLevel="h3">
                  <Tokens variables={variablesRoot} />
                </Section>
              </PageSection>}
            </Layout>
          )
        }}
      </Location>
    );
  }
}

Documentation.propTypes = propTypes;
Documentation.defaultProps = defaultProps;

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/content/documentation/**"}}) {
          edges {
            node {
              html
              frontmatter {
                path
              }
            }
          }
        }
        allComponentMetadata {
          edges {
            node {
              displayName
              description
              props {
                name
                description {
                  text
                }
                defaultValue {
                  value
                }
                type {
                  name
                  value
                }
                required
              }
            }
          }
        }
        allTsDocsJson {
          edges {
            node {
              id
              name
              kind
              data {
                name
                children {
                  name
                  comment {
                    shortText
                  }
                  type {
                    type
                    name
                  }
                  flags {
                    isOptional
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Documentation data={data} {...props} />}
  />
);
