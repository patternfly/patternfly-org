import React from "react";
import {
  Select,
  SelectList,
  SelectGroup,
  SelectOption,
  Divider,
  MenuToggle,
  SearchInput,
  Toolbar,
  ToolbarItem,
  ToolbarGroup,
  ToolbarFilter,
  ToolbarContent,
  Content,
  Bullseye,
  EmptyState,
  EmptyStateFooter,
  EmptyStateBody,
  EmptyStateActions,
  Button,
} from "@patternfly/react-core";
import {
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  ExpandableRowContent,
  OuterScrollContainer,
  InnerScrollContainer,
} from "@patternfly/react-table";
import FilterIcon from "@patternfly/react-icons/dist/esm/icons/filter-icon";
import SearchIcon from "@patternfly/react-icons/dist/esm/icons/search-icon";

import { releaseNotes } from "./release-notes-data.js";

export const ReleaseNotesTable = () => {
  // Row expand/collapse
  const [expandedNotes, setExpandedNotes] = React.useState([]);
  const setExpanded = (noteId, isExpanding = true) =>
    setExpandedNotes((prevExpanded) => {
      const otherExpandedNotes = prevExpanded.filter((n) => n !== noteId);
      return isExpanding ? [...otherExpandedNotes, noteId] : otherExpandedNotes;
    });
  const isNoteExpanded = (note) => expandedNotes.includes(note);

  // Column sorting
  const [activeSortIndex, setActiveSortIndex] = React.useState(0);
  const [activeSortDirection, setActiveSortDirection] = React.useState("asc");

  const getSortableRowValues = (note) => {
    const { component, repo, fixedWithCodeMod } = note;
    return [component, repo, fixedWithCodeMod];
  };

  let sortedNotes = releaseNotes;
  if (activeSortIndex !== null) {
    sortedNotes = releaseNotes.sort((a, b) => {
      const aValue = getSortableRowValues(a)[activeSortIndex];
      const bValue = getSortableRowValues(b)[activeSortIndex];

      if (typeof aValue === "number" || typeof aValue === "boolean") {
        // Numeric sort
        if (activeSortDirection === "asc") {
          return aValue - bValue;
        }
        return bValue - aValue;
      } else {
        // String sort
        if (activeSortDirection === "asc") {
          return aValue.localeCompare(bValue);
        }
        return bValue.localeCompare(aValue);
      }
    });
  }

  const getSortParams = (columnIndex) => ({
    sortBy: {
      index: activeSortIndex,
      direction: activeSortDirection,
      defaultDirection: "asc",
    },
    onSort: (_event, index, direction) => {
      setActiveSortIndex(index);
      setActiveSortDirection(direction);
    },
    columnIndex,
  });

  // Filtering
  const [isFilterSelectOpen, setIsFilterSelectOpen] = React.useState(false);
  const [filters, setFilters] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState();

  const onSelect = (_event, value) => {
    console.log("selected: ", value);
    setFilters(
      filters.includes(value)
        ? filters.filter((f) => f !== value)
        : [...filters, value]
    );
  };

  const buildFilter = () => {
    return (
      <Select
        id="filter-select"
        isOpen={isFilterSelectOpen}
        selected={filters}
        onSelect={onSelect}
        onOpenChange={(isFilterSelectOpen) =>
          setIsFilterSelectOpen(isFilterSelectOpen)
        }
        toggle={(toggleRef) => (
          <MenuToggle
            ref={toggleRef}
            onClick={() => setIsFilterSelectOpen(!isFilterSelectOpen)}
            isExpanded={isFilterSelectOpen}
          >
            <FilterIcon /> Filters
          </MenuToggle>
        )}
      >
        <SelectGroup label="Repo">
          <SelectList>
            <SelectOption
              itemId="React"
              hasCheckbox
              isSelected={filters.includes("React")}
            >
              React
            </SelectOption>
            <SelectOption
              itemId="React-component-groups"
              hasCheckbox
              isSelected={filters.includes("React-component-groups")}
            >
              React-component-groups
            </SelectOption>
          </SelectList>
        </SelectGroup>
        <Divider />
        <SelectGroup label="Fixed with codemods">
          <SelectList>
            <SelectOption
              itemId="codemod-yes"
              hasCheckbox
              isSelected={filters.includes("codemod-yes")}
            >
              Yes
            </SelectOption>
            <SelectOption
              itemId="codemod-no"
              hasCheckbox
              isSelected={filters.includes("codemod-no")}
            >
              No
            </SelectOption>
          </SelectList>
        </SelectGroup>
      </Select>
    );
  };

  const buildSearch = () => {
    return (
      <SearchInput
        aria-label="Search release notes"
        placeholder="Search release notes"
        value={searchValue}
        onChange={(_event, value) => setSearchValue(value)}
        onClear={() => setSearchValue("")}
      />
    );
  };

  const findText = (node) => {
    if (node === undefined) {
      return '';
    }
    if (typeof node === 'string'){
      return node;
    }
    if (typeof node.props?.children === "string") {
      return node.props.children;
    }
    const multi = [];
    React.Children.toArray(node.props.children).forEach((child) =>
      multi.push(findText(child))
    );
    return multi.join(" ");
  };

  const onFilter = (note) => {
    let searchValueExp;
    try {
      searchValueExp = new RegExp(searchValue, "i");
    } catch (err) {
      searchValueExp = new RegExp(
        searchValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "i"
      );
    }

    const matchesSearchValue =
      note.component.search(searchValueExp) >= 0 ||
      (typeof note.description === "string"
        ? note.description.search(searchValueExp) >= 0
        : findText(note.description)?.search(searchValueExp) >= 0) ||
      (note.pullRequestURL && (typeof note.pullRequestURL === "string"
        ? note.pullRequestURL.search(searchValueExp) >= 0
        : note.pullRequestURL.findIndex(url => url.includes(searchValue)) >= 0)) ||
      (note.details && findText(note.details)?.search(searchValueExp) >= 0);

    const hasRepoFilter =
      filters.includes("react") || filters.includes("React-component-groups");
    const matchesRepo = filters.includes(note.repo);

    const hasCodemodFilter =
      filters.includes("codemod-yes") || filters.includes("codemod-no");
    const matchesCodemodStatus =
      (filters.includes("codemod-yes") && note.fixedWithCodeMod) ||
      (filters.includes("codemod-no") && !note.fixedWithCodeMod);

    return (
      (searchValue === "" || matchesSearchValue) &&
      (!hasRepoFilter || matchesRepo) &&
      (!hasCodemodFilter || matchesCodemodStatus)
    );
  };

  const buildToolbar = () => {
    return (
      <Toolbar id="filter-toolbar" clearAllFilters={() => setFilters([])}>
        <ToolbarContent>
          <ToolbarItem variant="search-filter">{buildSearch()}</ToolbarItem>
          <ToolbarGroup variant="filter-group">
            <ToolbarFilter
              chips={filters}
              deleteChip={(_category, chip) => onSelect(null, chip)}
              deleteChipGroup={(_category) => setFilters([])}
              categoryName="Filters"
            >
              {buildFilter()}
            </ToolbarFilter>
          </ToolbarGroup>
        </ToolbarContent>
      </Toolbar>
    );
  };

  const renderableRows = sortedNotes.filter(onFilter);
  return (
    <React.Fragment>
      {buildToolbar()}
      <OuterScrollContainer>
        <InnerScrollContainer>
          <Table
            variant="compact"
            aria-label="PatternFly 5 release notes"
            isStickyHeader
          >
            <Thead>
              <Tr>
                <Th width={9} />
                <Th width={9} sort={getSortParams(0)}>
                  Component
                </Th>
                <Th width={9} sort={getSortParams(1)}>
                  Repo
                </Th>
                <Th width={50}>Description</Th>
                <Th width={9}>PR link</Th>
                <Th width={14} modifier="wrap" sort={getSortParams(2)}>
                  Fixed with codemods
                </Th>
              </Tr>
            </Thead>
            {renderableRows.length > 0 &&
              renderableRows.map((row, rowIndex) => {
                const noteId = `release-notes-${rowIndex}-${row.pullRequestURL}`;
                return (
                  <Tbody key={rowIndex} isExpanded={isNoteExpanded(noteId)}>
                    <Tr key="parent-row">
                      <Td
                        expand={
                          row.details
                            ? {
                                rowIndex,
                                isExpanded: isNoteExpanded(noteId),
                                onToggle: () =>
                                  setExpanded(noteId, !isNoteExpanded(noteId)),
                                expandId: `${noteId}-expandable-toggle`,
                              }
                            : undefined
                        }
                      />
                      <Td dataLabel="Component">{row.component}</Td>
                      <Td dataLabel="Repo">{row.repo}</Td>
                      <Td dataLabel="Description">{row.description}</Td>
                      <Td dataLabel="PR link">
                        {typeof row.pullRequestURL === "string" ? (
                          <a target="_blank" href={row.pullRequestURL}>
                            #{row.pullRequestURL.match(/(\d+)/)[0]}
                          </a>
                        ) : (
                          <Content component="ul" isPlainList>
                            {row.pullRequestURL?.map((url) => (
                              <Content component="li"
                                key={`${rowIndex}-${url.slice(-4)}`}
                              >
                                <a target="_blank" href={url}>
                                  #{url.match(/(\d+)/)[0]}
                                </a>
                              </Content>
                            ))}
                          </Content>
                        )}
                      </Td>
                      <Td dataLabel="Fixed with codemods">
                        {row.fixedWithCodeMod ? "Yes" : "No"}
                      </Td>
                    </Tr>
                    {row.details ? (
                      <Tr isExpanded={isNoteExpanded(noteId)}  key="child-row">
                        <Td />
                        <Td dataLabel="Details" colSpan={4}>
                          <ExpandableRowContent>
                            {row.details}
                          </ExpandableRowContent>
                        </Td>
                      </Tr>
                    ) : null}
                  </Tbody>
                );
              })}
            {renderableRows.length === 0 && (
              <Tbody>
                <Tr>
                  <Td colSpan={6}>
                    <Bullseye>
                      <EmptyState variant="sm" titleText="No results found"
                          headingLevel="h2" icon={SearchIcon}>
                        <EmptyStateBody>
                          Clear search input and filters and try again.
                        </EmptyStateBody>
                        <EmptyStateFooter>
                          <EmptyStateActions>
                            <Button
                              variant="link"
                              onClick={() => {
                                setFilters([]);
                                setSearchValue("");
                              }}
                            >
                              Clear search input and filters
                            </Button>
                          </EmptyStateActions>
                        </EmptyStateFooter>
                      </EmptyState>
                    </Bullseye>
                  </Td>
                </Tr>
              </Tbody>
            )}
          </Table>
        </InnerScrollContainer>
      </OuterScrollContainer>
    </React.Fragment>
  );
};
