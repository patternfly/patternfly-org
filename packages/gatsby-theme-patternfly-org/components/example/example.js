import React, { useLayoutEffect } from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import { Badge } from '@patternfly/react-core';
import * as PatternflyReactCore from '@patternfly/react-core';
import { useMDXScope } from 'gatsby-plugin-mdx/context';
import { ExampleToolbar } from './exampleToolbar';
import { AutoLinkHeader } from '../autoLinkHeader/autoLinkHeader';
import { getParameters } from 'codesandbox/lib/api/define';
import { slugger, transformCode, getStaticParams, getReactParams, getExampleClassName, getExampleId } from '../../helpers';
import Prism from 'prismjs';
import 'prismjs/themes/prism-coy.css';
import './example.css';

const getSupportedLanguages = className => {
  if (typeof className === 'string') {
    if (className.includes('-js')) {
      return ['jsx'];
    }
    else if (className.includes('-hbs')) {
      return ['html', 'hbs'];
    }
  }
  return ['unknown'];
}

// This component uses hooks in order to call useMDXScope()
export const Example = props => {
  const html = props.html
    ? props.html
    : 'This is a hbs code block, but no html trickled down from gatsby-node.js to mdx.js to example.js';
  const supportedLangs = getSupportedLanguages(props.className);
  const initialLang = supportedLangs[0];
  const initialCode = props.children.toString();
  const { noLive, title = 'Untitled example', isFullscreen = false, isBeta = false, location, children, navSection, componentName } = props;

  // https://reactjs.org/docs/hooks-overview.html#state-hook
  const [editorCode, setEditorCode] = React.useState(initialLang === 'html' ? html : initialCode);
  const [editorLang, setEditorLang] = React.useState(initialLang);
  const [darkMode, setDarkMode] = React.useState(false);
  const [previewStyle, setPreviewStyle] = React.useState({});
  const [previewContainerStyle, setPreviewContainerStyle] = React.useState({ height: '437.5px' });

  const onLanguageChange = newLang => {
    setEditorLang(newLang);
    if (editorLang !== 'html' && newLang === 'html') {
      setEditorCode(html);
    }
  }

  if (editorLang === 'unknown') {
     // Inline code
    return <code className="ws-code">{children}</code>;
  } else if (noLive) {
    // Code block
    const html = Prism.highlight(children, Prism.languages.javascript, 'javascript');
    return <pre dangerouslySetInnerHTML={{ __html: html }} />;
  }
  const exampleName = title.replace(/-/g, ' ').replace(/  /g, '-');
  const fullscreenLink = `${location.pathname}/${slugger(title.toLowerCase())}`;
  const scope = {
    ...PatternflyReactCore,
    ...useMDXScope()
  };
  const codeBoxParams = getParameters(
    props.html
    ? getStaticParams(props.title, html)
    : getReactParams(props.title, editorCode, scope));

  const className = getExampleClassName(props.source, navSection[0], componentName);
  const id = getExampleId(props.source, navSection[0], componentName, title);

  // https://reactjs.org/docs/hooks-effect.html
  if (isFullscreen) {
    useLayoutEffect(() => {
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
      id={id}
      style={previewStyle}
      className={`${className} ${
        darkMode ? ' pf-t-dark pf-m-opaque-200' : ''}${
        isFullscreen ? ' ws-preview-fullscreen' : ' ws-preview'}`} />
  );

  return (
    <div className="ws-example">
      <AutoLinkHeader metaText={isBeta ? <Badge className="ws-beta-badge pf-u-ml-xs">Beta</Badge> : null} size="h4" headingLevel="h3" className="ws-example-heading">
        {exampleName}
      </AutoLinkHeader>
      <LiveProvider
        scope={scope}
        code={editorCode}
        transformCode={code => transformCode(code, editorLang, html)}
        disabled={isFullscreen || editorLang === 'hbs'}
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
          editor={<LiveEditor className="ws-editor" onChange={code => setEditorCode(code)} />}
          supportedLangs={supportedLangs}
          onLanguageChange={onLanguageChange}
          onDarkmodeChange={() => setDarkMode(!darkMode)}
          // Dark mode is permanently hidden per patternfly.org design
          hideDarkMode={true}
          isFullscreen={isFullscreen}
          fullscreenLink={fullscreenLink}
          code={editorCode}
          codeBoxParams={codeBoxParams}
          componentName={props.componentName}/>
        <LiveError />
      </LiveProvider>
    </div>
  );
}
