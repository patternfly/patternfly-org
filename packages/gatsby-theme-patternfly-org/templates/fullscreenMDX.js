import React from 'react';
import { Helmet } from 'react-helmet';
import { LiveProvider, LivePreview } from 'react-live';
import { useMDXScope } from 'gatsby-plugin-mdx/context';
import * as PatternflyReactCore from '@patternfly/react-core';
import { transformCode } from '../helpers/transformCode';
import './fullscreen.css';

const FullscreenMDXTemplate = ({ pageContext }) => {
  const { wrapperTag: WrapperTag, title, code } = pageContext;
  const scope = {
    ...PatternflyReactCore,
    ...useMDXScope()
  };
  return (
    <LiveProvider
      scope={scope}
      code={code}
      transformCode={c => transformCode(c, 'jsx')}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <LivePreview Component={({ children }) => (
        <WrapperTag className="ws-site-root">
          {children}
        </WrapperTag>
      )} />
    </LiveProvider>
  );
}

export default FullscreenMDXTemplate;
