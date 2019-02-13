import React from 'react';
import { Gallery } from '@patternfly/react-core';
import * as icons from '@patternfly/react-icons';
import IconCard from './iconCard';
import paramCase from 'param-case';

const allIcons = Object.entries(icons).filter(([name]) => name.endsWith('Icon'));

const Icons = () => (
  <Gallery gutter="lg">
    {allIcons.map(([id, Icon]) => <IconCard key={id} id={id} icon={Icon} name={paramCase(id.slice(0, -4))} />)}
  </Gallery>
);

export default Icons;
