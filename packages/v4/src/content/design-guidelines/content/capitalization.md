---
title: Capitalization
section: content
hideTOC: true
showTitle: true
---

Consistent capitalization adds clarity and unity across your products' UIs.

## Capitalization types

<ul>
<li><b>Title case</b>: Title case capitalizes only the first letter of each word in a sentence except for smaller words like articles and conjunctions that have fewer than four letters.
<br />
<br />
Example: "PatternFly Design Resources With Tips and Best Practices"
<br />
<br />
Hyperlinked articles in a UI are not displayed as titles. Instead, the copy typically reads something like, "Learn more about [tool name]." </li>
<br />
<li><b>Sentence case</b>: Sentence case only capitalizes the first letter of the first word in a title, heading, subtitle, or subheading except for proper nouns, product names, acronyms, and initialisms.
<br />
<br />
Example: “PatternFly’s design resources with tips and best practices” </li>
</ul>

## Capitalization across PatternFly

Follow these guidelines for <b>PatternFly content</b>, including documentation, UX copy, blog articles, and more. 

<ul>
<li>Use <b>sentence case</b> for page titles, menu/navigation items, headings, subtitles, and subheadings across PatternFly. Capitalize proper nouns, product names, acronyms, and initialisms.  
<br />
<br />
Example: “Introduction to HTML and table components” </li>  
<br />

<li>Write all components in <b>lowercase</b> unless they start a sentence. 
<br />
<br />
Example: "Card, button, and banner components are my favorites."
<br />
<br />
<b>Note</b>: “React” is always capitalized, even when referring to a component (“React component”). It’s the official name of a JavaScript library, and it’s written as a proper noun across the <a href="https://reactjs.org/">react.js org site</a>.  
</li>
</ul>

## Capitalization across products

Follow these guidelines for <b>product UX copy</b>, including menu items, titles, messages, and more.

Each company handles UI capitalization differently, so align with your own company’s rules when designing your UIs. If you’re designing UIs for Red Hat products, follow these rules: 

<ul>
<li>Write menu/navigation items and their corresponding page titles in <b>title case</b>. </li>
<br />

<li>Write products, services, and features in <b>title case</b>. </li>
<br />

<li>Write all other areas (like button text, form field labels, and empty state headings) in <b>sentence case</b>. </li>
</ul>
<br /> 

Capitalize <b>Red Hat feature names</b> when they’re used as proper nouns or when they refer to a capitalized UI term (like a navigation item). Write them in lowercase when they’re used to describe generic concepts.

Examples: 
<table style="table-layout: fixed" tr width="80%">
    <tr>
        <th><center><strong>Feature&nbsp;name</strong></center></th>
        <th><center><strong>UI text</strong></center></th>
        <th><center><strong>Reasoning</strong></center></th>
    </tr>
    <tr>
        <td><center>Compliance</center></td>
        <td>“Check your system compliance using Red Hat Insights Compliance.”</td>
        <td>The first “compliance” is lowercase since it refers to compliance as a concept. 
        <br />
        <br />
        The second “compliance” refers to a specific feature offered on cloud.redhat.com.
</td>
</tr> 
<tr>
         <td><center>User Access</center></td>
	        <td>“Manage user access for your organization using the User Access feature.”</td>
            <td>The first “user access” is lowercase because it refers to user access as a concept. 
            <br />
            <br />
            The second “user access” is capitalized because it refers to the User Access feature offered on cloud.redhat.com.
</td>
</tr>
    <tr>
        <td><center>Sources</center></td>
        <td>"Add a source by going to <b>Settings</b> > <b>Sources</b>." 
        <br />
        <br />
        "Check the <b>Sources</b> table for status." 
        <br />
        <br />
        Button text: "Add source"
</td>
        <td>“Sources” is only capitalized when it directly refers to a subsection, feature, or location in the UI.
        <br />
        <br />
        Always write buttons in sentence case.
</td>
</tr>
</table>

## Capitalization for tools outside your product portfolio

If you’re referencing tools outside your company’s product portfolio, write the product names as they appear in the respective company’s documentation. 

For example, if you’re referencing a product in AWS and Amazon capitalizes it, capitalize it in your writing.

## Capitalization for breadcrumb trails

Usually, page titles appear in a breadcrumb trail. If all page titles are in title case, they should appear in title case in the breadcrumb trail. If all page titles are in sentence case, they should also appear in sentence case in the breadcrumb trail. 

However, breadcrumb trails aren’t limited to page titles alone. If a name entered by a user (such as “vagrant-host”) is included in the breadcrumb trail, then use the same case that the name appears in.

Example: Rules > Systems > System Tool > vagrant-host 
