import React from 'react';
import { Flex, FlexItem, Content } from '@patternfly/react-core';
import LinkIcon from '@patternfly/react-icons/dist/esm/icons/link-icon';
import { Link } from '../link/link';
import { slugger } from '../../helpers/slugger';
import { css } from '@patternfly/react-styles';

export const AutoLinkHeader = ({
  id,
  headingLevel,
  children,
  metaText,
  className
}) => {
  const slug = id || slugger(children);

  return (
    <Flex alignItems={{ default: 'alignItemsCenter'}} spaceItems={{ default: "spaceItemsSm" }}>
      <FlexItem>
        <Content
          id={slug}
          component={headingLevel}
          className={css('ws-heading', className)}
          tabIndex={-1}
          isEditorial
        >
          <Link href={`#${slug}`} className="ws-heading-anchor" tabIndex="-1" aria-hidden>
            <LinkIcon className="ws-heading-anchor-icon" style={{ verticalAlign: 'middle' }} />
          </Link>
          {children}
        </Content>
      </FlexItem>
      {metaText && <FlexItem>{metaText}</FlexItem>}
    </Flex>
  )
};
