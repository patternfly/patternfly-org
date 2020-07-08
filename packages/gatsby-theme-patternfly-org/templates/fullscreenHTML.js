import React from 'react';
import { Helmet } from 'react-helmet';
import './fullscreen.css';

const FullscreenHTMLTemplate = ({ pageContext }) => {
  const { title, code } = pageContext;
  const WrapperTag = pageContext.wrapperTag || 'main';
  return (
    <WrapperTag className="ws-site-root">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div
        className="ws-fullscreen-example"
        dangerouslySetInnerHTML={{__html: code || 'No fullscreen example.'}} />
    </WrapperTag>
  );
}

export default FullscreenHTMLTemplate;
