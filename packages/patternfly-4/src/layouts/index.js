import React from 'react';
import Page from '../components/page';
import '../../sass/style.scss';
import '../../_repos/core/patternfly/patternfly-base.scss';
import PropTypes from 'prop-types';
import './workspace.scss';

const propTypes = {
  children: PropTypes.func.isRequired
};

const getToggleData = function(data) {
  console.log(`received: ${data}`);
};

const Layout = ({ children, location }) => 
  <Page 
    title="PatternFly" 
    receiveFromChild={getToggleData}
    location={location.pathname}>
    {children()}
  </Page>

Layout.propTypes = propTypes;

export default Layout;
