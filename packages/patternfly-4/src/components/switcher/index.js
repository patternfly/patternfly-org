import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import {
  Bullseye,
  Select,
  SelectOption,
  SelectVariant,
  Title,
} from '@patternfly/react-core';
import { navigate } from 'gatsby';
import { Location } from '@reach/router';
import './styles.scss';

class SingleSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      { value: 'React', isPlaceholder: props.reactActive, onClick: () => setTimeout(() => { navigate(props.reactPath) }, 1) },
      { value: 'HTML', isPlaceholder: props.coreActive, onClick: () => setTimeout(() => { navigate(props.corePath) }, 1) }
    ];

    this.state = {
      isExpanded: false,
      selected: null
    };

    this.onToggle = isExpanded => {
      this.setState({
        isExpanded
      });
    };

    this.onSelect = (event, selection, isPlaceholder, validPath) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isExpanded: false,
        });
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isExpanded: false
      });
    };
  }

  render() {
    const { isExpanded, selected } = this.state;
    const titleId = 'title-id';
    return (
      <div>
        <span id={titleId} hidden>
          Select React or HTML
        </span>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Framework"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isExpanded={isExpanded}
          ariaLabelledBy={titleId}
        >
          {this.options.map((option, index) => (
            <SelectOption
              key={index}
              value={option.value}
              isPlaceholder={option.isPlaceholder}
              onClick={option.onClick}
            >
            </SelectOption>
          ))}
        </Select>
      </div>
    );
  }
}

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
          <Title className="pf-site-switcher-group__title pf-u-mb-sm" size="md">FRAMEWORK</Title>
          <SingleSelectInput reactActive={activeReact} coreActive={activeCore} reactPath={validReactPath} corePath={validCorePath} />
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
