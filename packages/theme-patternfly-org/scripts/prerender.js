const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { ServerLocation } = require('@reach/router');
// react, react-dom, and @reach/router are all EXCLUDED from the ssr-bundle.js
// The versions imported above are used instead, which allows us to use <ServerLocation>
// const ssrPrepass = require('react-ssr-prepass');
const { pathPrefix } = require(`${process.cwd()}/patternfly-docs.config`);

// This function is effectively synchronous because it mutates global.setTimeout
// Only allow one copy at a time to run
function prerender(url) {
  url = `${pathPrefix}${url}`;
  global.history = {};
  global.location = { pathname: url };

  // react-charts depends on victory-core which uses d3-timer to create an
  // animation event loop using setInterval. This event loop will cause Node.js
  // to hang if we prerender charts pages, so just replace with calls that resolve instantly.
  const { App } = require(`${process.cwd()}/.cache/ssr-build/main`);
  const string = ReactDOMServer.renderToString(
    React.createElement(ServerLocation, { url },
      React.createElement(App)
    )
  );
  console.log('prendered', url);

  return string;
}

module.exports = {
  prerender
};
