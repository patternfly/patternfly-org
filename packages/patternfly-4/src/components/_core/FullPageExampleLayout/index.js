import React from 'react';
import Header from '../../header';
// import '../../../../_repos/core/src/patternfly/patternfly-base.scss';

export default ({ children }) => (
  <div>
    <Header siteTitle="Full Page Example" />
    <div>{children}</div>
  </div>
);
