import React from 'react';
import { Button } from '@patternfly/react-core';
import { TimesIcon } from '@patternfly/react-icons';

const Banner = ({ onClose }) => (
  <div class="pf-l-flex pf-m-justify-content-space-between">
    <div class="pf-u-my-md">
    <span class="pf-u-ml-xl custom-text-hide">Looking for All documentation and code examples are still available.</span>
    <a href="/" style={{fontWeight: 900, textDecoration: 'none'}} class="pf-u-mx-md">Go to PatternFly 3<i class="fas fa-arrow-right pf-u-mx-sm"></i></a>
    </div>
    {/* <div class="pf-u-mr-xl custom-close-button">
      <Button variant="plain" aria-label="Action" onClick={onClose}>
          <TimesIcon />
      </Button>
    </div> */}
  </div>
);

export default Banner;
