import React from 'react';
import { Grid, Gallery } from '@patternfly/react-core';
import * as icons from '@patternfly/react-icons';
import IconCard from './iconCard';
import paramCase from 'param-case';
import coreIcons from '../../../../_repos/core/src/icons/definitions/pf-icons.json';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

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

const Icons = () => (
  <Gallery gutter="sm" css={css`--pf-l-gallery--GridTemplateColumns: repeat(auto-fill,minmax(240px,1fr)) !important;`}>
    {commonIcons.map(([id, Icon]) => {
      const name = paramCase(id.slice(0, -4));
      return <IconCard key={id} id={id} icon={Icon} name={name} />
    })}
  </Gallery>
);

export default Icons;
