import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { HomePage, GetInTouchPage } from './pages';
import LayoutOptions from '../patternfly-docs.config.js';
import '../patternfly-docs.css.js';

if (process.env.NODE_ENV !== 'production') {
  LayoutOptions.pathPrefix = '/';
}

function App() {
  return (
    <Router basepath={LayoutOptions.pathPrefix}>
      <HomePage path="/" layoutOptions={LayoutOptions} />
      <GetInTouchPage path="/get-in-touch" layoutOptions={LayoutOptions} />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
