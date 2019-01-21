import React from 'react';
import TheExample from '../../example'
import ReactDOMServer from 'react-dom/server';
import pretty from 'pretty';

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
    this.state = { isFull: false, codeView: 'source' };
  }

  componentDidMount() {
    let showComponent = true;
    if (window.location.search !== '') {
      // specific component was requested - make sure it matches
      const queryObject = Example.parseQueryString(window.location.search.substr(1));
      if (queryObject.component !== encodeURI(this.props.heading)) {
        showComponent = false;
      }
    }

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      isFull: window.location.pathname.indexOf('-full') > 0,
      showComponent
    });
  }

  showView(codeView) {
    this.setState(prevState => ({
      codeView
    }));
  }

  render() {
    const {
      heading,
      description,
      children,
      fullPageOnly,
      minHeight
    } = this.props;
    const output = { __html: this.props.children };

    const sourceOutput =
      typeof children === 'string' ? children : ReactDOMServer.renderToStaticMarkup(children).replace(/ "/g, '"');
    const indentedOutput = pretty(sourceOutput, { ocd: true });
    if (!this.state.isFull) {
      return (
        <TheExample live={false} title={heading} description={description} raw={indentedOutput} editorLanguage="html" editorClassName="GeneratedSource__pre language-html" showPreviewOptions coreExample={children} previewFullPageOnly={fullPageOnly} previewMinHeight={minHeight}>
          {children}
          {/* <div className={`Example ${className}`}>
            <div className="Example__section">
              <Preview isViewport={isViewport} heading={heading} fullPageOnly={fullPageOnly} minHeight={minHeight}>
                {children}
              </Preview>
            </div>
            <div className="Example__section">
              {navigationItems && (
                <div className="Example__componentLink">
                  Components and Layouts used: <ul>{navigationItems}</ul>
                </div>
              )}
            </div>
            {htmlDocs && (
              <div className="Example__documentation">
                <p className="Example__documentation--text" dangerouslySetInnerHTML={htmlDocs} />
              </div>
            )}
          </div> */}
        </TheExample>
      );
    } else if (this.state.showComponent) {
      return <div dangerouslySetInnerHTML={output} />;
    }
    return null;
  }
}
