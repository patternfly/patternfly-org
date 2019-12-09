---
title: Empty state
section: usage and behavior
hideTOC: true
showTitle: true
---

Use an empty state to educate users and guide them with positive and proactive next steps in any situation where there is no data or information to display.

PatternFly offers three empty state variations; a small empty state, a large empty state and an extra large empty state. The small empty state should be used inside tables, wizards, modals or cards, where the empty state is ‘inside a container’, as seen in the [no data to show](#No-data-to-show) use case example. The large empty state should be used in a full page empty state, as seen in the addition or creation [addition or creation](#Addition-or-creation) use case example. Finally, the extra large empty state variation should only be used in special instances, specifically for first-use or get started [first-use or get started](#first-use-or-get-started) states, as well as full page [congratulatory](#success) states, seen in those use case examples.

## Elements

![Empty state elements](./img/empty-state.jpg)

1. **[Icon/image](#icons):** Display associated object icons here.
2. **[Icons](#Title-and-body):** Provide a concise explanation.
3. **[Body](#Title-and-body):** Provide additional information that helps a user understand why the space is empty, what they can do to move forward, and the value or benefit that is gained by taking the next step.
4. **[Primary button](#Primary-and-secondary-buttons):** Primary call to action.
5. **[Secondary buttons (optional)](#Primary-and-secondary-buttons):**  Alternative options for the user. There can be more than one secondary action.

## Design guidelines

### Icons
To maintain consistency, icons have been mapped to specific empty state scenarios. 

Here is when you should use each icon:

|Icon    |Type |Color |Icon name |Usage |
|---------|---------|--------|--------------|
|![Get started](./img/rocket.jpg) |First use or get started |Grey (#8A8D90) |fa-rocket | Use in a get started  page or in situations where it is the user’s initial interaction with your platform/application. You may decide to replace this icon with something else if you already have an application specific graphic or illustration to use here |
|![Search](./img/search.jgp) |Search |Grey (#8A8D90)|fa-search |Use when there is no data to show |
|![Configuration](./img/config.jpg) |Configuration |Grey (#8A8D90) |fa-wrench |Use when configuration is required or there is a configuration issue |
|![No access](./img/lock.jpg) |No access |Grey (#8A8D90) |fa-lock | Use when the user is not entitled or the user role does not have access |
|![Error](./img/error.jpg) |Error  |Red (#C9190B) |fa-exclamation-circle |Use when there is an inability to get data, there is backend failure, or an error has occurred |
|![Success](./img/success.jpg) |Success |Green (#486b00) |fa-check-circle |Use to indicate that a task or process has been completed successfully |
|![Add](./img/add.jpg) |Addition or creation |Grey (#8A8D90) |fa-plus-circle |Use when something needs to be added or created |

You should always try to use an icon in your empty state, unless there is an empty state where an icon does not match any of the situations mentioned above, or if an icon does not fit into the layout.

**Color**
By default, icons should be grey, except when it is a status icon or you have a special use case icon. In other words, don’t use color arbitrarily.    

### Title and body

**Tone and voice**
When writing your empty state, stick to PatternFly voice guidelines. Use concise and straightforward voice. It should be conversational, while still professional. 

It is OK to use “you” and “your” (eg: Add a source to your app), but never assign blame to the user (eg: You didn’t add a source to your app.) 

![Accusatory](./img/accusatory.jpg)

There is also no need to be overly mannerly, so avoid using please, unless the user is being inconvenienced. 

![Please](./img/please.jpg)

**Level of detail**
When landing on your empty state, the user should understand the situation and know what to do from there. Include at least one sentence, even if it is a filtered situation, and at least two when there is more explanation needed. 

![Detail](./img/level-of-detail.jpg)

**Sentence case**
Empty states should follow sentence case rules. Only the first word in any phrase or sentence should be capitalized (whether it is in the body or in a button or link), unless a proper noun is included in the phrase/sentence.
Every sentence in a body should end with a full stop. Headers should not end in full stops though.

![Sentence case](./img/sentence-case.jpg)

### Primary and secondary buttons
If you have a singular Call to Action on your page, it should take the form of a primary button, unless you need it embedded in the body for a specific reason. However, primary calls to action should take the format of a primary button as much as possible. Although the body should be used for an explanation as to why they are seeing an empty state, and what they should do next, the primary button should be used to further highlight this next step.

![Primary button one cta](./img/one-ctas-primary.jpg) ![In body cta](./img/one-cta-body.jpg)

If you have more than one actionable link, there are two options. If the primary action is a primary button, the second action should take the form of a link button and be placed underneath the primary button (as seen on the left). If your primary action is embedded in the body, the second action can stand alone as a link button (as seen on the right). 

![Primary button two ctas](./img/two-ctas-primary.jpg) ![In body two ctas](./img/two-ctas-body.jpg)

The only time there should be a stand-alone link button, with nothing linked in the body, is when it is a filtering or search situation (eg: "Clear all filters”), or when there are multiple primary calls to action on your page, and you do not want the page to look crowded with too many blue buttons.

![Solo link cta](./img/solo-link.jpg)

### Alignment

**Full page empty state**
When an empty state appears in a full page, the empty state should be placed 64px away from the top of the area they are in, and be horizontally centered with a minimum padding of 24px on all remaining sides.

![Full page empty state](./img/desktop-page-es.jpg)

Mobile in-page empty states should be 48px away from the top and have a minimum of 16px padding on the remaining sides.

![Mobile page empty state](./img/mobile-page-es.jpg)

**In-table, card or wizard empty states**
Empty states within a table, card or wizard should always be horizontally and vertically centered on their background, and have an outside padding of 24px on all sides.

![In table empty state](./img/table-es.jpg)

### Toolbars or filters in empty states
No toolbars or filters should be shown when a user is in a full page empty state as the user will have no items to perform any actions on.

![Toolbar usage](./img/toolbar.jpg)


## Usage
There are several common use cases for empty states:
* [First use or get started](#first-use-or-get-started)
* [No data to show](#no-data-to-show)
* [Configuration required](#configuration-is-required)
* [The user is not entitled or the user role does not have access](#The-user-is-not-entitled-or-the-user-role-does-not-have-access)
* [A backend failure](#a-backend-failure)
* [Success](#success)
* [Addition or creation](#addition-or-creation)

### First-use or get started

In a first-use situation, there is nothing to display because the user has not created or added anything yet. Use this opportunity to educate users about how to get started and introduce any associated value or benefit to taking action. This empty state should be displayed in the extra large empty state variation.

![First use](./img/xl-getstarted.jpg)

### No data to show

Help users understand why there is no data to display and explain what they can do to move forward. For example, there may be no data to show because the user has a series of filters applied and the system cannot locate a match. It’s also possible that there is no data because all issues are resolved or all tasks are complete.

![No data to show](./img/no-data.jpg)

### Configuration is required

In this situation, a user may need to take steps to configure, connect, or enable something in order to view associated information or take advantage of features.

![Configuration is required](./img/configuration.jpg)

### The user is not entitled or the user role does not have access

Help users understand why they are not able to view content and provide next steps.

![No access](./img/access-denied.jpg)

### A backend failure

Provide the user with information about the error that is easy to understand, and provide clear next steps they can take to resolve the issue.

![Backend failure](./img/backend-failure.jpg)

### Success

Provide the users with information letting them know that they’ve successfully completed a process. For example, you might provide a success state at the end of a tutorial or the completion of a wizard.
 
When the success state appears in a table or wizard, it should use the standard empty state variation.

![Success table](./img/success-table.jpg)

![Success wizard](./img/success-wizard.jpg)

If the success state appears in a full page, you can choose to use the extra large empty state variation to fill up the page.

![Success full page](./img/xl-success.jpg)

## Addition or creation 
In some situations, users may need to add or create something in order to view associated information. Let them know what they need to add and guide them with calls to action to lead them the right way.

![Addition or creation](./img/add-or-create.jpg)


<!-- ## Variations

Empty states are most commonly presented in data lists, data tables, card views, or as a full page.

*In a data list*
![Data list](./img/emptystate-datalist.png)

*In a small card*
![Small card](./img/emptystate-card.png)

*In a large card*
![Large card](./img/emptystate-lgcard.png)

*In a full screen*
![Full screen](./img/emptystate-fullscreen.png)-->
