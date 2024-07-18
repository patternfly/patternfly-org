import React from 'react';
import {
  DataList,
  DataListItem,
  DataListItemRow,
  DataListItemCells,
  DataListCell,
  Split,
  SplitItem,
  Content,
  ContentVariants,
  Label,
} from '@patternfly/react-core';
import { Link } from '../link/link';
import { TextSummary } from './TextSummary';

export const SectionDataListLayout = ({
  galleryItems,
  layoutView,
  hasListText,
  hasListImages,
}) => {
  if (layoutView !== 'list') {
    return null;
  }

  return (
    <DataList onSelectDataListItem={() => {}}>
      {galleryItems.map(
        ({
          idx,
          slug,
          illustration,
          itemName,
          title,
          isBeta,
          isDeprecated,
          isDemo,
          id,
          galleryItemsData,
        }) => (
          <Link to={slug} key={idx} className="ws-section-gallery-item">
            <DataListItem>
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    hasListImages && illustration && (
                      <DataListCell width={1} key="illustration">
                        <div>
                          <img
                            src={illustration}
                            alt={`${itemName} illustration`}
                          />
                        </div>
                      </DataListCell>
                    ),
                    <DataListCell width={5} key="text-description">
                      <Split className={hasListText ? 'pf-v6-u-mb-md' : null}>
                        <SplitItem isFilled>
                          <Content>
                            <Content component={ContentVariants.h2}>
                              <span>{title}</span>
                            </Content>
                          </Content>
                        </SplitItem>
                        <SplitItem>
                          {isBeta && (
                            <Label color="blue" isCompact>
                              Beta
                            </Label>
                          )}
                          {!isBeta && isDeprecated && (
                            <Label color="grey" isCompact>
                              Deprecated
                            </Label>
                          )}
                          {!isBeta && !isDeprecated && isDemo && (
                            <Label color="purple" isCompact>
                              Demo
                            </Label>
                          )}
                        </SplitItem>
                      </Split>
                      {hasListText && (
                        <TextSummary id={id} itemsData={galleryItemsData} />
                      )}
                    </DataListCell>,
                  ]}
                />
              </DataListItemRow>
            </DataListItem>
          </Link>
        )
      )}
    </DataList>
  );
};
