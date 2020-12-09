---
id: Switch
section: components
---
A **switch** toggles the state of a setting (between on and off). Switches and [checkboxes](/components/checkbox) can often be used interchangeably, but the switch provides a more explicit, visible representation on a setting.

## Usage

It is assumed that when a user toggles a switch, the change will save automatically without the need for additional action (like clicking a "Save" button).

<img src="./img/switch.png" alt="Examples of switch buttons" width="244"/>

**General guidelines**

* Use switches with labels by default unless space is limited, then use a [switch without a label](/components/switch/react#without-label).
* Add a label in front of your switch to specify what is being switched on or off (for example, wi-fi or bluetooth).
* Don’t use a switch if the options you’re presenting to the user are anything other than “on” or “off.” Instead, use [radio buttons](/components/radio/design-guidelines). 
* Depending on your use case, add labels to clarify between toggled settings, such as *On* and *Off*.


### When to use switches versus checkboxes

A switch changes an option and saves it simultaneously, while checkboxes require a separate action to save the selection, such as pressing a “Submit” or “Save” button.

**Follow these guidelines for when to use a switch versus a checkbox:**

* Use checkboxes when options do not save automatically and require the user to perform an additional action to save changes (in this case, pressing the “Save changes” button).

    <img src="./img/switch-check-1.png" alt="Example 1 of do's and don'ts for using a checkbox vs. a switch" width="661"/>

* Use a switch for situations where you are turning a series of one or more independent options on or off.

    <img src="./img/switch-check-2.png" alt="Example 2 of do's and don'ts for using a checkbox vs. a switch" width="661"/>

* Use checkboxes when you may have an intermediate state where you can select all, none, or some actions.

    <img src="./img/switch-check-3.png" alt="Example 3 of do's and don'ts for using a checkbox vs. a switch" width="661"/>
