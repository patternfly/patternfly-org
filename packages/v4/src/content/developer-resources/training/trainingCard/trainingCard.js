import React from 'react';
import { Card, CardTitle, CardHeader, CardBody, CardFooter, Button } from '@patternfly/react-core';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';
import ClockIcon from '@patternfly/react-icons/dist/esm/icons/clock-icon';
import RunningIcon from '@patternfly/react-icons/dist/esm/icons/running-icon';
import PuzzlePieceIcon from '@patternfly/react-icons/dist/esm/icons/puzzle-piece-icon';
import ChartBarIcon from '@patternfly/react-icons/dist/esm/icons/chart-bar-icon';
import { Link } from 'theme-patternfly-org/components/link/link';
import { capitalize } from 'theme-patternfly-org/helpers/capitalize';
import './trainingCard.css';

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
  katacodaId
}) => (
  <Card className="pf-org__card" isCompact>
    <CardHeader>
      <Card className="pf-org__card-small">
        {getTrainingIcon(trainingType)}
      </Card>
      <div className="pf-org__level">
        <RunningIcon className={`pf-org__level-${level}`} />
        {capitalize(level)}
      </div>
    </CardHeader>
    <CardTitle>
      {title}
    </CardTitle>
    <CardBody>
      <div className="pf-org__time">
        <ClockIcon />
        {time}
      </div>
      {description}
    </CardBody>
    <CardFooter>
    <Link to={`https://www.katacoda.com/patternfly/courses/${trainingType}/${katacodaId}`} target="_blank">
      <Button variant="link">
        Start
        <ExternalLinkAltIcon />
      </Button>
    </Link>
    </CardFooter>
  </Card>
);
