import React from 'react';
import ShadowDOM from 'react-shadow';
import PropTypes from 'prop-types';
import core from '!raw!@patternfly/patternfly/patternfly.min.css';
import coreAddons from '!raw!@patternfly/patternfly/patternfly-addons.css';
import coreIcons from '!raw!@patternfly/patternfly/patternfly-icons.css';
import coreExampleStyles from '!!to-string-loader!css-loader!sass-loader!./_core/Preview/styles.scss';
import reactBase from '!raw!@patternfly/react-core/dist/styles/base.css';
import reactExampleStyles from '!raw!../../_repos/react-example-styles.css';
import { Location } from '@reach/router';

const styles = `
  .ws-example { 
    padding: calc(1rem - 9px);
    background-color: #fff;
  }
`;

// react Toolbar, ToolbarGroup, ToolbarItem, ToolbarSection all inject this css using emotion for some reason
const reactToolbarStyles = `
.pf-l-toolbar {
--pf-l-toolbar__section--MarginTop: var(--pf-global--spacer--md);
--pf-l-toolbar__group--MarginRight: var(--pf-global--spacer--xl);
--pf-l-toolbar__group--MarginLeft: var(--pf-global--spacer--xl);
--pf-l-toolbar__item--MarginRight: var(--pf-global--spacer--md);
--pf-l-toolbar__item--MarginLeft: var(--pf-global--spacer--md); }

.pf-l-toolbar,
.pf-l-toolbar__section,
.pf-l-toolbar__group {
display: flex;
flex-wrap: wrap;
align-items: center; }

.pf-l-toolbar__section {
flex-basis: 100%; }
.pf-l-toolbar__section:not(:first-child) {
margin-top: var(--pf-l-toolbar__section--MarginTop); }

.pf-l-toolbar__group:not(:last-child) {
margin-right: var(--pf-l-toolbar__group--MarginRight); }

.pf-l-toolbar__item .pf-l-toolbar:not(:last-child) {
margin-right: var(--pf-l-toolbar__item--MarginRight); }
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
          return (
            <ShadowDOM {...props}>
              <div>
                {isReact && (
                  <>
                    <style type="text/css" dangerouslySetInnerHTML={{__html: reactBase}} />
                    <style type="text/css" dangerouslySetInnerHTML={{__html: reactToolbarStyles}} />
                    <style type="text/css" dangerouslySetInnerHTML={{__html: reactExampleStyles}} />
                  </>
                )}
                {!isReact && <style type="text/css" dangerouslySetInnerHTML={{__html: coreExampleStyles}} />}
                <>
                  {/* Update assets path */}
                  <style type="text/css" dangerouslySetInnerHTML={{__html: core.replace(/url\(assets\//g, 'url(/assets/')}} />
                  <style type="text/css" dangerouslySetInnerHTML={{__html: coreAddons}} />
                  {/* patternfly-icons assumes classes are nested under html tag, doesn't work in shadow dom so we strip them out below */}
                  <style type="text/css" dangerouslySetInnerHTML={{__html: coreIcons.replace(/html\s/g, '')}} />
                </>
                {!isFull && <style type="text/css">{styles}</style>}
                <div className={children ? `ws-example ${className}` : className}>
                  {children}
                </div>
              </div>
            </ShadowDOM>
          )
        }}
    </Location>
)};

ShadowDomPreview.propTypes = propTypes;
ShadowDomPreview.defaultProps = defaultProps;

export default ShadowDomPreview;
