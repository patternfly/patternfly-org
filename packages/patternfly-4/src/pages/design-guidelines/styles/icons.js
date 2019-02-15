import React from 'react';
import { Gallery, Form, TextInput } from '@patternfly/react-core';
import * as icons from '@patternfly/react-icons';
import IconCard from './iconCard';
import paramCase from 'param-case';
import coreIcons from '../../../../_repos/core/src/icons/definitions/pf-icons.json';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import {
  global_FontSize_lg as fontSizeLg,
  global_spacer_md as spacerMd
} from '@patternfly/react-tokens';

const styles = {
  search: css`
    &.pf-c-form {
      margin: ${spacerMd.var} 0;
    }
    .pf-c-form__label {
      --pf-c-form__label--FontSize: ${fontSizeLg.var};
    }
  `
};

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
        <Form css={styles.search} onSubmit={event => { event.preventDefault(); return false; }}>
        <TextInput
              type="text"
              id="primaryIconsSearch"
              name="primaryIconsSearch"
              placeholder="Search Icons"
              value={searchValue}
              onChange={this.handleSearchChange}
            />
        </Form>
        <Gallery gutter="sm" css={css`--pf-l-gallery--GridTemplateColumns: repeat(auto-fill,minmax(240px,1fr)) !important;`}>
        {filteredIcons.map(([id, Icon]) => {
          const name = paramCase(id.slice(0, -4));
          return <IconCard key={id} id={id} icon={Icon} name={name} />;
        })}
        </Gallery>
    </>
  );
  }

}

export default Icons;
