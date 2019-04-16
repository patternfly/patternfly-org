import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import EditorToolbar from './editorToolbar';

class LiveEdit extends React.Component {
  constructor(props) {
    super(props);
    // Our children are elements inside a <code> tag created from rendered markdown
    this.code = this.props.children;
    // This is injected in src/components/mdx-renderer
    this.scope = this.getScope();
    this.state = {
      copied: false,
      darkMode: false
    };
  }

  onDarkModeChange = () => {
    this.setState({darkMode: !this.state.darkMode});
  };

  transformCode(code) {
    if (typeof code !== 'string') {
      return;
    }
    // These don't actually do anything except make Buble mad
    const toParse = code
      .replace(/^\s*import.*from.*/gm, '') // single line import
      .replace(/^\s*import\s+{[\s\S]+?}\s+from.*/gm, '') // multi line import
      .replace(/^\s*export.*;/gm, '') // single line export
      .replace(/export default/gm, '') // inline export

    return toParse;
  }

  onCopy = () => {
    const el = document.createElement('textarea');
    el.value = this.code;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.setState({ copied: true });
  }

  render() {
    const ExamplePreview = (
      <div className={css(className, 'example')}>
        <Preview viewport={this.state.viewport} />
      </div>
    );

    const fullPath = fullPageOnly ? path : typeof window !== 'undefined' && `${
      window.location.href.substr(0, window.location.href.length - (endsWithSlash ? 1 : 0))}/examples/${
      paramCase(path.split('/').slice(-1)[0].slice(0, -3))}`

    if (GATSBY_LIVE_EXAMPLES && this.props.className === 'language-js') {
      return (
        <React.Fragment>
          <ExamplePreview />
          <LiveProvider code={this.code} scope={this.scope} transformCode={this.transformCode}>
            <LivePreview className={css(className, 'example', this.darkMode ? 'pf-t-dark pf-m-opaque-200' : '')} />
            <EditorToolbar
              raw={this.code}
              editor={<LiveEditor className={css('code')} ignoreTabKey />}
              fullPath={fullPath}
              onLightsChange={this.onDarkModeChange} />
            <LiveError />
          </LiveProvider>
        </React.Fragment>
      );
    }
    else if (this.props.className === 'language-nolive') {
      return (
        <React.Fragment>
          <ExamplePreview />
          <LiveProvider code={this.code} disabled>
            <LiveEditor className={css('code')} contentEditable={false} />
          </LiveProvider>
        </React.Fragment>
      );
    }
    else {
      return <strong>{this.code}</strong>;
    }
  }
}

export default LiveEdit;
