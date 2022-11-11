import React from "react";
import { groupedRoutes } from '@patternfly/documentation-framework/routes';
import {  Button, Card, CardTitle, CardBody, CardFooter, Gallery, GalleryItem, Label, SearchInput, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, Text, TextContent, TextVariants, DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell, DataListAction, ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';
import { Link, navigate } from '@reach/router';
import { convertToReactComponent } from "@patternfly/ast-helpers";
import componentsData from '../components-data.json';
import * as illustrations from '../images/component-illustrations';
import './componentGallery.css';
import ListIcon from '@patternfly/react-icons/dist/esm/icons/list-icon';
import ThIcon from'@patternfly/react-icons/dist/esm/icons/th-icon';

export const ComponentGallery = () => {
  const { components } = groupedRoutes;
  const [searchTerm, setSearchTerm] = React.useState('');
  const [layoutView, setLayoutView] = React.useState('grid');
  const filteredComponents = Object.entries(components)
    .filter(([componentName]) => (
      componentName !== 'View all components' &&
      componentName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()))
    );
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
  const GalleryLayout = layoutView === 'grid' ? Gallery : DataList;
  const layoutProps = layoutView === 'grid'
    ? { hasGutter: true }
    : { onSelectDataListItem: () => {}};

  return (
    <div className="ws-component-gallery">
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
          <ToolbarGroup variant="icon-button-group">
            <ToolbarItem>
              <ToggleGroup>
                <ToggleGroupItem icon={<ThIcon />} aria-label="grid icon button" isSelected={layoutView === 'grid'} onChange={() => setLayoutView('grid')}></ToggleGroupItem>
                <ToggleGroupItem icon={<ListIcon />} aria-label="list icon button" isSelected={layoutView === 'list'} onChange={() => setLayoutView('list')}></ToggleGroupItem>
              </ToggleGroup>
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarItem variant="pagination" spacer={{default: 'spacerMd', md: 'spacerNone'}} style={{'--pf-c-toolbar__item--MinWidth': "max-content"}}>
            <Text component={TextVariants.small}>{filteredComponents.length} items</Text>
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
      {/* Grid view */}
      <GalleryLayout {...layoutProps}>
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
            const {title, id, slug, sources} = componentData;
            const isBeta = sources.some(src => src.beta);
            
            return layoutView === 'grid'
              ? (
                <GalleryItem span={4} key={idx}>
                  <Card
                    id={componentData.id}
                    key={idx}
                    isSelectableRaised
                    onClick={() => navigate(slug)}
                    onKeyDown={evt => onKeyDown(evt, componentData)}
                  >
                    <CardTitle>{componentName}</CardTitle>
                    {illustration && (
                      <CardBody>
                        <img src={illustration} alt={`${componentName} illustration`} />
                      </CardBody>
                    )}
                    {isBeta && (
                      <CardFooter>
                        <Label color="gold">Beta feature</Label>
                      </CardFooter>
                    )}
                  </Card>
                </GalleryItem>
              ) : (
                <DataListItem onClick={({target}) => { target.href ? navigate(target.href) : navigate(slug)}} key={idx}>
                  <DataListItemRow>
                    <DataListItemCells dataListCells={[
                      <DataListCell width={1} key="illustration">
                        {illustration && (
                          <div>
                            <img src={illustration} alt={`${componentName} illustration`} />
                          </div>
                        )}
                      </DataListCell>,
                      <DataListCell width={5} key="text-description">
                        <TextContent>
                          <Text component={TextVariants.h2}>
                            <span>
                              {title}
                            </span>
                          </Text>
                          <Text>
                            { id ? <SummaryComponent id={id}/> : null }
                          </Text>
                        </TextContent>
                      </DataListCell>
                    ]} />
                    {isBeta && (
                      <DataListAction>
                        <Label color="gold">Beta feature</Label>
                      </DataListAction>
                    )}
                  </DataListItemRow>
                </DataListItem>
              )
          })
        }
      </GalleryLayout>   
    </div>
  )
};
