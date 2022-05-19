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
  let wasSublistRendered = false;

  const renderSublist = (item, nextItem, idx) => {
    wasSublistRendered = true;
    return (
      <>
        {item.text}
        <JumpLinksList>
          {nextItem.map(curItem => (
            <JumpLinksItem
              key={curItem.id}
              href={`#${curItem.id}`}
              className="ws-toc-item"
              onKeyDown={updateWidth}
              onMouseDown={updateWidth}
              onClick={() => trackEvent('jump_link_click', 'click_event', curItem.id.toUpperCase())}
            >
              {curItem.text}
            </JumpLinksItem>
          ))}
        </JumpLinksList>
      </>
    );
  }

  let jumpLinksItems = [];

  const renderJumpLinksItems = () => {
    items.forEach((item, index) => {
      let cur = item;
      let next = items[index + 1];
      // Don't render empty <JumpLinksItem> for an array of sublist items
      if (wasSublistRendered) {
        wasSublistRendered = false;
        return null;
      }

      jumpLinksItems.push(
        <JumpLinksItem
          key={item.id}
          href={`#${item.id}`}
          className="ws-toc-item"
          onKeyDown={updateWidth}
          onMouseDown={updateWidth}
          onClick={() => trackEvent('jump_link_click', 'click_event', item.id.toUpperCase())}
        >
          { Array.isArray(next) ? renderSublist(item, next, index) : item.text }
        </JumpLinksItem>
      );
    })
    return jumpLinksItems;
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
      { renderJumpLinksItems() }
    </JumpLinks>
  );
}
