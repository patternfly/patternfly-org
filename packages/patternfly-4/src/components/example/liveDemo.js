import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import * as TableComponents from '@patternfly/react-table';
import * as ChartComponents from '@patternfly/react-charts';
import * as CoreComponents from '@patternfly/react-core';
import * as CoreIcons from '@patternfly/react-icons';
import * as StyledSystemComponents from '@patternfly/react-styled-system';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { transform } from 'babel-standalone';
import Section from '../section';
import EditorToolbar from './editorToolbar';
import classNames from 'classnames';
import PreviewToolbar from '../PreviewToolbar/PreviewToolbar';
import paramCase from 'param-case';

const propTypes = {
  className: PropTypes.string,
  raw: PropTypes.string.isRequired,
  path: PropTypes.string,
  images: PropTypes.array,
  live: PropTypes.bool,
  liveScope: PropTypes.object,
  fullPageOnly: PropTypes.bool,
  children: PropTypes.node
};

const defaultProps = {
  className: '',
  path: '',
  images: [],
  live: true,
  liveScope: {},
  fullPageOnly: false,
  children: null
};

const scopePlayground = { React, ...TableComponents, ...ChartComponents, ...StyledSystemComponents, ...CoreComponents, ...CoreIcons, css };

const transformCode = code => {
  try {
    // LiveEditor doesn't work properly with these so need to remove
    code = code.replace(/^import(.|\s)*?;$/gm, '');
    code = code.replace(/^\s*export default class/gm, 'class');
    code = code.replace(/^\s*\/\/.*$/gm, '');
    code = code.replace(/extends Component/gm, 'extends React.Component');
    code = code.replace(/^\s*export.*$/gm, '');
    code = code.replace(/^\s*static(.|\s)*?;$/gm, '');
    let transformedCode = transform(code, {
      presets: ['react', 'stage-2']
    }).code;
    transformedCode = transformedCode.replace(/"use strict";/gm, '');
    return transformedCode;
  } catch (e) {
    console.log(e);
    // todo: handle error
    return code;
  }
};

class LiveDemo extends React.Component {
  state = {
    lights: true
  };

  onLightsChange = lights => {
    this.setState({lights});
  };

  render() {
    const { className, raw, images, live, liveScope, path, fullPageOnly, children } = this.props;
    const { lights } = this.state;

    const scope = {
      ...scopePlayground,
      ...liveScope
    };
    for (const image of images) {
      const searchIndex = raw.search(image.name);
      if (searchIndex > -1) {
        const startIndex = raw.lastIndexOf('import', searchIndex);
        const importName = raw.substring(startIndex, searchIndex).split(' ')[1];
        scope[importName] = image.file;
      }
    }

    const GITHUB_BASE = 'https://github.com/patternfly/patternfly-react/blob/master/packages/patternfly-4';
    const examplePath = `${GITHUB_BASE}${path.substr(9)}`;

    const endsWithSlash = typeof window !== 'undefined' && window.location.href.substr(-1) === '/';
    const fullPath = fullPageOnly ? path : typeof window !== 'undefined' && `${window.location.href.substr(0, window.location.href.length - (endsWithSlash ? 1 : 0))}/examples/${
      paramCase(path.split('/').slice(-1)[0].slice(0, -3))
    }`

    const editor = <LiveEditor className={css('code')} ignoreTabKey contentEditable={live} />;

    const darkThemeClasses =
      classNames({
        'pf-t-dark pf-m-opaque-200': !lights,
      });

    return (
      <Section className="ws-live-demo">
        <LiveProvider code={raw} scope={scope} transformCode={transformCode}>
          <PreviewToolbar fullPath={fullPath} showLights={!fullPageOnly} showViewports={false} onLightsChange={this.onLightsChange}/>
          {live && <LivePreview className={css(className, 'example', darkThemeClasses)} />}
          {children}
          <EditorToolbar editor={editor} raw={raw} path={examplePath} />
          {live && <LiveError />}
        </LiveProvider>
      </Section>
    );
  }
}

LiveDemo.propTypes = propTypes;
LiveDemo.defaultProps = defaultProps;

export default LiveDemo;
