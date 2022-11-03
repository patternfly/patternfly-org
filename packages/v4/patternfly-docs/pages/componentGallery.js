import React, { useEffect } from "react";
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
  ] = React.useState({});
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
      setSelectedCard(null);
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

  useEffect(() => {
    // Hide side panel & reset selection only when search results don't include selected card
    if (!filteredComponents.some(([componentName]) => componentName === selectedCard)) {
      setIsExpanded(false);
      setSelectedCard(null);
    }
  }, [filteredComponents])

  return (
    <div className="ws-component-gallery-container">
      <Toolbar isSticky>
        <ToolbarContent>
          <ToolbarItem variant="search-filter" widths={{default: '100%', md: '320px'}}>
            <SearchInput onClear={false} value={searchTerm} placeholder="Search components by name" onChange={setSearchTerm} />
          </ToolbarItem>
          {searchTerm && (
            <ToolbarItem>
              <Button variant="link" onClick={() => setSearchTerm('')}>Reset</Button>
            </ToolbarItem>
          )}
          <ToolbarItem variant="pagination" spacer={{default: 'spacerMd', md: 'spacerNone'}} style={{'--pf-c-toolbar__item--MinWidth': "max-content"}}>
            <Text component={TextVariants.small}>{filteredComponents.length} items</Text>
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
      <Sidebar isPanelRight className='ws-component-gallery' tabIndex={1}>
          <SidebarPanel variant="sticky">
            {selectedCard && (
              <TextContent>
                <Text component={TextVariants.h2}>
                  <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>
                    {drawerPanelData.title}
                  </span>
                </Text>
                <Text>
                  { drawerPanelData.id ? <SummaryComponent id={drawerPanelData.id}/> : null }
                </Text>
                <Button className="ws-view-component" component={(props) => <Link {...props} to={drawerPanelData.slug} />}>View component</Button>
              </TextContent>
            )}
          </SidebarPanel>
        <SidebarContent hasNoBackground>
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
                const illustration = illustrations[illustrationName] || illustrations.default_placeholder;
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
