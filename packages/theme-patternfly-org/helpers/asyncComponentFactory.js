const React = require('react');

const cache = {};

function asyncComponentFactory(route, pageData) {
  const { Component } = pageData;

  class Res extends React.Component {
    state = {
      isLoaded: false
    };
    static preload() {
      return Component().then(res => {
        cache[route] = res.default;
      });
    }
    render() {
      if (cache[route]) {
        return React.createElement(cache[route]);
      }
      Res.preload().then(() => this.setState({ isLoaded: true }));

      // Simple loading state
      return React.createElement('div',
        { style: { height: '100vh' } },
        'Loading...'
      );
    }
  }
  Res.displayName = route.replace(/\//g, '.');

  return Res;
}

module.exports = {
  asyncComponentFactory
};