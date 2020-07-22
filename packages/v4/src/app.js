import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import getRoutes from './routes';
import LayoutOptions from '../patternfly-docs.config.js';
import '../patternfly-docs.css.js';
import ConfigContext from 'theme-patternfly-org/helpers/configContext';

const isProd = process.env.NODE_ENV === 'production';
const isPrerender = process.env.PRERENDER;

if (!isProd) {
  LayoutOptions.pathPrefix = '';
}

export const App = () => (
  <ConfigContext.Provider value={LayoutOptions}>
    <Router basepath={LayoutOptions.pathPrefix} id="ws-router">
      {Object.entries(getRoutes(true)).map(([url, { Component }]) =>
        <Component key={url} path={url} layoutOptions={LayoutOptions} />
      )}
    </Router>
  </ConfigContext.Provider>
);

if (!isPrerender) {
  const renderFn = isProd ? ReactDOM.hydrate : ReactDOM.render;
  renderFn(<App />, document.getElementById('root'));
}
