---
id: Inline edit
section: components
---

## Elements

Elements vary depending on inline edit variation
* [Page inline elements](#page-inline-elements)
* [Table inline elements](#table-inline-elements)

## Usage

### When to use
* All editable elements can be viewed within the row or expanded row.
* The data needs to be updated frequently.

### When not to use
* The editing is the primary function of the view. For example, in an edit modal.

<img src="./img/inline-edit.gif" alt="Inline edit components" width="960" height="540" />.

## Variations
1. **[Page inline edit](/components/inline-edit/design-guidelines#page-inline-edit):** enables the user to edit a [specific field](/components/inline-edit/design-guidelines#table-inline-edit) in a details page or in a [full page](/components/inline-edit/design-guidelines#full-page-edit).
2. **[Table inline edit](/components/inline-edit/design-guidelines#table-inline-edit):** enables the user to [edit elements in a row](/components/inline-edit/design-guidelines#row-editing).
 
### Page inline edit

* **[Field-specific edit](/components/inline-edit/design-guidelines#field-specific-edit):** allows users to make changes to one field at a time
* **[Full page edit](/components/inline-edit/design-guidelines#full-page-edit):** allows users to make multiple changes at a time, in a larger area with more fields
 
### Page inline elements
 
<img src="./img/elements-form-inline-edit.png"  alt="Form inline edit elements"  width="785"/>
 
1. **Toggle:** Indicates the edit action
2. **[Tooltip](/components/tooltip):** Provides a short description of the inline edit toggle
3. **Action group:** Allows the user to save or cancel changes
4. **Form elements:** Examples include [text input](/components/forms/text-input) or [text area](/components/forms/text-area). See [forms](/components/forms/form) for more information about form elements.
 
### Field-specific edit
 
#### When to use

Use field-specific edit when you want to allow users to make small edits to specific fields in a page. 
 
#### How to use
The pencil toggle is placed inline with the header for fields that are editable. Clicking on this toggle allows the user to edit inline, or can trigger a modal for more complex edits. In edit mode:
* **The check icon** saves the changes and switches the item back to read-only mode.
* **The close icon** returns to the read-only mode without saving new data.
 
<img src="./img/specific-field-edit.png"  alt="Specific field edit"  width="1013"/>
 
### Full page edit
 
#### When to use
Use the full-page edit when you want to allow users to edit a larger area with many editable elements all at once.
 
#### How to use
Any editing is triggered by an edit link for the whole section. All edits should be easily done in the context of the page. Clicking the pencil icon toggles the page or description list into edit mode.
* **Non Editable fields**, for example, Name, and Labels should use read-only styling.
* **Editable fields** should function like any form.
* Users can save or cancel changes using the ‘Save’ or ‘Cancel’ button. Both actions return a page or description list to the read-only mode.
 
<img src="./img/full-page-edit.png"  alt="Full page edit"  width="926"/>
 
### Table inline edit

* **[Row edit](/components/inline-edit/design-guidelines#row-editing):** allows for making changes to 1 editable row in the table
 
### Table inline elements
 
<img src="./img/table-inline-edit-elements.png"  alt="Table inline edit elements"  width="1010"/>
 
1. **Editable inactive row:** Inactive row with read-only styling
2. **Editable active row:** Ability to edit form components is enabled
3. **Disabled input field:** Unclickable and unusable input field
4. **Editable input field:** Changes for this input are allowed
5. **Active input:** Selected input field with new content
6. **Action group:** Allows user to save or cancel changes
7. **[Tooltip](/components/tooltip):** Provides a short description of the inline edit toggle
8. **Toggle:** Indicates the edit action
 
### Row editing
Row editing allows a user to edit items that are visible in the table by having a pencil toggle pinned to the right side, with the [kebab](/components/menus/dropdown#with-kebab). 
 
#### When to use
Use row editing when:
* You need to change the data in a table.
* The data is not dependent on each other. For example, changing the data in a row five will not affect row three.
 
#### How to use
Clicking the pencil icon toggles the particular table row into edit mode. In the edit mode:
* The kebab is replaced with a check icon for saving and a close icon for canceling. Both icons should be grey until changes have begun to be made.
* Once changes begin, the check icon turns blue to increase the visibility of the save action.
* **The check icon button** submits the changes and switches the row back to the read-only mode.
* **The close icon** returns to read-only mode without saving new data.
 
<img src="./img/row-editing.png"  alt="Row editing"  width="1210"/>
 
Some are elements may be difficult to edit in a table. You can make them editable in a [modal](/components/modal) instead.

 

