import React, { Fragment } from 'react';
import { Alert, AlertActionCloseButton, AlertActionLink } from '@patternfly/react-core';
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
        title="Website update"
        actionLinks={
          <Fragment>
            <AlertActionLink component="a" href="https://medium.com/patternfly/a-new-path-for-patternfly-org-91d14de4b93c" target="_blank">
              Learn more
            </AlertActionLink>
            <AlertActionLink component="a" href="https://www.feedback.redhat.com/jfe/form/SV_9MKBjq8H7muINMy" target="_blank">
              Share your feedback
            </AlertActionLink>
          </Fragment>
        }
      >
      To make it easier for you to find what you need on PatternFly.org, we've redesigned our website navigation menu.
    </Alert>
    </div>
  );
}
