import React from 'react';
import {
  Gallery,
  GalleryItem,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Label,
} from '@patternfly/react-core';
import { navigate } from '@reach/router';
import { TextSummary } from './TextSummary';

export const SectionGalleryLayout = ({
  galleryItems,
  layoutView,
  hasGridText,
  hasGridImages,
}) => {
  if (layoutView !== 'grid') {
    return null;
  }

  return (
    <Gallery hasGutter>
      {galleryItems.map(
        ({
          idx,
          slug,
          id,
          itemName,
          illustration,
          isBeta,
          isDeprecated,
          isDemo,
          title,
          galleryItemsData,
        }) => {
          const stripped_id = id.replace(/\s+/g, '-');
          
          return (
            <GalleryItem span={4} key={idx}>
              <Card id={stripped_id} key={idx} isClickable>
                <CardHeader
                  selectableActions={{
                    onClickAction: (e) => {
                      e.preventDefault();
                      document.getElementById('ws-page-main').scrollIntoView();
                      navigate(slug);
                    },
                    selectableActionId: `${stripped_id}-input`,
                    selectableActionAriaLabelledby: stripped_id,
                    name: `clickable-card-${idx}`,
                  }}
                >
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                {(hasGridImages || hasGridText) && (
                  <CardBody>
                    {hasGridImages && illustration && (
                      <img src={illustration} alt={`${itemName} illustration`} />
                    )}
                    {hasGridText && (
                      <TextSummary id={`summary-${stripped_id}`} itemsData={galleryItemsData} />
                    )}
                  </CardBody>
                )}
                {(isBeta || isDeprecated || isDemo) && (
                  <CardFooter>
                    {isBeta && (
                      <Label color="blue" isCompact>
                        Beta
                      </Label>
                    )}
                    {!isBeta && isDeprecated && (
                      <Label color="grey" isCompact>
                        Deprecated
                      </Label>
                    )}
                    {!isBeta && !isDeprecated && isDemo && (
                      <Label color="purple" isCompact>
                        Demo
                      </Label>
                    )}
                  </CardFooter>
                )}
              </Card>
            </GalleryItem>
          )
        }
      )}
    </Gallery>
  );
};
