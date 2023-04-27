import React from "react";
import { DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell, Split, SplitItem, TextContent, Text, TextVariants, Label } from "@patternfly/react-core";
import { Link } from '../link/link';
import { convertToReactComponent } from "@patternfly/ast-helpers";

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

export const SectionDataListLayout = ({ galleryItems, layoutView }) => {
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
                <DataListCell width={1} key="illustration">
                  {illustration && (
                    <div>
                      <img src={illustration} alt={`${itemName} illustration`} />
                    </div>
                  )}
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
      ))}
    </DataList>
  )
};
