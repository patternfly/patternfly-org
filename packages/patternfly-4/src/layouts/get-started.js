import React from 'react';
import Page from '../components/page';
import Navigation from '../components/navigation';

export default ({ children, location }) => {

  const routes = [{
    label: 'Developers',
    to: '/get-started/developers/'
  }, {
    label: 'Designers',
    to: '/get-started/designers/'
  }, {
    label: 'Migration Guide',
    to: '/get-started/migration-guide/'
  }, {
    label: 'FAQs',
    to: '/get-started/faqs/'
  }];

  return (
    <Page
      location={location.pathname}
      title="PatternFly"
      navigation={<Navigation routes={routes} flat={true} />}
    >
      {children()}
    </Page>
  );
}