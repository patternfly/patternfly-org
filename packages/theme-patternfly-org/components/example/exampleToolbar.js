import React from 'react';
import { Button, Form, Tooltip } from '@patternfly/react-core';
import { CodeEditor, CodeEditorControl, Language } from '@patternfly/react-code-editor';
import { copy } from '../../helpers/copy';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import CodepenIcon from '@patternfly/react-icons/dist/esm/icons/codepen-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';

function getLanguage(lang) {
  if (lang === 'js') {
    return Language.javascript;
  }

  return lang;
}

export const ExampleToolbar = ({
  fullscreenLink,
  codeBoxParams,
  lang,
  isFullscreen,
  componentName,
  code,
  setCode
}) => {
  const [isEditorOpen, setIsEditorOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  let timer;

  const copyCode = () => {
    copy(code);

    if (timer) {
      clearTimeout(timer);
      setCopied(false);
    }
    setCopied(true, () => {
      timer = setTimeout(() => {
        setCopied(false);
        timer = null;
      }, 2500);
    });
  };

  const copyLabel = 'Copy code to clipboard';
  const languageLabel = `Toggle ${lang.toUpperCase()} code`;
  const codesandboxLabel = 'Open example in CodeSandbox';
  const fullscreenLabel = 'Open example in new window';
  const customControls = isFullscreen ? null : (
    <React.Fragment>
      <CodeEditorControl
        icon={
          <React.Fragment>
            <CodeIcon />
            {' ' + lang.toUpperCase()}
          </React.Fragment>
        }
        onClick={() => setIsEditorOpen(!isEditorOpen)}
        aria-label={languageLabel}
        toolTipText={languageLabel}
        aria-expanded={isEditorOpen}
      />
      <Tooltip
        trigger="mouseenter"
        content={<div>{copied ? 'Code copied' : copyLabel}</div>}
        exitDelay={copied ? 1600 : 300}
        entryDelay={300}
        maxWidth="100px"
        position="top"
      >
        <Button onClick={copyCode} variant="control" aria-label={copyLabel}>
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
        />
      }
    </React.Fragment>
  );

  return (
    <CodeEditor
      customControls={customControls}
      showEditor={isEditorOpen}
      language={getLanguage(lang)}
      height="400px"
      code={code}
      onChange={newCode => setCode(newCode)}
    />
  );
}
