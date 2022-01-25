import React from 'react';
import { Title, JumpLinks, JumpLinksItem, JumpLinksList } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import './tableOfContents.css';

export const TableOfContents = ({ items }) => {
  function renderItem(item, index) {
    return Array.isArray(item)
      ? (
        <JumpLinksList key={index} className="ws-toc-sublist">
          {item.map(renderItem)}
        </JumpLinksList>
      ) : (
        <JumpLinksItem key={item.id} href={`#${item.id}`} className="ws-toc-item" onClick={
          () => console.log({ item }) // TODO: pass in title or slug from Component.getPageData() in mdx.js?
          // () => sendEvent('component_tab_click', {
          //   'event_category': 'click_event',
          //   'tab_name': source,
          //   'page_name': title
          // })                 
        }>
          {item.text}
        </JumpLinksItem>
      )
  }  

  return (
    <nav className="ws-toc">
      <Title headingLevel="h2" size="lg">
        Table of contents
      </Title>
      <JumpLinks isVertical scrollableSelector="#ws-page-main" className="ws-toc-list" offset={92}>
        {items.map(renderItem)}
      </JumpLinks>
    </nav>
  );
}
