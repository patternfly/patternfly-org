import React from "react";
import { groupedRoutes } from '@patternfly/documentation-framework/routes';
import {  Button, Card, CardTitle, CardBody, Gallery, GalleryItem, SearchInput, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, Text, TextContent, TextVariants, Sidebar, SidebarPanel, SidebarContent } from '@patternfly/react-core';
import { Link } from '@reach/router';
import { convertToReactComponent } from "@patternfly/ast-helpers";
import componentsData from '../components-data.json';
import * as illustrations from '../images/component-illustrations';
import './componentGallery.css';

export const ComponentGallery = () => {
  const { components } = groupedRoutes;
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCard, setSelectedCard] = React.useState('');
  const [isExpanded, setIsExpanded] = React.useState(false);
  const filteredComponents = Object.entries(components)
    .filter(([componentName]) => (
      componentName !== 'View all components' &&
      componentName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()))
    );
  const [
    drawerPanelData = {title: '', id: '', slug: ''},
    setDrawerPanelData
  ] = React.useState(filteredComponents?.[0]?.[1]);
  const drawerRef = React.useRef();
  // convert summary text in drawer from string to jsx
  const SummaryComponent = ({ id }) => {
    const componentDasherized = id.split(' ').join('-').toLowerCase();
    const summary = componentsData?.[componentDasherized]?.summary;
    if (!summary) {
      return null;
    }
    const { code } = convertToReactComponent(`<>${summary}</>`);
    const getSummaryComponent = new Function('React', 'Link', code);
    return getSummaryComponent(React, Link);
  }

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
  const onKeyDown = (event, componentData) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if ([' ', 'Enter'].includes(event.key)) {
      event.preventDefault();
      onClick(componentData);
    }
  };

  return (
    <div className="ws-component-gallery">
      <Toolbar isSticky>
        <ToolbarContent>
          <ToolbarGroup alignment={{default: 'alignLeft'}}>
            <ToolbarItem widths={{default: '320px'}}>
              <SearchInput value={searchTerm} placeholder="Search components by name" onChange={setSearchTerm} />
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarItem alignment={{default: 'alignLeft'}}>
              <Button variant="link" onClick={() => setSearchTerm('')} isInline>Reset</Button>
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarGroup alignment={{default: 'alignRight'}} spacer={{default: 'spacerMd', md: 'spacerNone'}}>
            <ToolbarItem alignment={{default: 'alignRight'}}>
              <Text component={TextVariants.small}>{filteredComponents.length} items</Text>
            </ToolbarItem>
          </ToolbarGroup>
        </ToolbarContent>
      </Toolbar>
      <Sidebar isPanelRight className='ws-component-gallery' tabIndex={1} orientation={() => (window.innerWidth < 768 ? 'stack' : 'split')}>
        <SidebarPanel variant="sticky">
          <TextContent>
            <Text component={TextVariants.h2}>
              <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>
                {drawerPanelData.title}
              </span>
            </Text>
            <Text>
              { drawerPanelData.id ? <SummaryComponent id={drawerPanelData.id}/> : null }
            </Text>
          </TextContent>
          <Button className="ws-view-component" component={(props) => <Link {...props} to={drawerPanelData.slug} />}>View component</Button>
        </SidebarPanel>
        <SidebarContent>
          <Gallery hasGutter>
            {filteredComponents
              .sort(([componentName1], [componentName2]) => componentName1.localeCompare(componentName2))
              .map(([componentName, componentData], idx) => {
                // Convert to lowercase-camelcase ex: File upload - multiple ==> file_upload_multiple
                const illustrationName = componentName
                  .replace('-', '')
                  .replace('  ',' ')
                  .split(' ')
                  .join('_')
                  .toLowerCase();
                const illustration = illustrations[illustrationName];
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
                      {illustration && (
                        <CardBody>
                          <img src={illustration} alt={`${componentName} illustration`} />
                        </CardBody>
                      )}
                    </Card>
                  </GalleryItem>
                );
              })
            }
          </Gallery>
        </SidebarContent>
      </Sidebar>
    </div>
  )
};
