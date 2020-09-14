import React from 'react';
import { Title } from '@patternfly/react-core';
import { LinkIcon } from '@patternfly/react-icons';
import { Link } from '../link/link';
import { slugger } from '../../helpers/slugger';
import './autoLinkHeader.css';

// "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"
const sizes = {
  h1: '3xl',
  h2: '2xl',
  h3: 'xl',
  h4: 'lg',
  h5: 'md',
  h6: 'sm'
}

export const AutoLinkHeader = ({
  id,
  size,
  headingLevel,
  children,
  metaText,
  className
}) => {
  const slug = slugger(children);

  return (
    <Title
      id={slug}
      size={sizes[size]}
      headingLevel={headingLevel || size}
      className={`ws-heading ${className}`}
    >
      <Link href={`#${slug}`} className="ws-heading-anchor" tabIndex="-1" aria-hidden>
        <LinkIcon className="ws-heading-anchor-icon" style={{ verticalAlign: 'middle' }} />
      </Link>
      {children} {metaText}
    </Title>
  )
};
