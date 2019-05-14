import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import {
  Bullseye,
  Select,
  SelectOption,
  SelectVariant,
  Title,
} from '@patternfly/react-core';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import './styles.scss';

const trimTrailingSlash = str => str.replace(/\/$/, '');
const verifyPath = (path, pages) =>
  pages.edges
    .map(edge => edge.node.path)
    .find(queryPath => path.indexOf(trimTrailingSlash(queryPath)) > -1);

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
        <Bullseye className="pf-site-switcher-group pf-u-ml-lg">
          <Title className="pf-site-switcher-group__title pf-u-mb-sm">FRAMEWORK</Title>
          <div>
            <Select className="pf-select-components" variant={SelectVariant.single}>
              <SelectOption isDisabled={false} key={0} to={validReactPath} value={'React'} isActive={activeReact}></SelectOption>
              <SelectOption isDisabled={false} key={1} to={validCorePath} value={'HTML'} isActive={activeCore}></SelectOption>
            </Select>
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
          filter: { path: { glob: "/documentation/core/*/**" } },
          sort: { fields: path }
        ) {
          edges {
            node {
              path
            }
          }
        }
        reactPages: allSitePage(
          filter: { path: { glob: "/documentation/react/*/**" } },
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
