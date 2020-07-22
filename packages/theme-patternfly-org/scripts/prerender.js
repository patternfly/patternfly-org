const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { ServerLocation } = require('@reach/router');
// react, react-dom, and @reach/router are all EXCLUDED from the ssr-bundle.js
// The versions imported above are used instead, which allows us to use <ServerLocation>
const app = require(`${process.cwd()}/.cache/ssr-build/ssr-bundle`);
const { pathPrefix } = require(`${process.cwd()}/patternfly-docs.config`);

module.exports = url => {
  url = `${pathPrefix}${url}`;
  global.location = {
    pathname: url
  };
  
  const string = ReactDOMServer.renderToString(
    React.createElement(ServerLocation, {url},
      React.createElement(app.App, { url })
    )
  );

  return string;
}
