import React from 'react';
import Header from '../../header';
import ShadowDomPreview from '../../ShadowDomPreview';
// import '../../../../_repos/core/src/patternfly/patternfly-base.scss';

export default ({ children }) => (
  <div>
    <Header siteTitle="Full Page Example" />
    <ShadowDomPreview isFull>
      {children}
    </ShadowDomPreview>
  </div>
);
