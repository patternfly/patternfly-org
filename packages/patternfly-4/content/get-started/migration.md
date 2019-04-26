---
path: "/get-started/migration"
---

<h1 class="pf-c-title pf-m-4xl">Migrate from Patternfly 3 to PatternFly 4</h1>

<h1 class="pf-c-title pf-m-3xl pf-u-mt-xl">Design your migration strategy</h1>
<p>The first step in moving from PatternFly 3 to PatternFly 4 should be a migration strategy. Putting a solid plan in place before you start trying to migrate your codebase will help you prioritize and chunk your work and identify areas where migrating may impact design elements like interaction patterns or spacing.</p>

<h1 class="pf-c-title pf-m-xl pf-u-mt-xl">Milestone 1: Start with high impact visuals</h1>
<p>Make a big impact in a small amount of time by updating high impact visual elements first. This approach enables you to move your application into the same visual language as PatternFly 4 and also gets PatternFly 4 in your development stack.</p>

<p>High impact visuals include:</p>
<ul>
<li>Color</li>
<li>Typography</li>
<li>Iconography</li>
<li>Navigation and masthead</li>
</ul>

<p><b>Note:</b> PatternFly 4 provides an updated navigation system. If you choose to rework your application’s existing navigation, it’s best to break this work into two steps: one that tackles styles like typography and color, and another for the navigation work.</p>  

<p>Use Sketch to create high fidelity mockups to visualize the changes required and communicate them to development.</p>

<h1 class="pf-c-title pf-m-xl pf-u-mt-xl">Milestone 2: Upgrade key functionality</h1>
<p>Next, you’ll want to address high traffic areas in your application that are touched by the user frequently, or high impact areas that are important to conversion or retention, like user onboarding. Identify those key paths and prioritize your upgrades based on those areas. You may also choose to tackle page “types” depending on your project.</p>

<p>Create mid to high fidelity prototypes to visualize the changes required and communicate them to development.</p>

<h1 class="pf-c-title pf-m-xl pf-u-mt-xl">Milestone 3: Upgrade everything you touch</h1>
<p>In parallel to upgrading key functionality, use ongoing product work as an opportunity to upgrade features already being addressed by design and development. For example, if you’re working on adding a new action button to a data table, it might also be a good time to upgrade that data table to PatternFly 4.</p>

<h1 class="pf-c-title pf-m-xl pf-u-mt-xl">Get help</h1>
<p>If you run into trouble and need support, the PatternFly team is here to help. Simply go to the <div class="link"><a href="https://forum.patternfly.org/c/support">PatternFly forum</a> and add a new topic to get in touch with us. We'll always do our best to answer your questions and connect you with the right people quickly.

<h1 class="pf-c-title pf-m-3xl pf-u-mt-xl">Start building with PatternFly 4 libraries</h1>
<div class="link"><a href="/v4/get-started/developers#react">Get started with React</a><i class="blueArrow fas fa-arrow-right pf-u-mx-sm"></i></div>

<div class="link"><a href="/v4/get-started/developers#html/css">Get started with HTML/CSS</a><i class="blueArrow fas fa-arrow-right pf-u-mx-sm"></i></div>

<p><b>Do you need to run PatternFly 3 and PatternFly 4 together?</b></p>
<p>Use the following command to update your configuration in the <code>src/patternfly/sass-utilities/scss-variables.scss</code> file to state false:

<code>$pf-global--enable-reset: false !default;</code>

<p><b>Note:</b> You will need to compile your CSS manually if you want to run PatternFly 3 and Patternfly 4 together.</p>

<p><b>Does your application need support for Internet Explorer 11?</b></p>
You will need to <div class="link"><a href="https://github.com/patternfly/patternfly-next/wiki/IE11-Support">follow additional steps to enable support for this browser.</a>
