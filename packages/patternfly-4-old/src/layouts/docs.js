import React from 'react';
import Page from '../components/page';
import Navigation from '../components/navigation';
import { toggleEnums } from '../components/topNav';
import 'prismjs';
import './docs.scss';

export default class DocsLayout extends React.Component {

  constructor(props) {
    super(props);

    this.state = { toggleState: toggleEnums.HTML };

    if (this.props.location.pathname.indexOf('/react/') > -1) {
      this.state.toggleState = toggleEnums.REACT;
    } else {
      this.state.toggleState = toggleEnums.HTML;
    }
    
    this.getToggleData = this.getToggleData.bind(this);
  }

  getToggleData(data) {
    console.log(`main: ${data}`);
    this.setState({
      toggleState: data
    });
  }

  render() {
    const foundationsRoutes = [{
      label: 'Overview',
      to: '/docs/foundations/overview/'
    }, {
      label: 'Accessibility',
      to: '/docs/foundations/accessibility/'
    }, {
      label: 'Color',
      to: '/docs/foundations/color/'
    }, {
      label: 'Icons',
      to: '/docs/foundations/icons/'
    }, {
      label: 'Typography',
      to: '/docs/foundations/typography/'
    }];
    const apiRoutes = [{
      label: 'React API',
      to: '/docs/apis/'
    }];
    const coreComponentRoutes = this.props.data.coreComponentPages.edges.map((edge) => (
      edge = {
        label: edge.node.fields.label,
        to: edge.node.path
      }
    ));
    const coreLayoutRoutes = this.props.data.coreLayoutPages.edges.map((edge) => (
      edge = {
        label: edge.node.fields.label,
        to: edge.node.path
      }
    ));
    const reactComponentRoutes = this.props.data.reactComponentPages.edges.map((edge) => (
      edge = {
        label: edge.node.fields.label,
        to: edge.node.path
      }
    ));
    const reactLayoutRoutes = this.props.data.reactLayoutPages.edges.map((edge) => (
      edge = {
        label: edge.node.fields.label,
        to: edge.node.path
      }
    ));

    let routes;
    if (this.state.toggleState === toggleEnums.REACT) {
      // react
      routes = [{
        label: 'Foundations',
        children: foundationsRoutes
      }, {
        label: 'Components',
        children: reactComponentRoutes
      }, {
        label: 'Layouts',
        children: reactLayoutRoutes
      }, {
        label: 'Developer API',
        children: apiRoutes
      }];
    } else {
      // core
      routes = [{
        label: 'Foundations',
        children: foundationsRoutes
      }, {
        label: 'Components',
        children: coreComponentRoutes
      }, {
        label: 'Layouts',
        children: coreLayoutRoutes
      }, {
        label: 'Developer API',
        children: apiRoutes
      }];
    }

    return (
      <Page
        receiveFromChild={this.getToggleData}
        location={this.props.location.pathname}
        title="PatternFly"
        navigation={<Navigation routes={routes} />}
      >
        {this.props.children()}
      </Page>
    );

  }
  
}

export const indexPageQuery = graphql`
  fragment DocPage on SitePage {
    path
    layout
    componentPath
    fields {
      system
      label
    }
  }
  query GetSitesQuery {
    site {
      siteMetadata {
        title
      }
    }
    coreComponentPages: allSitePage(
      filter: { path: { regex: "/\/components\/.*\/examples\//" }, fields: { system: { eq: "core" }} }
      sort: { fields: [fields___label], order: ASC }
    ) {
      edges {
        node {
          ...DocPage
        }
      }
    }
    coreLayoutPages: allSitePage(
      filter: { path: { regex: "/\/layouts\/.*\/examples\//" }, fields: { system: { eq: "core" }} }
      sort: { fields: [fields___label], order: ASC }
    ) {
      edges {
        node {
          ...DocPage
        }
      }
    }
    reactComponentPages: allSitePage(
      filter: { path: { regex: "/\/components\/(?!.*\/examples\/)/"}, fields: { system: { eq: "react" }} }
      sort: { fields: [fields___label], order: ASC }
    ) {
      edges {
        node {
          ...DocPage
        }
      }
    }
    reactLayoutPages: allSitePage(
      filter: { path: { regex: "/\/layouts\/(?!.*\/examples\/)/"}, fields: { system: { eq: "react" }} }
      sort: { fields: [fields___label], order: ASC }
    ) {
      edges {
        node {
          ...DocPage
        }
      }
    }
  }
`;