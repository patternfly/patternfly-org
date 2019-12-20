import React from 'react';
import { Card, CardHead, CardHeader, CardBody, CardFooter, Button } from "@patternfly/react-core";
import { ArrowRightIcon, CubesIcon, ClockIcon, RunningIcon, PuzzlePieceIcon, ChartBarIcon } from '@patternfly/react-icons';
import { NoPrefixLink } from '../noPrefixLink/noPrefixLink';
import { Location } from '@reach/router';
import { capitalize } from '../../helpers/capitalize';
import './trainingCard.css';

const getTrainingIcon = trainingType => {
  if (['html-css', 'react'].includes(trainingType)) {
    return <CubesIcon className="training-basics" />;
  }
  else if (trainingType === 'react-components') {
    return <PuzzlePieceIcon className="training-components" />;
  }

  return <ChartBarIcon className="training-charts" />;
}

export const TrainingCard = ({
  trainingType,
  level,
  title,
  time,
  description,
  katacodaId
}) => (
  <Card className="ws-org-training-card" isCompact>
    <CardHead>
      <Card className="small-card-icon">
        {getTrainingIcon(trainingType)}
      </Card>
      <div className="level">
        <RunningIcon className={`level-${level}`} />
        {capitalize(level)}
      </div>
    </CardHead>
    <CardHeader>
      {title}
    </CardHeader>
    <CardBody>
      <div className="pf-org-card-body__time">
        <ClockIcon />
        {time}
      </div>
      {description}
    </CardBody>
    <CardFooter>
    <Location>
      {({ location }) => (
        <NoPrefixLink
          to={location.pathname}
          state={{ trainingType, katacodaId }} // To show embedded tutorial
        >
          <Button variant="link">
            Start
            <ArrowRightIcon />
          </Button>
        </NoPrefixLink>
      )}
    </Location>
    </CardFooter>
  </Card>
);
