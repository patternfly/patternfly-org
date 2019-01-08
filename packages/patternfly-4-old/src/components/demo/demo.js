import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import styles from './demo.styles';
import copy from 'clipboard-copy';
import Link from 'gatsby-link';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { okaidia } from 'react-syntax-highlighter/styles/prism';

function getDemo(props) {
  return {
    title: 'PatternFly demo',
    description: props.githubLocation,
    dependencies: getDependencies(props.raw),
    files: {
      'demo.js': props.raw,
      'index.js': `
import React from 'react';
import { render } from 'react-dom';
import Demo from './demo';

const rootElement = document.querySelector('#root');
if (rootElement) {
  render(<Demo />, rootElement);
}
      `,
      'index.html': `
<body>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <div id="root"></div>
</body>
      `
    }
  };
}

function getDemoCodePen(props) {
  let JSONstring = JSON.stringify(props.raw);
  // Quotes will screw up the JSON
  // .replace(/"/g, "&​quot;") // careful copy and pasting, I had to use a zero-width space here to get markdown to post this.
  // .replace(/'/g, "&apos;");
  JSONstring = `${JSONstring} React.render(<Example1 />, document.getElementById('app'));`;
  return {
    title: 'PatternFly demo',
    description: props.githubLocation,
    head: "<meta name='viewport' content='width=device-width'>",
    css_pre_processor: 'sass',
    css_prefix: 'autoprefixer',
    js_pre_processor: 'babel',
    css_external: 'http://yoursite.com/style.css',
    js_external:
      'https://unpkg.com/react@16/umd/react.production.min.js;https://unpkg.com/react-dom@16/umd/react-dom.production.min.js',
    html: "<div id='app'></app>",
    js: props.raw
  };
}

function getDependencies(raw) {
  const deps = {
    '@patternfly/react-core': 'latest',
    'prop-types': 'latest',
    'react-dom': 'latest',
    react: 'latest'
  };
  const re = /^import\s.*\sfrom\s+'([^']+)'/gm;
  let m;
  // eslint-disable-next-line no-cond-assign
  while ((m = re.exec(raw))) {
    // handle scope names
    const name =
      m[1].charAt(0) === '@'
        ? m[1].split('/', 2).join('/')
        : m[1].split('/', 1)[0];
    deps[name] = deps[name] || 'latest';
  }
  return deps;
}

function addHiddenInput(form, name, value) {
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = name;
  input.value = value;
  form.appendChild(input);
}

class Demo extends React.Component {
  state = {
    codeOpen: false
  };

  handleClickCodeOpen = () => {
    this.setState(state => ({
      codeOpen: !state.codeOpen
    }));
  };

  handleClickCopy = () => {
    copy(this.props.raw);
  };

  handleClickCodePen = () => {
    const demo = getDemoCodePen(this.props);
    const form = document.createElement('form');
    form.method = 'POST';
    form.target = '_blank';
    form.action = 'https://codepen.io/pen/define/';
    addHiddenInput(form, 'data', JSON.stringify(demo));
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  handleClickStackBlitz = () => {
    const demo = getDemo(this.props);
    const form = document.createElement('form');
    form.method = 'POST';
    form.target = '_blank';
    form.action = 'https://stackblitz.com/run';
    addHiddenInput(form, 'project[template]', 'javascript');
    addHiddenInput(form, 'project[title]', demo.title);
    addHiddenInput(form, 'project[description]', demo.description);
    addHiddenInput(
      form,
      'project[dependencies]',
      JSON.stringify(demo.dependencies)
    );
    Object.entries(demo.files).forEach(([key, value]) => {
      addHiddenInput(form, `project[files][${key}]`, value);
    });
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  getComponentApis = raw => {
    // const importRegex = /import(?:["'\s]*([\w*{}\n, ]+)from\s*)?["'\s].*([@\w/_-]+)["'\s].*/;
    // const matches = raw.match(importRegex);
    let components = [];
    const outerEndPos = raw.search('@patternfly/react-core');
    const outerStartPos = raw.lastIndexOf('import', outerEndPos);
    const bracesSearch = raw
      .substring(outerStartPos, outerEndPos)
      .match(/(\{.*?\})/); // { ... }
    if (bracesSearch && bracesSearch.length > 0) {
      const braces = bracesSearch[0];
      const componentsArr = braces.substring(1, braces.length - 1).split(','); // ...
      components = componentsArr.map((item, index) => {
        // Remove whitespace
        item = item.trim();
        return item;
      });
    }
    return components;
  };

  render() {
    const { raw, github } = this.props;
    const { codeOpen } = this.state;
    const SOURCE_CODE_ROOT_URL =
      'https://github.com/patternfly/patternfly-react/blob/master/packages/react-docs/src/pages/';
    const githubLocation = `${SOURCE_CODE_ROOT_URL}${github}`;
    const componentApis = this.getComponentApis(raw);

    return (
      <div className={css(styles.example)}>
        <div className={css(styles.toolbar)}>
          <Button onClick={this.handleClickCodeOpen} variant="plain">
            <i className="fas fa-code" />
          </Button>
          <Button onClick={this.handleClickCopy} variant="plain">
            <i className="fas fa-copy" />
          </Button>
          <a href={githubLocation} target="_blank">
            <Button variant="plain">
              <i className="fab fa-github" />
            </Button>
          </a>
          <Button onClick={this.handleClickStackBlitz} variant="plain">
            <i className="fas fa-edit" />
          </Button>
        </div>
        {codeOpen && (
          <SyntaxHighlighter language='javascript' style={okaidia}>{raw}</SyntaxHighlighter>
        )}
        <div className={css(this.props.className)}>
          {this.props.children}
        </div>
        <br />
        <div>
          <span className={css(styles.componentApiTitle)}>Components:</span>
          {componentApis &&
            componentApis.map((api, index) => (
              <Link
                to={`/docs/api/${api}`}
                key={`github ${api} ${index}`}
                className={css(styles.componentApi)}
              >
                <Badge>{api}</Badge>
              </Link>
            ))}
        </div>
      </div>
    );
  }
}

Demo.propTypes = {
  children: PropTypes.node.isRequired,
  raw: PropTypes.string.isRequired,
  github: PropTypes.string,
  className: PropTypes.string
};

Demo.defaultProps = {
  github: '',
  className: ''
};

export default Demo;