import React from 'react';
import { Card, CardTitle, CardHeader, CardBody, CardFooter, Button, Content, Flex, FlexItem, Stack } from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';
import ClockIcon from '@patternfly/react-icons/dist/esm/icons/clock-icon';
import RunningIcon from '@patternfly/react-icons/dist/esm/icons/running-icon';
import PuzzlePieceIcon from '@patternfly/react-icons/dist/esm/icons/puzzle-piece-icon';
import ChartBarIcon from '@patternfly/react-icons/dist/esm/icons/chart-bar-icon';
import { Link } from '@patternfly/documentation-framework/components/link/link';
import { capitalize } from '@patternfly/documentation-framework/helpers/capitalize';

const getTrainingIcon = trainingType => {
  if (['html-css', 'react'].includes(trainingType)) {
    return <CubesIcon className="pf-org__training-basics" />;
  }
  else if (trainingType === 'react-components') {
    return <PuzzlePieceIcon className="pf-org__training-components" />;
  }

  return <ChartBarIcon className="pf-org__training-charts" />;
}

export const TrainingCard = ({
  trainingType,
  level,
  title,
  time,
  description,
  subsection,
  name = null
}) => (
  <Card isCompact>
    <CardHeader>
      <Flex gap={{'default': 'gapSm'}}>
        {getTrainingIcon(trainingType)}
        {capitalize(level)}
      </Flex>
    </CardHeader>
    <CardTitle>
      {title}
    </CardTitle>
    <CardBody>
      <Stack hasGutter>
        <Content component="small">
          <Flex gap={{'default': 'gapSm'}}>
            <ClockIcon />
            {time}
          </Flex>
        </Content>
        {description}
      </Stack>
    </CardBody>
    <CardFooter>
    {name && (
      <Link to={`/training/${name}`} >
        <Button isInline variant="link" size="lg" icon={<ArrowRightIcon />} iconPosition="end">
          Start
        </Button>
      </Link>
    )}
    </CardFooter>
  </Card>
);
