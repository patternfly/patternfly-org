import React from 'react';
import { LiveProvider, LivePreview } from 'react-live';
import * as reactCoreModule from '@patternfly/react-core';
import * as reactTableModule from '@patternfly/react-table';
import { transformCode } from '../helpers/transformCode';
import './fullscreen.css';

export const FullscreenTemplate = ({
  wrapperTag: WrapperTag,
  code,
  liveContext,
  lang
}) => {
  const scope = {
    ...liveContext,
    // These 2 are in the bundle anyways for the site since we dogfood
    ...reactCoreModule,
    ...reactTableModule,
  };
  return (
    <LiveProvider
      scope={scope}
      code={code}
      transformCode={c => transformCode(c, lang)}
    >
      <LivePreview Component={({ children }) => (
        <WrapperTag className="ws-site-root">
          {children}
        </WrapperTag>
      )} />
    </LiveProvider>
  );
}
