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
        actionClose={<AlertActionCloseButton onClose={closeBanner} />}
        className="ws-nav-announcement-banner"
      >
        We've redesigned our website's navigation menu to make it easier to find the information you need. Learn more about the changes on <a href="https://medium.com/patternfly" target="_blank" rel="noopener noreferrer">Medium</a> and share any thoughts in our <a href="https://www.feedback.redhat.com/jfe/form/SV_9MKBjq8H7muINMy" target="_blank" rel="noopener noreferrer">user feedback survey</a>.
      </Alert>
    </div>
  );
}
