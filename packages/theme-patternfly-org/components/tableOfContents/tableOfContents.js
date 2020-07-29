import React from 'react';
import {
  Badge,
  Card,
  CardTitle,
  CardBody,
  Grid,
  GridItem
} from '@patternfly/react-core';
import { slugger } from '../../helpers';
import versions from '../../versions.json';

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

  return items
    .map(heading => (
      <a key={heading} href={`#${slugger(heading)}`} className="ws-toc">
        {heading}
      </a>
    ))
    .filter(Boolean);
}
