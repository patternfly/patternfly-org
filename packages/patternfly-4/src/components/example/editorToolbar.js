import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { Button, TextContent, Text } from '@patternfly/react-core';
import { CodeIcon, CopyIcon } from '@patternfly/react-icons';
import copy from 'clipboard-copy';

const propTypes = {
  className: PropTypes.string,
  raw: PropTypes.string.isRequired,
  editor: PropTypes.element.isRequired,
  path: PropTypes.string,
  live: PropTypes.bool,
  onToggle: PropTypes.func,
  onCopy: PropTypes.func,
  showMessage: PropTypes.bool
};

const defaultProps = {
  className: '',
  path: '',
  live: true,
  onToggle: null,
  onCopy: null,
  showMessage: true
};

class EditorToolbar extends React.Component {
  state = {
    codeOpen: false,
    showCopyMessage: false
  };

  handleClickCodeOpen = () => {
    const codeOpen = !this.state.codeOpen;
    this.setState({
      codeOpen
    });
    this.props.onToggle && this.props.onToggle(codeOpen);
  };

  handleClickCopy = () => {
    copy(this.props.raw);
    this.props.onCopy && this.props.onCopy(this.props.raw);
    this.setState({
      showCopyMessage: true
    });
    setTimeout(() => {
      this.setState({
        showCopyMessage: false
      });
    }, 2000);
  };

  render() {
    // eslint-disable-next-line
    const { editor, live, path: examplePath, showMessage } = this.props;
    const { codeOpen, showCopyMessage } = this.state;

    return (
      <>
        <div className={css('toolbar')}>
          <Button
            onClick={this.handleClickCodeOpen}
            variant="plain"
            title="Toggle code"
            aria-label="Toggle code"
          >
            <CodeIcon />
          </Button>
          <Button
            onClick={this.handleClickCopy}
            variant="plain"
            title="Copy code"
            aria-label="Copy code"
          >
            <CopyIcon />
          </Button>
          {/* <a href={examplePath} target="_blank" rel="noopener noreferrer">
            <Button
              variant="plain"
              title="View on GitHub"
              aria-label="View on GitHub"
            >
              <i className={css('fab fa-github')} />
            </Button>
          </a> */}
          <TextContent className={css('message', showCopyMessage && 'messageShow')}>
            <Text component="pre" className={css('messageText')}>
              Copied to clipboard
            </Text>
          </TextContent>
          {codeOpen &&
            !live && showMessage && (
              <TextContent className={css('messageShow')}>
                <Text component="pre" className={css('messageText')}>
                  Live edititing disabled
                </Text>
              </TextContent>
            )}
        </div>
        {codeOpen && editor}
      </>
    );
  }
}

EditorToolbar.propTypes = propTypes;
EditorToolbar.defaultProps = defaultProps;

export default EditorToolbar;
