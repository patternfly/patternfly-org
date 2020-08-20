import React from 'react';
import { Accordion, AccordionItem, AccordionToggle, AccordionContent } from '@patternfly/react-core';
import { AutoLinkHeader } from '../autoLinkHeader/autoLinkHeader';
import './accordionHeader.css';

export const AccordionHeader = ({
  title,
  titleId,
  children
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Accordion className="ws-accordion-header">
      <AccordionItem>
        <AccordionToggle
          className="ws-accordion-header-toggle"
          onClick={() => setIsOpen(!isOpen)}
          isExpanded={isOpen}
        >
          <AutoLinkHeader size="h2" className="ws-h2" id={titleId}>
            {title}
          </AutoLinkHeader>
        </AccordionToggle>
        <AccordionContent isHidden={!isOpen}>
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
};
