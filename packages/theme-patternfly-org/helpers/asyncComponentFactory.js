const React = require('react');

const cache = {};

function asyncComponentFactory(route, pageData) {
  const { Component } = pageData;

  class AsyncComponent extends React.Component {
    state = {
      isLoaded: false
    };
    static preload() {
      return Component().then(res => {
        cache[route] = res.default;
        return res.default;
      });
    }
    static getPageData() {
      return cache[route] ? cache[route].pageData : {};
    }
    render() {
      if (cache[route]) {
        return React.createElement(cache[route]);
      }
      AsyncComponent.preload().then(() => this.setState({ isLoaded: true }));

      // Simple loading state
      return React.createElement('div',
        { style: { height: '100vh' } },
        'Loading...'
      );
    }
  }
  AsyncComponent.displayName = route.replace(/\//g, '.');

  return AsyncComponent;
}

module.exports = {
  asyncComponentFactory
};