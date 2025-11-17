import {
  CompassPanel,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Flex,
  Dropdown,
  MenuToggle,
  MenuToggleElement,
  ProgressStep,
  ProgressStepper,
  Spinner,
  Button,
} from '@patternfly/react-core';
import PortIcon from '@patternfly/react-icons/dist/esm/icons/port-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ResourcesFullIcon from '@patternfly/react-icons/dist/esm/icons/resources-full-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

export const RecentActivityCard: React.FunctionComponent = () => {
  const activityData = [
    {
      id: 1,
      name: 'frontend-deployment',
      project: 'automation-platform',
      progress: ['success', 'success', 'success'],
    },
    {
      id: 2,
      name: 'backend-deployment',
      project: 'automation-platform',
      progress: ['success', 'pending', 'default'],
    },
    {
      id: 3,
      name: 'database-deployment',
      project: 'automation-platform',
      progress: ['success', 'success', 'danger'],
    },
    {
      id: 4,
      name: 'frontend-deployment',
      project: 'ci-dashboard',
      progress: ['success', 'warning', 'pending'],
    },
  ];

  const iconMap = {
    success: <CheckCircleIcon />,
    info: <ResourcesFullIcon />,
    pending: <Spinner isInline />,
    danger: <ExclamationCircleIcon />,
    warning: <ExclamationTriangleIcon />,
  };

  return (
    <CompassPanel hasNoPadding isFullHeight>
      <Card isPlain isFullHeight>
        <CardHeader
          actions={{
            actions: (
              <Dropdown
                isOpen={false}
                onSelect={() => {}}
                onOpenChange={() => {}}
                toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                  <MenuToggle
                    ref={toggleRef}
                    variant="plain"
                    onClick={() => {}}
                    isExpanded={false}
                    aria-label="Recent activity card options"
                  >
                    <EllipsisVIcon />
                  </MenuToggle>
                )}
                popperProps={{ position: 'right' }}
              ></Dropdown>
            ),
            hasNoOffset: false,
            className: '',
          }}
        >
          <CardTitle>
            <Flex alignItems={{ default: 'alignItemsCenter' }}>
              <PortIcon />
              <span>Recent activity</span>
            </Flex>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Table aria-label="Recent activity table" variant="compact" className="pf-m-plain">
            <Thead>
              <Tr>
                <Th width={30}>Name</Th>
                <Th width={30}>Project</Th>
                <Th width={30}>Progress</Th>
                <Th width={10} />
              </Tr>
            </Thead>
            <Tbody>
              {activityData.map((activity, rowIndex) => (
                <Tr key={activity.id}>
                  <Td>
                    <Button variant="link" isInline component="a" href="#">
                      {activity.name}
                    </Button>
                  </Td>
                  <Td>
                    <Button variant="link" isInline component="a" href="#">
                      {activity.project}
                    </Button>
                  </Td>
                  <Td>
                    <ProgressStepper isCompact aria-label={`Progress for activity ${activity.name} in project ${activity.project}`}>
                      {activity.progress.map((stepVariant, stepIndex) => (
                        <ProgressStep
                          id={`progress-step-${rowIndex}-${stepVariant}-${stepIndex}`}
                          key={stepIndex}
                          variant={
                            stepVariant as
                              | 'default'
                              | 'success'
                              | 'pending'
                              | 'danger'
                              | 'warning'
                              | 'info'
                          }
                          icon={iconMap[stepVariant as keyof typeof iconMap]}
                          aria-label={`Step ${stepIndex + 1} is ${stepVariant}`}
                        />
                      ))}
                    </ProgressStepper>
                  </Td>
                  <Td isActionCell>
                    <Dropdown
                      isOpen={false}
                      onSelect={() => {}}
                      onOpenChange={() => {}}
                      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                        <MenuToggle
                          ref={toggleRef}
                          variant="plain"
                          onClick={() => {}}
                          isExpanded={false}
                          aria-label={`Options for activity ${activity.name} in project ${activity.project}`}
                        >
                          <EllipsisVIcon />
                        </MenuToggle>
                      )}
                      popperProps={{ position: 'right' }}
                    ></Dropdown>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </CompassPanel>
  );
};

RecentActivityCard.displayName = 'RecentActivityCard';

export default RecentActivityCard;

