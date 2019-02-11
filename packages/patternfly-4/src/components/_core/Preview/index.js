import React from 'react';
import './styles.scss';

export default class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fullPath: '' };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    const endsWithSlash = window.location.pathname.substr(-1) === '/';
    this.setState({
      fullPath: `${window.location.pathname.substr(0, window.location.pathname.length - (endsWithSlash ? 1 : 0))}-full?component=${
        this.props.heading
      }`
    });
  }

  render() {
    const { children, fullPageOnly, isViewport, viewport = '', lights = true, minHeight } = this.props;
    const output = { __html: children };
    const background = lights ? '' : 'pf-t-dark pf-m-opaque-200';
    const preview = fullPageOnly ? (
      <div className="Preview__body ">
        This Preview can only be accessed in&nbsp;
        <a href={this.state.fullPath} target="_blank" rel="noopener noreferrer">
          full page mode
        </a>.
      </div>
    ) : (
      <div
        className={`Preview__body ${background} ${isViewport ? 'is-viewport' : ''}`}
        style={{ minHeight: minHeight }}
        dangerouslySetInnerHTML={output}
      />
    );
    return (
      <div className={`Preview ${viewport}`}>
        {preview}
      </div>
    );
  }
}
