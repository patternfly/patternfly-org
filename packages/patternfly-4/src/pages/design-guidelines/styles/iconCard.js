import React from 'react';
import { Button, Bullseye, GalleryItem, Popover } from '@patternfly/react-core';
import { global_FontSize_sm as labelFontSize } from '@patternfly/react-tokens';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import posed from 'react-pose';
import copy from 'clipboard-copy';
import { saveAs } from 'file-saver';
import ReactDOM from 'react-dom';

const styles = {
  iconCell: css`
    height: 198px;
    width: 240px;
    // box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.12), 0 6px 20px 2px rgba(0, 0, 0, 0.12);
    background-color: rgba(190, 225, 244, 0.5);
    &:hover {
      background-color: rgba(190, 225, 244, 0.75);
    }
  `,
  iconbox: css`height: 121px;`,
  textbox: css`
    width: 234px; 
    height: 71px;
    margin: 3px;
    background-color: white;
    padding: 16px;
    overflow: hidden;
  `,
  label: css`
    font-size: ${labelFontSize.var};
    word-break: break-all;
  `,
  innerItem: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  labelHovered: css`
    font-size: ${labelFontSize.var};
    word-break: break-all;
    transform: scale(0.7);
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
  popoverHeader: css`
    margin-right: 10px;
  `,
  popoverBody: css`
    color: white; 
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  copyButtons: css`padding-bottom: 16px; display: flex;`,
  scaleDown: css`transform: scale(.7);`,
  openContainer: css`display: flex;`,
  leftContainer: css`
    width: 100px;
    display: flex;
    flex-direction: column;
    color: white;
    padding: 15px 0 0 10px;
    align-items: center;
  `,
  rightContainer: css`
    display: flex;
    flex-direction: column;
    flex: 1;
    transform: scale(0.85);
  `,
  hoveredColor: css`color: white;`
};

const Box = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 1.3 }
});

class IconCard extends React.Component {
  constructor(props) {
    super(props);
    this.iconRef = React.createRef();
  }

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
    const { icon: Icon, id, name } = this.props;
    const renderedItem = (  
      <div css={styles.iconCell}>
        <div css={styles.iconbox}>
          <Bullseye>
            <div css={styles.innerItem}>
              <Bullseye>
                <Icon size="xl" key={id} title={id} />
              </Bullseye>
            </div>
          </Bullseye>
        </div>
        <div css={[styles.textbox, styles.label]}>
          {name}
        </div>
      </div>
    );
    const popoverBody = (
      <div css={styles.popoverBody}>
        <Icon size="lg" key={id} title={id} ref={this.iconRef} style={{display: 'none'}} />
        <div css={styles.copyButtons}>
          <Box><Button variant="secondary" onClick={this.onCopyReact}>Copy React</Button></Box>
          <div css={css`width: 16px; height: 8px;`}></div>
          <Box><Button variant="secondary" onClick={this.onCopyHtml}>Copy HTML</Button></Box>
        </div>
        <Box><Button variant="secondary" onClick={this.onDownloadSvg}>Download SVG</Button></Box>
      </div>
    );
    return (
      <GalleryItem>
        <Popover 
          css={styles.popover}
          position="right" 
          headerContent={<div css={styles.popoverHeader}>{name}</div>} 
          bodyContent={popoverBody} 
          onShow={() => this.onShow()}
          onHidden={() => this.onHide()}
        >
          {renderedItem}
        </Popover>
      </GalleryItem>
    );
  }

}

export default IconCard;
