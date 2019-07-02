import React from 'react';
import LinkPreview from '../../LinkPreview';
import ShadowDomPreview from '../../ShadowDomPreview';
import { CoreContext } from '../Documentation';
import './styles.scss';

export default class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { 
      children, 
      fullPageOnly, 
      viewport = '', 
      lights = true, 
      minHeight, 
      heading, 
      className
    } = this.props;
    const endsWithSlash = typeof window !== 'undefined' && window.location.pathname.substr(-1) === '/';
    const fullPath = typeof window !== 'undefined' && `${window.location.pathname.substr(0, window.location.pathname.length - (endsWithSlash ? 1 : 0))}-full?component=${this.props.heading}`;
    const output = { __html: children };
    const background = lights ? '' : 'pf-t-dark pf-m-opaque-200';
    let preview;

    if (typeof window !== 'undefined' && window.location.search.length) {
      preview = <div>
        <CoreContext.Consumer>
          {({ coreClass }) => (
            <ShadowDomPreview className={`${background} ${coreClass} ${className}`}>
              <div dangerouslySetInnerHTML={output} />
            </ShadowDomPreview>
          )}
        </CoreContext.Consumer>
      </div>;
    } else if (!fullPageOnly) {
      preview = <div>
        <CoreContext.Consumer>
          {({ coreClass }) => (
            <ShadowDomPreview className={`${background} ${coreClass} ${className}`}>
              <div className="Preview">
                <div className="Preview__body" style={{ minHeight: minHeight }} dangerouslySetInnerHTML={output} />
              </div>
            </ShadowDomPreview>
          )}
        </CoreContext.Consumer>
      </div>;
    } else {
      preview = <LinkPreview name={heading} path={fullPath} />;
    }

    return (
      <div className={`Preview ${viewport}`}>
        {preview}
      </div>
    );
  }
}
