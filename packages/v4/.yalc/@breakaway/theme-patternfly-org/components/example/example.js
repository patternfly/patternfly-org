import React from 'react';
import { useLocation } from '@reach/router';
import { Badge, CodeBlock, CodeBlockCode, debounce } from '@patternfly/react-core';
import * as reactCoreModule from '@patternfly/react-core';
import * as reactTableModule from '@patternfly/react-table';
import { css } from '@patternfly/react-styles';
import { getParameters } from 'codesandbox/lib/api/define';
import { ExampleToolbar } from './exampleToolbar';
import { AutoLinkHeader } from '../autoLinkHeader/autoLinkHeader';
import {
  slugger,
  getStaticParams,
  getReactParams,
  getExampleClassName,
  getExampleId,
  liveCodeTypes
} from '../../helpers';
import { convertToReactComponent } from '@patternfly/ast-helpers';
import missingThumbnail from './missing-thumbnail.jpg';
import './example.css';

const errorComponent = err => <pre>{err.toString()}</pre>;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    errorInfo._suppressLogging = true;
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      this.setState({ error: null, errorInfo: null });
    }
  }
  
  render() {
    if (this.state.errorInfo) {
      return errorComponent(this.state.error);
    }
    return this.props.children;
  }  
}

// Props come from mdx-ast-to-mdx-hast.js
export const Example = ({
  // The ts/js/html code for the example
  code,
  // The language of the code
  lang = '',
  // Second parameter to sourceMD for file containing this code
  // Should match tab name
  source,
  // Whether to disable the live code editor
  noLive = !liveCodeTypes.includes(lang),
  // Nearest parent h3
  title = 'Untitled',
  // Whether the example is fullscreen only and we should show a thumbnail
  isFullscreen,
  // Whether the example is open on the fullscreen page
  isFullscreenPreview,
  // The image src thumbnail for the example
  thumbnail = missingThumbnail,
  // Whether the example shows demo capability
  isBeta,
  // Slugified source + title
  id,
  // Section in frontmatter of MD file (components, demos, etc)
  section,
  // Extra constants for example (images, extra JS files, etc)
  liveContext,
  // Content that appears between h3 and code block to explain example
  children,
}) => {
  if (isFullscreenPreview) {
    isFullscreen = false;
  }
  if (!lang) {
    // Inline code
    return <code className="ws-code">{code}</code>;
  } else if (noLive) {
    // Code block
    return (
      <CodeBlock>
        <CodeBlockCode>{code}</CodeBlockCode>
      </CodeBlock>
    );
  }

  const [editorCode, setEditorCode] = React.useState(code);
  const loc = useLocation();

  const scope = {
    ...liveContext,
    // These 2 are in the bundle anyways for the site since we dogfood
    ...reactCoreModule,
    ...reactTableModule,
  };
  let livePreview = null;
  if (lang === 'html') {
    livePreview = (
      <div
        className={css('ws-preview-html', isFullscreenPreview && 'pf-u-h-100')}
        dangerouslySetInnerHTML={{ __html: editorCode }}
      />
    );
  } else {
    try {
      const { code: transformedCode, hasTS } = convertToReactComponent(editorCode);
      if (hasTS) {
        lang = 'ts';
      } else {
        lang = 'js';
      }
      const getPreviewComponent = new Function('React', ...Object.keys(scope), transformedCode);
      const PreviewComponent = getPreviewComponent(React, ...Object.values(scope));
      livePreview = (
        <ErrorBoundary>
          <PreviewComponent />
        </ErrorBoundary>
      );
    } catch (err) {
      livePreview = errorComponent(err);
    }
  }
  const previewId = getExampleId(source, section[0], id, title);
  const className = getExampleClassName(source, section[0], id);

  if (isFullscreenPreview) {
    return (
      <div id={previewId} className={css(className, 'pf-u-h-100')}>
        {livePreview}
      </div>
    );
  }

  const codeBoxParams = getParameters(
    lang === 'html'
      ? getStaticParams(title, editorCode)
      : getReactParams(title, editorCode, scope, lang)
  );
  const fullscreenLink = loc.pathname.replace(/\/$/, '')
    + (loc.pathname.endsWith(source) ? '' : `/${source}`)
    + '/'
    + slugger(title);

  return (
    <div className="ws-example">
      <div className="ws-example-header">
        <AutoLinkHeader
          metaText={isBeta && <Badge className="ws-beta-badge pf-u-ml-xs">Beta</Badge>}
          size="h4"
          headingLevel="h3"
          className="ws-example-heading"
        >
          {title}
        </AutoLinkHeader>
        {children}
      </div>
      {isFullscreen
        ? <div className="ws-preview">
            <a
              className="ws-preview__thumbnail-link"
              href={fullscreenLink}
              target="_blank"
              aria-label={`Open fullscreen ${title} example`}
            >
              <img src={thumbnail.src} width={thumbnail.width} height={thumbnail.height} />
            </a>
          </div>
        : <div
            id={previewId}
            className={css(className, isFullscreen ? 'ws-preview-fullscreen' : 'ws-preview')}
          >
            {livePreview}
          </div>
      }
      <ExampleToolbar
        lang={lang}
        isFullscreen={isFullscreen}
        fullscreenLink={fullscreenLink}
        originalCode={code}
        code={editorCode}
        setCode={debounce(setEditorCode, 300)}
        codeBoxParams={codeBoxParams}
      />
    </div>
  );
}
