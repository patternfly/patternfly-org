import React, { useEffect } from 'react';
import { useLocation } from '@reach/router';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import { Badge } from '@patternfly/react-core';
import * as reactCoreModule from '@patternfly/react-core';
import * as reactTableModule from '@patternfly/react-table';
import { css } from '@patternfly/react-styles';
import { ExampleToolbar } from './exampleToolbar';
import { AutoLinkHeader } from '../autoLinkHeader/autoLinkHeader';
import { getParameters } from 'codesandbox/lib/api/define';
import { slugger, transformCode, getStaticParams, getReactParams, getExampleClassName, getExampleId } from '../../helpers';
import Prism from 'prismjs';
import 'prismjs/themes/prism-coy.css';
import './example.css';

const getSupportedLanguages = lang => {
  if (lang.includes('js')) {
    return ['jsx'];
  }
  else if (lang.includes('html')) {
    return ['html'];
  }
  return [];
}

// Props come from mdx-ast-to-mdx-hast.js
export const Example = ({
  code,
  lang = '',
  source,
  noLive,
  title = 'Untitled',
  isFullscreen,
  isBeta,
  id,
  section,
  liveContext
}) => {
  const supportedLangs = getSupportedLanguages(lang);
  if (supportedLangs === []) {
    noLive = true;
  }
  const editorLang = supportedLangs[0];
  if (!editorLang) {
    // Inline code
    return <code className="ws-code">{code}</code>;
  } else if (noLive) {
    // Code block
    const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
    return <pre dangerouslySetInnerHTML={{ __html: html }} />;
  }

  // https://reactjs.org/docs/hooks-overview.html#state-hook
  const [editorCode, setEditorCode] = React.useState(code);
  const [darkMode, setDarkMode] = React.useState(false);
  const [previewStyle, setPreviewStyle] = React.useState({});
  const [previewContainerStyle, setPreviewContainerStyle] = React.useState({ height: '437.5px' });
  const location = useLocation();

  const exampleName = title.replace(/-/g, ' ').replace(/  /g, '-');
  const fullscreenLink = `${location.pathname}/${slugger(title)}`;
  const scope = {
    ...liveContext,
    // These 2 are in the bundle anyways for the site since we dogfood
    ...reactCoreModule,
    ...reactTableModule,
  };
  const codeBoxParams = getParameters(
    lang === 'html'
    ? getStaticParams(title, code)
    : getReactParams(title, editorCode, scope));


  // https://reactjs.org/docs/hooks-effect.html
  if (isFullscreen) {
    useEffect(() => {
      const handleResize = () => {
        const resizeWidth = Math.min(
          document.getElementsByClassName('ws-example')[0].clientWidth,
          800
        );

        const scale = resizeWidth / 1280;

        setPreviewStyle({ transform: `scale(${scale})` });
        setPreviewContainerStyle({ height:`${scale * 800}px`, width:`${scale * 1280}px` });
      }

      if (!previewStyle.transform) {
        handleResize();
      }
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    });
  }

  const Preview = (
    <LivePreview
      id={getExampleId(source, section[0], id, title)}
      style={previewStyle}
      className={css(
        getExampleClassName(source, section[0], id),
        darkMode && 'pf-t-dark pf-m-opaque-200',
        isFullscreen ? 'ws-preview-fullscreen' : 'ws-preview'
      )} />
  );

  return (
    <div className="ws-example">
      <AutoLinkHeader
        metaText={isBeta && <Badge className="ws-beta-badge pf-u-ml-xs">Beta</Badge>}
        size="h4"
        headingLevel="h3"
        className="ws-example-heading"
      >
        {exampleName}
      </AutoLinkHeader>
      <LiveProvider
        scope={scope}
        code={editorCode}
        transformCode={code => transformCode(code, editorLang)}
        disabled={isFullscreen}
        theme={{
          plain: isFullscreen ? { pointerEvents: 'auto' } : {},
          styles: []
        }}
      >
        {/* We need this container for fullscreen example styling and popout */}
        {isFullscreen
          ? <div className="ws-preview">
              <a
                className="ws-preview__thumbnail-link"
                href={fullscreenLink}
                target="_blank"
                aria-label={`Open fullscreen ${exampleName} example`}
              >
                <div style={previewContainerStyle}>
                  {Preview}
                </div>
              </a>
            </div>
          : Preview}

        <ExampleToolbar
          editor={<LiveEditor className="ws-editor" onChange={setEditorCode} />}
          supportedLangs={supportedLangs}
          onDarkmodeChange={() => setDarkMode(!darkMode)}
          // Dark mode is permanently hidden per patternfly.org design
          hideDarkMode={true}
          isFullscreen={isFullscreen}
          fullscreenLink={fullscreenLink}
          code={editorCode}
          codeBoxParams={codeBoxParams}
          componentName={id}/>
        <LiveError />
      </LiveProvider>
    </div>
  );
}
