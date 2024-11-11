import React from 'react';
import {
  PageSection,
  Tabs,
  Tab,
  TabContent,
  TabContentBody,
  TabTitleText,
  Title,
  Flex,
  FlexItem,
  Content,
  DrawerHead,
  PageSidebar,
  PageSidebarBody,
  Nav,
  NavGroup,
  NavItem,
  Form,
  FormGroup,
  TextInput,
  FormHelperText,
  HelperText,
  HelperTextItem,
  TextArea,
  Checkbox,
  ActionGroup,
  Button,
  Icon,
  FormGroupLabelHelp,
  Dropdown,
  DropdownItem,
  DropdownList,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  ToolbarGroup,
  MenuToggle,
  PageToggleButton,
  Masthead,
  MastheadMain,
  MastheadToggle,
  MastheadBrand,
  MastheadContent,
  MastheadLogo,
  ButtonVariant,
  DrawerPanelBody,
  FileUpload
} from '@patternfly/react-core';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';

import cauldron from './img/cauldron.png';
import HatWizardIcon from '@patternfly/react-icons/dist/esm/icons/hat-wizard-icon';
import MagicIcon from '@patternfly/react-icons/dist/esm/icons/magic-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';

export const TabsOpenDemo = () => {
  const [activeTabKey, setActiveTabKey] = React.useState(0);
  const [isNavOpen, setIsNavOpen] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);

  // Toggle currently active tab
  const handleTabClick = (event, tabIndex) => {
    setActiveTabKey(tabIndex);
  };
  
  const [isPoisonChecked, setIsPoisonChecked] = React.useState(true);

  const fromScratchPotion = (
    <Form>
      <FormGroup label="Potion Name" isRequired fieldId="horizontal-form-name">
        <TextInput
          isRequired
          type="text"
          id="horizontal-form-name"
          aria-describedby="horizontal-form-name-helper"
          name="horizontal-form-name"
          placeholder="Grand High Brew"
        />
        <FormHelperText>
          <HelperText>
            <HelperTextItem>Enter a unique potion name</HelperTextItem>
          </HelperText>
        </FormHelperText>
      </FormGroup>
      <FormGroup label="Potion Description" isRequired fieldId="horizontal-form-email">
        <TextInput
          isRequired
          type="text"
          id="horizontal-form-email"
          name="horizontal-form-email"
          placeholder="Grand High Brew"
        />
        <FormHelperText>
          <HelperText>
            <HelperTextItem>Enter a unique potion description</HelperTextItem>
          </HelperText>
        </FormHelperText>
      </FormGroup>
      <FormGroup
        label="Potion Type"
        isInline
        isRequired
        fieldId="horizontal-form-checkbox-group"
        role="group"
        labelHelp={<FormGroupLabelHelp aria-label="" />}
      >
        <Checkbox label="Love" id="alt-form-checkbox-1" name="alt-form-checkbox-1" />
        <Checkbox label="Poison" id="alt-form-checkbox-2" name="alt-form-checkbox-2" isChecked={isPoisonChecked} onChange={() => setIsPoisonChecked(!isPoisonChecked)} />
        <Checkbox label="Elixir" id="alt-form-checkbox-3" name="alt-form-checkbox-3" />
        <Checkbox label="Protection" id="alt-form-checkbox-4" name="alt-form-checkbox-4" />
      </FormGroup>
      <FormGroup
        label="Ingredients"
        fieldId="horizontal-form-select"
        isRequired
        labelHelp={<FormGroupLabelHelp aria-label="" />}
      >
        <TextArea
          placeholder="A dash of Slug Slime\n3 Bristles from a Broomstick\nHandful of Willowtree bark\n1 teaspoon of Human Tears"
          autoResize
        />
        <FormHelperText>
          <HelperText>
            <HelperTextItem>Enter ingredient lists</HelperTextItem>
          </HelperText>
        </FormHelperText>
      </FormGroup>
      <FormGroup
        label="Special Instructions"
        isRequired
        fieldId="horizontal-form-email"
        labelHelp={<FormGroupLabelHelp aria-label="" />}
      >
        <TextInput
          isRequired
          type="text"
          id="horizontal-form-text"
          name="horizontal-form-text"
          placeholder="Place all ingredients in your cauldron on high heat and recite “Boil, Boil, Toil, and Trouble. Let this cauldron bubble bubble” three times."
        />
        <FormHelperText>
          <HelperText>
            <HelperTextItem>Enter any special instructions</HelperTextItem>
          </HelperText>
        </FormHelperText>
      </FormGroup>
      <ActionGroup>
        <Button variant="primary">Create potion</Button>
        <Button variant="link">Abandon potion</Button>
      </ActionGroup>
    </Form>
  );

  const drawer = (
    <>
      <DrawerHead>
        <Content component="h2">Potion Notes: Witches Brew</Content>
      </DrawerHead>
      <DrawerPanelBody>
        <Content>
          <b>Potion Overview</b>
          <ul>
            <li>Name: Witch's Brew</li>
            <li>Type: Elixir</li>
            <li>
              Purpose: This potent elixir is designed to enhance magical abilities, promote intuition, and connect the
              user to the spiritual realm. Often used in rituals, it helps amplify energies and focus intentions.
            </li>
          </ul>

          <b>Ingredients</b>
          <ol>
            <li>
              Mandrake Root
              <ul>
                <li>
                  Properties: Known for its protective qualities, mandrake is often associated with enhancing psychic
                  abilities and promoting fertility. Use with caution, as it has strong effects
                </li>
                <li>Quantity: 1 tablespoon (dried, crushed)</li>
              </ul>
            </li>
            <li>
              Eyebright Herb
              <ul>
                <li>
                  Properties: Traditionally used to improve vision and clarity, eyebright enhances perception and is
                  believed to sharpen the mind during divination practices.
                </li>
                <li>Quantity: 2 teaspoons (dried)</li>
              </ul>
            </li>
            <li>
              Black Cat Hair
              <ul>
                <li>
                  Properties: Symbolizing mystery and intuition, black cat hair is often used to attract good luck and
                  protective energies. It’s thought to connect the user to their inner witch.
                </li>
                <li>Quantity: 3 strands (ethically sourced)</li>
              </ul>
            </li>
            <li>
              Honey
              <ul>
                <li>
                  Properties: A universal symbol of sweetness and attraction, honey enhances the potion's taste while
                  also bringing in energies of love and harmony.
                </li>
                <li>Quantity: 1 tablespoon</li>
              </ul>
            </li>
            <li>
              Moon Water
              <ul>
                <li>
                  Properties: Collected during a full moon, moon water is charged with lunar energies, promoting
                  tranquility and emotional balance. It serves as the base for this potion.
                </li>
                <li>Quantity: 1 cup</li>
              </ul>
            </li>
          </ol>

          <b>Brewing Instructions</b>
          <ol>
            <li>
              Preparation:
              <ul>
                <li>Gather all ingredients in a quiet, sacred space.</li>
                <li>Set your intentions for the potion; visualize its purpose.</li>
              </ul>
            </li>
            <li>
              Combine Ingredients:
              <ul>
                <li>In a clean cauldron or pot, pour in the moon water.</li>
                <li>Add the mandrake root and eyebright herb, stirring clockwise.</li>
              </ul>
            </li>
            <li>
              Infuse with Energy:
              <ul>
                <li>
                  Add the black cat hair while reciting a chant or affirmation that resonates with your intention.
                </li>
                <li>Sweeten the mixture by adding honey, stirring until dissolved.</li>
              </ul>
            </li>
            <li>
              Simmer:
              <ul>
                <li>
                  Heat the mixture over low flame, allowing it to simmer for 15 minutes while maintaining focus on your
                  intention.
                </li>
              </ul>
            </li>
            <li>
              Cool and Store:
              <ul>
                <li>Remove from heat and let the potion cool.</li>
                <li>Strain it into a glass vial.</li>
                <li>Store in a dark place, ideally under the light of the next full moon for optimal potency.</li>
              </ul>
            </li>
            <li>
              Usage Rituals:
              <ul>
                <li>Use Witch's Brew before rituals to enhance your magical focus and energy.</li>
              </ul>
            </li>
            <li>
              Meditation:
              <ul>
                <li>Sip the potion during meditation to deepen your connection to the spiritual realm.</li>
              </ul>
            </li>
            <li>
              Divination:
              <ul>
                <li>Take a small amount before practicing divination to heighten intuition and clarity.</li>
              </ul>
            </li>
            <li>
              Notes Caution:
              <ul>
                <li>Always test a small amount before using any potion.</li>
                <li>If allergic to any ingredients, do not consume.</li>
              </ul>
            </li>
            <li>
              Ethics:
              <ul>
                <li>Ensure that all ingredients, especially animal-derived ones like hair, are sourced ethically.</li>
              </ul>
            </li>
          </ol>
        </Content>
      </DrawerPanelBody>
    </>
  );

  const [activeItem, setActiveItem] = React.useState(4);
  const onNavSelect = (_event: React.FormEvent<HTMLInputElement>, result: any) => {
    setActiveItem(result.itemId);
  };
  const PageNav = (
    <Nav onSelect={onNavSelect} aria-label="Global">
      <NavGroup title="Coven management">
        <NavItem itemId={0} isActive={activeItem === 0} to="#coven-dashboard">
          Coven dashboard
        </NavItem>
        <NavItem itemId={1} isActive={activeItem === 1} to="#member-directory">
          Member directory
        </NavItem>
        <NavItem itemId={2} isActive={activeItem === 2} to="#ritual-schedule">
          Ritual schedule
        </NavItem>
      </NavGroup>
      <NavGroup title="Potion creation">
        <NavItem itemId={3} isActive={activeItem === 3} to="#potion-library">
          Potion library
        </NavItem>
        <NavItem itemId={4} isActive={activeItem === 4} to="#potion-builder">
          Potion builder
        </NavItem>
        <NavItem itemId={5} isActive={activeItem === 5} to="#ingredient-tracker">
          Ingredient tracker
        </NavItem>
      </NavGroup>
      <NavGroup title="Grimoire">
        <NavItem itemId={6} isActive={activeItem === 6} to="#verified-spells">
          Verified spells
        </NavItem>
        <NavItem itemId={7} isActive={activeItem === 7} to="#community-spells">
          Community spells
        </NavItem>
      </NavGroup>
    </Nav>
  );

  const sidebar = (
    <PageSidebar isSidebarOpen={isNavOpen}>
      <div className="pf-v6-c-page__sidebar-header">
        <PageSidebarBody>
          <Title headingLevel="h6">Coven Connections</Title>
        </PageSidebarBody>
      </div>
      <PageSidebarBody>{PageNav}</PageSidebarBody>
    </PageSidebar>
  );

  const [isUserDropdownOpen, setIsUserDropdownOpen] = React.useState(false);

  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = React.useState(false);
  const [selectedRole, setSelectedRole] = React.useState('Coven administrator');

  const roles = ['Coven administrator', 'Coven member', 'Coven guest'];
  const roleDropdownItems = roles.map((role) => (
    <DropdownItem key={role} isSelected={selectedRole === role} value={role}>
      {role}
    </DropdownItem>
  ));

  const onRoleDropdownToggle = () => {
    setIsRoleDropdownOpen(!isRoleDropdownOpen);
  };

  const onRoleDropdownSelect = (_event: any, value: string | number | undefined) => {
    setIsRoleDropdownOpen(false);
    setSelectedRole(typeof value === 'string' ? value : '');
  };

  const userDropdownItems = (
    <>
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user">User management</DropdownItem>
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    </>
  );

  const onUserDropdownToggle = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const onUserDropdownSelect = () => {
    setIsUserDropdownOpen(false);
  };

  const masthead = (
    <Masthead>
      <MastheadMain>
        <MastheadToggle>
          <PageToggleButton
            isSidebarOpen={isNavOpen}
            variant="plain"
            aria-label="Global navigation"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <BarsIcon />
          </PageToggleButton>
        </MastheadToggle>
        <MastheadBrand>
          <MastheadLogo>
            <svg height="40px" viewBox="0 0 158 158" className="pf-logo">
              <title>PF-HorizontalLogo-Color</title>
              <defs>
                <linearGradient x1="68%" y1="2.25860997e-13%" x2="32%" y2="100%" id="linearGradient-website-masthead">
                  <stop stop-color="#2B9AF3" offset="0%"></stop>
                  <stop stop-color="#73BCF7" stop-opacity="0.502212631" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(0.000000, 0.000000)">
                  <path
                    d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                    fill="var(--pf-t--color--blue--50)"
                  ></path>
                  <path
                    d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                    fill="url(#linearGradient-website-masthead)"
                  ></path>
                  <path
                    d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                    fill="url(#linearGradient-website-masthead)"
                    transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                  ></path>
                </g>
              </g>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              className="pf-logo-spooky"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.4783 0H37V22.5217H34.587C23.4812 22.5217 14.4783 13.5188 14.4783 2.41304V0Z"
                fill="#B6A6E9"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37 0.804321L15.2826 37H32.3164C34.9031 37 37 34.9031 37 32.3164V0.804321Z"
                fill="url(#paint0_linear_8602_406)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M36.1957 1.52588e-05L2.67029e-05 21.7174V4.68356C2.67029e-05 2.09691 2.09692 1.52588e-05 4.68357 1.52588e-05L36.1957 1.52588e-05Z"
                fill="url(#paint1_linear_8602_406)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_8602_406"
                  x1="1492.06"
                  y1="0.804262"
                  x2="-311.756"
                  y2="3007.17"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5E40BE" />
                  <stop offset="1" stop-color="#F4784A" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_8602_406"
                  x1="36.1957"
                  y1="-1455.07"
                  x2="-2970.17"
                  y2="348.756"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5E40BE" />
                  <stop offset="1" stop-color="#F4784A" />
                </linearGradient>
              </defs>
            </svg>
          </MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>
        <Toolbar id="toolbar" isStatic>
          <ToolbarContent>
            <ToolbarItem visibility={{ default: 'hidden', md: 'visible' }}>
              <Dropdown
                isOpen={isRoleDropdownOpen}
                onSelect={onRoleDropdownSelect}
                onOpenChange={setIsRoleDropdownOpen}
                toggle={(toggleRef: React.RefObject<any>) => (
                  <MenuToggle
                    ref={toggleRef}
                    icon={<MagicIcon color="var(--pf-t--global--color--brand--default)" />}
                    onClick={onRoleDropdownToggle}
                  >
                    {selectedRole}
                  </MenuToggle>
                )}
              >
                <DropdownList>{roleDropdownItems}</DropdownList>
              </Dropdown>
            </ToolbarItem>
            <ToolbarGroup
              variant="action-group-plain"
              align={{ default: 'alignEnd' }}
              gap={{ default: 'gapNone', md: 'gapMd' }}
            >
              <ToolbarItem>
                <Button
                  aria-label="Notifications"
                  variant={ButtonVariant.control}
                  icon={<BellIcon />}
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                >
                  800!
                </Button>
              </ToolbarItem>
              <ToolbarGroup variant="action-group-plain" visibility={{ default: 'hidden', lg: 'visible' }}>
                <ToolbarItem>
                  <Button
                    aria-label="Settings"
                    variant={ButtonVariant.control}
                    icon={<CogIcon />}
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                  />
                </ToolbarItem>
                <ToolbarItem>
                  <Button
                    aria-label="Help"
                    variant={ButtonVariant.control}
                    icon={<QuestionCircleIcon />}
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                  />
                </ToolbarItem>
              </ToolbarGroup>
            </ToolbarGroup>
            <ToolbarItem visibility={{ default: 'hidden', md: 'visible' }}>
              <Dropdown
                isOpen={isUserDropdownOpen}
                onSelect={onUserDropdownSelect}
                onOpenChange={setIsUserDropdownOpen}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef: React.RefObject<any>) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isUserDropdownOpen}
                    onClick={onUserDropdownToggle}
                    icon={<HatWizardIcon color="var(--pf-t--global--color--brand--default)" />}
                  >
                    Grand High Witch
                  </MenuToggle>
                )}
              >
                <DropdownList>{userDropdownItems}</DropdownList>
              </Dropdown>
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      </MastheadContent>
    </Masthead>
  );

  return (
    <DashboardWrapper
      breadcrumb={<></>}
      sidebar={sidebar}
      notificationDrawer={drawer}
      isNotificationDrawerExpanded={isDrawerOpen}
      masthead={masthead}
    >
      <PageSection isWidthLimited>
        <Flex
          spaceItems={{ default: 'spaceItemsMd' }}
          alignItems={{ default: 'alignItemsCenter' }}
          flexWrap={{ default: 'nowrap' }}
        >
          <FlexItem>
            <Icon size="2xl">
              <img src={cauldron} />
            </Icon>
          </FlexItem>
          <FlexItem>
            <Title headingLevel="h1" size="2xl">
              Potion Builder
            </Title>
          </FlexItem>
        </Flex>
      </PageSection>
      <PageSection type="tabs" isWidthLimited>
        <Tabs activeKey={activeTabKey} onSelect={handleTabClick} usePageInsets id="open-tabs-example-tabs-list">
          <Tab
            eventKey={0}
            title={<TabTitleText>Create potion from scratch</TabTitleText>}
            tabContentId={`tabContent${0}`}
          />
          <Tab
            eventKey={1}
            title={<TabTitleText>Create potion from template</TabTitleText>}
            tabContentId={`tabContent${1}`}
          />
        </Tabs>
      </PageSection>
      <PageSection isWidthLimited>
        <TabContent key={0} eventKey={0} id={`tabContent${0}`} activeKey={activeTabKey} hidden={0 !== activeTabKey}>
          <TabContentBody>{fromScratchPotion}</TabContentBody>
        </TabContent>
        <TabContent key={1} eventKey={1} id={`tabContent${1}`} activeKey={activeTabKey} hidden={1 !== activeTabKey}>
          <TabContentBody>
            <Flex>
              <FileUpload id="potion-upload" />
            </Flex>
          </TabContentBody>
        </TabContent>
      </PageSection>
    </DashboardWrapper>
  );
};
