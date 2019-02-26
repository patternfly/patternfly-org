import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styles from './Documentation.styles';
import { css } from '@patternfly/react-styles';
import Example from '../../example';
import { Title, PageSection, PageSectionVariants } from '@patternfly/react-core';
import PropsTable from '../propsTable';
import Section from '../../section';
import Layout from '../../layout';
import { Location } from '@reach/router';
import SideNav from './SideNav';
import SEO from '../../seo';
import Tokens from '../../css-variables';

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
  rawExamples: PropTypes.array,
  images: PropTypes.array,
  fullPageOnly: PropTypes.bool
};

const defaultProps = {
  description: '',
  examples: [],
  components: {},
  enumValues: {},
  rawExamples: [],
  images: [],
  fullPageOnly: false
};

class Documentation extends React.PureComponent {
  render() {
    const { data, title, description, examples, components, enumValues, fullPageOnly, rawExamples, images } = this.props;
    debugger;
    const makeDescription = html => ({ __html: html });
    const getDocGenInfo = name => data.allComponentMetadata.edges.find(edge => edge.node.displayName === name);
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
          return (
            <Layout sideNav={<SideNav />}>
              <SEO title="React" />
              <PageSection variant={PageSectionVariants.light} className={css(styles['pf-w-section-border'])}>
                <Title size="md">{componentType}</Title>
                <Title size="4xl">{title}</Title>
              </PageSection>
              <PageSection variant={PageSectionVariants.light} className={css(styles['pf-w-section-border'])}>
                {Boolean(description) && (
                  <p className={css(styles.description)} dangerouslySetInnerHTML={makeDescription(description)} />
                )}
                <Section title="Examples" headingLevel="h2">
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
              <PageSection variant={PageSectionVariants.light}>
                {Object.entries(components).map(([componentName]) => {
                  // Loop through the components and find the docGen info for each one
                  // Only generate docs for props for javascript code.
                  const componentDocs = getDocGenInfo(componentName);
                  if (componentDocs) {
                    return (
                      <PropsTable
                        key={componentName}
                        name={componentName}
                        description={componentDocs.node.description}
                        props={componentDocs.node.props}
                        enumValues={enumValues}
                      />
                    );
                  }
                  return null;
                })}
              </PageSection>
              {/* <PageSection variant={PageSectionVariants.light}>
                <Section title="CSS Variables" headingLevel="h2">
                  <Tokens component="--pf-c-about-modal-box" />
                </Section>
              </PageSection> */}
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
      }
    `}
    render={data => <Documentation data={data} {...props} />}
  />
);
