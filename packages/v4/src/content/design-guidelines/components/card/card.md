---
id: Card
section: components
---

A **card** is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content on a page.  

## Elements

A card usually consists of 3 parts:

<img src="./img/card.png" alt="3 parts of a card" width="394"/>  


1. **Header**: Title of the information group
2. **Body**: Brief details about the group
3. **Footer**: Links to access more information about the group

Cards are flexible, and you can customize them in a variety of ways. A card can contain:
- A header with an image, actions, and a body.
- Only a header and a body.
- A header with an image, a body, and footer.

### Content spacing

PatternFly supports three types of cards:
1. **Compact (recommended):** Compact cards use 16px spacing with an 8px spacer between the header and body and 16px between the body and footer.
2. **Standard:** Standard cards use 24px spacing with a 16px spacer between the header and body and 24px between the body and footer.
3. **Large:** Large cards use 32px spacing with a 24px spacer between the header and the body and 32px between the body and footer. Large cards are generally used for presenting marketing content or anyplace where a lower content density is desired.

<img src="./img/card-types.png" alt="compact, standard, and large card types" />

### Border treatments

PatternFly offers two types of border treatments for cards:

1. **Default card:** By default, cards will have a thin (1px) drop shadow to differentiate them from the background of a page and give them a slightly raised appearance.
2. **Flat card:** Flat cards have a 1 pixel gray border. Flat cards are recommended for use against a white background as the solid border will better differentiate the card from the page background.

<img src="./img/card-borders.png" alt="cards with default and flat borders " width="452" />

**Add expandable cards**

### Selectable cards
It is often useful to make cards selectable. PatternFly supports two types of selectable cards.

1. **Multi-select card:** A multi-select card has a checkbox in the upper righthand corner. Users may select cards for performing global actions against by selecting the checkbox.

2. **Selectable card:** A selectable card has a raised appearance and a blue border treatment when selected.

<img src="./img/selectable-cards.png" alt="cards with default and flat borders " width="826" />

## Card usage
Use a card:
- To visually group content or distinguish information from the rest of a page’s content. Examples include dashboards and catalog views.
- To organize content in layouts with multiple columns or grids.  
- To compare separate groups of information.  
- To make media such as images and videos easier to scan.  

Do NOT use a card to show a dense amount of repetitive, related content. Use a list or table view instead.

### Cards in catalog views

A common use case for cards is when you want to present a catalog of items that the user can choose from. In this case, presenting a grid of cards can be a good solution. An example of cards used in a catalog view is shown below.

<img src="./img/multi-select-cards.png" alt="cards with default and flat borders " width="1210" />

Note that this view uses a multi-select card so that bulk actions can be performed from the toolbar on a group of cards at once. For more information on cards used in a catalog or card view, see the [Card view design guidelines](/demos/card/design-guidelines).

### Cards in primary-detail views

### Cards in dashboards

<img src="./img/dashboard.png" alt="card view with charts" />
<br />
<br />


#### Standard card types
