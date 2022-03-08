import React from 'react';
import { JumpLinks, JumpLinksItem, JumpLinksList } from '@patternfly/react-core';
import './tableOfContents.css';
import { trackEvent } from '../../helpers';

export const TableOfContents = ({ items }) => {
  // Used to recalculate JumpLinks offset if screen size changes
  const [width, setWidth] = React.useState(window.innerWidth);
  const updateWidth = () => {
    const { innerWidth } = window;
    innerWidth !== width && setWidth(innerWidth);
  }

  const renderItem = (item, index) => {
    return Array.isArray(item)
      ? (
        <JumpLinksList key={index} className="ws-toc-sublist">
          {item.map(renderItem)}
        </JumpLinksList>
      ) : (
        <JumpLinksItem
          key={item.id}
          href={`#${item.id}`}
          className="ws-toc-item"
          onKeyDown={updateWidth}
          onMouseDown={updateWidth}
          onClick={() => trackEvent('jump_link_click', 'click_event', item.id.toUpperCase())
        }>
          {item.text}
        </JumpLinksItem>
      )
  }

  return (
    <JumpLinks
      label="Table of contents"
      isVertical
      scrollableSelector="#ws-page-main"
      className="ws-toc"
      offset={width > 1450 ? 92 : 148}
      expandable={{ default: 'expandable', '2xl': 'nonExpandable' }}
    >
      {items.map(renderItem)}
    </JumpLinks>
  );
}
