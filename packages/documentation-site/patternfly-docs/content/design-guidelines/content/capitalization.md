---
id: Capitalization
section: UX writing
---

# Capitalization guidelines

Consistent capitalization adds clarity and creates unity across product UIs. When using PatternFly, we recommend writing in **sentence case**, which capitalizes the first letter of the first word in a title, heading, subtitle, or subheading. The only exceptions to this are proper nouns, product names, acronyms, and initialisms, all of which should be capitalized. 
    
For example: “When you use PatternFly’s design resources, you get helpful tips and best practices.”

Above all else, your main goal should be consistency. You may need to use different capitalization standards depending on what you're designing, but be sure to keep the capitalization within your product area consistent.

## Product UIs

When you write for a product, make sure you follow these capitalization patterns:

- Capitalize proper nouns, acronyms, initialisms, product names, services, and features. 
- Keep capitalization for custom resources the same as the capitalization style used during creation. 
    - For example, if a custom resource name was created with all lowercase letters, don't change any of the letters to uppercase when referencing this resource. 
- Capitalize product feature names when they’re used as proper nouns or when they refer to a capitalized UI term (like a navigation item). Write them in lowercase when they’re used to describe generic concepts. For example, consider the following scenarios found in Red Hat products:

<div class="ws-content-table">

| **Feature name** | **UI text**  | **Reasoning**    |
|------------------|--------------|------------------|
| Compliance   | “Check your system **compliance** using Red Hat Insights **Compliance**.”                                                  | The first “compliance” is lowercase since it refers a concept. The second “compliance” refers to a specific feature offered on cloud.redhat.com, so it is capitalized.                                     |
| Sources      | “Add a *source* by going to **Settings > *Sources*.**” "Check the *Sources* table for status."<br /><br />Button text: "Add *source*" | “Sources” is only capitalized when it directly refers to a subsection, feature, or location in the UI. "Source" is lowercase in the button text because button labels should always be in sentence case. |

</div>

### Capitalization in breadcrumb trails

It is common for page titles to appear as an item in a breadcrumb trail. When this occurs, you should match the capitalization of the breadcrumb item to the capitalization of the original page title.

This is true even if the capitalization is not sentence case. 

For example: *Rules* > *Systems* > *System Tool* 

Sometimes, user-named items will appear in a breadcrumb trail. If a custom resource name (such as “vagrant-host”) is included in the breadcrumb trail, you should match the capitalization of the users' original entry.

For example: *Rules* > *Systems* > *System Tool* > *vagrant-host* 

### Tools outside your product portfolio

If you’re referencing tools that aren't part of your company’s product portfolio, write the product names as they appear in the respective company’s documentation. 

For example, if you’re referencing a product in Amazon Web Services that Amazon capitalizes, then you should also capitalize it in your writing.

## PatternFly website documentation 

There are additional capitalization guidelines that you should follow if you contribute to any PatternFly content, like documentation or microcopy.

- Use sentence case for page titles, menu items, navigation items, headings, subtitles, and subheadings. 

- Capitalize proper nouns, product names, acronyms, and initialisms. For example:
    - React
    - PatternFly
    - HTML

- Write all components in **lowercase** unless they start a sentence. 

- Format any code snippets according to the standards used for their language. 

Take the PatternFly website as an example, where all navigation items, button text, and headings are written in sentence case:

<img src="./img/pf-home-caps.png"  alt="PatternFly website screenshot showing sentence case copy" width="700"/>

When referencing PatternFly components, we only capitalize the component name when it begins a sentence:

<img src="./img/pf-component-caps.png"  alt="PatternFly website screenshot showing sentence case copy" width="700"/>
