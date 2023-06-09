import React from "react";
import { Gallery, GalleryItem, Card, CardTitle, CardBody, CardFooter, Label } from "@patternfly/react-core";
import { Link } from '../link/link';
import { TextSummary } from "./TextSummary";

export const SectionGalleryLayout = ({ galleryItems, layoutView, hasGridText, hasGridImages }) => {
  if (layoutView !== 'grid') {
    return null;
  }

  return (
    <Gallery hasGutter>
      {galleryItems.map(({idx, slug, id, itemName, illustration, isBeta, title, galleryItemsData}) => (
        <GalleryItem span={4} key={idx}>
          <Link to={slug} className="ws-section-gallery-item">
            <Card
              id={id}
              key={idx}
              isSelectableRaised
            >
              <CardTitle>{title}</CardTitle>
              {(hasGridImages || hasGridText) && (
                <CardBody>
                  { hasGridImages && illustration && <img src={illustration} alt={`${itemName} illustration`} /> }
                  { hasGridText && <TextSummary id={id} itemsData={galleryItemsData} /> }
                </CardBody>
              )}
              {isBeta && (
                <CardFooter>
                  <Label color="blue">Beta feature</Label>
                </CardFooter>
              )}
            </Card>
          </Link>
        </GalleryItem>
      ))}
    </Gallery>
  )
};
