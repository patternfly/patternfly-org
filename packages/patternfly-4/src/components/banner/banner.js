import React from 'react';
import { Button } from '@patternfly/react-core';
import { TimesIcon } from '@patternfly/react-icons';

const Banner = ({ onClose }) => (
  <div class="pf-l-flex pf-m-justify-content-space-between">
    <div class="pf-u-my-md">
    <span class="pf-u-ml-xl custom-text-hide">Looking for PatternFly 3? All documentation and code examples are still available.</span>
    <a href="/" class="custom-text-link pf-u-mx-md">Go to PatternFly 3<i class="fas fa-arrow-right pf-u-mx-sm"></i></a>
    </div>
    <div class="pf-u-mr-xl custom-close-button">
      <Button variant="plain" aria-label="Action" onClick={onClose}>
          <TimesIcon />
      </Button>
    </div>
  </div>
);

export default Banner;
