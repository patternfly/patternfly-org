import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  Alert,
  Badge,
  Card,
  CardTitle,
  CardBody,
  Grid,
  GridItem,
  PageSection,
  SkipToContent,
  Title
} from '@patternfly/react-core';
import { SideNavLayout, TrainingLayout } from '../layouts';
import { AutoLinkHeader, Example, CSSVariables, PropsTable, commonComponents } from '../components';
import { getId , slugger, capitalize} from '../helpers';
import versions from '../versions.json';
import './mdx.css';

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

const MDXTemplate = ({ data, location, pageContext }) => {
  if (location.state && location.state.trainingType && location.state.katacodaId) {
    return (
      <TrainingLayout
        location={location}
        trainingType={location.state.trainingType}
        katacodaId={location.state.katacodaId} />
    );
  }
  const { cssPrefix, hideTOC, beta, katacodaBroken, optIn, hideDarkMode, showTitle, releaseNoteTOC, hideSource } = data.doc.frontmatter;
  const { componentName, navSection } = data.doc.fields;
  const { title, source, tableOfContents, htmlExamples, propComponents = [''], showBanner, showGdprBanner, showFooter, sourceLink } = pageContext;
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
  if (data.designDoc && ['components', 'beta', 'utilities'].includes(navSection)) {
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
          <Title size="4xl" headingLevel="h1" className="ws-page-title">{title}</Title>
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
          {!hideSource && (
            <label id="source-label" className="ws-framework-title pf-c-title" aria-hidden>
              {getSourceTitle(source)}
            </label>
          )}
          <Title headingLevel="h1" id="component-title" size="4xl" className="ws-page-title" aria-labelledby="source-label component-title">{title}</Title>
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
          {beta && (
            <Alert
              variant={'info'}
              title="Beta feature"
              className="pf-u-my-md"
              style={{ marginBottom: '1rem' }}
              isInline
            >
              This Beta component is currently under review, so please join in and give us your feedback on the <a href="https://forum.patternfly.org/">PatternFly forum</a>
            </Alert>
          )}
          {katacodaBroken && (
            <Alert
              variant={'danger'}
              title="Down for maintenance"
              className="pf-u-my-md"
              style={{ marginBottom: '1rem' }}
              isInline
            >
              The embedded version of our tutorials are broken, but you can still access our tutorials on <a href="https://www.katacoda.com/patternfly">Katacoda.com</a>
            </Alert>
          )}
          {/* Design docs should not apply to demos and overview */}
          {data.designDoc && !['overview', 'demos'].includes(navSection) && (
            <MDXRenderer>
              {data.designDoc.body}
            </MDXRenderer>
          )}
          {releaseNoteTOC && (
            <Grid hasGutter className="ws-release-notes-toc">
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
                        <CardTitle>
                          {releaseTitle && (
                            <Title size="2xl" headingLevel="h2" >
                              <a key={version.name} href={`#${slugger(releaseTitle)}`}>
                                Release {version.name}
                              </a>
                            </Title>
                          )}
                          {version.latest && (
                            <Badge>Latest</Badge>
                          )}
                        </CardTitle>
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
      <AutoLinkHeader headingLevel="h2" id="props" size="h2" className="ws-h2">
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
      <AutoLinkHeader headingLevel="h2" id="css-variables" size="h2" className="ws-h2">
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
          html={props.title && htmlExamples && htmlExamples[getId(props.title)] && htmlExamples[getId(props.title)].code}
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

  const FeedbackSection = () => {
    const issueBody = encodeURIComponent(`\n\n\nProblem is in [this file.](${sourceLink})`);
    const issueLink = sourceLink.replace(/\/blob\/master\/.*/, `/issues/new?title=&body=${issueBody}`);

    return (
      <React.Fragment>
        <AutoLinkHeader headingLevel="h2" id="feedback" size="h2" className="ws-h2">
          Feedback
        </AutoLinkHeader>
        <a href={sourceLink} target="_blank">View page source on Github</a> / <a href={issueLink} target="_blank">Report an issue on Github</a>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <SkipToContent href="#main-content">Skip to Content</SkipToContent>
      <SideNavLayout
        location={location}
        context={source}
        parityComponent={parityComponent}
        showBanner={showBanner}
        showGdprBanner={showGdprBanner}
        showFooter={showFooter}
        pageTitle={pageContext.title}
      >
        <PageSection id="main-content" className="ws-section">
          <TableOfContents />

          {/* Wrap in div for :last-child CSS selectors */}
          <div>
            <MDXContent />
          </div>

          {props.length > 0 && <PropsSection />}
          {cssPrefix && <CSSVariablesSection />}
          {/* {sourceLink && <FeedbackSection />} */}
        </PageSection>
      </SideNavLayout>
    </React.Fragment>
  );
}

export default MDXTemplate;

export const pageQuery = graphql`
  query MdxDocsPage($id: String!, $designId: String!, $propComponents: [String]!) {
    doc: mdx(id: { eq: $id }) {
      body
      frontmatter {
        cssPrefix
        hideTOC
        optIn
        beta
        katacodaBroken
        hideDarkMode
        showTitle
        releaseNoteTOC
        hideSource
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
          beta
          katacodaBroken
          name
          required
          description
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
          deprecated
          hide
          annotatedType
        }
      }
    }
  }
`;
