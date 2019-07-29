import React from 'react';
import { Gallery, Form, TextInput, Button, Title, EmptyState, EmptyStateVariant, EmptyStateIcon, EmptyStateBody } from '@patternfly/react-core';
import * as icons from '@patternfly/react-icons';
import IconCard from './iconCard';
import paramCase from 'param-case';
import coreIcons from '../../../_repos/patternfly-next/src/icons/definitions/pf-icons.json';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import './icons.scss';

const allIcons = Object.entries(icons).filter(([name]) => name.endsWith('Icon'));
let commonIcons = allIcons.filter(([name]) => {
  const hyphenName = paramCase(name.slice(0, -4));
  return Boolean(coreIcons[hyphenName]);
});
commonIcons = commonIcons.sort((a , b) => {
  return a[0] > b[0] ? 1 : -1;
});

// const reactOnlyIcons = allIcons.filter(([name]) => {
//   const hyphenName = paramCase(name.slice(0, -4));
//   return !coreIcons[hyphenName];
// });

class Icons extends React.Component {
  state = {
    searchValue: ''
  };

  handleSearchChange = (checked, event) => {
    const searchValue = event.target.value;
    this.setState(() => ({
      searchValue
    }));
  };

  render() {
    const { searchValue } = this.state;
    const searchRE = new RegExp(searchValue, 'i');
    const filteredIcons = commonIcons.filter(c => {
      return searchRE.test(c[0]);
    });
    return (
      <>
        <Form className="search-icons ws-search " onSubmit={event => { event.preventDefault(); return false; }}>
        <TextInput
              type="text"
              id="primaryIconsSearch"
              name="primaryIconsSearch"
              placeholder="Search Icons"
              aria-label="Search Icons"
              value={searchValue}
              onChange={this.handleSearchChange}
            />
        </Form>
        <Gallery gutter="sm" css={css`--pf-l-gallery--GridTemplateColumns: repeat(auto-fill,minmax(240px,1fr)) !important; grid-auto-flow: dense;`}>
        {filteredIcons.map(([id, Icon]) => {
          const name = paramCase(id.slice(0, -4));
          return <IconCard key={id} id={id} icon={Icon} name={name} />;
        })}
        </Gallery>
        {filteredIcons.length == 0 &&  <EmptyState variant={EmptyStateVariant.full}>
          <EmptyStateIcon icon={icons.SearchIcon}/>
          <Title headingLevel="h5" size="2xl">
            No results found for "{ searchValue }".
          </Title>
          <EmptyStateBody>
            We couldn't find any icons that matched your search. Try entering a new search term to find what you're looking for.
          </EmptyStateBody>
        </EmptyState>
        }
    </>
  );
  }

}

export default Icons;
