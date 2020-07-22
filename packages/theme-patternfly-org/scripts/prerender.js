// We must use the same version of these as the bundle.
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { ServerLocation } = require('@reach/router');
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
