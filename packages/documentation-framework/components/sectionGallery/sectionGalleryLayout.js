import React from "react";
import { Gallery, GalleryItem, Card, CardTitle, CardBody, CardFooter, Label } from "@patternfly/react-core";
import { Link } from '../link/link';

export const SectionGalleryLayout = ({ galleryItems, layoutView }) => {
  if (layoutView !== 'grid') {
    return null;
  }

  return (
    <Gallery hasGutter>
      {galleryItems.map(({idx, slug, id, itemName, illustration, isBeta}) => (
        <GalleryItem span={4} key={idx}>
          <Link to={slug} className="ws-section-gallery-item">
            <Card
              id={id}
              key={idx}
              isSelectableRaised
            >
              <CardTitle>{itemName}</CardTitle>
              {illustration && (
                <CardBody>
                  <img src={illustration} alt={`${itemName} illustration`} />
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
