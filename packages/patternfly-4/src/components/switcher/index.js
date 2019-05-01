import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import {
  Button,
  Bullseye,
  Title
} from '@patternfly/react-core';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import './styles.scss';

const trimTrailingSlash = str => str.replace(/\/$/, '');
const verifyPath = (path, pages) =>
  pages.edges
    .map(edge => trimTrailingSlash(edge.node.path))
    .find(queryPath => queryPath === trimTrailingSlash(path));

const Switcher = ({ data }) => (
  <Location>
    {({ location }) => {
      const currentPath = location.pathname;
      const activeReact = currentPath.indexOf('/documentation/react') > -1;
      const activeCore = currentPath.indexOf('/documentation/core') > -1;
      const reactPath = activeReact ? currentPath : currentPath.replace('core', 'react');
      const corePath = activeCore ? currentPath : currentPath.replace('react', 'core');
      const validReactPath = verifyPath(reactPath, data.reactPages) || '/documentation/react/components/aboutmodal';
      const validCorePath = verifyPath(corePath, data.corePages) || '/documentation/core/components/aboutmodalbox';
      return (
        <Bullseye className="pf-site-switcher-group pf-u-ml-xl">
          <Title size="lg" className="pf-site-switcher-group__title pf-u-mb-sm">FRAMEWORK</Title>
          <div>
            <Link to={validReactPath}>
              <Button variant={activeReact ? 'primary' : 'tertiary'} className="pf-w-btn-left" isActive={activeReact}>React</Button>
            </Link>
            <Link to={validCorePath}>
              <Button variant={activeCore ? 'primary' : 'tertiary'} className="pf-w-btn-right" isActive={activeCore}>HTML</Button>
            </Link>
          </div>
        </Bullseye>
      )
    }}
  </Location>
);

export default props => (
  <StaticQuery
    query={graphql`
      query IndexForSwitcher {
        corePages: allSitePage(
          filter: { path: { glob: "/documentation/core/**" } },
          sort: { fields: path }
        ) {
          edges {
            node {
              path
            }
          }
        }
        reactPages: allSitePage(
          filter: { path: { glob: "/documentation/react/**" } },
          sort: { fields: path }
        ) {
          edges {
            node {
              path
            }
          }
        }
      }
    `}
    render={data => <Switcher data={data} {...props} />}
  />
);
