import React from 'react';
import ShadowDOM from 'react-shadow';
import PropTypes from 'prop-types';
import exampleStyles from '!raw!../../_repos/example-styles.css';
import { Location } from '@reach/router';
import queryString from 'query-string';
import Header from '../components/header';

const styles = `
  .ws-example { 
    padding: 1rem;
    background-color: #fff;
  }
`;

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isReact: PropTypes.bool,
  isFull: PropTypes.bool
};

const defaultProps = {
  className: '',
  isReact: false,
  isFull: false
};

const ShadowDomPreview = ({ children, className, isReact, isFull, ...props }) => {
  return (
    <Location>
        {({ location }) => {
          const params = location.search ? queryString.parse(location.search, { parseBooleans: true }) : '';
          const currentPath = location.pathname;
          // TODO: Update dependency of tippy in react-core as newer version supports shadow dom
          // Don't shadow dom paths that use tooltip until that is done
          if (
            currentPath.indexOf('/documentation/react/components/popover') > -1 || 
            currentPath.indexOf('/documentation/react/components/tooltip') > -1 ||
            currentPath.indexOf('/documentation/react/components/applicationlauncher') > -1 ||
            currentPath.indexOf('/documentation/react/components/chipgroup') > -1 ||
            currentPath.indexOf('/documentation/react/components/clipboardcopy') > -1
          ) {
            return children;
          }
          // turn off shadow-dom if ?shadow=false is passed into the URL
          if (params.shadow === false) {
            return children;
          }
          return (
            <>
              {isFull && (
                <Header siteTitle="Full Page Example" />
              )}
              <ShadowDOM.div {...props}>
                <style type="text/css" dangerouslySetInnerHTML={{__html: exampleStyles}} />
                {isReact && !isFull && <style type="text/css">{styles}</style>}
                <div className={children ? `ws-example ${className}` : className} style={isFull ? { height: '100%' } : undefined}>
                  {children}
                </div>
              </ShadowDOM.div>
            </>
          )
        }}
    </Location>
)};

ShadowDomPreview.propTypes = propTypes;
ShadowDomPreview.defaultProps = defaultProps;

export default ShadowDomPreview;
