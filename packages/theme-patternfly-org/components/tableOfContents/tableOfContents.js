import React from 'react';
import {
  Badge,
  Card,
  CardTitle,
  CardBody,
  Grid,
  GridItem,
  Title
} from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import { slugger } from '../../helpers';
import versions from '../../versions.json';
import './tableOfContents.css';

const ReleaseNotesTOC = () => (
  <Grid hasGutter className="ws-release-notes-toc">
    {versions.Releases
      .filter(version => toc.some(header => header.includes(version.name)))
      .slice(0, 6) // limit to newest releases
      .map(version => {
        const [year, month, day] = version.date.split('-');
        const releaseDate = new Date(+year, +month - 1, +day)
          .toLocaleDateString('us-EN', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          });
        const releaseTitle = toc.find(heading => heading.includes(version.name));
        return releaseTitle && (
          <GridItem sm={6} md={4} key={version.name}>
            <Card>
              <CardTitle>
                {releaseTitle && (
                  <Title size="2xl" headingLevel="h2" >
                    <a key={version.name} href={`#${slugger(releaseTitle)}`}>
                      Release {version.name}
                    </a>
                  </Title>
                )}
                {version.latest && (
                  <Badge>Latest</Badge>
                )}
              </CardTitle>
              <CardBody>
                Released on {releaseDate}.
              </CardBody>
            </Card>
          </GridItem>
        );
      })
    }
  </Grid>
);

export const TableOfContents = ({
  releaseNoteTOC,
  items
}) => {
  if (releaseNoteTOC) {
    return <ReleaseNotesTOC />;
  }

  const [activeItem, setActiveItem] = React.useState(items[0]);
  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const scrollableElement = document.getElementById('ws-page-main');
    const titleElement = document.getElementById('nav-content');
    const htmlElements = scrollableElement.querySelectorAll('h2.ws-heading,h3.ws-heading');
    const scrollElements = Array.from(htmlElements)
      // When we hide h3s for long TOCs we don't want to track them
      .filter(e => items.flat().includes(e.innerText))
      .map(e => ({
        y: e.offsetTop - (titleElement ? titleElement.offsetHeight : 0),
        text: e.innerText
      }))
      .sort((e1, e2) => e2.y - e1.y);
    function scrollSpy() {
      const scrollPosition = scrollableElement.scrollTop;
      window.requestAnimationFrame(() => {
        for (const { y, text } of scrollElements) {
          if (scrollPosition >= y) {
            return setActiveItem(text);
          }
        }
      });
    }
    if (scrollableElement) {
      scrollSpy();
      scrollableElement.addEventListener('scroll', scrollSpy);
    }

    return () => scrollableElement.removeEventListener('scroll', scrollSpy);
  }, []);

  function onClickItem(ev, id, item) {
    ev.preventDefault(); // Don't use client-side routing
    // Chrome does not jump until ALL network requests finish.
    // We have to force it to...
    const referencedElement = document.getElementById(id);
    if (referencedElement) {
      referencedElement.scrollIntoView();
    }
    setActiveItem(item);
  }

  function renderItem(item, index) {
    if (Array.isArray(item)) {
      return (
        <ul key={index} className="ws-toc-sublist">
          {item.map(renderItem)}
        </ul>
      );
    }
  
    const slug = slugger(item);
    const isActive = item === activeItem;
    const ref = React.useRef();
    if (isActive && ref.current) {
      const bounding = ref.current.getBoundingClientRect();
      if (bounding.y < 76 || bounding.y > window.innerHeight - bounding.height) {
        ref.current.scrollIntoView(true);
      }
    }

    return (
      <li key={index} className="ws-toc-item">
        <a
          ref={ref}
          href={`#${slug}`}
          className={css(
            'ws-toc-link', 
            isActive && 'ws-toc-link--current'
          )}
          onClick={ev => onClickItem(ev, slug, item)}
        >
          {item}
        </a>
      </li>
    );
  }

  return (
    <nav className="ws-toc">
      <Title headingLevel="h2" size="lg">
        Table of contents
      </Title>
      <ul className="ws-toc-list">
        {items.map(renderItem)}
      </ul>
    </nav>
  );
}
