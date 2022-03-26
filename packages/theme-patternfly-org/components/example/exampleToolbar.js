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
  setCode
}) => {
  const [isEditorOpen, setIsEditorOpen] = React.useState(false);
  const [isCopied, setCopied] = React.useState(false);

  const copyCode = () => {
    copy(code);

    setCopied(true);
    // Reset isCopied after Tooltip fades out
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  const copyLabel = 'Copy code to clipboard';
  const languageLabel = `Toggle ${lang.toUpperCase()} code`;
  const codesandboxLabel = 'Open example in CodeSandbox';
  const fullscreenLabel = 'Open example in new window';
  const convertLabel = 'Convert example from Typescript to JavaScript';
  const undoAllLabel = 'Undo all changes';
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
        aria-label={languageLabel}
        toolTipText={languageLabel}
        aria-expanded={isEditorOpen}
        className="ws-code-editor-control"
      />
      <Tooltip
        trigger="mouseenter"
        content={<div>{isCopied ? 'Code copied' : copyLabel}</div>}
        exitDelay={isCopied ? 1600 : 300}
        entryDelay={300}
        maxWidth="100px"
        position="top"
      >
        <Button onClick={() => {
          copyCode();
          trackEvent('code_editor_control_click', 'click_event', 'COPY_CODE');
        }} variant="control" aria-label={copyLabel} className="ws-code-editor-control">
          <CopyIcon />
        </Button>
      </Tooltip>
      {codeBoxParams &&
        <Tooltip
          trigger="mouseenter"
          content={codesandboxLabel}
          exitDelay={300}
          entryDelay={300}
          maxWidth="100px"
          position="top"
        >
          <Form
            aria-label={codesandboxLabel}
            action="https://codesandbox.io/api/v1/sandboxes/define"
            method="POST"
            target="_blank"
            style={{ display: "inline-block" }}
          >
            <Button
              aria-label={codesandboxLabel}
              variant="control"
              type="submit"
              onClick={() => {
                trackEvent('code_editor_control_click', 'click_event', 'CODESANDBOX_LINK');
              }}
              className="ws-code-editor-control"
            >
              <input type="hidden" name="parameters" value={codeBoxParams} />
              <CodepenIcon />
            </Button>
          </Form>
        </Tooltip>
      }
      {fullscreenLink && 
        <CodeEditorControl
          component="a"
          icon={<ExternalLinkAltIcon />}
          href={fullscreenLink} 
          target="_blank"
          rel="noopener noreferrer"
          aria-label={fullscreenLabel}
          toolTipText={fullscreenLabel}
          onClick={() => {
            trackEvent('code_editor_control_click', 'click_event', 'FULLSCREEN_LINK');
          }}
          className="ws-code-editor-control"
        />
      }
      {isEditorOpen && lang === 'ts' &&
        <CodeEditorControl
          icon={(
            <React.Fragment>
              {'TS '}<AngleDoubleRightIcon />{' JS'}
            </React.Fragment>
          )}
          aria-label={convertLabel}
          toolTipText={convertLabel}
          onClick={() => {
            setCode(convertToJSX(code).code);
            trackEvent('code_editor_control_click', 'click_event', 'TS_TO_JS');
          }}
          className="ws-code-editor-control"
        />
      }
      {code !== originalCode &&
        <CodeEditorControl
          icon={<ReplyAllIcon />}
          aria-label={undoAllLabel}
          toolTipText={undoAllLabel}
          onClick={() => {
            setCode(originalCode);
            trackEvent('code_editor_control_click', 'click_event', 'RESET_CODE');
          }}
          className="ws-code-editor-control"
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
