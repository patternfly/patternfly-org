---
id: Card
section: components
---


A **card** is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content on a page.  

## Elements

A card usually consists of four parts:

<img src="./img/card.png" alt="4 parts of a card" width="394"/>  


1. **Header (optional):** When included, defines the contents of a card. Card headers can contain images as well as the title of a card and an actions menu represented by the right-aligned kabob. In most cases, your card should include a header. The only exceptions are when cards being used as a layout element to create a white background behind other content.

2. **Title (optional):** Communicates the title of a card if it's not included in the header.

3. **Body:** Provides details about the item. A card body can include any combination of static text and/or active content.

4. **Footer (optional):** Contains links, actions, or static text at the bottom of a card.

Cards are flexible and customizable to your use case. Here are some different ways to use a card to represent the same content. Choose a layout that considers the usage context and the space you have to work with.

<img src="./img/card-variants.png" alt="three card variants" width="1202"/>

1. The first version places an image in the header with a separate title. The **View details** action is located in the footer.

2. In the second version, the title is moved to the header area to give a more compact footprint.

3. In the third version, the card header contains an image as well as text to define the card title. The title is a link, allowing users to drill into the details of the card. This makes the footprint of the card smaller.

## Variations

### Content spacing

PatternFly supports three types of cards:

<img src="./img/card-types.png" alt="compact, standard, and large card types" width="779"/>

1. **Compact (recommended):** Compact cards use 16px spacing with an 8px spacer between the header and body, and a 16px spacer between the body and footer.

2. **Standard:** Standard cards use 24px spacing with a 16px spacer between the header and body and 24px between the body and footer.

3. **Large:** Large cards use 32px spacing with a 24px spacer between the header and the body and 32px between the body and footer. Large cards are generally used for presenting marketing content or anyplace where a lower content density is desired.

### Border treatments

PatternFly offers 2 types of border treatments for cards:

<img src="./img/card-borders.png" alt="cards with default and flat borders " width="452" />

1. **Default card:** By default, cards will have a thin (1px) drop shadow to differentiate them from the background of a page and give them a slightly raised appearance. Use the default appearance when placing cards on a gray background.

2. **Flat card:** Flat cards have a 1px gray border. Flat cards are recommended for use against a white background as the solid border will better differentiate a card from the page background.

### Expandable cards

The header element can be made expandable in situations where you want to hide the card content and reduce its footprint. In the collapsed state, only the card title is shown, and the user can click the expansion toggle to view the rest of the card content.

<img src="./img/expandable-card.png" alt="expandable card" width="1325" />


### Selectable cards
It is often useful to make cards selectable. PatternFly supports two types of selectable cards:

<img src="./img/selectable-cards.png" alt="multiselect and single selectable cards" width="826" />

1. **Multi-select card:** Features a checkbox in the upper righthand corner, which users can select to indicate which cards to include in global actions.

2. **Selectable card:** Features a raised appearance and blue border treatment when selected.

### Images
Only include meaningful images on your cards (don’t add them for decoration). Images should help users identify specific content types.

<img src="./img/card-images.png" alt="card view with logo images in each card" width="913"/>

1. Place smaller images inside the card’s header.

2. Place larger images or charts within the card’s body.



## Usage
Use cards:
- To visually group content or distinguish information from the rest of a page’s content. Examples include dashboards and catalog views.
- To organize content in layouts with multiple columns or grids.  
- To compare separate groups of information.  
- To make media easier to scan, such as images or videos.  

**Never** use a card to show a dense amount of repetitive, related content. Use a [data list](/components/data-list) or [table](/components/table) view instead.

Cards primarily appear in [catalog views](#cards-in-catalog-views), [primary-detail views](#cards-in-primary-detail-views), and [dashboards](#cards-in-dashboards).

### Cards in catalog views

Use cards in a catalog view to present users with a series of selectable items, typically arranged into a grid.

Note that this view uses a multi-select card so that bulk actions can be performed from the toolbar on a group of cards at once. For more information on cards used in a catalog or card view, see the [card view design guidelines](/demos/card-view/design-guidelines).

<img src="./img/multi-select-cards.png" alt="cards in a catalog view " width="1210" />


### Cards in primary-detail views

Use selectable cards when you want to present an overview of a set of objects and then examine the details. Here, the details of different projects can be displayed in a side-by-side primary-detail view.

<img src="./img/single-select-cards.png" alt="cards in a side-by-side primary-detail view " width="1225" />

### Cards in dashboards

Use cards in a dashboard view to visualize information. Each card should display a different and specific piece of information, such as a bar chart, area chart, or other data type.

<img src="./img/dashboard.png" alt="card view in a dashboard with charts" width="1223"/>
