import React from 'react';
import './styles.scss';

export default class PreviewToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fullPath: '', lights: true };
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
      <a href={this.props.fullPath} target="_blank" rel="noopener noreferrer" title="Open in new window" className="Preview__viewport-link">
        <i className="fas fa-external-link-alt" />
      </a>
    );
  }

  render() {
    const { viewport = '', showViewports = true, showLights = true } = this.props;
    return (
      <div className={`Preview ${viewport}`}>
        <div className="Preview__header">
          {
          showViewports &&
            <>
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
            </>
          }
          {showLights && <button
            className="Preview__viewport-background-toggle"
            onClick={() => this.toggleLights()}
            title="Toggle dark theme"
          >
            <i className="fas fa-adjust" />
          </button>}
          {this.renderFullPageLink()}
        </div>
      </div>
    );
  }
}
