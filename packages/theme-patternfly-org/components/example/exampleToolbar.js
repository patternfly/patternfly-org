import React from 'react';
import { Button, Form, TextContent, Text } from '@patternfly/react-core';
import CopyIcon from '@patternfly/react-icons/dist/js/icons/copy-icon';
import AsleepIcon from '@patternfly/react-icons/dist/js/icons/asleep-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';
import CodepenIcon from '@patternfly/react-icons/dist/js/icons/codepen-icon';
import { copy } from '../../helpers/copy';
import './exampleToolbar.css';

export class ExampleToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.toCopy = props.code;
  }

  state = {
    codeOpen: false,
    openLang: null,
    showCopyMessage: false,
  };

  onCopy = () => {
    copy(this.props.code);

    this.setState({
      showCopyMessage: true
    });
    setTimeout(() => {
      this.setState({
        showCopyMessage: false
      });
    }, 2000);
  };

  onLanguageChange = lang => {
    this.setState({
      codeOpen: this.state.codeOpen && this.state.openLang === lang ? false : true,
      openLang: lang
    });

    if (this.props.onLanguageChange) {
      this.props.onLanguageChange(lang);
    }
  }

  render() {
    const { editor, fullscreenLink, codeBoxParams, supportedLangs, onDarkmodeChange, isFullscreen, hideDarkMode, componentName } = this.props;
    const { codeOpen, showCopyMessage } = this.state;
    return (
      <React.Fragment>
        <div>
          {supportedLangs.map(lang => 
            <Button
              key={lang}
              onClick={() => this.onLanguageChange(lang)}
              variant="plain"
              title={`Toggle ${componentName} ${lang} code`}
              aria-label={`Toggle ${componentName} ${lang} code`}
              aria-expanded={codeOpen}
            >
              {lang.toUpperCase()}
            </Button>
          )}
          <Button
            onClick={this.onCopy}
            variant="plain"
            aria-label={`Copy ${componentName} code`}
          >
            <CopyIcon />
          </Button>
          {!isFullscreen && !hideDarkMode &&
            <Button
              onClick={onDarkmodeChange}
              variant="plain"
              aria-label="Toggle Dark Theme"
            >
              <AsleepIcon />
            </Button>
          }
          {codeBoxParams &&
            <Form
              aria-label={`Open ${componentName} example in CodeSandbox`}
              action="https://codesandbox.io/api/v1/sandboxes/define"
              method="POST"
              target="_blank"
              style={{display: "inline-block"}}
            >
              <Button
                aria-label={`Open ${componentName} example in CodeSandbox`}
                variant="plain"
                type="submit"
              >
                <input type="hidden" name="parameters" value={codeBoxParams} />
                <CodepenIcon />
              </Button>
            </Form>
          }
          {fullscreenLink &&
            <Button
              component="a"
              href={fullscreenLink} 
              target="_blank"
              rel="noopener noreferrer"
              variant="plain"
              aria-label={`Open ${componentName} example in new window`} //add component?
            >
              <ExternalLinkAltIcon />
            </Button>
          }
          {showCopyMessage &&
            <TextContent>
              <Text component="pre" className="ws-org-messageText">
                Copied to clipboard
              </Text>
            </TextContent>
          }
        </div>
        {codeOpen && editor}
      </React.Fragment>
    );
  }
}
