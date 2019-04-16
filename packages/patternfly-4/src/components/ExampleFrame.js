import React from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

const propTypes = {
  path: PropTypes.string.isRequired
};

class ExampleFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      contentHeight: 500,
      loading: true
    };
  }

  hideSpinner = () => {
    this.setState({
      loading: false
    });
  };

  handleResize = () => {
    const { body, documentElement } = this.container.contentWindow.document;
    debugger;
    const contentHeight = Math.max(
      body.clientHeight,
      body.offsetHeight,
      body.scrollHeight,
      documentElement.clientHeight,
      documentElement.offsetHeight,
      documentElement.scrollHeight
    );
    if (contentHeight !== this.state.contentHeight) {
      this.setState({ contentHeight });
    }
  };

  onLoad = () => {
    this.hideSpinner();
    this.container.contentWindow.addEventListener('resize', this.handleResize);
    this.handleResize();
  }
  
  componentWillUnmount() {
    this.container.contentWindow.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { path } = this.props;
    const { contentHeight, loading } = this.state;
    return (
      <>
        {loading && (
          <Spinner name="cube-grid" fadeIn="none" allow="fullscreen" />
        )}
        <iframe
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          onLoad={this.onLoad}
          ref={(container) => { this.container = container; }}
          scrolling="no"
          src={path}
          className="ws-full-page-example"
          style={{ height: `${contentHeight}px` }}
        />
      </>
    );
  }
}

ExampleFrame.propTypes = propTypes;

export default ExampleFrame;