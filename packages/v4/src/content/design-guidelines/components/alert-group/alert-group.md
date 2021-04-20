---
id: Alert group
section: components
---

An **alert group** stacks and positions two or more alerts in a layer over the main content of a page. Alert groups should always rank alerts by age, stacking new alerts on top of old ones as they surface. 

Use an alert group when you need to position multiple alerts on the same page, mainly [toast alerts](/components/alert/design-guidelines#elements). Toast alerts continue to stack until a user dismisses them or they reach an automatic timeout (8 seconds is recommended).

## Elements

<img src="./img/alert-group-elements.png" alt="An example of an alert group stacked on a page. Each alert is labeled according to its place in the stack hierarchy: Newest on top, second newest in the middle, and oldest on the bottom." />

1. **Newest notification:** Always appears at the top of the alert group.
2. **Second newest notification:** Moves down when a newer notification surfaces.
3. **Oldest notification:** Continues to move down the stack as newer notifications surface, until a user closes it.

## Placement
Use 8px of padding between each alert in an alert group. Alert group alignment on a page will depend on your use case.

**For desktop views**, right-align alert groups over your page content. Each alert should stack on top of one another with 8px of padding in between.

<img src="./img/alert-group-desktop.png" alt="An example of a right-aligned alert group over a desktop view." />

**For mobile views**, center alert groups over your page content.

<img src="./img/alert-group-mobile.png" alt="An example of a centered alert group over a mobile view." width="375" />

See our [alert guidelines](/components/alert/design-guidelines/#using-toast-alerts) for more information about using toast alerts.
