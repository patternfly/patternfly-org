import React from "react";
import { groupedRoutes } from '../../routes';
import {  Button, Card, CardTitle, CardBody, CardFooter, DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell, DataListAction, Gallery, GalleryItem, Label, SearchInput, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem, Text, TextContent, TextVariants, ToggleGroup, ToggleGroupItem, Split, SplitItem } from '@patternfly/react-core';
import { Link } from '../link/link';
import { convertToReactComponent } from "@patternfly/ast-helpers";
import './sectionGallery.css';
import ListIcon from '@patternfly/react-icons/dist/esm/icons/list-icon';
import ThIcon from'@patternfly/react-icons/dist/esm/icons/th-icon';

const Illustration = ({component: IllustrationWrapper, illustration, itemName}) => (
  <IllustrationWrapper>
    <img src={illustration} alt={`${itemName} illustration`} />
  </IllustrationWrapper>
);

// convert summary text in drawer from string to jsx
const SummaryComponent = ({ id, itemsData }) => {
  const itemDasherized = id.split(' ').join('-').toLowerCase();
  const summary = itemsData?.[itemDasherized]?.summary;
  if (!summary) {
    return null;
  }
  // Remove anchor tags to avoid <a> in summary nested within <a> of Link card/datalistitem
  const summaryNoLinks = summary.replace(/<Link[^>]*>([^<]+)<\/Link>/gm, '$1');
  const { code } = convertToReactComponent(`<>${summaryNoLinks}</>`);
  const getSummaryComponent = new Function('React', code);
  return getSummaryComponent(React);
}

export const SectionGallery = ({section, subsection = null, galleryItemsData, illustrations }) => {
  const galleryItems = subsection ? groupedRoutes[section][subsection] : groupedRoutes[section];
  const [searchTerm, setSearchTerm] = React.useState('');
  const [layoutView, setLayoutView] = React.useState('grid');
  const filteredItems = Object.entries(galleryItems)
    .filter(([itemName]) => (
      itemName !== 'View all components' &&
      itemName
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ));
  const GalleryLayout = layoutView === 'grid' ? Gallery : DataList;
  const layoutProps = layoutView === 'grid'
    ? { hasGutter: true }
    : { onSelectDataListItem: () => {}};
  

  return (
    <div className="ws-section-gallery">
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
            <Text component={TextVariants.small}>{filteredItems.length} items</Text>
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
      <GalleryLayout {...layoutProps}>
        {filteredItems
          .sort(([itemName1], [itemName2]) => itemName1.localeCompare(itemName2))
          .map(([itemName, itemData], idx) => {
            // Convert to lowercase-camelcase ex: File upload - multiple ==> file_upload_multiple
            const illustrationName = itemName
              .replace('-', '')
              .replace('  ',' ')
              .split(' ')
              .join('_')
              .toLowerCase();
            const illustration = illustrations[illustrationName] || illustrations.default_placeholder;
            let { title, id, slug, sources, isSubsection = false } = itemData;
            // Display beta label if tab other than a '-next' tab is marked Beta
            // subsection logic
            const isBeta = !isSubsection && sources && sources.some(src => src.beta && !src.source.includes('-next'));
            if (!slug && isSubsection) {
              // Update slug to link to first page in subsection
              const subsectionItems = Object.entries(itemData).filter(([name, _data]) => name !== 'isSubsection');
              const sortedSubsectionItems = subsectionItems.sort((
                [name1, {sortValue: sortValue1 = 50}],
                [name2, {sortValue: sortValue2 = 50}]
              ) => {
                if (sortValue1 === sortValue2) {
                  return name1.localeCompare(name2);
                }
                return sortValue1 > sortValue2 ? 1 : -1;
              });
              const firstSubsectionItem = sortedSubsectionItems[0];
              slug = firstSubsectionItem[1].slug;
                
            }
            if (!sources) debugger;

            return layoutView === 'grid'
              ? (
                <GalleryItem span={4} key={idx}>
                  <Link to={slug} className="ws-section-gallery-item">
                    <Card
                      id={itemData.id}
                      key={idx}
                      isSelectableRaised
                    >
                      <CardTitle>{itemName}</CardTitle>
                      {illustration && <Illustration component={CardBody} illustration={illustration} itemName={itemName} />}
                      {isBeta && <BetaLabel component={CardFooter} />}
                    </Card>
                  </Link>
                </GalleryItem>
              ) : (
                <Link to={slug} key={idx} className="ws-section-gallery-item">
                  <DataListItem>
                    <DataListItemRow>
                      <DataListItemCells dataListCells={[
                        <DataListCell width={1} key="illustration">
                          {illustration && <Illustration component={'div'} illustration={illustration} itemName={itemName} />}
                        </DataListCell>,
                        <DataListCell width={5} key="text-description">
                          <Split className="pf-u-mb-md">
                            <SplitItem isFilled>
                              <TextContent>
                                <Text component={TextVariants.h2}>
                                  <span>
                                    {title}
                                  </span>
                                </Text>
                              </TextContent>
                            </SplitItem>  
                            <SplitItem>
                              {isBeta && <Label color="gold">Beta feature</Label>}
                            </SplitItem>
                          </Split>
                          <TextContent>
                            <Text>
                              { id ? <SummaryComponent id={id} itemsData={galleryItemsData} /> : null }
                            </Text>
                          </TextContent>
                        </DataListCell>
                      ]} />
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
