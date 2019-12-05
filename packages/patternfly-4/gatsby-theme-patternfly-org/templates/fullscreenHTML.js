import React from 'react';
import { Helmet } from 'react-helmet';
import './fullscreen.css';

const FullscreenHTMLTemplate = ({ pageContext }) => (
  <main className="ws-site-root">
    <Helmet>
      <title>{pageContext.title}</title>
    </Helmet>
    <div
      className="ws-fullscreen-example"
      dangerouslySetInnerHTML={{__html: pageContext.code || 'No fullscreen example.'}} />
  </main>
);

export default FullscreenHTMLTemplate;
