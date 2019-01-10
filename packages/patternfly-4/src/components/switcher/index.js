import React from 'react';
import {
  Button,
  Bullseye
} from '@patternfly/react-core';
import { Link } from 'gatsby';

const Switcher = () => (
  <Bullseye>
    <Link to="/docs/react"><Button variant="secondary">React</Button></Link><Link to="/docs/core"><Button variant="secondary">Core</Button></Link>
    {/* <Button variant="secondary"><Link to="/docs/react">React</Link></Button><Button variant="tertiary"><Link to="/docs/core">Core</Link></Button> */}
  </Bullseye>
);

export default Switcher;
