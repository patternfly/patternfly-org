import React from 'react';
import { Button, Form, Tooltip } from '@patternfly/react-core';
import { CodeEditor, CodeEditorControl, Language } from '@patternfly/react-code-editor';
import { convertToJSX } from '@patternfly/ast-helpers';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import CodepenIcon from '@patternfly/react-icons/dist/esm/icons/codepen-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import ReplyAllIcon from '@patternfly/react-icons/dist/esm/icons/reply-all-icon';
import { copy } from '../../helpers';
import { trackEvent } from '../../helpers';

function getLanguage(lang) {
  if (lang === 'js') {
    return Language.javascript;
  } else if (lang === 'ts') {
    return Language.typescript;
  }

  return lang;
}

export const ExampleToolbar = ({
  // Link to fullscreen example page (each example has one)
  fullscreenLink,
  // Params to pass to codesandbox
  codeBoxParams,
  // Language of code
  lang,
  // Whether the example is fullscreen only
  isFullscreen,
  // Original version of the code
  originalCode,
  // Current code in editor
  code,
  // Callback to set code in parent component
  setCode,
  // Title of example used in creating unique labels
  exampleTitle
}) => {
  const [isEditorOpen, setIsEditorOpen] = React.useState(false);
  const [isCopied, setCopied] = React.useState(false);

  const copyLabel = 'Copy code to clipboard';
  const languageLabel = `Toggle ${lang.toUpperCase()} code`;
  const codesandboxLabel = 'Open example in CodeSandbox';
  const fullscreenLabel = 'Open example in new window';
  const convertLabel = 'Convert example from Typescript to JavaScript';
  const undoAllLabel = 'Undo all changes';

  const copyAriaLabel = `Copy ${exampleTitle} example code to clipboard`;
  const languageAriaLabel = `Toggle ${lang.toUpperCase()} code in ${exampleTitle} example`;
  const codesandboxAriaLabel = `Open ${exampleTitle} example in CodeSandbox`;
  const fullscreenAriaLabel = `Open ${exampleTitle} example in new window`;
  const convertAriaLabel = `Convert ${exampleTitle} example from Typescript to JavaScript`;
  const undoAllAriaLabel = `Undo all changes to ${exampleTitle}`;

  const editorControlProps = {
    className: "ws-code-editor-control",
  };

  const commonTooltipProps = {
    exitDelay: 300,
    maxWidth: 'var(--ws-code-editor--tooltip--MaxWidth)'
  }

  const copyCode = () => {
    copy(code);
    setCopied(true);
  };

  const customControls = (
    <React.Fragment>
      <CodeEditorControl
        icon={
          <React.Fragment>
            <CodeIcon />
            {' ' + lang.toUpperCase()}
          </React.Fragment>
        }
        onClick={() => {
          setIsEditorOpen(!isEditorOpen);
          // 1 === expand code, 0 === collapse code
          trackEvent('code_editor_control_click',  'click_event', 'TOGGLE_CODE', isEditorOpen ? 0 : 1);
        }}
        tooltipProps={{
          content: languageLabel,
          ...commonTooltipProps
        }}
        aria-label={languageAriaLabel}
        aria-expanded={isEditorOpen}
        {...editorControlProps}
      />
      <Tooltip
        content={<div>{isCopied ? 'Code copied' : copyLabel}</div>}
        maxWidth={editorControlProps.maxWidth}
        exitDelay={isCopied ? "300" : 1600}
        onTooltipHidden={() => setCopied(false)}
      >
        <Button
          onClick={() => {
            copyCode();
            trackEvent('code_editor_control_click', 'click_event', 'COPY_CODE');
          }}
          variant="control"
          aria-label={copyAriaLabel}
          className={editorControlProps.className}
        >
          <CopyIcon />
        </Button>
      </Tooltip>
      {codeBoxParams &&
        <Form
          aria-label={`${codesandboxAriaLabel} form` }
          action="https://codesandbox.io/api/v1/sandboxes/define"
          method="POST"
          target="_blank"
          style={{ display: "inline-block" }}
        >
          <Tooltip
            content={codesandboxLabel}
            maxWidth={editorControlProps.maxWidth}
          >
            <Button
              aria-label={codesandboxAriaLabel}
              variant="control"
              type="submit"
              onClick={() => {
                trackEvent('code_editor_control_click', 'click_event', 'CODESANDBOX_LINK');
              }}
              className={editorControlProps.className}
            >
              <CodepenIcon />
            </Button>
          </Tooltip>
          <input type="hidden" name="parameters" value={codeBoxParams} />
        </Form>
      }
      {fullscreenLink && 
        <CodeEditorControl
          component="a"
          icon={<ExternalLinkAltIcon />}
          href={fullscreenLink} 
          target="_blank"
          rel="noopener noreferrer"
          aria-label={fullscreenAriaLabel}
          tooltipProps={{
            content: fullscreenLabel,
            ...commonTooltipProps
          }}
          onClick={() => {
            trackEvent('code_editor_control_click', 'click_event', 'FULLSCREEN_LINK');
          }}
          {...editorControlProps}
        />
      }
      {isEditorOpen && lang === 'ts' &&
        <CodeEditorControl
          icon={(
            <React.Fragment>
              {'TS '}<AngleDoubleRightIcon />{' JS'}
            </React.Fragment>
          )}
          aria-label={convertAriaLabel}
          tooltipProps={{
            content: convertLabel,
            ...commonTooltipProps
          }}
          onClick={() => {
            setCode(convertToJSX(code).code);
            trackEvent('code_editor_control_click', 'click_event', 'TS_TO_JS');
          }}
          {...editorControlProps}
        />
      }
      {code !== originalCode &&
        <CodeEditorControl
          icon={<ReplyAllIcon />}
          aria-label={undoAllAriaLabel}
          tooltipProps={{
            content: undoAllLabel,
            ...commonTooltipProps
          }}
          onClick={() => {
            setCode(originalCode);
            trackEvent('code_editor_control_click', 'click_event', 'RESET_CODE');
          }}
          {...editorControlProps}
        />
      }
    </React.Fragment>
  );

  // TODO: check if worth adding react, patternfly, and example types
  // https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.typescript.languageservicedefaults.html#addextralib
  const onEditorDidMount = (_editor, monaco) => {
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: true,
      ...monaco.languages.typescript.typescriptDefaults.getCompilerOptions()
    });
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true,
      noSuggestionDiagnostics: true,
      onlyVisible: true
    });
  };

  return (
    <CodeEditor
      customControls={customControls}
      showEditor={isEditorOpen}
      language={getLanguage(lang)}
      height="400px"
      code={code}
      onChange={newCode => setCode(newCode)}
      onEditorDidMount={onEditorDidMount}
      isReadOnly={isFullscreen}
      className={`${isEditorOpen ? 'ws-example-code-expanded ' : ''}ws-code-editor`}
    />
  );
}
