---
id: Card
section: components
---
import '../components.css'; 

## Elements
 
A card usually consists of four parts:
 
 <div class="ws-docs-content-img">
![Example showing the four parts of a card.](./img/card-elements.svg)
</div>
 
1. **Header (optional):** When included, defines the contents of a card. Card headers can contain images as well as the title of a card and an actions menu represented by the right-aligned kebab. In most cases, your card should include a header. The only exceptions are when cards being used as a layout element to create a white background behind other content.
 
2. **Title:** Communicates the title of a card if it's not included in the header. If a card will be utilized as a selectable and clickable card, the title needs to be made as a linked text to trigger action and indicate interaction.
 
3. **Body:** Provides details about the item. A card body can include any combination of static text and/or active content.
 
4. **Footer (optional):** Contains external links, actions, or static text at the bottom of a card.
 
## Usage
Cards primarily appear in [catalog views](#cards-in-catalog-views), [primary-detail views](#cards-in-primary-detail-views), and [dashboards](#cards-in-dashboards).
 
### When to use
Use cards to:
- To visually group content or distinguish information from the rest of a page’s content. Examples include dashboards and catalog views.
- To organize content in layouts with multiple columns or grids. 
- To compare separate groups of information, and make it selectable or clickable.
- To make media easier to scan, such as images or videos. 
 
### When not to use
**Never** use a card to show a dense amount of repetitive, related content. Use a [data list](/components/data-list) or [table](/components/table) view instead.
 
### Images
Only include meaningful images on your cards (don’t add them for decoration). Images should help users identify specific content types.
 
 <div class="ws-docs-content-img">
![Example of a card view with logo images in each card.](./img/card-images.svg)
</div>
 
1. Place smaller images inside the card’s header.
 
2. Place larger images or charts within the card’s body.
 
### Cards in catalog views
 
Use cards in a catalog view to present users with a series of selectable items, typically arranged into a grid.
 
Note that this view uses cards with a multi-select option so that bulk actions can be performed from the toolbar on a group of cards at once. For more information on cards used in a catalog or card view, see the [card view design guidelines](/patterns/card-view/design-guidelines).
 
 <div class="ws-docs-content-img">
![Example of cards in a catalog view.](./img/card-catalog.svg)
</div>
 
### Cards in primary-detail views
 
Use clickable cards when you want to present an overview of a set of objects and then examine the details. Here, the details of different projects can be displayed in a side-by-side primary-detail view.
 
 <div class="ws-docs-content-img">
![Example of cards in a side-by-side primary detail view.](./img/card-primary-detail.svg)
</div>
 
### Cards in dashboards
 
Use cards in a dashboard view to visualize information. Each card should display a different and specific piece of information, such as a bar chart, area chart, or other data type.
 
 <div class="ws-docs-content-img">
![Example of cards in a dashboard with charts.](./img/card-dashboard.svg)
</div>
 
## Variations
 
PatternFly offers 2 types of card styles&mdash;default and secondary:
 
 <div class="ws-docs-content-img">
![Example of cards with default and secondary styling.](./img/card-borders.svg)
</div>
 
1. **Default card:** Use by default. Default cards have no fill and are instead distinguished by a thin border. 
 
2. **Secondary card:** Use for secondary information. Secondary cards have a filled background that's the same color as the border. 
 
Cards are flexible and customizable to your use case. Here are some different ways to use a card to represent the same content. Choose a layout that considers the usage context and the space you have to work with.
 
 <div class="ws-docs-content-img">
![Example of three card variations.](./img/card-variations.svg)
</div>
 
1. The first version places an image in the header with a separate title and has a linked footer. Use links in footers to link out to an external page, such as documentation.
 
2. In the second version, the title is moved to the header area to give a more compact footprint.
 
3. In the third version, the card header contains an image as well as text to define the card title. This makes the footprint of the card smaller. The title is a link, allowing users to drill into the details of the card. The linked title should be reserved for when using a card that can be both clickable and selectable, where clicking the title would open the primary-detail drawer or navigate the user to a new page and selecting the card would be done by clicking on the checkbox.
 
### Expandable cards
 
The header element can be made expandable in situations where you want to hide the card content and reduce its footprint. In the collapsed state, only the card title is shown, and the user can click the expansion toggle to view the rest of the card content.
 
 <div class="ws-docs-content-img">
![Example of an expandable card.](./img/card-expandable.svg)
</div>
 
 
### Selectable cards
Selectable cards have a checkbox or radio button to indicate that a card is selectable. To select a card, users can click anywhere on the card. PatternFly supports two types of selectable cards:
 
 <div class="ws-docs-content-img">
![Example of multi-select and single-select cards.](./img/card-selectable.svg)
</div>
 
1. **Multi-select card:** Features a checkbox in the upper righthand corner, which allow users to indicate which cards to include in global actions.
 
2. **Single-select card (with radio button):** Features a radio button in the upper righthand corner, which allow users to indicate which option they are selecting.

### Clickable cards
Clickable cards trigger an action, such as opening a primary-detail drawer, or navigating to a new page as a drilldown of the card and within the context of the application. Similar to selectable cards, the whole body of a clickable card is clickable.

<div class="ws-docs-content-img">
![Example of a clickable card and its states.](./img/card-clickable.svg)
</div>

### Selectable and clickable cards
The selectable and clickable card can be utilized when there are multiple actions on a card. However, each action has a separate affordance. When using a card that is both selectable and clickable, clicking the whole body of the card will not produce an interaction. To trigger the actions, users have to click a specific area of the card instead.

**For selectable cards**, a user must use the checkbox or radio button on the top right of the card to select the card.

**For clickable cards**, a user must click on the card header linked in blue to trigger an action.

<div class="ws-docs-content-img">
![Example of a selectable and clickable card and its states.](./img/card-selectable-clickable.svg)
</div>
 
 ### Card with link
An in-action card can be utilized when needing to link out to an external website or out of the context of the application. This would use a linked footer in the card and would be the interactable element of the card. Although this may be the only action on a card, the whole body of the card would not be clickable. If you want to have a clickable card AND a link in the footer, make the clickable action come from the header of the card, and keep the external link in the footer.

<div class="ws-docs-content-img">
![Example of cards with a link.](./img/card-withlink.svg)
</div>

### Cards as tiles

Our previous [tile component](/components/tile) has been deprecated in favor of the card component. Instead, you can implement a card as a tile.

Tiles enable a selection method that provides users with more context than other methods, such as toggle groups or menus. Unlike selectable cards, tiles don't use radio buttons to indicate selection. Tiles also contain less content than a selectable card.

<div class="ws-docs-content-img">
![Default, selected, and disabled tile.](./img/tiles.svg)
</div>

There are 2 types of tiles:
1. **Single selectable tiles:** Users can only select 1 tile from a set.
1. **Multi selectable tiles:** Users can select multiple tiles from a set.

#### When to use
- The selection process would benefit from having the additional visual prominence that tiles provide.
- The selection includes additional information, like a brief description or an icon.
- The selection consists of brief, static content.
- There are few (typically 2-6) selections for the user to choose from.

#### When not to use
- The option presented to the user includes an action link, button, or overflow menu. Instead, use a standard card.
- The option presented to the user requires more than 3 lines of content description. Instead, use a selectable card.
- The option opens an additional resource or triggers an action. Instead, use an actionable card.

## Spacing
### Content spacing
 
PatternFly supports three types of cards:
 
 <div class="ws-docs-content-img">
![Examples of compact, standard, and large cards.](./img/card-spacing.svg)
</div>
 
1. **Compact (recommended):** Compact cards use 16px spacing with an 8px spacer between the header and body, and a 16px spacer between the body and footer.
 
2. **Standard:** Standard cards use 24px spacing with a 16px spacer between the header and body and 24px between the body and footer.
 
3. **Large:** Large cards use 32px spacing with a 24px spacer between the header and the body and 32px between the body and footer. Large cards are generally used for presenting marketing content or anyplace where a lower content density is desired.
 
## Accessibility
 
For information regarding accessibility, visit the [card accessibility page](/components/card/accessibility).
