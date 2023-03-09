import React from "react";
import { groupedRoutes } from '../../routes';
import {  Button, Card, CardTitle, CardBody, CardFooter, DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell, DataListAction, Gallery, GalleryItem, Label, SearchInput, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, Text, TextContent, TextVariants, ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';
import { Link } from '../link/link';
import { convertToReactComponent } from "@patternfly/ast-helpers";
import * as illustrations from 'component-previews';
import './componentGallery.css';
import ListIcon from '@patternfly/react-icons/dist/esm/icons/list-icon';
import ThIcon from'@patternfly/react-icons/dist/esm/icons/th-icon';

const Illustration = ({component: IllustrationWrapper, illustration, componentName}) => (
  <IllustrationWrapper>
    <img src={illustration} alt={`${componentName} illustration`} />
  </IllustrationWrapper>
);
const BetaLabel = ({component: LabelWrapper}) => (
  <LabelWrapper>
    <Label color="gold">Beta feature</Label>
  </LabelWrapper>
);

// convert summary text in drawer from string to jsx
const SummaryComponent = ({ id }) => {
  const componentsData = process.env.componentsData;
  const componentDasherized = id.split(' ').join('-').toLowerCase();
  const summary = componentsData?.[componentDasherized]?.summary;
  if (!summary) {
    return null;
  }
  // Remove anchor tags to avoid <a> in summary nested within <a> of Link card/datalistitem
  const summaryNoLinks = summary.replace(/<Link[^>]*>([^<]+)<\/Link>/gm, '$1');
  const { code } = convertToReactComponent(`<>${summaryNoLinks}</>`);
  const getSummaryComponent = new Function('React', code);
  return getSummaryComponent(React);
}

export const ComponentGallery = () => {
  const { components } = groupedRoutes;
  const [searchTerm, setSearchTerm] = React.useState('');
  const [layoutView, setLayoutView] = React.useState('grid');
  const filteredComponents = Object.entries(components)
    .filter(([componentName]) => (
      componentName !== 'View all components' &&
      componentName
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ));
  const GalleryLayout = layoutView === 'grid' ? Gallery : DataList;
  const layoutProps = layoutView === 'grid'
    ? { hasGutter: true }
    : { onSelectDataListItem: () => {}};
  

  return (
    <div className="ws-component-gallery">
      <Toolbar isSticky>
        <ToolbarContent>
          <ToolbarItem variant="search-filter" widths={{default: '100%', md: '320px'}}>
            <SearchInput onClear={false} value={searchTerm} placeholder="Search components by name" onChange={(_evt, val) => setSearchTerm(val)} />
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
            // Display beta label if tab other than a '-next' tab is marked Beta
            const isBeta = sources.some(src => src.beta && !src.source.includes('-next'));

            return layoutView === 'grid'
              ? (
                <GalleryItem span={4} key={idx}>
                  <Link to={slug} className="ws-component-gallery-component">
                    <Card
                      id={componentData.id}
                      key={idx}
                      isSelectableRaised
                    >
                      <CardTitle>{componentName}</CardTitle>
                      {illustration && <Illustration component={CardBody} illustration={illustration} componentName={componentName} />}
                      {isBeta && <BetaLabel component={CardFooter} />}
                    </Card>
                  </Link>
                </GalleryItem>
              ) : (
                <Link to={slug} key={idx} className="ws-component-gallery-component">
                  <DataListItem>
                    <DataListItemRow>
                      <DataListItemCells dataListCells={[
                        <DataListCell width={1} key="illustration">
                          {illustration && <Illustration component={'div'} illustration={illustration} componentName={componentName} />}
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
                      {isBeta && <BetaLabel component={DataListAction} />}
                    </DataListItemRow>
                  </DataListItem>
                </Link>
              )
          })
        }
      </GalleryLayout>   
    </div>
  )
};
