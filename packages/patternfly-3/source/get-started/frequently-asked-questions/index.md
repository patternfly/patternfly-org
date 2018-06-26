---
title: Frequently Asked Questions
author: mcarrano
layout: page
---
- [What does PatternFly offer?](#offer)
- [Which browsers does PatternFly support?](#support)
- [What JS framework implementations does PatternFly offer?](#implementations)
- [There are a lot of PatternFly repos. How do I know where to file an issue?](#issue)
- [How is PatternFly addressing accessibility?](#accessibility)
- [What is PatternFly-ng?](#patternfly-ng)
- [What are the PF4 initiatives?](#initiatives)
- [Why did we move away from Bootstrap for PF4?](#bootstrap-for-pf4)
- [What is the PF3 to PF4 migration plan and deliverables?](#pf4-migration-plan)
- [How we will address UX consistency with varying levels of adoption between PF3 and PF4?](#ux-consistency-between-pf3-and-pf4)
- [How long will PF3 be maintained?](#how-long-will-pf3-be-maintained)
- [Where can I see progress for design and development?](#progress-for-design-and-development)
- [What are interaction patterns?](#what-are-interaction-patterns)
- [How do I request or propose a design contribution?](#request-or-propose-a-design-contribution)
- [Why should I care about consistency?](#why-should-i-care-about-consistency)
- [What sets PatternFly apart from other design libraries?](#what-sets-patternfly-apart)
- [How can I contribute?](#how-to-contribute)
- [Who is PatternFly for and why would I use it?](#who-is-pf-for)



## <a name="offer"></a>What does PatternFly offer?

There are two parts to PatternFly that will help you efficiently design and develop enterprise web applications. First, our [widget library]({{site.baseurl}}/widgets/) implements enterprise-optimized visual styling for common web UI widgets. This is supported with a downloadable library of HTML mark-up, CSS styling, and code samples built on top of the [Bootstrap 3](http://getbootstrap.com/) framework. Second, our [pattern library]({{site.baseurl}}/wikis/patterns/) includes a set of interaction patterns that offer consistent solutions to common user interaction problems.

## <a name="support"></a>Which browsers does PatternFly support?
PF3 supports [the same browsers as BS3](https://getbootstrap.com/docs/3.3/getting-started/#support) with the exception of Internet Explorer 8-9. PatternFly 4 supports the latest two versions of Edge, Safari, Firefox and Chrome.  

## <a name="implementations"></a>What JS framework implementations does PatternFly offer?  
PatternFly-Core is HTML/CSS and jQuery. In addition, PatternFly 3 (our current version) supports various JS framework implementations including [Angular-PatternFly](https://github.com/patternfly/angular-patternfly) (Angular 1.x), [PatternFly-ng](https://github.com/patternfly/patternfly-ng) (Angular 6.x+), and [PatternFly-React](https://github.com/patternfly/patternfly-react). PatternFly will continue to support the PF3 framework implementations by:

* Managing releases.
* Accepting new contributions that are common and benefit the broader community.
* Triaging and prioritizing bugs and critical issues.
Reviewing PRs.

Note, activity within these repos vary and are based on community demand and needs.

## <a name="issue"></a>There are a lot of PatternFly repos. How do I know where to file an issue?
In general, the PatternFly team will help ensure that issues are filed appropriately. However, it’s helpful to have an understanding of how to appropriately file issues.

* For issues with code in PatternFly core (the HTML/CSS), submit issues against [PatternFly-Core](https://github.com/patternfly/patternfly/issues/new?template=bug_report.md).
* For issues that you have with a design, how a pattern works, a visual design, or anything else regarding the overall pattern submit against PatternFly-Design.
* For issues with a JS framework implementation, submit issues to their respective repos. There are a number of PatternFly JS framework implementations including:
  * [PatternFly-React](https://github.com/patternfly/patternfly-react/issues/new)
  * [PatternFly-NG](https://github.com/patternfly/patternfly-ng/issues/new) (Angular 6+)
  * [Angular-PatternFly](https://github.com/patternfly/angular-patternfly/issues/new) (Angular 1)

## <a name="accessibility"></a>How is PatternFly addressing accessibility?
For PatternFly 3 and prior versions:
* Our color palette for font meets AAA standards. You can learn more about this by scrolling down to the bottom of our [Styles: Color Pallete page](https://www.patternfly.org/styles/color-palette/).
* Beyond color, we previously really had no standard for accessibility beyond best effort. As of May, we have updated our contribution standards to say that, for new contributions, patterns have to be keyboard accessible and meet the [5 rules of ARIA](https://www.w3.org/TR/using-aria/#rule1). You can read more about this in [this blog post](https://blog.patternfly.org/patternfly/its-global-accessibility-awareness-day/).

This means that current PatternFly will improve, however it's still a mixed bag. Product/projects would have to take additional precautions during development to ensure it's meeting your specific requirements for accessibility.

For the next major version, PatternFly 4, our goal is to meet [level AA in the Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0). You can check out our current draft of our [accessibility guide](https://pf-next.com/accessibility-guide) to learn more. Again, this does not directly transfer into accessible products/projects as any additional code around these patterns/widgets also need to take into account the accessibility standards. However, we certainly hope this effort helps to move us forward in the right direction.

## <a name="patternfly-ng"></a>What is PatternFly-ng?
PatternFly-ng is the name of our repo that houses Angular 6.x+ implementations of PatternFly designs. “Ng” is [a standard prefix](https://stackoverflow.com/questions/14669322/what-does-the-ng-stand-for-in-angular-js-directives) and known abbreviation by Angular developers (comes from “A-ng-ular”). It does not stand for “next gen”.

## <a name="initiatives"></a>What are the PF4 initiatives?
* **Modularity:** Today products have challenges adopting some PatternFly patterns because they are too use case specific. The goal of modular components is to deliver the building blocks necessary for any use case.
* **Accessibility:** See [How is PatternFly addressing accessibility?](#how-is-patternfly-addressing-accessibility?)
* **Responsive design:** Address responsive states for all components and designs.  
* **A new visual design system:** Provide an updated look that is more flexible and desirable for PatternFly’s multiple personas.

## <a name="bootstrap-for-pf4"></a>Why did we move away from Bootstrap for PF4?
Tying PatternFly to Bootstrap was a great win for the team initially because we could easily theme Bootstrap and build on top of a solid system.  This also came with the challenge that we were tied to their release cycle and any long-term decisions they would make.  Once Bootstrap 4 was announced and we realized consumers would need to do a full rewrite to benefit from Bootstrap upgrades, we investigated the cost of recreating the pieces we needed.  We found that the advances in modern CSS and the Grid system made it easier to recreate the layouts we needed and we no longer are tied to Bootstrap’s upgrades.

Additionally, making PatternFly-Core framework agnostic means that it can live side by side with PatternFly 3, allowing for incremental migration. See the section, How we will address UX consistency with varying levels of adoption between PF3 and PF4?, for more specifics on this.

# <a name="pf4-migration-plan"></a>What is the PF3 to PF4 migration plan and deliverables?
Migration tooling and best practices are under development.   

* PF4 component documentation will clearly show which PF3 component it replaces
* Examples of the old/new HTML structure will be provided
PatternFly-React component users will be provided with codemods (scripts) to migrate any components over from the old to new versions
* PF3 and PF4 will be able to work side by side so migration can happen slowly and won’t be required to benefit from new PF4 contributions

## <a name="ux-consistency-between-pf3-and-pf4"></a>How we will address UX consistency with varying levels of adoption between PF3 and PF4?
The UXD and PatternFly team is currently exploring avenues for addressing the inconsistencies that are introduced to applications and the Red Hat portfolio with the introduction of PatternFly 4. These ongoing investigations and POCs are a priority.

## <a name="how-long-will-pf3-be-maintained"></a>How long will PF3 be maintained?
PatternFly 4 is in development, therefore PatternFly 3 continues to be a priority to maintain for the foreseeable future. The project is iterative and improves with community contributions, however to ensure stability for our consumers, the following guidelines are in place:

* New contributions that are common and benefit the broader community will be accepted.
* Any bugs or critical issues will be triaged immediately and prioritized.
* Contributions introducing breaking changes for PF3 will not be accepted unless there is evidence validating the the value and cost.


## <a name="progress-for-design-and-development"></a>Where can I see progress for design and development?   
**GitHub:** All of our code and design documentation is located on GitHub. Visit our repos to view issues, project boards, and review PRs. Some specific boards to make note of include:

* [PatternFly 4 Feature Board](https://github.com/orgs/patternfly/projects/3)
* [PatternFly 3 Feature Board](https://github.com/orgs/patternfly/projects/2)

**Slack:** Slack is the primary method for chat. You can join the conversation by visiting https://slack.patternfly.org/.

**Mailing List:** [Subscribe to our mailing list](https://www.redhat.com/mailman/listinfo/patternfly) to participate in or follow a variety of discussions on both technical and design topics. This is also a good place to ask questions, gather requirements, or join forces with other community members. Older threads can be found in the [archive](https://www.redhat.com/archives/patternfly/).

**YouTube:** Check out the [PatternFly YouTube channel](https://www.youtube.com/channel/UCqLT0IEvYmb8z__9IFLSVyQ) to view the most recent PatternFly scrum demo recordings. Reach out to Leslie Hinson to be added to the bi-weekly invite.


## <a name="what-are-interaction-patterns"></a>What are interaction patterns?

Interaction patterns are general design approaches to satisfy use cases commonly found in enterprise IT applications. They provide UI designers and developers with a common way to think about the problem at hand and provide a baseline design that can be customized to your specific application needs. Utilizing PatternFly design patterns will promote consistency across multiple applications.

## <a name="request-or-propose-a-design-contribution"></a>How do I request or propose a design contribution?
To request or propose a design contribution, [file a new issue](https://github.com/patternfly/patternfly-design/issues/new) against PatternFly-Design. The issue template will identify specific information that’s required to get started.

## <a name="why-should-i-care-about-consistency"></a>Why should I care about consistency?

Consistency leads to better usability. Applications become intuitive when common mental models are leveraged and users are not required to relearn interactions when moving between applications. When users look at your application, you want them to think, “I know how this works because it’s similar to things I’ve used before.” Patterns do allow for innovation on top of a common baseline that will enable your application to stand out from the crowd.

## <a name="what-sets-patternfly-apart"></a>What sets PatternFly apart from other design libraries?

While there are other good general web UI pattern libraries out there, we felt like none of these were optimized for the enterprise IT space. We recognize that a “one size fits all” approach to design is not always possible and IT users have unique requirements that don’t necessarily translate across other domains. PatternFly addresses this by basing its designs on an understanding of the needs of IT users and usage scenarios. This includes the need to manage large amounts of complex information in an efficient manner. In short, we believe that PatternFly fills a targeted niche where other general pattern libraries do not.

## <a name="how-to-contribute"></a>How can I contribute?**

Visit the [Contribute section]({{site.baseurl}}/get-started/community/) of our Community page for more information and/or [join our mailing list](https://www.redhat.com/mailman/listinfo/patternfly). We welcome your ideas and feedback!

## <a name="who-is-pf-for"></a>Who is PatternFly for and why would I use it?
* I’m a front-end developer and wrote my application with Bootstrap, but found that it was missing a number of components for my enterprise use cases.  PatternFly is valuable to me because it provides those components, implemented in CSS and a number of popular javascript frameworks.

* I’m a developer that works on a application that has to fit within a larger product portfolio.  I leverage PatternFly because it provides assurance that my front-end will be consistent with other products that are also built with PatternFly.  This gives me more time to innovate on application specific features and functions.

* I’m a front-end developer and wrote my application with Bootstrap. I adopted the PatternFly CSS and theme to achieve an aesthetic appropriate for my enterprise use case that differentiates it from other Bootstrap applications.

* I’m an application architect.  I want to leverage PatternFly to provide an excellent application experience with a minimal investment of time and resources.

* I’m an application architect and leverage PatternFly to minimize the investment of time and resources to deliver an excellent application experience.

* I’m an interaction designer and use PatternFly to streamline the design process by leveraging established design standards built by industry experts in user experience and design.

* I’m a visual designer and leverage the PatternFly styles including typography, custom icons and color palette to apply a consistent theme and save time.

* I’m an interaction designer and extend PatternFly to solve new use cases.  I can contribute my PatternFly designs back to the project to make them available for others to consume.

* I’m a front-end developer and extend PatternFly to solve new use cases.  I can contribute my PatternFly implementation back to the project to make them available for others to consume.
