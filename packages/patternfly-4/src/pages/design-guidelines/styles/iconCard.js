import React from 'react';
import { Button, Bullseye, GalleryItem, Popover } from '@patternfly/react-core';
import { global_spacer_md as spacerMd, global_FontSize_sm as labelFontSize } from '@patternfly/react-tokens';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import posed from 'react-pose';
import copy from 'clipboard-copy';
import { saveAs } from 'file-saver';
import ReactDOM from 'react-dom';

const styles = {
  iconCell: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${spacerMd.var};
    background-color: rgba(0, 123, 186, 0.03);
    &:hover {
      background-color: rgba(0, 123, 186, 0.15);
    }
  `,
  iconCellOpen: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${spacerMd.var};
    background-color: rgba(0, 0, 0, 0.80);
    color: white;
  `,
  innerItem: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 100px;
  `,
  label: css`
    font-size: ${labelFontSize.var};
    word-break: break-all;
  `,
  popover: css`
    .pf-c-popover__arrow {
      // background: linear-gradient(45deg,rgba(0,0,0,0.80) 50%, transparent 50%);
      background-color: rgba(0, 0, 0, 1.0);
    }
    .pf-c-popover__content {
      background-color: rgba(0, 0, 0, 1.0);
      color: white;
    }
    .pf-c-button, .pf-c-title {
      color: white;
    }
  `,
  scaleDown: css`transform: scale(.9);`
};

const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    backgroundColor: 'rgba(0, 123, 186, 0.03)'
  },
  hover: {
    scale: 1.2,
    backgroundColor: 'rgba(0, 123, 186, 0.85)'
  }
});

class IconCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.myRef = React.createRef();
    this.myRefOpen = React.createRef();
  }

  onShow = () => {
    this.state.isOpen === false && this.setState({ isOpen: true });
  };

  onHide = () => {
    this.state.isOpen && this.setState({ isOpen: false });
  };

  onCopyReact = event => {
    event.stopPropagation();
    const { id } = this.props;
    copy(`import { ${id} } from '@patternfly/react-icons'`);
  };

  onCopyHtml = event => {
    event.stopPropagation();
    const { name } = this.props;
    copy(`<i class="pf-icon pf-icon-${name}"></i>`);
  };

  onDownloadSvg = () => {
    const { name } = this.props;
    const domNode = ReactDOM.findDOMNode(this.myRefOpen.current);
    const { outerHTML } = domNode;
    domNode.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const preface = '<?xml version="1.0" standalone="no"?>\r\n';

    const filename = `${name}.svg`;

    const blob = new Blob([preface, outerHTML], {
      type: 'image/svg+xml;charset=utf-8'
    });

    saveAs(blob, filename);
  };

  render() {
    const { isOpen } = this.state;
    const { icon: Icon, id, name } = this.props;
    const renderedItem = isOpen ? (
      <GalleryItem key={id} css={styles.iconCellOpen}>
          <Bullseye>
            <div css={styles.innerItem}>
              <Bullseye>
                <Icon size="lg" key={id} title={id} ref={this.myRefOpen} />
                <Button variant="secondary" css={styles.scaleDown} onClick={this.onCopyReact}>Copy React</Button>
                <Button variant="secondary" css={styles.scaleDown} onClick={this.onCopyHtml}>Copy HTML</Button>
              </Bullseye>
              <Bullseye><Button variant="secondary" css={styles.scaleDown} onClick={this.onDownloadSvg}>Download</Button></Bullseye>
            </div>
          </Bullseye>
        </GalleryItem>
    ) : (
      <GalleryItem key={id} css={styles.iconCell}>
          <Bullseye>
            <div css={styles.innerItem}>
              <Bullseye>
                <Icon size="lg" key={id} title={id} ref={this.myRef} />
              </Bullseye>
              <Bullseye>
                <div css={styles.label}>{name}</div>
              </Bullseye>
            </div>
          </Bullseye>
        </GalleryItem>
    );
    return (
      <Popover 
        css={styles.popover}
        appendTo={() => document.getElementById('___gatsby')} 
        position="right" 
        headerContent={<div>{name}</div>} 
        bodyContent={<div>Icon description</div>} 
        onShow={() => this.onShow()}
        onHidden={() => this.onHide()}
      >
        {renderedItem}
      </Popover>
    );
  }

}

export default IconCard;
