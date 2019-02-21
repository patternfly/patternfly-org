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
      return (
        <Bullseye>
          <Link to="/documentation/react/components/aboutmodal">
            <Button variant="secondary" className="pf-w-btn-left" isActive={currentPath.indexOf('/documentation/react') > -1}>React</Button>
          </Link>
          <Link to="/documentation/core/components/aboutmodalbox">
            <Button variant="tertiary" className="pf-w-btn-right" isActive={currentPath.indexOf('/documentation/core') > -1}>Core</Button>
          </Link>
        </Bullseye>
      )
    }}
  </Location>
);

export default Switcher;
