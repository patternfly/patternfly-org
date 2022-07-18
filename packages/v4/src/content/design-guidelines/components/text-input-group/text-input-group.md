---
id: Text input group
section: components
---

A **text input group** is a more flexible composable version of a [text input](/components/text-input). It enables consumers of PatternFly to build custom inputs for filtering and similar use cases by placing elements like icons, [chips groups](components/chip-group) and [buttons](components/button) within a text input.

## Elements

<img src="./img/text-input-elements.png" alt="text input elements" width="509"/>

1. **Icon (optional):** An icon can be used in front of the input field to identify the purpose of the text input.

2. **Input field:** The input field itself can be customized to use multiple text styles as shown here. This styling is not possible using a standard text input.

3. **Clear button (optional):** A clear button can be added to clear the contents of the field.

4. **Chip group (optional):** A chip group can be nested inside of the text input as shown here.

## Usage

The text input group component is useful for building more complex custom inputs. It's usage includes, but is not limited to, the following use cases. Each of these can be found in a [React demo here](/components/text-input-group/react-demos).

### Attribute value filtering

The text input group can be used to create an attribute-value filter as shown below where the user selects attributes (or keys), then values, and the results are displayed in chips as a key-value pair.

<img src="./img/attribute-value-filter.png" alt="attribute value filter" width="464"/>

See the [attribute-value filtering demo](/components/text-input-group/react-demos#attribute-value-filtering) for an interactive demo of this.

### Auto-complete search

The text input group can also be used to create an auto-complete search component where suggestions are presented as a dropdown list as the user types.

<img src="./img/auto-complete-search.png" alt="auto complete search" width="464"/>

See the [auto-complete search with typeahead demo](/components/text-input-group/react-demos#auto-complete-search-with-typeahead) for an interactive demo of this.
