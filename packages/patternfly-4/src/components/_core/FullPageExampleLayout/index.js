import React from 'react';
import Header from '../../header';
import ShadowDomPreview from '../../ShadowDomPreview';

export default ({ children }) => (
  <div>
    <Header siteTitle="Full Page Example" />
    <ShadowDomPreview isFull>
      {children}
    </ShadowDomPreview>
  </div>
);
