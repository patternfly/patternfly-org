import React from 'react';
import { Alert, AlertActionCloseButton } from '@patternfly/react-core';
import './navAnnouncementBanner.css';

export const NavAnnouncementBanner = () => {
  const initialBannerOpen = typeof window !== 'undefined' && window.localStorage && !localStorage.getItem('nav-announcement-banner-closed');
  const [ isBannerOpen, setBannerOpen ] = React.useState(initialBannerOpen);

  const closeBanner = () => {
    localStorage.setItem('nav-announcement-banner-closed', 'true');
    setBannerOpen(false);
  }

  return !isBannerOpen ? null : (
    <div className="ws-nav-announcement-banner-container">
      <Alert
        variant="info"
        isInline
        title="We've redesigned our navigation"
        actionClose={<AlertActionCloseButton onClose={closeBanner} />}
        className="ws-nav-announcement-banner"
      >
        Learn more about the changes on <a href="https://medium.com/patternfly" target="_blank" rel="noopener noreferrer">Medium</a> and share your feedback in our <a href="https://www.feedback.redhat.com/jfe/form/SV_9MKBjq8H7muINMy" target="_blank" rel="noopener noreferrer">user survey</a>.
      </Alert>
    </div>
  );
}

