// This module is shared between NodeJS and babelled ES5
module.exports = canRequireJSX => ({
  '/': {
    Component: canRequireJSX && require('./pages/home').default
  },
  '/get-in-touch': {
    Component: canRequireJSX && require('./pages/get-in-touch').default,
    title: 'Get in touch'
  }
});
