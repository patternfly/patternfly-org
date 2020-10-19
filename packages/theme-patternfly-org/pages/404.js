import React, { useEffect } from 'react';
import { Link } from 'theme-patternfly-org/components';
import {
  Button,
  PageSection,
  Title,
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  TextInput,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  CardHeaderMain
} from '@patternfly/react-core';
import PathMissingIcon from '@patternfly/react-icons/dist/esm/icons/pathMissing-icon';
import ChartBarIcon from '@patternfly/react-icons/dist/esm/icons/chart-bar-icon';
import { attachDocSearch } from '../layouts/sideNavLayout/sideNavLayout';
import './404.css';

const Card404 = ({
  icon,
  title,
  body,
  link: {
    text,
    to
  }
}) => (
  <Card className="ws-404-empty-state-card">
    <CardHeaderMain className="ws-404-card-header">
      {icon}
    </CardHeaderMain>
    <CardTitle>
      {title}
    </CardTitle>
    <CardBody>
      {body}
    </CardBody>
    <CardFooter>
      <Link to={to}>
        {text}
      </Link>
    </CardFooter>
  </Card>
);

const Page404 = () => {
  const algolia = process.env.algolia;

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (algolia) {
      attachDocSearch(algolia, '#ws-404-search', 1000);
    }
  });
  
  return (
    <PageSection>
      <EmptyState variant="xl">
        <EmptyStateIcon icon={PathMissingIcon} />
        <Title headingLevel="h1" size="2xl">
          404: That page no longer exists
        </Title>
        <p>
          We can't find what you're looking for. Try searching PatternFly:
        </p>
        <EmptyStateBody>
          <div id="ws-404-search-wrapper">
            <TextInput id="ws-404-search" type="text" placeholder="Search PatternFly" />
          </div>
        </EmptyStateBody>
        <EmptyStateSecondaryActions className="ws-404-secondary-actions">
          <Card404
            icon={<ChartBarIcon title="Charts icon" size="xl" />}
            title="Getting started"
            body="Learn about designing and developing with PatternFly."
            link={{
              text: 'View getting started resources',
              to: '/get-started/about'
            }}
          />
          <Card404
            icon={<ChartBarIcon title="Charts icon" size="xl" />}
            title="Guidelines"
            body="Check out PatternFly's design approach to icons, colors, and more."
            link={{
              text: 'View guidelines',
              to: '/guidelines/colors'
            }}
          />
          <Card404
            icon={<ChartBarIcon title="Charts icon" size="xl" />}
            title="Components"
            body="Start creating your applications with components -- the building blocks of user interfaces."
            link={{
              text: 'View components',
              to: '/components/about-modal'
            }}
          />
          <Card404
            icon={<ChartBarIcon title="Charts icon" size="xl" />}
            title="Charts"
            body="Visualize your facts and figures by designing the right charts for your data."
            link={{
              text: 'View charts',
              to: '/charts/about'
            }}
          />
        </EmptyStateSecondaryActions>
        <Button variant="primary" component={Link} to="/">
          Return to home page
        </Button>
      </EmptyState>
    </PageSection>
  );
}

export default Page404;
