const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { ServerLocation } = require('@reach/router');
const ssrPrepass = require('react-ssr-prepass');
// react, react-dom, and @reach/router are all EXCLUDED from the ssr-bundle.js
// The versions imported above are used instead, which allows us to use <ServerLocation>
// const ssrPrepass = require('react-ssr-prepass');
const { pathPrefix } = require(`${process.cwd()}/patternfly-docs.config`);

// This function is effectively synchronous because it mutates global.setTimeout
// Only allow one copy at a time to run
async function prerender(url) {
  url = `${pathPrefix}${url}`;
  global.history = {};
  global.location = { pathname: url };

  console.log('prender', url);
  const { App } = require(`${process.cwd()}/.cache/ssr-build/main`);
  const WrappedApp = React.createElement(ServerLocation, { url },
    React.createElement(App)
  );
  await ssrPrepass(WrappedApp, element => {
    if (element.type.name === 'AsyncComponent') {
      return element.type.preload();
    }
  });
  const string = ReactDOMServer.renderToString(WrappedApp);

  return string;
}

module.exports = {
  prerender
};
