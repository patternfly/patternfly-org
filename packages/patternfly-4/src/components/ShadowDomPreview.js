import React from 'react';
import ShadowDOM from 'react-shadow';
import PropTypes from 'prop-types';
import core from '!raw!@patternfly/patternfly/patternfly.min.css';
import coreAddons from '!raw!@patternfly/patternfly/patternfly-addons.css';
import coreIcons from '!raw!@patternfly/patternfly/patternfly-icons.css';
import coreExampleStyles from '!!to-string-loader!css-loader!sass-loader!./_core/Preview/styles.scss';
import reactBase from '!raw!@patternfly/react-core/dist/styles/base.css';
import reactCore from '!raw!@patternfly/patternfly/patternfly.min.css';
import reactAddons from '!raw!@patternfly/patternfly/patternfly-addons.css';
import reactIcons from '!raw!@patternfly/patternfly/patternfly-icons.css';
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
          if (
            currentPath.indexOf('/documentation/react/components/popover') > -1 || 
            currentPath.indexOf('/documentation/react/components/tooltip') > -1) {
              return children;
          }
          console.log(currentPath);
          return (
            <ShadowDOM {...props}>
              <div>
                {!isReact && (
                  <>
                    <style type="text/css" dangerouslySetInnerHTML={{__html: core}} />
                    <style type="text/css" dangerouslySetInnerHTML={{__html: coreAddons}} />
                    {/* patternfly-icons assumes classes are nested under html tag, doesn't work in shadow dom so we strip them out below */}
                    <style type="text/css" dangerouslySetInnerHTML={{__html: coreIcons.replace(/html\s/g, '')}} />
                    <style type="text/css" dangerouslySetInnerHTML={{__html: coreExampleStyles}} />
                  </>
                )}
                {isReact && (
                  <>
                    <style type="text/css" dangerouslySetInnerHTML={{__html: reactBase}} />
                    {/* Also add styles for components, etc as the react components inject them into the <head> using emotion which is outside of the shadow dom */}
                    <style type="text/css" dangerouslySetInnerHTML={{__html: reactCore}} />
                    <style type="text/css" dangerouslySetInnerHTML={{__html: reactAddons}} />
                    {/* patternfly-icons assumes classes are nested under html tag, doesn't work in shadow dom so we strip them out below */}
                    <style type="text/css" dangerouslySetInnerHTML={{__html: reactIcons.replace(/html\s/g, '')}} />
                    <style type="text/css" dangerouslySetInnerHTML={{__html: reactToolbarStyles}} />
                    <style type="text/css" dangerouslySetInnerHTML={{__html: reactExampleStyles}} />
                  </>
                )}
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
