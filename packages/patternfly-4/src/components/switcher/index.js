import React from 'react';
import {
  Button,
  Bullseye
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
        <Bullseye className="switcher-group">
          <Link to="/documentation/react/components/aboutmodal">
            <Button variant={activeReact ? 'primary' : 'tertiary'} className="pf-w-btn-left" isActive={activeReact}>React</Button>
          </Link>
          <Link to="/documentation/core/components/aboutmodalbox">
            <Button variant={activeCore ? 'primary' : 'tertiary'} className="pf-w-btn-right" isActive={activeCore}>HTML</Button>
          </Link>
        </Bullseye>
      )
    }}
  </Location>
);

export default Switcher;
