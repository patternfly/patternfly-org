---
title: Icons
section: styles
---
import { Alert, ApplicationLauncher, ApplicationLauncherGroup, ApplicationLauncherItem, Button, Card, CardBody, Divider, Dropdown, DropdownToggle, EmptyState, EmptyStateIcon, Flex, FlexItem, FlexModifiers, Grid, GridItem, SimpleList, SimpleListItem, SimpleListGroup, Title } from '@patternfly/react-core';
import { CaretDownIcon, CheckCircleIcon, TimesCircleIcon, FilterIcon, StarIcon } from '@patternfly/react-icons';
import { Icons } from 'gatsby-theme-patternfly-org/components/icons/icons';
import { IconRecommendations } from './IconRecommendations';
import { IconsTable } from './IconsTable';
import './icons.css';

<Divider className="ws-icons-divider" />

<p class="ws-icons-page">If you're a developer, check out our <a href="/get-started/developers#using-styles">getting started</a> page to learn more about how to get and use our icon set.</p>

## Icon sizes
<Grid gutter="md">
  <GridItem xl={6} lg={12} className="ws-icons-gridtext">
    <p>Icons always live in a 24x24 box so they align with our text line height and have an accessible focus radius. This means that icons will take up a minimum of 24px space. This is especially clear within <a href="/design-guidelines/usage-and-behavior/buttons-and-links#link-button" className="pf-m-link">link buttons</a>.</p>
    <Button variant="link" icon={<FilterIcon size="sm" />}></Button>
    <Button variant="link" icon={<FilterIcon size="md" />}></Button>
    <Button variant="link" icon={<FilterIcon size="lg" />}></Button>
     <FilterIcon size="sm" />
    <FilterIcon size="md" />
    <FilterIcon size="lg" />
    <p>Medium icons are used as our base size across our system as a whole and we recommend using this base size within your applications. Small, large and x-large icons are used sparingly across PatternFly components. Here is a full complete list of icon sizes:</p>
    <Flex className="ws-icon-sizes ws-icon-sizes-sm" breakpointMods={[{modifier: FlexModifiers['align-items-flex-start']}]}>
      <FlexItem className="ws-icon-size">
        <FilterIcon size="sm" />
      </FlexItem>
      <FlexItem>
        <p>Small (10px)</p>
        <code>-pf-global-icon-FonSize-sm</code>
      </FlexItem>
    </Flex>
    <Flex className="ws-icon-sizes ws-icon-sizes-md" breakpointMods={[{modifier: FlexModifiers['align-items-flex-start']}]}>
      <FlexItem className="ws-icon-size">
        <FilterIcon size="md" />
      </FlexItem>
      <FlexItem>
        <p>Medium (18px)</p>
        <code>-pf-global-icon-FonSize-md</code>
      </FlexItem>
    </Flex>
    <Flex className="ws-icon-sizes ws-icon-sizes-lg" breakpointMods={[{modifier: FlexModifiers['align-items-flex-start']}]}>
      <FlexItem className="ws-icon-size">
        <FilterIcon size="lg" />
      </FlexItem>
      <FlexItem>
        <p>Large (24px)</p>
        <code>-pf-global-icon-FonSize-lg</code>
      </FlexItem>
    </Flex>
    <Flex className="ws-icon-sizes ws-icon-sizes-xl" breakpointMods={[{modifier: FlexModifiers['align-items-flex-start']}]}>
      <FlexItem className="ws-icon-size">
        <FilterIcon size="xl" />
      </FlexItem>
      <FlexItem>
        <p>X-large (54px)</p>
        <code>-pf-global-icon-FonSize-xl</code>
      </FlexItem>
    </Flex>
  </GridItem>
  <GridItem xl={6} lg={12}>
    <Card className="ws-icon-size-examples">
      <CardBody>
        <p><b>Small icons</b></p>
        <Flex  breakpointMods={[{modifier: FlexModifiers['align-items-flex-start']}]}>
          <FlexItem>
            <Dropdown
              toggle={<DropdownToggle id="toggle-id">Dropdown</DropdownToggle>}
            />
          </FlexItem>
          <FlexItem breakpointMods={[{modifier: FlexModifiers.grow}]}>
            <ApplicationLauncher isOpen={true} favorites={['openshift']} isGrouped className="ws-icons-appLauncher" onFavorite={()=>null} items={[
              <ApplicationLauncherGroup label="Favorites" key="Favorites">
                <ApplicationLauncherItem isFavorite key="item 1" id="openshift">OpenShift</ApplicationLauncherItem>
                <ApplicationLauncherItem key="item 2" id="github">Github</ApplicationLauncherItem>
              </ApplicationLauncherGroup>
            ]} />
          </FlexItem>
        </Flex>
        <p><b>Medium icons</b></p>
        <Alert variant="default" isInline title="Default inline alert title"/>
        <p><b>Large icons</b></p>
        <Alert variant="success" title="Success alert title 4" />
        <p><b>X-large icons</b></p>
        <EmptyState variant={EmptyStateVariant.lg}>
          <EmptyStateIcon icon={CubesIcon} />
          <Title headingLevel="h5" size="xl">
            This is a large empty state
          </Title>
        </EmptyState>
      </CardBody>
    </Card>
  </GridItem>
</Grid>

<Divider className="ws-icons-divider" />

## Icon colors
<p>Visit our <a href="/design-guidelines/styles/colors" className="pf-m-link">colors page</a> to learn more about icon colors.</p>

<Divider className="ws-icons-divider" />

## All icons
<p>PatternFly uses custom icons and selections from <a href="https://fontawesome.com/icons">FontAwesome</a>. PatternFly icons are two dimensional and flat. Navigate to FontAwesome’s website to download SVGs of any ‘fa’ icons. Click on any single pf-icon in the table to download it as an SVG. Download all icon SVGs <a href="#">here</a>.</p>

<p>If you’re a designer, these icons are the same set as the ones in the <a href="https://www.patternfly.org/v4/get-started/designers">PatternFly Sketch Design Kit</a>. It is possible to use any FontAwesome icon as long it follows the guidelines above.</p>

<p>If you’re looking to copy HTML for an icon:
<br/>
Use this for 'pficon' icons: <code>&lt;i className="pf-icon [insert-icon-name]"&gt;&lt;/i&gt;</code>
<br />
Use this for 'fa' solid icons: <code>&lt;i className="fas [insert-icon-name]"&gt;&lt;/i&gt;</code>
<br />
Use this for 'fa' regular icons: <code>&lt;i className="far [insert-icon-name]"&gt;&lt;/i&gt;</code>
<br />
<small>Note: Be sure to read <a href="/get-started/developers#using-styles" className="pf-m-link">how to get started with icons</a> when using 'fa' regular icons</small></p>

<p>If you're looking to copy React for an icon:

Use this for 'pficon' icons: <code>import { [insert-icon-name] } from '@patternfly/react-icons'</code></p>

<!-- <Icons /> -->
<IconsTable />

<Divider className="ws-icons-divider" />

## Updated icon recommendations
<p>We’ve recently updated some of our PatternFly icons as well as icon usage guidelines. If you are using an outdated icon, we suggest you migrate over to the newest recommendations.</p>

<IconRecommendations />
