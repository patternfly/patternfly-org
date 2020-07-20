import React from 'react';
import { Button } from '@patternfly/react-core';
import { TimesIcon } from '@patternfly/react-icons';
import './gdprBanner.css';

export const GdprBanner = () => {
  const initialBannerOpen = typeof window !== 'undefined' && sessionStorage && !sessionStorage.getItem('gdpr-banner-closed');
  const [ isBannerOpen, setBannerOpen ] = React.useState(initialBannerOpen);
  
  const closeBanner = () => {
    sessionStorage.setItem('gdpr-banner-closed', 'true');
    setBannerOpen(false);
  }

  return isBannerOpen && (
    <div className="ws-gdpr-banner-container pf-l-flex">
      <div id="ws-gdpr-banner" className="pf-l-flex pf-u-py-md pf-m-align-items-center">
        <p id="ws-gdpr-banner-text" className="pf-u-ml-xl">
          We use cookies on our websites to deliver our online services.
          Details about how we use cookies and how you may disable them are set out in our <a href="https://www.redhat.com/en/about/privacy-policy">Privacy Statement</a>.
          By using this website you agree to our use of cookies.
        </p>
        <div className="pf-m-align-self-flex-start">
          <Button variant="plain" aria-label="Close banner" onClick={closeBanner}>
            <TimesIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
