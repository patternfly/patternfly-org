import React from 'react';
import {
  Button,
  Bullseye,
  Title
} from '@patternfly/react-core';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import './styles.scss';

const Switcher = () => (
  <Location>
    {({ location }) => {
      // console.log(location);
      const currentPath = location.pathname;
      const activeReact = currentPath.indexOf('/documentation/react') > -1;
      const activeCore = currentPath.indexOf('/documentation/core') > -1;
      return (
        <Bullseye className="pf4-site-switcher-group pf-u-ml-xl">
          <Title size="md" className="pf4-site-switcher-group__title pf-u-pb-sm">FRAMEWORK</Title>
          <div>
            <Link to="/documentation/react/components/aboutmodal">
              <Button variant={activeReact ? 'primary' : 'tertiary'} className="pf-w-btn-left" isActive={activeReact}>React</Button>
            </Link>
            <Link to="/documentation/core/components/aboutmodalbox">
              <Button variant={activeCore ? 'primary' : 'tertiary'} className="pf-w-btn-right" isActive={activeCore}>HTML</Button>
            </Link>
          </div>
        </Bullseye>
      )
    }}
  </Location>
);

export default Switcher;
