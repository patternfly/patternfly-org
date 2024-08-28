import React from 'react';
import {
  Button,
  SearchInput,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Content,
  ContentVariants,
  ToggleGroup,
  ToggleGroupItem,
} from '@patternfly/react-core';
import ListIcon from '@patternfly/react-icons/dist/esm/icons/list-icon';
import ThIcon from '@patternfly/react-icons/dist/esm/icons/th-icon';

export const SectionGalleryToolbar = ({
  galleryItems,
  searchTerm,
  setSearchTerm,
  layoutView,
  setLayoutView,
  placeholderText = 'Search by name',
  countText = ' items',
}) => (
  <Toolbar isSticky>
    <ToolbarContent>
      <ToolbarItem>
        <SearchInput
          onClear={false}
          value={searchTerm}
          placeholder={placeholderText}
          onChange={(_evt, val) => setSearchTerm(val)}
        />
      </ToolbarItem>
      {searchTerm && (
        <ToolbarItem>
          <Button variant="link" onClick={() => setSearchTerm('')}>
            Reset
          </Button>
        </ToolbarItem>
      )}
      <ToolbarGroup variant="icon-button-group">
        <ToolbarItem>
          <ToggleGroup>
            <ToggleGroupItem
              icon={<ThIcon />}
              aria-label="grid icon button"
              isSelected={layoutView === 'grid'}
              onChange={() => setLayoutView('grid')}
            ></ToggleGroupItem>
            <ToggleGroupItem
              icon={<ListIcon />}
              aria-label="list icon button"
              isSelected={layoutView === 'list'}
              onChange={() => setLayoutView('list')}
            ></ToggleGroupItem>
          </ToggleGroup>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem
        variant="pagination"
        gap={{ default: 'gapMd', md: 'gapNone' }}
        style={{ '--pf-v6-c-toolbar__item--MinWidth': 'max-content' }}
        className="pf-m-align-self-center"
      >
        <Content component={ContentVariants.small}>
          {galleryItems.length}
          {countText}
        </Content>
      </ToolbarItem>
    </ToolbarContent>
  </Toolbar>
);
