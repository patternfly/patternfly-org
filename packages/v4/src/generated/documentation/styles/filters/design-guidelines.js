import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport132 from '../../../../content/design-guidelines/usage-and-behavior/filters/./img/decision-tree.png';
import srcImport133 from '../../../../content/design-guidelines/usage-and-behavior/filters/./img/basic-filter-search.png';
import srcImport134 from '../../../../content/design-guidelines/usage-and-behavior/filters/./img/basic-filter-select.png';
import srcImport135 from '../../../../content/design-guidelines/usage-and-behavior/filters/./img/attribute-value-input.png';
import srcImport136 from '../../../../content/design-guidelines/usage-and-behavior/filters/./img/attribute-value-dropdown.png';
import srcImport137 from '../../../../content/design-guidelines/usage-and-behavior/filters/./img/attribute-value-multi.png';
import srcImport138 from '../../../../content/design-guidelines/usage-and-behavior/filters/./img/attribute-value-date-picker.png';
import srcImport139 from '../../../../content/design-guidelines/usage-and-behavior/filters/./img/faceted.png';
import srcImport140 from '../../../../content/design-guidelines/usage-and-behavior/filters/./img/type-ahead-single.png';
import srcImport141 from '../../../../content/design-guidelines/usage-and-behavior/filters/./img/type-ahead-multi.png';
import srcImport142 from '../../../../content/design-guidelines/usage-and-behavior/filters/./img/basic-filter-chips.png';
import srcImport143 from '../../../../content/design-guidelines/usage-and-behavior/filters/./img/attribute-value-multi-chips.png';
import srcImport144 from '../../../../content/design-guidelines/usage-and-behavior/filters/./img/faceted-combo-chips.png';
import srcImport145 from '../../../../content/design-guidelines/usage-and-behavior/filters/./img/multiple-filters.png';
import srcImport146 from '../../../../content/design-guidelines/usage-and-behavior/filters/./img/faceted-complex.png';
import srcImport147 from '../../../../content/design-guidelines/usage-and-behavior/filters/./img/mobile.png';
import srcImport148 from '../../../../content/design-guidelines/usage-and-behavior/filters/./img/example1.png';
import srcImport149 from '../../../../content/design-guidelines/usage-and-behavior/filters/./img/example2.png';

export const DocumentationStylesFiltersDesignGuidelinesDocs = {
  "slug": "/documentation/styles/filters/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/filters/filters.md",
  "section": "styles",
  "id": "Filters",
  "title": "Filters",
  "toc": [
    "About",
    "Elements",
    "Variations",
    "Usage",
    "Examples",
    "Content",
    "Related components and demos"
  ]
};
DocumentationStylesFiltersDesignGuidelinesDocs.liveContext = {
  
};
DocumentationStylesFiltersDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`About`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly provides a number of common filters that can be used in a various combinations to create a custom filtering experience. These elements may be used in a toolbar or alone. You can use the decision tree below to help determine which filter best fits your use case.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport132} {...{"alt":"Decision tree","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The following elements may be used to create a custom filter. Keep in mind that the following filter elements and variations only cover a number of use cases, and you may customize or combine them even further to fit your needs.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#basic-filter"}}>
          {`Basic filter`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#attribute-value-textbox-filters"}}>
          {`Attribute-value (textbox) filters`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#faceted-checkbox-filters"}}>
          {`Faceted (checkbox) filters`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#type-ahead-filters"}}>
          {`Type-ahead filters`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Toggle filters`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Saved filters`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Expression builder`}
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#filter-chips"}}>
          {`Filter chips`}
        </a>
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Basic filter`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The most basic filter gives the user the ability to filter by one attribute either using a single search field or a single select list with a fixed set of values.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Single search field`}
      </strong>
      {`
`}
      <img src={srcImport133} {...{"alt":"image2","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Single select list`}
      </strong>
      {`
`}
      <img src={srcImport134} {...{"alt":"image3","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a basic filter when there is only one attribute by which users can filter. Use the single search field when data is unbound and the single select list when data is bound.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A filter query is triggered whenever a new value is set by the user. This can be done by pressing the Enter key or clicking the Search button in the search field, or by selecting an item in the list.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Attribute-value (textbox) filters`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The attribute-value filter gives the user the ability to specify an attribute-value pair for filtering a data set.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport135} {...{"alt":"image4","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport136} {...{"alt":"image5","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport137} {...{"alt":"image6","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport138} {...{"alt":"image7","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`The following elements can be used in an attribute-value (textbox) filter.`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Attribute selector:`}
          </strong>
          {` A select list that allows the user to select the attribute that they want to filter against.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Value selector:`}
          </strong>
          {` The value selector can be any data input component that is used to pass a value to the filter.`}
        </p>
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`Common components used for value selection include:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`A `}
        <strong>
          {`search field`}
        </strong>
        {` for entering a value from the keyboard. Use when you will enter the value as unbounded data (e.g. a name).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A `}
        <strong>
          {`single select`}
        </strong>
        {` for selecting a value from a predefined list.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A `}
        <strong>
          {`checkbox select`}
        </strong>
        {` for selecting multiple values from a predefined list. Multiple values will be combined using a logical OR operation. Items that meet both values will be shown higher in the results list.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A `}
        <strong>
          {`date picker`}
        </strong>
        {` for selecting a date, time, or a date/time range. Use when the value you want to filter on is expressed as a date and/or time stamp.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use an attribute-value filter when the data to be filtered consists of sets of attribute-value pairs and values may be either unbounded (i.e text entry), a bounded value list, or temporal data like date and time. Attribute-value filters are also useful for cases where you expect your users to only be filtering by one thing at a time.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A filter query is triggered whenever a new value is set by the user. The following are triggers applicable to the variations of the attribute-value filter shown above.`}
    </p>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Value selector`}
          </th>
          <th>
            {`Trigger`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {`Search field`}
          </td>
          <td>
            {`The user presses the Enter key or clicks the Search button.`}
          </td>
        </tr>
        <tr>
          <td>
            {`Select lists`}
          </td>
          <td>
            {`The user selects or deselects an item in the list.`}
          </td>
        </tr>
        <tr>
          <td>
            {`Date picker`}
          </td>
          <td>
            {`The user selects a new date and/or time.`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Faceted (checkbox) filters`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Faceted filtering is useful when items can be described by categories according to multiple dimensions or facets.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport139} {...{"alt":"image8","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`The following elements can be used in a faceted (checkbox) filter.`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Facets:`}
          </strong>
          {` In this example, Status and Vendor represent different facets, or categories.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Values:`}
          </strong>
          {` The checkboxes represent values that one might filter on.`}
        </p>
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note:`}
      </strong>
      {` Consider adding an “Other” option to attribute lists where items may not fall under any of the specified values.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a faceted (checkbox) filter when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The user is browsing a set of items without robust knowledge of what is in the set.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The important characteristics of the items to be filtered are mostly traits with a small and discrete set of choices like color, status, availability, or distributer rather than arbitrary text or numeric values such as name, date created, or amount of available space.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If the important characteristics of the items are mostly open-ended values, consider using an attribute-value filter instead.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`New filters are applied or removed as the user selects/deselects values via the checkboxes.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Type-ahead filters`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Type-ahead filters are useful when there is a large number of items to select from the filter dropdown. Users can quickly find the value they would like to filter by typing in the field.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport140} {...{"alt":"image9","className":"ws-img"}}>
      </img>
      {`
`}
      <img src={srcImport141} {...{"alt":"image10","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`The following elements can be used in a type-ahead filter.`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Single select:`}
          </strong>
          {` Single select type-ahead filters can handle one input. Users may scroll through the dropdown list or type in the box to find the desired option.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Multi select:`}
          </strong>
          {` Multi select type-ahead filters can handle multiple selections. Users may scroll through the dropdown list and select multiple options, or type in the box to find the desired options. Values will be shown in the input field as filter chips.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a type-ahead filter when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`A dropdown list has a large number of options. In these cases, type-ahead can help a user find the desired option more quickly.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Type-ahead filters can be used in place of a textbox filter in certain cases. For example, when filtering by name, using a type-ahead filter will ensure that only valid filters surface. This will avoid the need to present an empty state when invalid values are entered.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A filter query is triggered whenever a new value is set by the user. The following are triggers applicable to the variations of the type-ahead filter shown above.`}
    </p>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Value selector`}
          </th>
          <th>
            {`Trigger`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {`Search field`}
          </td>
          <td>
            {`The user presses the Enter key after typing in the input field. This action will create a filter for the first value shown in the filtered list.`}
          </td>
        </tr>
        <tr>
          <td>
            {`Select lists`}
          </td>
          <td>
            {`The user selects or deselects an item in the list.`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Filter chips`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When filters are applied, filter chips may be used to provide feedback.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Basic filter chips`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`As filters are applied, the value will be displayed as a filter chip. Each filter chip has an ‘x’ to remove the filter, or users may click “Clear filters” to clear all applied filters at once.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport142} {...{"alt":"image11","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Complex filter chips`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Filter chips may be used to show Boolean relationships between different attribute-value pairs. Individual filter chips can be removed by clicking the ‘x’ in each chip, and entire filter groups can be removed using the group ‘x’.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport143} {...{"alt":"image12","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport144} {...{"alt":"image13","className":"ws-img"}}>
      </img>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Filters between attribute categories should be combined with a boolean AND operator.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Filters within a category are shown grouped together and should be combined with a boolean OR operator.`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`Example:`}
            </strong>
            {` An item must be Stopped OR Down AND have Samsung OR Hewlett-Packard as a vendor.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`If the list is not otherwise sorted, items that satisfy a higher number of filters should be shown higher up the page.`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`Example:`}
            </strong>
            {` Items that have both Samsung and Hewlett-Packard as vendors are listed before items that only have Samsung or Hewlett-Packard.`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`In the example above, the result will be to show all items that have a status of stopped OR down AND are from vendor Samsung OR Hewlett-Packard AND match the keyword.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use filter chips when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The value of the applied filter is not shown on the control itself.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`There is more than one value for a given facet.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`There are boolean filter rules being applied.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When not to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Do not use filter chips when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The current settings of the controls are sufficient to convey applied filters.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Variations`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Multiple filters`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`You can use multiple filters in combination to create a custom filtering experience.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport145} {...{"alt":"image14","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use multiple dropdown filters when you only have a handful of attributes that you want to show. Only use this filter when space allows; otherwise consider using a faceted filter.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Filter queries are applied when the user selects or deselects an item in the list or selects a date/time range. A clear filters action to the right of the filters will remove all applied filters. If there are no applied filters, the icon will be disabled.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Complex faceted filter`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`You can create a complex faceted filter by incorporating elements such as a search field into the dropdown component.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport146} {...{"alt":"image15","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a complex faceted filter when you have limited space and multiple attributes with a variety of input types, for example, search field and checkbox selects.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Filter queries are applied when the user selects or deselects an item in the list, or types a query in the input field and presses Enter.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Layout considerations`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Filters may be included in a toolbar and are usually left aligned. There may be more than one filter used in a single toolbar, and in some cases, custom filters may make up a full toolbar. Filters may also be used alone outside of a toolbar.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Mobile considerations`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In responsive views, filters may be hidden within the filter icon. On click, the toolbar will expand to reveal the filter. If there are multiple filter elements, they will be collapsed into a single faceted filter.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport147} {...{"alt":"image16","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Filter in toolbar on data list`}
      </strong>
      {`
`}
      <img src={srcImport148} {...{"alt":"image17","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Multiple filters in toolbar`}
      </strong>
      {`
`}
      <img src={srcImport149} {...{"alt":"image18","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Content`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Filters`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Filter hint text in input fields should read “Filter by `}
      {`[attribute]`}
      {`...” and be in sentence case.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Clearing filters`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The option to clear all filters will be displayed after the last filter chip. It should read “Clear filters” in sentence case. When clicked, it should remove all applied filters and collapse the toolbar back into a single row.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Related components and demos`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`HTML/CSS`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/badge"}}>
          {`Badges`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/chip"}}>
          {`Chip`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/chipgroup"}}>
          {`Chip group`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/inputgroup"}}>
          {`Input group`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/optionsmenu"}}>
          {`Options menus`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/select"}}>
          {`Select`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/toolbar"}}>
          {`Toolbar`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`React`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/badge"}}>
          {`Badges`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/chipgroup"}}>
          {`Chip group`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/toolbar"}}>
          {`Toolbar`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
DocumentationStylesFiltersDesignGuidelinesDocs.Component.displayName = 'DocumentationStylesFiltersDesignGuidelinesDocs';
