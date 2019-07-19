import React from 'react';
import root from 'react-shadow';
import PropTypes from 'prop-types';
import exampleStyles from '!raw!../../_repos/example-styles.css';
import { Location } from '@reach/router';
import queryString from 'query-string';
import Helmet from 'react-helmet';

const styles = `
  .ws-example { 
    padding: 1rem;
    background-color: #fff;
  }
`;

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isReact: PropTypes.bool,
  isFull: PropTypes.bool
};

const defaultProps = {
  children: null,
  className: '',
  isReact: false,
  isFull: false
};

const ShadowDomPreview = ({ children, className, isReact, isFull, html, ...props }) => {
  // strip: 
  // html :root
  // :root
  // html
  const noRootStyles = exampleStyles
    .replace(/html\s:root/g, '.ws-example')
    .replace(/html/g, '.ws-example')
    .replace(/:root/g, '.ws-example');
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
                <Helmet>
                  <title>Full Page Example</title>
                </Helmet>
              )}
              <root.div className="shadow-dom-outer">
                <style>{noRootStyles}</style>
                {isReact && !isFull && <style>{styles}</style>}
                {html ? (
                  <div dangerouslySetInnerHTML={{ __html: html }} className={className} style={isFull ? { height: '100vh' } : undefined} {...props} />
                ) : (
                  <div className={children ? `ws-example ${className}` : className} style={isFull ? { height: '100vh' } : undefined} {...props}>
                    {children}
                  </div>
                )}
              </root.div>
            </>
          )
        }}
    </Location>
)};

ShadowDomPreview.propTypes = propTypes;
ShadowDomPreview.defaultProps = defaultProps;

export default ShadowDomPreview;
