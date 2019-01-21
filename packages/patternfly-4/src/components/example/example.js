import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from './example.styles';
import PropTypes from 'prop-types';
import { Title } from '@patternfly/react-core';
import LiveDemo from './liveDemo';
import Link from 'gatsby-link';
import Section from '../section';
import PreviewToolbar from '../_core/Preview/PreviewToolbar';
import Preview from '../_core/Preview';
import ComponentItems from '../_core/Example/ComponentItems';

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  editorClassName: PropTypes.string,
  fullPageOnly: PropTypes.bool,
  name: PropTypes.string,
  raw: PropTypes.string,
  path: PropTypes.string,
  images: PropTypes.array,
  live: PropTypes.bool,
  liveScope: PropTypes.object,
  editorLanguage: PropTypes.string,
  showPreviewOptions: PropTypes.bool,
  coreExample: PropTypes.any,
  previewFullPageOnly: PropTypes.bool,
  previewMinHeight: PropTypes.string,
  examplePath: PropTypes.string
};

const defaultProps = {
  editorClassName: '',
  description: '',
  fullPageOnly: false,
  title: '',
  name: '',
  raw: '',
  path: '',
  images: [],
  live: true,
  liveScope: {},
  editorLanguage: 'jsx',
  showPreviewOptions: false,
  coreExample: null,
  previewFullPageOnly: false,
  previewMinHeight: '',
  examplePath: ''
};

const GATSBY_LIVE_EXAMPLES = process.env.GATSBY_LIVE_EXAMPLES === 'true';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { viewport: '', fullPath: '', lights: true };
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
      editorClassName,
      fullPageOnly,
      name,
      raw,
      path,
      images,
      live,
      liveScope,
      editorLanguage,
      showPreviewOptions,
      coreExample,
      previewFullPageOnly,
      previewMinHeight,
      examplePath,
      ...props
    } = this.props;
    const makeDescription = html => ({
      __html: html
    }); // Display full page link

    if (fullPageOnly) {
      const pathName = typeof window !== 'undefined' ? window.location.pathname : '';
      const exampleName = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      const separator = pathName.endsWith('/') ? '' : '/';
      const pathStart = `${pathName}${separator}`;
      const path = `/${pathStart}/examples/${exampleName}`;
      return <Section>
        <Title size="lg" headingLevel="h3">{title}</Title>
        <div className={css(styles.example)} {...props}>
          This example can only be accessed in&nbsp;
          <Link target="_blank" to={path}>
            full page mode
          </Link>
          .
        </div>
        <LiveDemo raw={raw.trim()} path={examplePath} live={false} editorLanguage={editorLanguage} />
      </Section>;
    }

    return (
      <div>
        <Title size="lg">{title}</Title>
        {showPreviewOptions && <PreviewToolbar onViewportChange={this.onViewportChange} onLightsChange={this.onLightsChange}/>}
        {Boolean(description) && <p className={css(styles.description)} dangerouslySetInnerHTML={makeDescription(description)} />}
        {GATSBY_LIVE_EXAMPLES ? <React.Fragment>
            {!live && <div className={css(styles.example)} {...props}>
              <Preview viewport={this.state.viewport} lights={this.state.lights} fullPageOnly={previewFullPageOnly} minHeight={previewMinHeight}>
                {children}
              </Preview>
              {coreExample && <ComponentItems children={coreExample} />}
              </div>}
            <LiveDemo raw={raw.trim()} path={examplePath} images={images} className={editorClassName} live={live} liveScope={liveScope} editorLanguage={editorLanguage} />
          </React.Fragment> : <React.Fragment>
            <div className={css(styles.example)} {...props}>
              <Preview viewport={this.state.viewport}>
                {children}
              </Preview>
            </div>
            <LiveDemo raw={raw.trim()} path={examplePath} live={false} editorLanguage={editorLanguage} />
          </React.Fragment>}
      </div>
    );
  }

}

Example.propTypes = propTypes;
Example.defaultProps = defaultProps;

export default Example;
