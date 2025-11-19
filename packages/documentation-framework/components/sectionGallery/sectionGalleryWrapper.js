import React from 'react';
import { useLocation } from '@reach/router';
import { groupedRoutes } from '../../routes';

/**
 * Converts a hyphenated or lowercase string to sentence case
 * Example: "design-tokens" -> "Design tokens"
 * Example: "colors" -> "Colors"
 */
const toSentenceCase = (str) => {
  if (!str) return str;
  return str
    .split('-')
    .map((word, index) => {
      if (index === 0) {
        // Capitalize first letter of first word only
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      // Keep all other words lowercase
      return word.toLowerCase();
    })
    .join(' ');
};

export const SectionGalleryWrapper = ({
  section,
  subsection,
  galleryItemsData,
  illustrations,
  includeSubsections,
  parseSubsections,
  initialLayout,
  isFullWidth,
  children,
}) => {
  let sectionRoutes = subsection
    ? groupedRoutes[section]?.[subsection]
    : groupedRoutes[section];
  // Safety check: if sectionRoutes is undefined/null, return empty array to prevent errors
  if (!sectionRoutes) {
    return (
      <div className={`ws-section-gallery${isFullWidth ? ' ws-section-gallery-full-width' : ''}`}>
        {children([], '', () => {}, initialLayout, () => {})}
      </div>
    );
  }
  
  // If includeSubsections is true and we're at the section level (not a specific subsection),
  // we need to include subsections themselves as items (not their contents)
  if (includeSubsections && !subsection && groupedRoutes[section]) {
    const allRoutes = {};
    // First, add top-level items (non-subsections)
    Object.entries(sectionRoutes).forEach(([navName, routeData]) => {
      if (navName === 'isSubsection' || navName === 'sortValue' || navName === 'subsectionSortValue') {
        return;
      }
      if (typeof routeData !== 'object' || routeData === null) {
        return;
      }
      // Only add if it's not a subsection
      if (!routeData.isSubsection) {
        allRoutes[navName] = routeData;
      }
    });
    
    // Then, add subsections themselves as single items (not their contents)
    Object.entries(groupedRoutes[section]).forEach(([navName, routeData]) => {
      if (navName === 'isSubsection' || navName === 'sortValue' || navName === 'subsectionSortValue') {
        return;
      }
      if (typeof routeData !== 'object' || routeData === null) {
        return;
      }
      // If this is a subsection, add the subsection itself as an item
      if (routeData.isSubsection) {
        allRoutes[navName] = routeData;
      }
    });
    
    sectionRoutes = allRoutes;
  } else if (!includeSubsections || parseSubsections) {
    const sectionRoutesArr = Object.entries(sectionRoutes);
    // loop through galleryItems object and build new object to handle subsections
    sectionRoutes = sectionRoutesArr.reduce((acc, [navName, routeData]) => {
      // exit immediately if current item is isSubsection flag or other metadata properties
      if (navName === 'isSubsection' || navName === 'sortValue' || navName === 'subsectionSortValue') {
        return acc;
      }
      // Skip primitive values (metadata properties like sortValue are numbers)
      if (typeof routeData !== 'object' || routeData === null) {
        return acc;
      }
      // add current item
      if (includeSubsections || !routeData.isSubsection) {
        acc[navName] = routeData;
      }
      // drill down into current item if subsection and parseSubsections === true
      if (parseSubsections && routeData.isSubsection) {
        // loop through each subsection item & add
        Object.entries(routeData).map(([subitemName, subitemData]) => {
          if (subitemName !== 'isSubsection' && subitemName !== 'sortValue' && subitemName !== 'subsectionSortValue') {
            // Skip primitive values
            if (typeof subitemData === 'object' && subitemData !== null) {
              acc[subitemName] = subitemData;
            }
          }
        });
      }
      return acc;
    }, {});
  }

  const location = useLocation();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [layoutView, setLayoutView] = React.useState(initialLayout);
  const filteredItems = Object.entries(sectionRoutes).filter(
    ([itemName, itemData]) => {
      // Skip metadata properties
      if (itemName === 'isSubsection' || itemName === 'sortValue' || itemName === 'subsectionSortValue') {
        return false;
      }
      // Skip primitive values (metadata properties)
      if (typeof itemData !== 'object' || itemData === null) {
        return false;
      }
      // For subsections, slug will be computed later from first page
      // For regular items, they must have a slug
      if (!itemData.isSubsection && !itemData.slug) {
        return false;
      }
      const slug = itemData.slug;
      // For subsections without slug yet, we'll compute it later, so don't filter by slug
      if (!slug) {
        return itemName.toLowerCase().includes(searchTerm.toLowerCase());
      }
      // exclude current gallery page from results - check for trailing /
      return (
        !location.pathname.endsWith(slug) &&
        !location.pathname.endsWith(`${slug}/`) &&
        itemName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  );
  const sectionGalleryItems = filteredItems
    .sort(([itemName1], [itemName2]) => itemName1.localeCompare(itemName2))
    .map(([itemName, itemData], idx) => {
      let illustration = null;
      if (illustrations) {
        // Convert to lowercase-camelcase ex: File upload - multiple ==> file_upload_multiple
        const illustrationName = itemName
          .replace('-', '')
          .replace('  ', ' ')
          .split(' ')
          .join('_')
          .toLowerCase();
        illustration =
          illustrations[illustrationName] || illustrations.default_placeholder;
      }
      const { sources, isSubsection = false } = itemData;
      // Subsections don't have title or id, default to itemName aka sidenav text
      // Convert itemName to sentence case if no title is provided
      let title = itemData.title || toSentenceCase(itemName);
      let id = itemData.id || title;
      
      // For extensions section, try to extract extension name from slug to match JSON keys
      // This handles cases where extensions have id: Overview or other IDs but we need to match JSON keys
      // The JSON keys are dasherized (e.g., "component-groups"), so we extract from slug
      if (section === 'extensions' && itemData.slug && galleryItemsData) {
        // Extract extension name from slug like /extensions/topology/overview -> topology
        // or /extensions/component-groups/overview -> component-groups
        // Also handle /extensions/react-topology/... -> topology (remove react- prefix)
        const slugParts = itemData.slug.split('/').filter(Boolean);
        if (slugParts.length >= 2 && slugParts[0] === 'extensions') {
          let extensionName = slugParts[1]; // e.g., "component-groups" or "react-topology"
          // Remove "react-" prefix if present (e.g., "react-topology" -> "topology")
          if (extensionName.startsWith('react-')) {
            extensionName = extensionName.replace(/^react-/, '');
          }
          // Check if this extension name exists in galleryItemsData
          if (galleryItemsData[extensionName]) {
            // Use extension name as id for JSON lookup (TextSummary converts to dasherized)
            id = extensionName;
            // Update title to extension name in sentence case if id was "Overview" or matches itemName
            if (itemData.id === 'Overview' || itemName === 'Overview' || !itemData.title) {
              title = toSentenceCase(extensionName);
            }
          }
        }
      }
      // Display beta label if tab other than a '-next' tab is marked Beta
      const isDeprecated =
        !isSubsection &&
        sources &&
        sources.some(
          (source) =>
            source.source === 'react-deprecated' ||
            source.source === 'html-deprecated'
        ) &&
        !sources.some(
          (source) => source.source === 'react' || source.source === 'html'
        );
      const isBeta =
        !isSubsection &&
        sources &&
        sources.some((src) => src.beta && !src.source.includes('-next'));
      const isDemo =
        !isSubsection &&
        sources &&
        sources.some(
          (source) =>
            source.source === 'react-demos' || source.source === 'html-demos'
        ) &&
        !sources.some(
          (source) => source.source === 'react' || source.source === 'html'
        );

      let slug = itemData.slug;
      if (!slug && isSubsection) {
        // Update slug to link to first page in subsection
        const subsectionItems = Object.entries(itemData).filter(
          ([name, _data]) => name !== 'isSubsection'
        );
        const sortedSubsectionItems = subsectionItems.sort(
          (
            [name1, { sortValue: sortValue1 = 50 }],
            [name2, { sortValue: sortValue2 = 50 }]
          ) => {
            if (sortValue1 === sortValue2) {
              return name1.localeCompare(name2);
            }
            return sortValue1 > sortValue2 ? 1 : -1;
          }
        );
        const firstSubsectionItem = sortedSubsectionItems[0];
        slug = firstSubsectionItem[1].slug;
      }

      return {
        idx,
        slug,
        itemName,
        illustration,
        isBeta,
        isDeprecated,
        isDemo,
        title,
        id,
        galleryItemsData,
      };
    });

  return (
    <div
      className={`ws-section-gallery${
        isFullWidth ? ' ws-section-gallery-full-width' : ''
      }`}
    >
      {children(
        sectionGalleryItems,
        searchTerm,
        setSearchTerm,
        layoutView,
        setLayoutView
      )}
    </div>
  );
};
