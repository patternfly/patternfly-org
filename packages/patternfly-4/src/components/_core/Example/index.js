import React from 'react';
import ReactDOMServer from 'react-dom/server';
import pretty from 'pretty';
import { css } from '@patternfly/react-styles';
import Preview from '../Preview';
import ComponentItems from './ComponentItems';
import AutoLinkHeader from '@content/AutoLinkHeader';
import EditorToolbar from '../../example/editorToolbar';
import { Editor } from 'react-live';
import { Location } from '@reach/router';

export default class Example extends React.Component {
  static parseQueryString(queryString) {
    const params = {};
    let temp;
    let i;
    let l;
    // Split into key/value pairs
    const queries = queryString.split('&');
    // Convert the array of strings into an object
    for (i = 0, l = queries.length; i < l; i++) {
      temp = queries[i].split('=');
      params[temp[0]] = temp[1];
    }
    return params;
  }

  constructor(props) {
    super(props);
    this.state = { viewport: '', lights: true };
  }

  onViewportChange = viewport => {
    this.setState({viewport});
  };

  onLightsChange = lights => {
    this.setState({lights});
  };

  render() {
    const {
      heading,
      description,
      className = '',
      children,
      fullPageOnly,
      minHeight
    } = this.props;
    return (
      <Location>
        {({ location }) => {
          if (location.search.length) {
            // requesting full screen view of an example
            const queryObject = Example.parseQueryString(location.search.substr(1));
            if (queryObject.component !== encodeURI(this.props.heading)) {
              return null;
            } else {
              return (
                <Preview className={className} heading={heading} viewport={this.state.viewport} lights={this.state.lights} fullPageOnly={fullPageOnly} minHeight={minHeight}>
                  {children}
                </Preview>
              );
            }
          }
          
          const sourceOutput =
            typeof children === 'string' ? children : ReactDOMServer.renderToStaticMarkup(children).replace(/ "/g, '"');
          const indentedOutput = pretty(sourceOutput, { ocd: true });
          const editor = (
            <div className="code">
              <Editor 
                theme={{
                  /* disable theme so we can use the global one imported in gatsby-browser.js */
                  plain: {},
                  styles: []
                }}
                code={indentedOutput}
                language="jsx"
                readOnly
              />
            </div>
          );
          const endsWithSlash = location.href && location.href.substr(-1) === '/';
          const fullPath = location.href && `${location.href.substr(0, location.href.length - (endsWithSlash ? 1 : 0))}-full/?component=${heading}`;
          return (
            <div className="ws-live-demo">
              <AutoLinkHeader size="lg" is="h4" className="ws-example-heading">{heading}</AutoLinkHeader>
              {Boolean(description) && <p className="pf-c-content" dangerouslySetInnerHTML={{ __html: description }} />}
              <Preview className={className} heading={heading} viewport={this.state.viewport} lights={this.state.lights} fullPageOnly={fullPageOnly} minHeight={minHeight}>
                {children}
              </Preview>
              <ComponentItems children={children} className={css('example')} />
              <EditorToolbar editor={editor} raw={indentedOutput} live={false} showMessage={false} fullPath={fullPath} showLights={false} onLightsChange={this.onLightsChange}/>
            </div>
          );
        }}
        </Location>
    );
  }
}
