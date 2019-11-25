import React from 'react';
import { Button } from '@patternfly/react-core';
import { TimesIcon, ArrowRightIcon } from '@patternfly/react-icons';
import './banner.css';

const Banner = () => {
  const initialBannerOpen = typeof window !== 'undefined' && sessionStorage && !sessionStorage.getItem('pf4-banner-closed');
  const [ isBannerOpen, setBannerOpen ] = React.useState(initialBannerOpen);
  
  const closeBanner = () => {
    sessionStorage.setItem('pf4-banner-closed', 'true');
    setBannerOpen(false);
  }

  return (
    <div id="ws-pf3-banner" className="pf-l-flex pf-m-justify-content-space-between">
      {isBannerOpen && (
        <React.Fragment>
          <div className="pf-u-my-md">
            <span id="ws-banner-text" className="pf-u-ml-xl">
              Looking for PatternFly 3? All documentation and code examples are still available.
            </span>
            <a href="/v3" className="pf-u-mx-md">
              <strong>
                Go to PatternFly 3 <ArrowRightIcon />
              </strong>
            </a>
          </div>
          <div className="pf-u-mr-xl">
            <Button variant="plain" aria-label="Action" onClick={closeBanner}>
              <TimesIcon />
            </Button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Banner;
