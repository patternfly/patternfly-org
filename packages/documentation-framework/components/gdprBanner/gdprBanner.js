import React from 'react';
import { Panel, PanelMain, PanelMainBody, Flex, FlexItem, Button } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import './gdprBanner.css';

export const GdprBanner = () => {
  const initialBannerOpen = typeof window !== 'undefined' && window.localStorage && !localStorage.getItem('gdpr-banner-closed');
  const [ isBannerOpen, setBannerOpen ] = React.useState(initialBannerOpen);

  const closeBanner = () => {
    localStorage.setItem('gdpr-banner-closed', 'true');
    setBannerOpen(false);
  }

  return !isBannerOpen ? null : (
    <Flex className="ws-gdpr-banner-container">
    <Panel variant="bordered" className="pf-m-raised" id="ws-gdpr-banner">
      <PanelMain>
        <PanelMainBody>
          <Flex flexWrap={{default: 'nowrap'}} alignItems={{default: 'alignItemsFlexStart'}}>
            <FlexItem className="pf-v6-u-ml-xl">
              We use cookies on our websites to deliver our online services.
              Details about how we use cookies and how you may disable them are set out in our <a href="//www.redhat.com/en/about/privacy-policy">Privacy Statement</a>.
              By using this website you agree to our use of cookies.
            </FlexItem>
            <FlexItem>
              <Button variant="plain" aria-label="Close banner" onClick={closeBanner}>
                <TimesIcon />
              </Button>
            </FlexItem>
          </Flex>
        </PanelMainBody>
      </PanelMain>
    </Panel>
    </Flex>
  );
}
