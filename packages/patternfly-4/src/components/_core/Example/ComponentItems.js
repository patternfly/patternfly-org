import React from 'react';
import { Link } from 'gatsby';
import './styles.scss';

export default class ComponentItems extends React.Component {
  static parseQueryString(queryString) {
    const params = {};
    let temp;
    let i;
    let l;
    // Split into key/value pairs
    const queries = queryString.split('&');
    // Convert the array of strings into an object
    for (i = 0, l = queries.length; i < l; i++) {
      temp = queries[i].split('=');
      params[temp[0]] = temp[1];
    }
    return params;
  }

  constructor(props) {
    super(props);
    this.state = { isFull: false, codeView: 'source' };
  }

  showView(codeView) {
    this.setState(prevState => ({
      codeView
    }));
  }

  render() {
    const regex = /pf-[c|l]-[a-zA-Z-]*[\s"]/gi;
    const matches = this.props.children.match(regex);
    let navigationItems;
    const processedComponents = [];
    if (matches) {
      navigationItems = matches.map(navItem => {
        let path = '';
        const componentName = navItem
          .slice(5, navItem.length)
          .trim()
          .replace(/[\s-"]/g, '');
        if (processedComponents.indexOf(componentName) === -1) {
          processedComponents.push(componentName);

          if (navItem.startsWith('pf-l')) {
            path = `/documentation/core/layouts/${componentName}`;
          } else if (navItem.startsWith('pf-c')) {
            path = `/documentation/core/components/${componentName}`;
          }
          return (
            <li key={`handlebars-nav-${path}`}>
              <code>
                <Link to={path}>{componentName}</Link>
              </code>
            </li>
          );
        }
        return null;
      });
    }

    if (!this.state.isFull) {
      return (
        <div className="Example__section">
          {navigationItems && (
            <div className="Example__componentLink">
              Components and Layouts used: <ul>{navigationItems}</ul>
            </div>
          )}
        </div>
      );
    }
    return null;
  }
}
