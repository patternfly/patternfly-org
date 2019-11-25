import React from 'react';
import { Button, Bullseye, GalleryItem, Popover, TextContent, Text } from '@patternfly/react-core';
import { copy } from '../helpers/copy';
import { saveAs } from 'file-saver';
import ReactDOM from 'react-dom';
import './iconCard.css';

class IconCard extends React.Component {
  constructor(props) {
    super(props);
    this.iconRef = React.createRef();
    this.state = { showBody: false };
    this.galleryItemRef = React.createRef();
    this.galleryItemBodyRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = { showCopyMessage: false };
  }

  componentDidMount = () => {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount = () => {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside(event) {
    // Little timeout to let the active component's showBody state resolve first
    setTimeout(function() {
      if (this.state.showBody && !this.galleryItemRef.current.contains(event.target) && !this.galleryItemBodyRef.current.contains(event.target)) {
        this.setState({
          showBody: false
        });
      }
    }.bind(this), 10);
  }

  toggleBody = () => {
    this.setState(prevState => ({
      showBody: !prevState.showBody
   }))
  };

  onCopyReact = event => {
    event.stopPropagation();
    const { id } = this.props;
    copy(`import { ${id} } from '@patternfly/react-icons'`);
    this.setState({
      showCopyMessage: true
    });
    setTimeout(() => {
      this.setState({
        showCopyMessage: false
      });
    }, 2000);
  };

  onCopyHtml = event => {
    event.stopPropagation();
    const { name } = this.props;
    copy(`<i className="pf-icon pf-icon-${name}"></i>`);
    this.setState({
      showCopyMessage: true
    });
    setTimeout(() => {
      this.setState({
        showCopyMessage: false
      });
    }, 2000);
  };

  onDownloadSvg = () => {
    const { name } = this.props;
    const domNode = ReactDOM.findDOMNode(this.iconRef.current);
    domNode.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    domNode.setAttribute("width", "100%");
    domNode.setAttribute("height", "100%");
    const { outerHTML } = domNode;
    const preface = '<?xml version="1.0" standalone="no"?>\r\n';

    const filename = `${name}.svg`;

    const blob = new Blob([preface, outerHTML], {
      type: 'image/svg+xml;charset=utf-8'
    });

    saveAs(blob, filename);
  };
  
  render() {
    const { icon: Icon, name } = this.props;
    const { showBody, showCopyMessage } = this.state;
    const popoverBody = (
      <div className="ws-content-popoverBody">
        <div className="ws-content-textDescription" style={{'display': 'none'}}>
          <div>Indicates that a user may create or add something.</div>
        </div>
        <div className="ws-content-copyButtons">
          <Button variant="link" onClick={this.onDownloadSvg}>Download SVG</Button>
          <Button variant="link" onClick={this.onCopyHtml}>Copy HTML</Button>
          <Button variant="link" onClick={this.onCopyReact}>Copy React</Button>
        </div>
        <TextContent className={`message${showCopyMessage ? " messageShow" : ""}`}>
          <Text component="pre" className="messageText">
            Copied to clipboard
          </Text>
        </TextContent>
      </div>
    );
    return (
      <>
        <GalleryItem onClick={this.toggleBody}>
          <div className="ws-content-iconCell" style={{height: '100%'}} ref={this.galleryItemRef}>
            <div>
              <Bullseye>
                <div className="ws-content-innerItem">
                  <Bullseye>
                    {typeof window !== 'undefined' && <Icon size="xl" ref={this.iconRef} />}
                  </Bullseye>
                </div>
              </Bullseye>
            </div>
            <div className="ws-content-textbox ws-content-label">
              {name}
            </div>
          </div>
          <div className="pf-c-popover pf-m-bottom" style={{display: showBody ? 'block' : 'none', boxShadow: 'unset'}}>
            <div className="pf-c-popover__arrow" style={{top: '24px', zIndex: '1'}} />
          </div>
        </GalleryItem>
        <GalleryItem style={{display: showBody ? 'block' : 'none', gridColumn: '1 / -1'}}>
          <div className="pf-c-popover pf-m-bottom" role="dialog" aria-modal="true" aria-labelledby="popover-bottom-header" aria-describedby="popover-bottom-body" style={{maxWidth: 'unset'}} ref={this.galleryItemBodyRef}>
            {/* <div className="pf-c-popover__arrow" /> */}
            <div className="pf-c-popover__content" style={{zIndex: '2'}}>
              <button className="pf-c-button pf-m-plain" aria-label="Close" onClick={this.toggleBody}>
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>
              <h1 className="pf-c-title pf-m-xl" id={name + "-popover-bottom-header"} style={{marginTop: 0}}>
                {name}
              </h1>
              <div className="pf-c-popover__body" id={name + "-popover-bottom-body"}>
                {popoverBody}
              </div>
            </div>
          </div>
        </GalleryItem>
      </>
    );
  }

}

export default IconCard;
