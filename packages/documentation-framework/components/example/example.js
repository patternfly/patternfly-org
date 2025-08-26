import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useLocation } from '@reach/router';
import {
  Button,
  CodeBlock,
  Flex,
  CodeBlockCode,
  debounce,
  Icon,
  Label,
  Switch,
  Select,
  SelectOption,
  SelectList,
  MenuToggle,
  Tooltip,
  Stack,
  StackItem,
  SelectGroup,
  MenuSearch,
  MenuSearchInput,
  ToggleGroup,
  ToggleGroupItem,
  Divider
} from '@patternfly/react-core';
import * as reactCoreModule from '@patternfly/react-core';
import * as reactCoreNextModule from '@patternfly/react-core/next';
import * as reactCoreDeprecatedModule from '@patternfly/react-core/deprecated';
import * as reactTableModule from '@patternfly/react-table';
import * as reactTableDeprecatedModule from '@patternfly/react-table/deprecated';
import { css } from '@patternfly/react-styles';
import { getParameters } from 'codesandbox/lib/api/define';
const SunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="pf-v6-svg"
    fill="var(--pf-t--global--icon--color--regular)"
  >
    <path d="M16 25c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9Zm0-16c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm0-4a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1Zm0 27a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1ZM4 17H1a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm27 0h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2ZM5.394 27.606a1 1 0 0 1-.707-1.707l2.12-2.12a1 1 0 1 1 1.415 1.413L6.1 27.313a.997.997 0 0 1-.707.293ZM24.485 8.515a1 1 0 0 1-.707-1.707L25.9 4.686a1 1 0 1 1 1.415 1.415l-2.122 2.12a.997.997 0 0 1-.707.294Zm-16.97 0a.997.997 0 0 1-.707-.293L4.686 6.1a1 1 0 1 1 1.415-1.415l2.12 2.122a1 1 0 0 1-.706 1.707Zm19.091 19.091a.997.997 0 0 1-.707-.293l-2.12-2.12a1 1 0 1 1 1.413-1.415l2.122 2.121a1 1 0 0 1-.707 1.707Z"></path>
  </svg>
);
const MoonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="pf-v6-svg"
    fill="var(--pf-t--global--icon--color--regular)"
  >
    <path d="M16.457 30C8.485 30 2 23.515 2 15.543c0-5.93 3.715-11.345 9.243-13.476a.999.999 0 0 1 1.289 1.3 12.185 12.185 0 0 0-.843 4.487c0 6.869 5.588 12.457 12.457 12.457 1.56 0 3.07-.284 4.487-.844a.998.998 0 0 1 1.3 1.29C27.802 26.285 22.387 30 16.456 30ZM9.992 4.904C6.338 7.134 4 11.177 4 15.544 4 22.412 9.588 28 16.457 28c4.367 0 8.41-2.338 10.639-5.992a14.39 14.39 0 0 1-2.95.302c-7.971 0-14.457-6.485-14.457-14.456 0-1.003.102-1.989.303-2.95Z"></path>
  </svg>
);
const DesktopIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="pf-v6-svg"
    fill="var(--pf-t--global--icon--color--regular)"
  >
    <path d="M23.94 16a1 1 0 0 1-.992-.876 6.957 6.957 0 0 0-6.069-6.062 1 1 0 1 1 .242-1.985 8.953 8.953 0 0 1 7.812 7.8A.999.999 0 0 1 23.94 16ZM16 5a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1Zm0 27a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1ZM4 17H1a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm27 0h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2ZM5.394 27.606a1 1 0 0 1-.707-1.707l2.12-2.12a1 1 0 1 1 1.415 1.413L6.1 27.313a.997.997 0 0 1-.707.293ZM24.485 8.515a1 1 0 0 1-.707-1.707L25.9 4.686a1 1 0 1 1 1.415 1.415l-2.122 2.12a.997.997 0 0 1-.707.294Zm-16.97 0a.997.997 0 0 1-.707-.293L4.686 6.1a1 1 0 1 1 1.415-1.415l2.12 2.122a1 1 0 0 1-.706 1.707Zm19.091 19.091a.997.997 0 0 1-.707-.293l-2.12-2.12a1 1 0 1 1 1.413-1.415l2.122 2.121a1 1 0 0 1-.707 1.707ZM16 24.875c-4.894 0-8.875-3.981-8.875-8.875a8.879 8.879 0 0 1 5.227-8.088.876.876 0 0 1 1.153 1.163 6.945 6.945 0 0 0-.63 2.925A7.133 7.133 0 0 0 20 19.125a6.948 6.948 0 0 0 2.925-.63.876.876 0 0 1 1.163 1.154A8.88 8.88 0 0 1 16 24.875Zm-4.785-14.153A7.135 7.135 0 0 0 8.875 16 7.133 7.133 0 0 0 16 23.125a7.13 7.13 0 0 0 5.278-2.34c-.419.06-.845.09-1.278.09-4.894 0-8.875-3.981-8.875-8.875 0-.433.03-.86.09-1.278Z"></path>
  </svg>
);
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
import { useTheme, THEME_TYPES } from '../../hooks/useTheme';

const errorComponent = (err) => <pre>{err.toString()}</pre>;

// Full-screen theme selector component using parameterized theme hooks
const FullScreenThemeSelector = () => {
  const { mode: themeMode, setMode: setThemeMode, modes: colorModes } = useTheme(THEME_TYPES.COLOR);
  const { mode: highContrastMode, setMode: setHighContrastMode, modes: highContrastModes } = useTheme(THEME_TYPES.HIGH_CONTRAST);
  const [isThemeSelectOpen, setIsThemeSelectOpen] = useState(false);

  const handleThemeChange = (_event, selectedMode) => {
    setThemeMode(selectedMode);
    setIsThemeSelectOpen(false);
  };

  const handleHighContrastThemeSelection = (evt) => {
    setHighContrastMode(evt.currentTarget.id);
  };

  const getThemeDisplayText = (mode) => {
    switch (mode) {
      case colorModes.LIGHT:
        return 'Light';
      case colorModes.DARK:
        return 'Dark';
      default:
        return 'System';
    }
  };

  const getThemeIcon = (mode) => {
    switch (mode) {
      case colorModes.LIGHT:
        return SunIcon;
      case colorModes.DARK:
        return MoonIcon;
      default:
        return DesktopIcon;
    }
  };

  return (
    <Select
      id="ws-example-theme-select"
      isOpen={isThemeSelectOpen}
      selected={themeMode}
      onSelect={handleThemeChange}
      onOpenChange={(isOpen) => setIsThemeSelectOpen(isOpen)}
      toggle={(toggleRef) => (
        <MenuToggle
          ref={toggleRef}
          onClick={() => setIsThemeSelectOpen(!isThemeSelectOpen)}
          isExpanded={isThemeSelectOpen}
          icon={<Icon size="lg">{getThemeIcon(themeMode)}</Icon>}
          aria-label={`Theme selection, current: ${getThemeDisplayText(themeMode)}`}
        />
      )}
      shouldFocusToggleOnSelect
    >
      <SelectGroup>
        <SelectList>
          <SelectOption value={colorModes.SYSTEM} icon={DesktopIcon} description="Follow system preference">
            System
          </SelectOption>
          <SelectOption value={colorModes.LIGHT} icon={SunIcon} description="Always use light mode">
            Light
          </SelectOption>
          <SelectOption value={colorModes.DARK} icon={MoonIcon} description="Always use dark mode">
            Dark
          </SelectOption>
        </SelectList>
      </SelectGroup>
      <Divider />
      <SelectGroup label="High Contrast">
        <MenuSearch>
          <MenuSearchInput>
            <ToggleGroup aria-label="High contrast theme switcher">
              <ToggleGroupItem
                text="System"
                buttonId={highContrastModes.SYSTEM}
                isSelected={highContrastMode === highContrastModes.SYSTEM}
                onChange={handleHighContrastThemeSelection}
              />
              <ToggleGroupItem
                text="On"
                buttonId={highContrastModes.ON}
                isSelected={highContrastMode === highContrastModes.ON}
                onChange={handleHighContrastThemeSelection}
              />
              <ToggleGroupItem
                text="Off"
                buttonId={highContrastModes.OFF}
                isSelected={highContrastMode === highContrastModes.OFF}
                onChange={handleHighContrastThemeSelection}
              />
            </ToggleGroup>
          </MenuSearchInput>
        </MenuSearch>
      </SelectGroup>
    </Select>
  );
};

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
  hasDarkThemeSwitcher = process.env.hasDarkThemeSwitcher,
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
        {(hasDarkThemeSwitcher || hasRTLSwitcher) && (
          <Flex
            direction={{ default: 'column' }}
            gap={{ default: 'gapMd' }}
            className="ws-full-page-utils pf-v6-m-dir-ltr"
          >
            {hasDarkThemeSwitcher && <FullScreenThemeSelector />}
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
  const fullscreenLink =
    loc.pathname.replace(/\/$/, '') + (loc.pathname.endsWith(source) ? '' : `/${source}`) + '/' + slugger(title);

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
              <img src={thumbnail.src} width={thumbnail.width} height={thumbnail.height} alt={`${title} screenshot`} />
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
