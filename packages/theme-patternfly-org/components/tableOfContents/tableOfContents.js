import React from 'react';
import { Title, JumpLinks, JumpLinksItem, JumpLinksList } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import './tableOfContents.css';

// export const TableOfContents = ({ items }) => {
//   const [activeItemId, setActiveItemId] = React.useState(items[0].id);
//   React.useEffect(() => {
//     if (typeof window === 'undefined') {
//       return;
//     }
//     const scrollableElement = document.getElementById('ws-page-main');
//     const htmlElements = scrollableElement.querySelectorAll('h2.ws-heading,h3.ws-heading');

//     function scrollSpy() {
//       const scrollPosition = scrollableElement.scrollTop;
//       window.requestAnimationFrame(() => {
//         const scrollElements = Array.from(htmlElements)
//           .map(e => ({
//             y: e.offsetTop - scrollableElement.offsetTop,
//             id: e.id
//           }))
//           .sort((e1, e2) => e2.y - e1.y);
//         for (const { y, id } of scrollElements) {
//           if (scrollPosition >= y) {
//             return setActiveItemId(id);
//           }
//         }
//       });
//     }
//     if (scrollableElement) {
//       scrollSpy();
//       scrollableElement.addEventListener('scroll', scrollSpy);
//     }

//     return () => scrollableElement.removeEventListener('scroll', scrollSpy);
//   }, []);

//   function onClickItem(ev, item) {
//     ev.preventDefault(); // Don't use client-side routing or scrolling into view
//     // Chrome does not jump until ALL network requests finish.
//     // We have to force it to...
//     const referencedElement = document.getElementById(item.id);
//     if (referencedElement) {
//       referencedElement.scrollIntoView();
//     }
//     history.pushState({}, '', `#${item.id}`);
//   }

//   function renderItem(item, index) {
//     if (Array.isArray(item)) {
//       return (
//         <ul key={index} className="ws-toc-sublist">
//           {item.map(renderItem)}
//         </ul>
//       );
//     }
  
//     const isActive = item.id === activeItemId;
//     const ref = React.useRef();
//     if (isActive && ref.current) {
//       const bounding = ref.current.getBoundingClientRect();
//       if (bounding.y < 76 || bounding.y > window.innerHeight - bounding.height) {
//         ref.current.scrollIntoView(true);
//       }
//     }

//     return (
//       <li key={index} className="ws-toc-item">
//         <a
//           ref={ref}
//           href={`#${item.id}`}
//           className={css(
//             'ws-toc-link', 
//             isActive && 'ws-toc-link--current'
//           )}
//           onClick={ev => onClickItem(ev, item)}
//         >
//           {item.text}
//         </a>
//       </li>
//     );
//   }

//   return (
//     <nav className="ws-toc">
//       <Title headingLevel="h2" size="lg">
//         Table of contents
//       </Title>
//       <ul className="ws-toc-list">
//         {items.map(renderItem)}
//       </ul>
//     </nav>
//   );
// }

export const TableOfContents = ({ items }) => {
  function renderItem(item, index) {
    return Array.isArray(item)
      ? (
        <JumpLinksList key={index} className="ws-toc-sublist">
          {item.map(renderItem)}
        </JumpLinksList>
      ) : (
        <JumpLinksItem key={item.id} href={`#${item.id}`} className="ws-toc-item">
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
