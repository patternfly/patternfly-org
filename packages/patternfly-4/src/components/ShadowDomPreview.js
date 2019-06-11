import React from 'react';
import ShadowDOM from 'react-shadow';
import PropTypes from 'prop-types';
import patternFly from '!raw!../../_repos/core/patternfly.css';
import patternFlyAddons from '!raw!../../_repos/core/patternfly-addons.css';
import patternFlyIcons from '!raw!../../_repos/core/patternfly-icons.css';
import reactExampleStyles from '!raw!../../_repos/react-example-styles.css';
import coreExampleStyles from '!!to-string-loader!css-loader!sass-loader!./_core/Preview/styles.scss';

const styles = `
  .ws-example { 
    padding: calc(1rem - 9px);
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
  // patternfly-icons assumes classes are nested under html tag, doesn't work in shadow dom so strip them out
  const strippedHtmlIconsStyles = patternFlyIcons.replace(/html\s/g, '');
  return (
    <ShadowDOM {...props}>
      <div>
        {isReact && <style type="text/css" dangerouslySetInnerHTML={{__html: reactExampleStyles}} />}
        {!isReact && <style type="text/css" dangerouslySetInnerHTML={{__html: coreExampleStyles}} />}
        <style type="text/css" dangerouslySetInnerHTML={{__html: patternFly}} />
        <style type="text/css" dangerouslySetInnerHTML={{__html: patternFlyAddons}} />
        <style type="text/css" dangerouslySetInnerHTML={{__html: strippedHtmlIconsStyles}} />
        {!isFull && <style type="text/css">{styles}</style>}
        <div className={`ws-example ${className}`}>
          {children}
        </div>
      </div>
    </ShadowDOM>
)};

ShadowDomPreview.propTypes = propTypes;
ShadowDomPreview.defaultProps = defaultProps;

export default ShadowDomPreview;
