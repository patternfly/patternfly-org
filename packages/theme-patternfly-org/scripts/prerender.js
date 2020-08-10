const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ssrPrepass = require('react-ssr-prepass');
const { ServerLocation } = require('@reach/router');
const { pathPrefix } = require(`${process.cwd()}/patternfly-docs.config`);
const oldSetTimeout = setTimeout;
const oldSetInterval = setInterval;
const oldSetImmediate = setImmediate;

function addTimers() {
  setTimeout = oldSetTimeout;
  setInterval = oldSetInterval;
  setImmediate = oldSetImmediate;
}

function immediate(callback, delay) {
  if (!Boolean(delay) || delay === 0)
    callback();
}

function removeTimers() {
  setTimeout = immediate;
  setInterval = immediate;
  setImmediate = immediate;
}

// This function is effectively synchronous because it mutates global.setTimeout
// Only allow one copy at a time to run
async function prerender(url) {
  url = `${pathPrefix}${url}`;
  global.history = {};
  global.location = { pathname: url };

  // react-charts depends on victory-core which uses d3-timer to create an
  // animation event loop using setInterval. This event loop will cause Node.js
  // to hang if we prerender charts pages, so just replace with calls that resolve instantly.
  removeTimers();
  // react, react-dom, and @reach/router are all EXCLUDED from the ssr-bundle.js
  // The versions imported above are used instead, which allows us to use <ServerLocation>
  const { App } = require(`${process.cwd()}/.cache/ssr-build/main`);
  const WrappedApp = React.createElement(ServerLocation, { url },
    React.createElement(App)
  );
  // ReactDOMServer currently cannot render promises. This addon crawls the react tree and
  // resolve promises to something renderable until React adds official support for it.
  await ssrPrepass(WrappedApp);
  const string = ReactDOMServer.renderToString(WrappedApp);
  addTimers();
  console.log('prendered', url);

  return string;
}

module.exports = {
  prerender
};
