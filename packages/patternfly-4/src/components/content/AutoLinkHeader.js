import React from 'react';
import { Title } from '@patternfly/react-core';
import { GoLink } from 'react-icons/go';

const slugger = children => {
  const value = Array.isArray(children) ? children.join('') : children;
  const whitespace = /\s/g;
  const specials = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;
  return value
    .toLowerCase()
    .trim()
    .replace(specials, '')
    .replace(whitespace, '-');
};

const AutoLinkHeader = ({ is: Component, children, text, id, size, anchorOnly, floatAnchor, ...props }) => {
  const slug = slugger(text || children);
  if (anchorOnly) {
    return <a href={`#${slug}`} {...props}>{children}</a>
  }
  if (!size) {
    return (
      <Component id={id || slug} {...props}>
          <a href={`#${slug}`} className={floatAnchor ? 'anchor' : 'anchor-no-float'}>
          <GoLink size="16" style={{ verticalAlign: 'middle' }} />
        </a>
        {children}
      </Component>
    );
  }
  return (
    <Title size={size} id={id || slug} headingLevel={Component} {...props}>
      <a href={`#${slug}`} className={floatAnchor ? 'anchor' : 'anchor-no-float'}>
        <GoLink size="16" style={{ verticalAlign: 'middle' }} />
      </a>
      {children}
    </Title>
  )
};

AutoLinkHeader.defaultProps = { is: 'h2', floatAnchor: true };

export default AutoLinkHeader;