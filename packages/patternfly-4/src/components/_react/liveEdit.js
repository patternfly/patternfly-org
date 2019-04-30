import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { css } from '@patternfly/react-styles';
import EditorToolbar from '../example/editorToolbar';

class LiveEdit extends React.Component {
  constructor(props) {
    super(props);
    // Our children are elements inside a <code> tag created from rendered markdown
    this.code = props.children;
    // This is injected in src/components/mdx-renderer
    this.scope = props.scope || this.getScope();
    this.state = {
      copied: false,
      darkMode: false,
    };
  }

  onDarkModeChange = () => {
    this.setState({darkMode: !this.state.darkMode});
  };

  static transformCode(code) {
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
    const noLive = this.props.className === 'language-nolive';

    if (noLive || this.props.className === 'language-js') {
      return (
        <LiveProvider
          code={this.code}
          scope={this.scope}
          transformCode={LiveEdit.transformCode}
          disabled={noLive}
        >
          {!noLive &&
            <LivePreview className={css('example', this.darkMode ? 'pf-t-dark pf-m-opaque-200' : '')} />}
          <EditorToolbar
            raw={this.code}
            showLights={false}
            editor={<LiveEditor className={css('code')} />}
            onLightsChange={this.onDarkModeChange} />
          {!noLive && <LiveError />}
        </LiveProvider>
      );
    }
    else {
      return <strong>{this.code}</strong>;
    }
  }
}

export default LiveEdit;
