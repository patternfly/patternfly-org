import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import AutoLinkHeader from '@content/AutoLinkHeader';
import LiveDemo from './liveDemo';
import Section from '../section';
import Preview from '../_core/Preview';
import LinkPreview from '../LinkPreview';
// import ComponentItems from '../_core/Example/ComponentItems';

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  fullPageOnly: PropTypes.bool,
  name: PropTypes.string,
  raw: PropTypes.string,
  path: PropTypes.string,
  images: PropTypes.array,
  live: PropTypes.bool,
  liveScope: PropTypes.object,
  showPreviewOptions: PropTypes.bool,
  className: PropTypes.string
};

const defaultProps = {
  description: '',
  fullPageOnly: false,
  title: '',
  name: '',
  raw: '',
  path: '',
  images: [],
  live: true,
  liveScope: {},
  showPreviewOptions: false,
  className: ''
};

const GATSBY_LIVE_EXAMPLES = process.env.GATSBY_LIVE_EXAMPLES === 'true';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      viewport: '', 
      fullPath: '', 
      lights: true
    };
  }

  onViewportChange = viewport => {
    this.setState({viewport});
  };

  onLightsChange = lights => {
    this.setState({lights});
  };

  render() {
    const {
      children,
      title,
      description,
      fullPageOnly,
      name,
      raw,
      path,
      images,
      live,
      liveScope,
      showPreviewOptions,
      className,
      data,
      ...props
    } = this.props;

    if (fullPageOnly) {
      const pathName = typeof window !== 'undefined' ? window.location.pathname : '';
      const exampleName = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      const separator = pathName.endsWith('/') ? '' : '/';
      const pathStart = `${pathName}${separator}`;
      const path = `${pathStart}examples/${exampleName}`;
      return (
        <Section>
          <AutoLinkHeader size="lg" is="h3">{title}</AutoLinkHeader>
          <LiveDemo raw={raw.trim()} path={path} fullPageOnly live={false} className={className}>
            <LinkPreview name={title} path={path} />
          </LiveDemo>
        </Section>
      );
    }

    return (
      <div className="ws-example">
        {GATSBY_LIVE_EXAMPLES ? (
          <React.Fragment>
            {!live && <div className={css(className, 'example')} {...props}>
              <Preview viewport={this.state.viewport} lights={this.state.lights}>
                {children}
              </Preview>
              </div>}
            <LiveDemo title={title} description={description} raw={raw.trim()} path={path} images={images} live={live} liveScope={liveScope} className={className} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className={css(className, 'example')} {...props}>
              <Preview viewport={this.state.viewport}>
                {children}
              </Preview>
            </div>
            <LiveDemo title={title} description={description} raw={raw.trim()} path={path} live={false} className={className} />
          </React.Fragment>
        )}
      </div>
    );
  }

}

Example.propTypes = propTypes;
Example.defaultProps = defaultProps;

export default Example;