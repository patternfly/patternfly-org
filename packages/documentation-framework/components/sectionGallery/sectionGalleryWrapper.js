import React from "react";
import { groupedRoutes } from '../../routes';

export const SectionGalleryWrapper = ({section, subsection, galleryItemsData, illustrations, includeSubsections, parseSubsections, children }) => {
  let sectionRoutes = subsection ? groupedRoutes[section][subsection] : groupedRoutes[section];
  if (!includeSubsections || parseSubsections) {
    const sectionRoutesArr = Object.entries(sectionRoutes);
    // loop through galleryItems object and build new object to handle subsections
    sectionRoutes = sectionRoutesArr.reduce((acc, [navName, routeData]) => {
      // exit immediately if current item is isSubsection flag
      if (navName === 'isSubsection') {
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
          if (subitemName !== 'isSubsection') {
            acc[subitemName] = subitemData;
          }
        })
      }
      return acc;
    }, {})
  }

  const [searchTerm, setSearchTerm] = React.useState('');
  const [layoutView, setLayoutView] = React.useState('grid');
  const filteredItems = Object.entries(sectionRoutes)
    .filter(([itemName, { slug }]) => (
      // exclude current gallery page from results
      slug !== location.pathname &&
      itemName
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ));
  const sectionGalleryItems = filteredItems
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
      const { title, id, sources, isSubsection = false } = itemData;
      // Display beta label if tab other than a '-next' tab is marked Beta
      const isBeta = !isSubsection && sources && sources.some(src => src.beta && !src.source.includes('-next'));
      let slug = itemData.slug;
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

      return {
        idx,
        slug,
        itemName,
        illustration,
        isBeta,
        title,
        id,
        galleryItemsData
      };
    });

  return (
    <div className="ws-section-gallery">
      { children(sectionGalleryItems, searchTerm, setSearchTerm, layoutView, setLayoutView) }
    </div>
  )
};
