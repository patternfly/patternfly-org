import React from 'react';
import { Title, JumpLinks, JumpLinksItem, JumpLinksList, ExpandableSection } from '@patternfly/react-core';
import './tableOfContents.css';
import { trackEvent } from '../../helpers';

export const TableOfContents = ({ items }) => {
  function renderItem(item, index) {
    return Array.isArray(item)
      ? (
        <JumpLinksList key={index} className="ws-toc-sublist">
          {item.map(renderItem)}
        </JumpLinksList>
      ) : (
        <JumpLinksItem key={item.id} href={`#${item.id}`} className="ws-toc-item" onClick={() => trackEvent('jump_link_click', 'click_event', item.id.toUpperCase())
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
      offset={148}
      expandable={{ default: 'expandable', '2xl': 'nonExpandable' }}
    >
      {items.map(renderItem)}
    </JumpLinks>
  );
}
