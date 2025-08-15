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
  <Content
    id={slug}
    component={headingLevel}
    className={css('ws-heading', className)}
    tabIndex={-1}
    isEditorial
  >
    <Flex alignItems={{ default: 'alignItemsCenter'}} spaceItems={{ default: "spaceItemsSm" }} className={`ws-autolink-header ws-autolink-header-${headingLevel}`}>
      <FlexItem>
        <Link href={`#${slug}`} className="ws-heading-anchor" tabIndex="-1" aria-hidden>
          <LinkIcon className="ws-heading-anchor-icon" style={{ verticalAlign: 'middle' }} />
        </Link>
        {children}
      </FlexItem>
      {metaText && <FlexItem>{metaText}</FlexItem>}
    </Flex>
  </Content>
  )
};
