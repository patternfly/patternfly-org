---
id: Filters
section: guidelines
related: [
  'Badge',
  'Chip',
  'Chip group',
  'Search input',
  'Options menu',
  'Select',
  'Toolbar'
]
---

**Filters** allow users to narrow down content from data in tables, data lists or card views, among many others. 

PatternFly provides a number of components that can be used in a variety of combinations to create a custom filtering experience. These elements may be used in a toolbar or on their own.

Filters can consist of one or multiple attributes.
 Filters consisting of single attributes include:
* [Text entry](#text-entry-filters)
* [Single select](#single-select)
* [Checkbox select](#checkbox-select)


Filters consisting of multiple attributes include: 
* [Attribute-value](#attribute-value-filter) 
* [Filter group](#filter-group)
* [Toggle group](#toggle-group)
* [Faceted filter](#faceted-filter)

## Variations for one attribute
There are various ways to allow users to filter down content. Filtering methods include [text entry filters](#text-entry-filters), [single selects](#single-select) and [checkbox selects](#checkbox-select).

### Text entry filters
A text entry filter provides the user with an input field to type in values that filter the view, whether or not their input is an exact match. The text entry filter uses the [search input](/components/search-input) component which can be used with or without a button. 

<img src="./img/text-input.png" alt="text input filters" width="880"/>

1. **Basic search input:** Filters automatically, as soon as the user starts typing.
2. **Search input with button:** Filters on enter, or click of arrow button.

Note, the placeholder text in your text entry filter should indicate what the user can filter on. If the inputted string is constrained to filter a **single column**, the placeholder text of the input field should read “Filter by _attribute name_”. If the inputted string filters **all columns**, the placeholder text of the input field should read “Filter” instead.

#### Behavior
Although both basic filter components have the same end result, they differ in when the search is triggered. With search inputs, the data in the table automatically filters as the user types. With input groups, the user must press enter to apply the search, and start filtering data in the table.

**Note:** With both basic filter components, the user can only filter by one input at a time. 

#### When to use
Use a text entry filter when you’d like to give users the ability to search values in unbound data. Using the _search input_ component is preferred, however, use the _input group_ component when you are worried about performance issues with querying a large data set after every stroke.

#### Supported features
Text entry filters support [filter chips](#filter-chip), but do not support [type-ahead](#type-ahead) or [badges](#badge-count).

**Filter chips** are supported for text entry filters, but in general, we recommend not showing a chip to avoid redundancy, except for cases when text entry filters are used inside of [attribute-value filters](#attribute-value-filter). Since you can only search by one value at a time, the value will already be shown in the input field.

<img src="./img/text-input-chips.png" alt="text input chips" width="880"/>

### Single select
A single select provides the user with a fixed set of values from which they can only select one value. This filter type uses the [single select component](/components/select/react#single). If the single select filter is the only filter in the toolbar, it should have an “All options” menu item by default as a way to reset the filter (unless a selection must be made at all times). This “All” option will be selected by default, acting as an equivalent of no filter selected. 

<img src="./img/single-select.png" alt="single select list filter" width="880"/>

#### Behavior
The user is presented with a list of values to choose from. A selected value is indicated with a blue checkmark to the right of the value. When a value is selected, the selection appears in the toggle.
When a user selects a different value, the initial selected value becomes unselected. The new value inherits the blue checkmark and is reflected in the toggle.

#### When to use
Use a single select list when you’d like users to only select one option from a **predefined list** of options.

#### Supported features
Single selects can include [type-aheads](#type-ahead) as an added feature.

**Type-ahead** functionality can be added to single selects, allowing users to input a search inside the toggle, filtering down from the list of menu options shown. This is especially useful for very long lists that would be inconvenient for the user to scroll through. Type-ahead is recommended for lists that are more than 10 items long. 

<img src="./img/single-type-ahead.png" alt="type-ahead in a single select" width="564"/>

Stand alone single selects in a toolbar do not use badge counts or filter chips since only one selection can be made, and the selection will already be apparent in the toggle. 

### Checkbox select
A checkbox select provides the user with a fixed set of values from which they can select multiple values. This filter type uses the [checkbox select component](/components/select/react#checkbox-input).

<img src="./img/checkbox-select.png" alt="checkbox select"/>

#### Behavior
The user is presented with a list of values to choose from. From this list, users may select or deselect one or more values at a time, with selections indicated by a blue checkbox preceding the value. The dropdown should remain open as the user makes selections until they click away or manually close it. Selected values will appear as filter chips underneath the filter, allowing the user to see their selections even when the toggle is collapsed.

#### When to use
Use a checkbox select for selecting multiple values from a predefined list. Multiple values will be combined using a logical “OR” operation.

#### Supported features
Checkbox select supported features include [filter chips](#filter-chip), and optionally, [badges](#badge-count). 

<img src="./img/checkbox-select-add.png" alt="add ons for checkbox select" width="880"/>

**Filter chips** are used as a way for users to view all their selections when the menu of selections is collapsed.

**Badges** can be used in the checkbox select toggle to indicate how many selections have been made, although they are not required. 

Although **typeahead** is not supported for checkbox selects, you can add a search input inside the menu, right above the items the user can select from. This will allow the user to filter down the list of options.

<img src="./img/checkbox-search.png" alt="search in checkbox select" width="475" />

## Variations for multiple attributes
There are multiple ways of combining variations for single attribute filters into multiple attribute filters, including [attribute-value filters](#attribute-value-filter), [filter groups](#filter-group), [toggle groups](#toggle-group) and [faceted filters](#faceted-filter).

### Attribute-value filter
The attribute-value filter gives users the ability to specify an attribute-value pair for filtering a data set.

<img src="./img/attribute-filter.png" alt="Attribute filter with basic search" />

<img src="./img/attribute-filter-single.png" alt="Attribute filter with single select" />

<img src="./img/attribute-filter-checkbox.png" alt="Attribute filter with checkbox" />

<img src="./img/attribute-filter-date-picker.png" alt="Attribute filter with date picker" />

The following elements make up an attribute-value (textbox) filter.
1. **Attribute selector:** A select list that allows the user to select the attribute that they want to filter against.
2. **Value selector:** A value selector that is used to pass a value to the filter. The value selector can be any data input component. Common components used for value selection include:
  
    a. A **text entry field** for entering a value from the keyboard. Use when you will enter the value as unbounded data (e.g. a name). When the text entry field is a basic search input, the value will appear as a chip automatically, and the search will start being validated. When the text entry field is a search input with a button, the value will appear as a chip and the search will be validated when the user presses the Enter key on their keyboard or the arrow button. 
   
    b. A **single select** for selecting a value from a predefined list. This will work the same as a stand alone single select, however since any selection in an attribute filter will result in a chip, there is no need to have an “All” option as part of your menu, as users can reset their filters via the filter chips.
    
    c. A **checkbox select** for selecting multiple values from a predefined list. Multiple values will be combined using a logical "OR" operation.
    
    d. A **date picker** for selecting a date range. Use when the value you want to filter on is expressed as a date and/or time stamp.

#### Behavior
To use an attribute-filter, the user must first select an _attribute_ to filter on using the left toggle, followed by choosing the specific _values_ to filter on using the right toggle. Whatever is selected in the attribute toggle will determine what is shown in the value toggle.

The value toggles behave as described in the [variations for one attribute](#variations-for-one-attribute) section. The only difference for multiple attributes is that as users make filter selections using the attribute filter, each selection will **always** show up as a chip underneath the filters.

When using the attribute filter, a filter query is triggered whenever the user sets a new value. The following are triggers applicable to the variations of the attribute-value filter shown above.

| Value selector | Trigger |
| ---------------| ------ |
| Search field | The user starts typing (for search input), presses the Enter key, or clicks the Search button (for input groups). |
| Select lists | The user selects or deselects an item in the list. |
| Date picker | The user selects a new date and/or time. |

#### When to use
Use an attribute-value filter when users have multiple attributes to filter on. This filter should be used over a faceted filter when the attributes use different selection formats (for example, attribute A uses a single select, but attribute B uses a checkbox select).

#### Supported features
Attribute-value filter features include [filter chips](#filter-chip), [badges](#badge-count), and [type-ahead](#type-ahead). 

**Filter chips** are strongly recommended for attribute filters as a way for users to view all their selections when the user switches between attribute filters and when the menu of selections is collapsed.

**Badges** can be used in a checkbox select value selector toggle to indicate how many selections have been made. 

**Type-ahead** allows the user to narrow down their search and is supported for all value selection types except checkbox selects. Although typeahead is **not supported** for checkbox selects, you can add a search input inside the menu, above the items the user can select from.

### Filter group
A filter group is a set of filters that appear side by side in a toolbar. This filter type uses the [select list](/components/select) component.

<img src="./img/filter-group-2.png" alt="filter group with multiple selects" />

1. **Filter group with only single select:** Filter group made up of single selects. When an option is selected, it is reflected in the toggle. The default selection should be “All _attribute-name_” to indicate that no filter has been applied. This option also allows users to clear whatever filter they may have applied.
2. **Filter group with multiple selection types:** Filter group with single select, checkbox select, and date picker. When there are no selections, the toggle should contain the attribute name. When selections are made, the behavior will depend on the selection type. For single selects and date pickers, the selection will appear in the toggle. For checkbox selects, the attribute name will remain in the toggle, with the addition of a badge containing the number of filters selected. In all cases, selections should appear as filter chips underneath the filters.

#### When to use
Use a filter group when you only have a handful of attributes that you want to show. Only use this filter when space allows; otherwise consider using an attribute-value or faceted filter instead.

#### Behavior
Filter queries are applied when the user selects or deselects an item in the list or selects a date/time range. If the filter group is only made up of single selects, the selected filters will be shown inside each filter’s toggle. If the filter group contains multiple selects, the selected filters will be shown as filter chips underneath the filters. Additionally, you may also choose to display the selected number of items in each filter as a badge in their toggle. A clear filter action to the right of the filters will remove all applied filters.

#### Supported features
Filter groups support [filter chips](#filter-chip), [badges](#badge-count), and [type-ahead](#type-ahead). 

**Filter chips** are recommended for filter groups that have one or more checkbox selects. If the filter group only consists of single selects, there is no need to add filter chips as the count will always be one.

**Badges** can be used in a checkbox select toggle to indicate how many selections have been made for that attribute filter.

**Type-ahead** allows the user to narrow down their search and is supported for all value selection types except checkbox selects. Although typeahead is **not supported** for checkbox selects, you can add a search input inside the menu, above the items the user can select from.

### Toggle group
A toggle group filter allows users to select from a set of predefined different elements to filter something on. This filter uses the [toggle group](/components/toggle-group) component.

<img src="./img/toggle-group.png" alt="toggle group" width="541" />

#### When to use
Use a toggle group filter when you have few filter options that you want users to filter from, without hiding the options in a select list. A common usage for toggle groups is for filtering a chart view, to include or remove a data point from view.

#### Behavior
Information will be shown to the user based on the toggles they select. If something is selected, it means the information is being filtered on.

#### Supported features
Toggle groups do not use or support filter chips, badges, or type-ahead.

### Faceted filter
Faceted filtering is useful when items can be described by categories according to multiple dimensions or facets. This filter usually uses the [grouped checkbox select list](/components/select#grouped-checkbox-input) component.

<img src="./img/faceted-grouped.png" alt="faceted filter with checkbox" />

The following elements can be used in a faceted (checkbox) filter:
1. **Facets:** Different categories containing filter values, such as _Status_ or _Vendor_.
2. **Values:** What users might filter on. Each category is made up of checkbox selects, where each category can have multiple options selected. Never include two selection types within the same faceted filter.
3. **Filter chips:**  Records of each selection, shown when the options menu is collapsed.

**Note:** Consider adding an “Other” option to attribute lists where items may not fall under any of the specified values.

#### When to use
Use a faceted filter when:
* The user is browsing a set of items without robust knowledge of what is in the set.
* The important characteristics of the items to be filtered are mostly traits with a small and discrete set of choices like color, status, availability, or distributer rather than arbitrary text or numeric values such as name, date created, or amount of available space.
* The facets to filter from are all checkbox select

**Do not use** a faceted filter when the important characteristics of the items are mostly open-ended values and/or have a mix of single and multiple select. Additionally, if space is limited, consider using an [attribute-value](#attribute-value-filter) filter instead.

#### Behavior
New filters are applied or removed as the user selects or deselects values using checkboxes. A badge count can optionally be added to the toggle to indicate the number of selections made in the filter. Selections will appear as filter chips underneath the filter. Note that there is an "AND" relationship between facets, and an "OR" relationship between values. 

#### Supported features
Faceted filters support [filter chips](#filter-chip), [badges](#badge-count), and [type-ahead](#type-ahead). 

**Filter chips** are recommended as a way for users to see their selections when the menu is closed.

**Badges** can be used at the toggle level to indicate how many selections were made within the menu.

**Type-ahead** can be used as a way for users to narrow down the list of options when looking for the value they want to select.

## Filter features
Different attributes can be added to different filters. These include:
* [Filter chips](#filter-chip)
* [Badge count](#badge-count)
* [Type-ahead](#type-ahead)

This table describes which features are **supported** for each filter type. Note that just because a feature is supported, does not mean it must be used in your filters. 

|  &nbsp; &nbsp; &nbsp; &nbsp; | Filter chips | Type-ahead | Badge count
| ----------------- | ------- | ------ | ------- | 
| **Text entry**| Yes (if within an attribute filter) | Yes | No |
| **Single select** | Yes (if within an attribute filter) | Yes | No |
| **Checkbox select** | Yes | No (but you can have a search inside the menu) | Yes |
|  **Attribute-value** | Yes | Yes (except for checkbox selects) | Yes (only for checkbox select)
|  **Filter group** | Yes | Yes (only for single selects) | Yes (only for checkbox selects) |
|  **Toggle group** | No | No | No|
|  **Faceted filter** | Yes | Yes | Yes|

### Filter chip
When filters are applied, filter chips may be used to provide feedback to the user on what they are filtering on.

Filter chips may be used to show boolean relationships between different attribute-value pairs. Individual filter chips can be removed by clicking the ‘x’ in each chip, and entire filter groups can be removed using the group ‘x’.

<img src="./img/chips.png" alt="chip groups" />

Follow these best practices for using filter chips:
* Filters between attribute categories should be combined with a boolean “AND” operator.
* Filters within a category are shown grouped together and should be combined with a boolean “OR” operator.
  * **Example:** An item must be Stopped “OR” Down “AND” have Samsung “OR” Hewlett-Packard as a vendor.
* If the list is not otherwise sorted, items that satisfy a higher number of filters should be shown higher up the page.
  * **Example:** Items that have both Samsung and Hewlett-Packard as vendors are listed before items that only have Samsung or Hewlett-Packard.
In this example, the result will be to show all items that have a status of stopped “OR” down “AND” are from vendor Samsung “OR” Hewlett-Packard “AND” match the keyword.

#### When to use
Use filter chips when:
* The value of the applied filter is not shown on the control itself.
* There is more than one value for a given facet.
* There are boolean filter rules being applied.

**Don’t use** filter chips when the current settings of the controls are sufficient to convey applied filters.

### Badge count
Badges are used to indicate a count. In filters, badges can be used in the following ways:

#### Badge in checkbox select
You may opt to use a badge in a checkbox select to indicate to the user how many items they have selected when the toggle is collapsed.

<img src="./img/badge.png" alt="badge" />

### Type-ahead
Adding type-ahead capabilities to your filters is useful when there is a large number of items to select from the filter dropdown. Users can quickly find the value they would like to filter by typing in the field. 

<img src="./img/type-ahead-single.png" alt="type ahead example" />

Type-ahead is supported in single selects, faceted filters that can handle one input. Users may scroll through the dropdown list or type in the box to find the desired option.

#### When to use
Use a type-ahead filter when:
* A dropdown list has a large number of options. In these cases, type-ahead can help a user find their desired option in less time.
* Type-ahead filters can be used in place of a textbox filter, in certain cases. For example, when filtering by name, using a type-ahead filter will ensure that only valid filters surface. This will avoid the need to present an empty state when invalid values are entered.

#### Behavior
A filter query is triggered whenever a new value is set by the user. The following are triggers applicable to the variations of the type-ahead filter shown in the previous example.

| Value selector &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Trigger |
| -------------------------------------------| ------ |
| Search field &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | The user types in an input and/or presses the Enter key after typing in the input field. This action will create a filter for the first value shown in the filtered list. |
| Select lists &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | The user selects or deselects an item in the list. |

## Filter validation
If your filter has limitations, you may present an error state on your filter toggle to communicate these limitations to users. Examples of instances where you may want to use filter validation include:
* In cases where free-form text input validation is needed
* When there is a limit on how many filters a user can apply at a time
* When there is a limit on how many options can be selected for one attribute

When using error validation in a filter, include a tooltip on hover with an explanation of what went wrong. 

<img src="./img/error-table.png" alt="Example of filter validation"/>

## Layout considerations
Filters may be included in a [toolbar](/components/toolbar) and are usually left aligned. There may be more than one filter used in a single toolbar, and in some cases, custom filters may make up a full toolbar. Filters may also be used alone outside of a toolbar.

## Mobile considerations
In responsive views, filters may be hidden within the filter icon. On click, the toolbar will expand to reveal the filter. If there are multiple filter elements, they will be collapsed into a single faceted filter. Read more about toolbars in mobile views in [the toolbar design guidelines](/components/toolbar/design-guidelines#the-toolbar-on-mobile).

<img src="./img/mobile.png" alt="mobile view" width="880" />

## Examples
**Filter group in data list toolbar**
<img src="./img/ex-datalist.png" alt="example of filter group in data list" width="880" />


**Attribute filter in table toolbar**
<img src="./img/ex-table.png" alt="example of attribute value filter in table " width="880" />

## Content

### Filters
Filter placeholder text in input fields should read “Filter by [attribute name].” Write all placeholder text in sentence case.

**Examples:** _Filter by status_, _Filter by vendor_

### Clearing filters
The option to clear all filters will be displayed after the last filter chip. It should read “Clear filters” in sentence case. When clicked, it should remove all applied filters and collapse the toolbar back into a single row.

