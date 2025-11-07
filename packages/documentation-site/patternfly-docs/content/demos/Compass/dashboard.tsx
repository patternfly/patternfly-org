import { useState } from 'react';
import {
  Compass,
  CompassHeader,
  CompassHero,
  CompassContent,
  CompassPanel,
  CompassMessageBar,
  Tabs,
  TabsComponent,
  Tab,
  TabTitleText,
  ActionList,
  ActionListGroup,
  ActionListItem,
  Button,
  Tooltip,
  Content,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownList,
  Flex,
  MenuToggle,
  MenuToggleElement,
  Grid,
  GridItem,
  Icon,
  SkipToContent
} from '@patternfly/react-core';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import OutlinedPlusSquare from '@patternfly/react-icons/dist/esm/icons/outlined-plus-square-icon';
import OutlinedCopy from '@patternfly/react-icons/dist/esm/icons/outlined-copy-icon';
import OutlinedQuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon';
import { MessageBar } from '@patternfly/chatbot';

import { RHAutomationsLogo } from './assets/RHAutomationsLogo';
import { RHAiExperienceIcon } from './assets/RHAiExperienceIcon';
import AnimationsOverviewClusterInventory from "./cards/AnimationsOverviewClusterInventory";
import AnimationsOverviewNetworkActivity from "./cards/AnimationsOverviewNetworkActivity";
import AnimationsOverviewStorage from "./cards/AnimationsOverviewStorage";
import AnimationsOverviewMemoryUtilization from "./cards/AnimationsOverviewMemoryUtilization";
import { ClusterDetailsCard } from './cards/ClusterDetailsCard';
import { RecentActivityCard } from './cards/RecentActivityCard';

import heroBg from './assets/hero-bg.png';
import wallpaperDark from './assets/wallpaper-dark.png';
import wallpaperLight from './assets/wallpaper-light.png';
import imgAvatar from './assets/avatar.jpg';

export const CompassBasic: React.FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isThinking, setIsThinking] = useState(false);


  const navContent = (
    <>
      <CompassPanel isPill hasNoPadding>
        <Tabs
          activeKey={activeTab}
          isNav
          onSelect={(_event, tabIndex) => setActiveTab(tabIndex as number)}
          component={TabsComponent.nav}
          aria-label="Compass global"
          inset={{ default: 'insetXl' }}
        >
          <Tab eventKey={0} title={<TabTitleText>Dashboard</TabTitleText>} />
          <Tab eventKey={1} title={<TabTitleText>Builder</TabTitleText>} isDisabled />
          <Tab eventKey={2} title={<TabTitleText>Automations</TabTitleText>} />
          <Tab eventKey={3} title={<TabTitleText>Approvals</TabTitleText>} isDisabled />
          <Tab eventKey={4} title={<TabTitleText>Configuration</TabTitleText>} />
          <Tab eventKey={5} title={<TabTitleText>Test Page</TabTitleText>} />
        </Tabs>
      </CompassPanel>
    </>
  );

  const westContent = (
    <CompassPanel isPill>
      <ActionList isIconList isVertical>
        <ActionListGroup>
          <ActionListItem>
            <Tooltip content="Play">
              <Button variant="plain" icon={<PlayIcon />} aria-label="Play" isCircle />
            </Tooltip>
          </ActionListItem>
          <ActionListItem>
            <Tooltip content="Add">
              <Button variant="plain" icon={<OutlinedPlusSquare />} aria-label="Add" isCircle />
            </Tooltip>
          </ActionListItem>
        </ActionListGroup>
        <ActionListItem>
          <Tooltip content="Assistant">
            <Button variant="plain" icon={<Icon style={{ translate: ".05em .1em; scale: 1.1" }}><RHAiExperienceIcon /></Icon>} aria-label="Assistant" isCircle className="pf-v6-m-ai-indicator" />
          </Tooltip>
        </ActionListItem>
        <ActionListGroup>
          <ActionListItem>
            <Tooltip content="Help">
              <Button variant="plain" icon={<OutlinedQuestionCircleIcon />} aria-label="Help" isCircle />
            </Tooltip>
          </ActionListItem>
          <ActionListItem>
            <Tooltip content="Copy">
              <Button variant="plain" icon={<OutlinedCopy />} aria-label="Copy" isCircle />
            </Tooltip>
          </ActionListItem>
        </ActionListGroup>
      </ActionList>
    </CompassPanel>
  );

  const userDropdownItems = (
    <>
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user">User management</DropdownItem>
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    </>
  );

  const onDropdownSelect = () => {
    setIsDropdownOpen(false);
  };

  const onDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const userDropdown = (
    <Dropdown
      isOpen={isDropdownOpen}
      onSelect={() => onDropdownSelect}
      onOpenChange={(isOpen: boolean) => setIsDropdownOpen(isOpen)}
      popperProps={{ position: "right" }}
      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
        <MenuToggle
          ref={toggleRef}
          onClick={onDropdownToggle}
          isExpanded={isDropdownOpen}
          variant="plain"
          isCircle
        >
          <Flex
            alignItems={{ default: "alignItemsCenter" }}
            gap={{ default: "gapMd" }}
          >
            Aliyah Frazier
            <Avatar src={imgAvatar} alt="" size="md" />
          </Flex>
        </MenuToggle>
      )}
    >
      <DropdownList>{userDropdownItems}</DropdownList>
    </Dropdown>
  );

  const northContent = <CompassHeader logo={<a href="#" aria-label="Red Hat automations" tabIndex={0}><RHAutomationsLogo /></a>} nav={navContent} profile={userDropdown} />;

  const mainContent = (
    <>
      <CompassHero gradientDark={{ stop1: '#3d2785', stop2: '#1b0d33', stop3: '#000' }} backgroundSrcDark={heroBg}>
        <Content>
          <h1>Automation that does more</h1>
          <p>
            Red Hat Ansible Automation Platform offers more capabilities,
            accessibility, and flexibility, so you can bring the power of
            automation to the teams, tasks, and environments that need it.
          </p>
          <ActionList>
            <ActionListGroup>
              <ActionListItem>
                <Button variant="primary">Upgrade today</Button>
              </ActionListItem>
              <ActionListItem>
                <Button variant="secondary">Talk to a Red Hatter</Button>
              </ActionListItem>
            </ActionListGroup>
          </ActionList>
        </Content>
      </CompassHero>
      <CompassContent id="main">
        <Grid hasGutter style={{ maxHeight: 'none' }}>
          <GridItem span={12} sm={12} md={6} lg={4} xl={3} rowSpan={4}>
            <ClusterDetailsCard />
          </GridItem>
          <GridItem span={12} sm={12} md={6} lg={4} xl={3} rowSpan={2}>
            <AnimationsOverviewClusterInventory />
          </GridItem>
          <GridItem span={12} sm={12} md={6} lg={4} xl={3} rowSpan={2}>
            <AnimationsOverviewStorage />
          </GridItem>
          <GridItem span={12} sm={12} md={12} lg={8} xl={3} rowSpan={2}>
            <AnimationsOverviewMemoryUtilization />
          </GridItem>
          <GridItem span={12} sm={12} md={12} lg={12} xl={3} rowSpan={2}>
            <AnimationsOverviewNetworkActivity />
          </GridItem>
          <GridItem span={12} sm={12} md={12} lg={8} xl={6} rowSpan={2}>
            <RecentActivityCard />
          </GridItem>
        </Grid>
      </CompassContent>
    </>
  );

  const eastContent = (
    <CompassPanel isPill>
      <ActionList isIconList isVertical>
        <ActionListGroup>
          <ActionListItem>
            <Tooltip content="Help 2">
              <Button variant="plain" icon={<OutlinedQuestionCircleIcon />} aria-label="Help 2" isCircle />
            </Tooltip>
          </ActionListItem>
          <ActionListItem>
            <Tooltip content="Add">
              <Button variant="plain" icon={<OutlinedPlusSquare />} aria-label="Add" isCircle />
            </Tooltip>
          </ActionListItem>
          <ActionListItem>
            <Tooltip content="Help 3">
              <Button variant="plain" icon={<OutlinedQuestionCircleIcon />} aria-label="Help 3" isCircle />
            </Tooltip>
          </ActionListItem>
        </ActionListGroup>
      </ActionList>
    </CompassPanel>
  );

  const handleSendMessage = () => {
    setIsThinking(true);
    setTimeout(() => {
      setIsThinking(false);
    }, 10000); // 10 seconds
  };

  const southContent = (
    <CompassMessageBar>
      <CompassPanel isPill hasNoPadding hasNoBorder>
        <MessageBar
          isCompact
          onSendMessage={handleSendMessage}
          alwayShowSendButton
          hasAttachButton={false}
          hasAiIndicator
          isThinking={isThinking}
        />
      </CompassPanel>
      <div className="pf-v6-screen-reader" aria-live="polite">{isThinking && "AI is thinking..."}</div>
    </CompassMessageBar>
  );

  const skipToContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const mainContent = document.getElementById('main');
    if (mainContent) {
      mainContent.focus();
    }
  };

  return (
    <>
      <SkipToContent onClick={skipToContentClick} href="#main">Skip to content</SkipToContent>
      <Compass
        header={northContent}
        sidebarStart={westContent}
        main={mainContent}
        sidebarEnd={eastContent}
        footer={southContent}
        backgroundSrcDark={wallpaperDark}
        backgroundSrcLight={wallpaperLight}
      />
    </>
  );
};
