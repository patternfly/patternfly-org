import React, { useContext, useEffect } from 'react';
import { useLocation } from '@reach/router';
import {
  Button,
  CodeBlock,
  Flex,
  CodeBlockCode,
  debounce,
  Label,
  Switch,
  Tooltip,
  Stack,
  StackItem,
} from '@patternfly/react-core';
import * as reactCoreModule from '@patternfly/react-core';
import * as reactCoreNextModule from '@patternfly/react-core/next';
import * as reactCoreDeprecatedModule from '@patternfly/react-core/deprecated';
import * as reactTableModule from '@patternfly/react-table';
import * as reactTableDeprecatedModule from '@patternfly/react-table/deprecated';
import { css } from '@patternfly/react-styles';
import { getParameters } from 'codesandbox/lib/api/define';
import { ExampleToolbar } from './exampleToolbar.jsx';
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
import { RtlContext } from '../../layouts';
import { ThemeSelector } from '../themeSelector/themeSelector';

import RhUiArrowCircleDownRightIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-arrow-circle-down-right-icon';
import RhUiArrowCircleDownLeftIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-arrow-circle-down-left-icon';
import RhUiArrowCircleUpRightIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-arrow-circle-up-right-icon';
import RhUiArrowCircleUpLeftIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-arrow-circle-up-left-icon';
import RhUiArrowCircleDownRightFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-arrow-circle-down-right-fill-icon';
import RhUiArrowCircleDownLeftFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-arrow-circle-down-left-fill-icon';
import RhUiArrowCircleUpRightFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-arrow-circle-up-right-fill-icon';
import RhUiArrowCircleUpLeftFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-arrow-circle-up-left-fill-icon';

const errorComponent = (err) => <pre>{err.toString()}</pre>;

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
  isDemo,
  // Whether the example is open to further evolution
  isBeta,
  // Whether the example is deprecated
  isDeprecated,
  // Slugified source + title
  id,
  // Section in frontmatter of MD file (components, demos, etc)
  section,
  // Extra constants for example (images, extra JS files, etc)
  liveContext,
  // Content that appears between h3 and code block to explain example
  children,
  // Show dark theme switcher on full page examples
  hasThemeSwitcher = process.env.hasThemeSwitcher,
  // Show dark theme switcher on full page examples
  hasRTLSwitcher = process.env.hasRTLSwitcher,
  // Map of relative imports matched to their npm package import path (passed to Codesandbox)
  relativeImports,
  // md file location in node_modules, used to resolve relative import paths in examples
  relPath = '',
  // absolute url to hosted file
  sourceLink = ''
}) => {


  if (isFullscreenPreview) {
    isFullscreen = false;
  }

  //append a class to the document body on fullscreen examples to indicate to screenshot/automated visual regression tools that the page has loaded
  const addPageLoadedClass = () => document.body.classList.add('page-loaded');
  useEffect(() => {
    if (!isFullscreenPreview) return;

    document.readyState === 'complete' ? addPageLoadedClass() : window.addEventListener('load', addPageLoadedClass);

    return () => window.removeEventListener('load', addPageLoadedClass);
  }, []);

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
  const [fullPageUtilsPosition, setFullPageUtilsPosition] = React.useState('pf-m-bottom-right');
  const loc = useLocation();
  const isRTL = useContext(RtlContext);
  const scope = {
    ...liveContext,
    // These 2 are in the bundle anyways for the site since we dogfood
    ...reactCoreModule,
    ...reactTableModule,
    ...(source === 'react-next' ? reactCoreNextModule : {}),
    ...(source === 'react-deprecated' ? { ...reactCoreDeprecatedModule, ...reactTableDeprecatedModule } : {})
  };

  let livePreview = null;
  if (lang === 'html') {
    livePreview = (
      <div
        className={css(
          'ws-preview-html', // core uses this class name to apply styles to specific examples
          isFullscreenPreview && 'pf-v6-u-h-100'
        )}
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

      const componentNames = Object.keys(scope);
      const componentValues = Object.values(scope);

      const getPreviewComponent = new Function('React', ...componentNames, transformedCode);
      const PreviewComponent = getPreviewComponent(React, ...componentValues);

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
      <div id={previewId} className={css(className, 'pf-v6-u-h-100')}>
        {livePreview}
        {(hasThemeSwitcher || hasRTLSwitcher) && (
          <Flex
            direction={{ default: 'column' }}
            gap={{ default: 'gapMd' }}
            className={css('ws-full-page-utils', 'pf-v6-m-dir-ltr', fullPageUtilsPosition)}
          >
            <Flex justifyContent={{ default: 'justifyContentCenter' }} gap={{ default: 'gapXs' }}>
            <Button
                variant="plain"
                size="sm"
                hasNoPadding
                isClicked={fullPageUtilsPosition === 'pf-m-top-left'}
                onClick={() => setFullPageUtilsPosition('pf-m-top-left')}
                aria-label="Position utilities top left"
                icon={fullPageUtilsPosition === 'pf-m-top-left' ? RhUiArrowCircleUpLeftFillIcon : RhUiArrowCircleUpLeftIcon}
              />
              <Button
                variant="plain"
                size="sm"
                hasNoPadding
                isClicked={fullPageUtilsPosition === 'pf-m-bottom-left'}
                onClick={() => setFullPageUtilsPosition('pf-m-bottom-left')}
                aria-label="Position utilities bottom left"
                icon={fullPageUtilsPosition === 'pf-m-bottom-left' ? RhUiArrowCircleDownLeftFillIcon : RhUiArrowCircleDownLeftIcon}
              />
              <Button
                variant="plain"
                size="sm"
                hasNoPadding
                isClicked={fullPageUtilsPosition === 'pf-m-bottom-right'}
                onClick={() => setFullPageUtilsPosition('pf-m-bottom-right')}
                aria-label="Position utilities bottom right"
                icon={fullPageUtilsPosition === 'pf-m-bottom-right' ? RhUiArrowCircleDownRightFillIcon : RhUiArrowCircleDownRightIcon}
              />
              <Button
                variant="plain"
                size="sm"
                hasNoPadding
                isClicked={fullPageUtilsPosition === 'pf-m-top-right'}
                onClick={() => setFullPageUtilsPosition('pf-m-top-right')}
                aria-label="Position utilities top right"
                icon={fullPageUtilsPosition === 'pf-m-top-right' ? RhUiArrowCircleUpRightFillIcon : RhUiArrowCircleUpRightIcon}
              />
            </Flex>
            {hasThemeSwitcher && <ThemeSelector id="ws-example-theme-select" />}
            {hasRTLSwitcher && (
              <Switch
                id="ws-example-rtl-switch"
                label="RTL"
                defaultChecked={false}
                onChange={() => {
                  const html = document.querySelector('html');
                  const curDir = html.dir;
                  html.dir = curDir !== 'rtl' ? 'rtl' : 'ltr';
                }}
              />
            )}
          </Flex>
        )}
      </div>
    );
  }

  const codeBoxParams = getParameters(
    lang === 'html'
      ? getStaticParams(title, editorCode)
      : getReactParams(title, editorCode, scope, lang, relativeImports, relPath, sourceLink)
  );
  const fullscreenLink = (() => {
    const cleanPathname = loc.pathname.replace(/\/$/, '');
    const sourcePath = `/${source}`;
    
    // Check if the source is already at the end of the pathname to avoid duplication
    // Using endsWith instead of includes to prevent false positives (e.g., /react-console matching /react)
    if (cleanPathname.endsWith(sourcePath)) {
      return `${cleanPathname}/${slugger(title)}`;
    } else {
      return `${cleanPathname}${sourcePath}/${slugger(title)}`;
    }
  })();

  const hasMetaText = isBeta || isDemo || isDeprecated || false;
  const tooltips = (
    <React.Fragment>
      {isBeta && (
        <Tooltip content="This beta component is currently under review and is still open for further evolution.">
          <Button variant="plain" hasNoPadding>
            <Label isCompact color="blue">
              Beta
            </Label>
          </Button>
        </Tooltip>
      )}
      {isDemo && (
        <Tooltip content="Demos show how multiple components can be used in a single design.">
          <Button variant="plain" hasNoPadding>
            <Label isCompact color="purple">
              Demo
            </Label>
          </Button>
        </Tooltip>
      )}
      {isDeprecated && (
        <Tooltip content="Deprecated components are available for use but are no longer being maintained or enhanced.">
          <Button variant="plain" hasNoPadding>
            <Label isCompact color="grey">
              Deprecated
            </Label>
          </Button>
        </Tooltip>
      )}
    </React.Fragment>
  );
  const metaText = hasMetaText && tooltips;

  const thumbnailDimensions = {
    width: "800",
    height: "450"
  }

  return (
    <Stack hasGutter>
      <StackItem>
        <AutoLinkHeader metaText={metaText} headingLevel="h3">
          {title}
        </AutoLinkHeader>
        {children}
      </StackItem>
      <StackItem>
        {isFullscreen ? (
          <div>
            <a
              className="ws-preview__thumbnail-link"
              href={fullscreenLink}
              target="_blank"
              aria-label={`Open fullscreen ${title} example`}
            >
              <img src={thumbnail} width={thumbnailDimensions.width} height={thumbnailDimensions.height} alt={`${title} screenshot`} />
            </a>
          </div>
        ) : (
          <div id={previewId} className={css(className, isRTL && 'pf-v6-m-dir-rtl')}>
            {livePreview}
          </div>
        )}
      </StackItem>
      <StackItem>
        <ExampleToolbar
          lang={lang}
          isFullscreen={isFullscreen}
          fullscreenLink={fullscreenLink}
          originalCode={code}
          code={editorCode}
          setCode={debounce(setEditorCode, 300)}
          codeBoxParams={codeBoxParams}
          exampleTitle={title}
        />
      </StackItem>
    </Stack>
  );
};
