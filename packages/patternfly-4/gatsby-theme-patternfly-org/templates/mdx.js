import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  Alert,
  Badge,
  Card,
  CardHeader,
  CardBody,
  Grid,
  GridItem,
  PageSection,
  Title
} from '@patternfly/react-core';
import SideNavLayout from '../layouts/sideNavLayout';
import TrainingLayout from '../layouts/trainingLayout';
import AutoLinkHeader from '../components/autoLinkHeader';
import Example from '../components/example';
import CSSVariables from '../components/cssVariables';
import PropsTable from '../components/propsTable';
import { commonComponents } from '../components/commonComponents';
import { getId } from '../helpers/getId';
import { slugger } from '../helpers/slugger';
import { capitalize } from '../helpers/capitalize';
import versions from '../versions.json';
import './mdx.css';

const getExperimentalWarning = (state, componentName) => {
  switch(state) {
    case 'promoted':
      return (
        <p>
          This experimental feature has been promoted to a <Link href={`../../components/${componentName}`}>production-level component</Link> and will be removed in a future release.
          Use the production-ready version of this feature instead.
        </p>
      );
    case 'deprecated':
      return 'This experimental feature has been deprecated and will be removed in a future release. We recommend you avoid or move away from using this feature in your projects.';
    case 'early':
    default:
      return "This is an experimental feature in the early stages of testing. It's not intended for production use.";
  }
}

const getSourceTitle = source => {
  switch(source) {
    case 'core':
      return 'HTML';
    case 'shared':
      return 'HTML/React';
    default:
      return capitalize(source);
  }
}

export default ({ data, location, pageContext }) => {
  if (location.state && location.state.trainingType && location.state.katacodaId) {
    return (
      <TrainingLayout
        location={location}
        trainingType={location.state.trainingType}
        katacodaId={location.state.katacodaId} />
    );
  }
  const { cssPrefix, hideTOC, experimentalStage, optIn, hideDarkMode, showTitle, releaseNoteTOC } = data.doc.frontmatter;
  const { componentName, navSection } = data.doc.fields;
  const { title, source, tableOfContents, htmlExamples, propComponents = [''], showBanner } = pageContext;
  const props = data.props && data.props.nodes && propComponents
    ? propComponents
      .filter(name => name !== '') // Filter default entry we make for GraphQL schema
      .map(name => {
        const propTable = data.props.nodes.find(node => node.name === name);
        if (!propTable) {
          console.warn(`PropComponent "${name}" specified in frontmatter, but not found at runtime.`);
        }

        return propTable;
      })
      .filter(Boolean)
    : [];
  
  let parityComponent = undefined;
  if (data.designDoc && ['components', 'experimental', 'utilities'].includes(navSection)) {
    const { reactComponentName, coreComponentName } = data.designDoc.frontmatter;
    if (source === 'core' && reactComponentName) {
      parityComponent = `${navSection}/${reactComponentName}`;
    }
    else if (source === 'react' && coreComponentName) {
      parityComponent = `${navSection}/${coreComponentName}`;
    }
  }

  // TODO: Stop hiding TOC in design pages
  const TableOfContents = () => (
    <React.Fragment>
      {showTitle && (
        <React.Fragment>
          <Title size="4xl" className="ws-page-title">{title}</Title>
          {optIn && (
            <Alert
              variant="info"
              title="Opt-in feature"
              className="pf-u-my-md"
              isInline
            >
              {optIn}
            </Alert>
          )}
        </React.Fragment>
      )}
      {!hideTOC && (
        <React.Fragment>
          <Title size="md" className="ws-framework-title">
            {getSourceTitle(source)}
          </Title>
          <Title size="4xl" className="ws-page-title">{title}</Title>
          {optIn && (
            <Alert
              variant="info"
              title="Opt-in feature"
              className="pf-u-my-md"
              isInline
            >
              {optIn}
            </Alert>
          )}
          {experimentalStage && (
            <Alert
              variant={experimentalStage === 'early' ? 'info' : 'warning'}
              title="Experimental feature"
              className="pf-u-my-md"
              style={{ marginBottom: 'var(--pf-global--spacer--md)' }}
              isInline
            >
              {getExperimentalWarning(experimentalStage)}
            </Alert>
          )}
          {data.designDoc && (
            <MDXRenderer>
              {data.designDoc.body}
            </MDXRenderer>
          )}
          {releaseNoteTOC && (
            <Grid gutter="sm" className="ws-release-notes-toc">
              {versions.Releases
                .filter(version => (
                  tableOfContents.some(header => header.includes(version.name))))
                .slice(0, 6)                         // limit to newest releases
                .map(version => {
                  const [year, month, day] = version.date.split('-');
                  const releaseDate = new Date(+year, +month - 1, +day)
                    .toLocaleDateString('us-EN', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    });
                  const releaseTitle = tableOfContents.find(heading => heading.includes(version.name));
                  return releaseTitle && (
                    <GridItem sm={6} md={4} key={version.name}>
                      <Card>
                        <CardHeader>
                          {releaseTitle && (
                            <a key={version.name} href={`#${slugger(releaseTitle)}`}>
                              Release {version.name}
                            </a>
                          )}
                          {version.latest && (
                            <Badge>Latest</Badge>
                          )}
                        </CardHeader>
                        <CardBody>
                          Released on {releaseDate}. 
                        </CardBody>
                      </Card>
                    </GridItem>
                  );
                })
              }
            </Grid>
          )}
          {!releaseNoteTOC && tableOfContents.map(heading => (
            <a key={heading} href={`#${slugger(heading)}`} className="ws-toc">
              {heading}
            </a>
          ))}
          {!releaseNoteTOC && props.length > 0 && (
            <a href="#props" className="ws-toc">
              Props
            </a>
          )}
          {!releaseNoteTOC && cssPrefix && (
            <a href="#css-variables" className="ws-toc">
              CSS Variables
            </a>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );

  const PropsSection = () => (
    <React.Fragment>
      <AutoLinkHeader
        size="h2"
        id="props"
        className="ws-h2"
      >
        Props
      </AutoLinkHeader>
      {props.map(component => (
        <PropsTable
          key={component.name}
          caption={`${component.name} properties`}
          rows={component.props} />
      ))}
    </React.Fragment>
  );

  const CSSVariablesSection = () => (
    <React.Fragment>
      <AutoLinkHeader
        size="h2"
        id="css-variables"
        className="ws-h2"
      >
        CSS Variables
      </AutoLinkHeader>
      <CSSVariables prefix={cssPrefix} />
    </React.Fragment>
  );

  const MDXContent = () => (
    <MDXProvider components={{
      ...commonComponents,
      code: props =>
        <Example
          location={location}
          source={source}
          html={props.title && htmlExamples && htmlExamples[getId(props.title)]}
          hideDarkMode={hideDarkMode}
          navSection={navSection}
          componentName={componentName}
          {...props} />
    }}>
      <MDXRenderer>
        {data.doc.body}
      </MDXRenderer>
    </MDXProvider>
  );

  return (
      <SideNavLayout
        location={location}
        context={source}
        parityComponent={parityComponent}
        showBanner={showBanner}
      >
        <PageSection className="ws-section">

          <TableOfContents />

          {/* Wrap in div for :last-child CSS selectors */}
          <div>
            <MDXContent />
          </div>

          {props.length > 0 && <PropsSection />}

          {cssPrefix && <CSSVariablesSection />}
        </PageSection>
      </SideNavLayout>
  );
}

export const pageQuery = graphql`
  query MdxDocsPage($id: String!, $designId: String!, $propComponents: [String]!) {
    doc: mdx(id: { eq: $id }) {
      body
      frontmatter {
        cssPrefix
        hideTOC
        optIn
        experimentalStage
        hideDarkMode
        showTitle
        releaseNoteTOC
      }
      fields {
        navSection
        componentName
      }
    }
    designDoc: mdx(id: { eq: $designId }) {
      body
      frontmatter {
        reactComponentName
        coreComponentName
      }
    }
    partials: allFile(filter: { fields: { name: { ne: null } } }) {
      nodes {
        fields {
          name
          partial
        }
      }
    }
    props: allComponentMetadata(filter: { name: { in: $propComponents, ne: null } }) {
      nodes {
        name
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
  }
`;
