const React = require('react');
const ReactDOMServer = require('react-dom/server');
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

module.exports = url => {
  url = `${pathPrefix}${url}`;
  global.history = {};
  global.location = { pathname: url };

  console.log('prerender', url);
  // react-charts depends on victory-core which uses d3-timer to create an
  // animation event loop using setInterval. This event loop will cause Node.js
  // to hang if we prerender charts pages, so just replace with calls that resolve instantly.
  removeTimers();
  // react, react-dom, and @reach/router are all EXCLUDED from the ssr-bundle.js
  // The versions imported above are used instead, which allows us to use <ServerLocation>
  const app = require(`${process.cwd()}/.cache/ssr-build/ssr-bundle`);
  const string = ReactDOMServer.renderToString(
    React.createElement(ServerLocation, { url },
      React.createElement(app.App)
    )
  );
  addTimers();

  return string;
}
