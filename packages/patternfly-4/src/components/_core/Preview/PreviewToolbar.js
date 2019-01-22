import React from 'react';
import { Link } from 'gatsby';
import './styles.scss';

export default class PreviewToolbar extends React.Component {
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

  activateViewport(viewportType) {
    this.setState(prevState => {
      const viewport = prevState.viewport === `is-${viewportType}` ? '' : `is-${viewportType}`;
      this.props.onViewportChange && this.props.onViewportChange(viewport);
      return {
        viewport: viewport
      };
    });
  }

  toggleLights() {
    this.setState(prevState => {
      const lights = !prevState.lights
      this.props.onLightsChange && this.props.onLightsChange(lights);
      return {
        lights: lights
      };
    });
  }

  renderFullPageLink() {
    return (
      <Link to={this.state.fullPath} target="_blank" title="Open in new window" className="Preview__viewport-link">
        <i className="fas fa-external-link-alt" />
      </Link>
    );
  }

  render() {
    const { viewport = '' } = this.props;
    return (
      <div className={`Preview ${viewport}`}>
        <div className="Preview__header">
          <button className="Preview__viewport-toggle is-xs-toggle" onClick={() => this.activateViewport('xs')}>
            <i className="fas fa-mobile-alt" />
          </button>
          <button className="Preview__viewport-toggle is-sm-toggle" onClick={() => this.activateViewport('sm')}>
            <i className="fas fa-mobile-alt" />
          </button>
          <button className="Preview__viewport-toggle is-md-toggle" onClick={() => this.activateViewport('md')}>
            <i className="fas fa-tablet-alt" />
          </button>
          <button className="Preview__viewport-toggle is-lg-toggle" onClick={() => this.activateViewport('lg')}>
            <i className="fas fa-desktop" />
          </button>
          <button className="Preview__viewport-toggle is-xl-toggle" onClick={() => this.activateViewport('xl')}>
            <i className="fas fa-desktop" />
          </button>
          <button
            className="Preview__viewport-background-toggle"
            onClick={() => this.toggleLights()}
            title="Toggle dark theme"
          >
            <i className="fas fa-adjust" />
          </button>
          {this.renderFullPageLink()}
        </div>
      </div>
    );
  }
}
