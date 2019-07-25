import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { Button, TextContent, Text } from '@patternfly/react-core';
import { CodeIcon, CopyIcon, AsleepIcon, ExternalLinkAltIcon } from '@patternfly/react-icons';
import copy from 'clipboard-copy';

const propTypes = {
  className: PropTypes.string,
  raw: PropTypes.string.isRequired,
  editor: PropTypes.element.isRequired,
  live: PropTypes.bool,
  onToggle: PropTypes.func,
  onCopy: PropTypes.func,
  showMessage: PropTypes.bool,
  fullPath: PropTypes.string,
  showLights: PropTypes.bool,
  onLightsChange: PropTypes.func
};

const defaultProps = {
  className: '',
  live: true,
  onToggle: null,
  onCopy: null,
  showMessage: true,
  fullPath: '',
  showLights: true,
  onLightsChange: null
};

class EditorToolbar extends React.Component {
  state = {
    codeOpen: false,
    showCopyMessage: false,
    fullPath: '', 
    lights: true
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

  toggleLights = () => {
    this.setState(prevState => {
      const lights = !prevState.lights
      this.props.onLightsChange && this.props.onLightsChange(lights);
      return {
        lights: lights
      };
    });
  };

  render() {
    // eslint-disable-next-line
    const { editor, live, showMessage, showLights } = this.props;
    const { codeOpen, showCopyMessage } = this.state;

    return (
      <>
        <div className={css('toolbar')}>
          <Button
            onClick={this.handleClickCodeOpen}
            variant="plain"
            title="Toggle code"
            aria-label="Toggle code"
            style={{ marginLeft: '-0.5rem' }}
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
          {showLights && <Button
            onClick={this.toggleLights}
            variant="plain"
            title="Toggle Dark Theme"
            aria-label="Toggle Dark Theme"
          >
            <AsleepIcon />
          </Button>}
          {this.props.fullPath &&
            <Button
              component="a"
              href={this.props.fullPath} 
              target="_blank"
              rel="noopener noreferrer"
              variant="plain"
              title="Open in new window"
              aria-label="Open in new window"
            >
              <ExternalLinkAltIcon />
            </Button>}
          <TextContent className={css('message', showCopyMessage && 'messageShow')}>
            <Text component="pre" className={css('messageText')}>
              Copied to clipboard
            </Text>
          </TextContent>
          {codeOpen &&
            !live && showMessage && (
              <TextContent className={css('messageShow')}>
                <Text component="pre" className={css('messageText')}>
                  Live editing disabled
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
