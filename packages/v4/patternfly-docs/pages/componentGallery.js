import React from "react";
import { groupedRoutes } from '@patternfly/documentation-framework/routes';
import {  Button, Card, CardTitle, CardBody, Drawer, DrawerPanelBody, DrawerPanelContent, DrawerContent, DrawerContentBody, DrawerHead, DrawerActions, DrawerCloseButton, Gallery, GalleryItem, SearchInput, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, Text, TextVariants } from '@patternfly/react-core';
import { Link } from '@reach/router';
import { convertToReactComponent } from "@patternfly/ast-helpers";
import componentsData from '../components-data.json';
import * as illustrations from '../images/component-illustrations';

export const ComponentGallery = () => {
  const { components } = groupedRoutes;
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCard, setSelectedCard] = React.useState('');
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [drawerPanelData, setDrawerPanelData] = React.useState({});
  const drawerRef = React.useRef();
  const filteredComponents = Object.entries(components)
    .filter(([componentName]) => (
      componentName !== 'View all components' &&
      componentName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()))
    );

  const onChange = (labelledById, _event) => {
    const newSelectedCard = labelledById === selectedCard ? null : labelledById;
    setSelectedCard(newSelectedCard);
  };
  
  const onClick = (componentData) => {
    if (selectedCard !== componentData.id) {
      setSelectedCard(componentData.id);
      setDrawerPanelData(componentData);
      setIsExpanded(true);
    } else {
      setIsExpanded(!isExpanded);
    }
  };
  const onCloseClick = () => {
    setIsExpanded(false);
  };
  const onExpand = () => {
    drawerRef.current && drawerRef.current.focus();
  };
  const onKeyDown = (event, componentData) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if ([' ', 'Enter'].includes(event.key)) {
      event.preventDefault();
      onClick(componentData);
    }
  };
  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>
          {drawerPanelData.title}
        </span>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <p>{ drawerPanelData.id ? componentsData[drawerPanelData.id.split(' ').join('-').toLowerCase()].summary : '' }</p>
        <Button component={(props) => <Link {...props} to={drawerPanelData.slug} />}>View component</Button>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );

  return (
    <>
      <Toolbar>
        <ToolbarContent>
          <ToolbarGroup alignment={{default: 'alignLeft'}}>
            <ToolbarItem widths = {{default: '350px'}}>
              <SearchInput value={searchTerm} onChange={setSearchTerm} onClear={() => setSearchTerm('')} placeholder="Search components by name" />
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarGroup alignment={{default: 'alignRight'}}>
            <ToolbarItem alignment={{default: 'alightRight'}}>
            <Text component={TextVariants.small}>{filteredComponents.length} items</Text>
            </ToolbarItem>
          </ToolbarGroup>
        </ToolbarContent>
      </Toolbar>
      <Drawer position="right" isExpanded={isExpanded} onExpand={onExpand}>
        <DrawerContent panelContent={panelContent}>
          <DrawerContentBody>
            <Gallery hasGutter>
              {filteredComponents
                .sort(([componentName1], [componentName2]) => componentName1.localeCompare(componentName2))
                .map(([componentName, componentData], idx) => {
                  return (
                    <GalleryItem span={4} key={idx}>
                      <Card
                        id={componentData.id}
                        key={idx}
                        isSelectableRaised
                        hasSelectableInput
                        onClick={() => onClick(componentData)}
                        onKeyDown={evt => onKeyDown(evt, componentData)}
                        onSelectableInputChange={onChange}
                        isSelected={selectedCard === componentData.id}
                      >
                        <CardTitle>{componentName}</CardTitle>
                        <CardBody><img src={`${illustrations[componentName.split(' ').join('_').toLowerCase()]}`} /></CardBody>
                      </Card>
                    </GalleryItem>
                  );
                })
              }
            </Gallery>
          </DrawerContentBody>
        </DrawerContent>
      </Drawer>
    </>
  )
};
