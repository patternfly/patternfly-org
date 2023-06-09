import React from "react";
import { DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell, Split, SplitItem, TextContent, Text, TextVariants, Label } from "@patternfly/react-core";
import { Link } from '../link/link';
import { TextSummary } from './TextSummary';

export const SectionDataListLayout = ({ galleryItems, layoutView, hasListText, hasListImages }) => {
  if (layoutView !== 'list') {
    return null;
  }
  
  return (
    <DataList onSelectDataListItem={() => {}}>
      {galleryItems.map(({ idx, slug, illustration, itemName, title, isBeta, id, galleryItemsData }) => (
        <Link to={slug} key={idx} className="ws-section-gallery-item">
          <DataListItem>
            <DataListItemRow>
              <DataListItemCells dataListCells={[
                hasListImages && illustration && (
                  <DataListCell width={1} key="illustration">
                    <div>
                      <img src={illustration} alt={`${itemName} illustration`} />
                    </div>
                  </DataListCell>
                ),
                <DataListCell width={5} key="text-description">
                  <Split className={ hasListText ? "pf-v5-u-mb-md" : null }>
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
                  { hasListText && <TextSummary id={id} itemsData={galleryItemsData} /> }
                </DataListCell>
              ]} />
            </DataListItemRow>
          </DataListItem>
        </Link>
      ))}
    </DataList>
  )
};
