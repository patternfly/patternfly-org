---
id: Rapid prototyping
section: PatternFly-AI
source: about-rapid-prototyping
sortValue: 2
---

# Rapid prototyping with AI-assisted PatternFly development

This guide explores a workflow that enables teams to rapidly prototype PatternFly UIs directly in code using AI-powered development tools.

## What is "vibe coding"?

One of the primary methods of rapid prototyping with AI is **vibe coding**&mdash;a development method where you communicate the general "vibe" or feeling of what you want to create, rather than writing detailed specifications. Instead of providing precise technical requirements, you describe the user experience, visual aesthetic, or functional behavior you're aiming for, and let AI tools translate that vision into working PatternFly code.

## What are the benefits of rapid prototyping?

Rapid prototyping with PatternFly code offers several key benefits:

- **Early consistency**: Integrate PatternFly into prototyping processes as early as possible to foster design system consistency.
- **Enhanced collaboration**: Bridge the gap between product management, design, and engineering by speaking the same design language from the start.
- **Effective iteration**: Enable teams to efficiently and collaboratively iterate by working directly with code.
- **Designer empowerment**: Equip designers with tools to rapidly build functional prototypes using PatternFly as a foundation.

## Get started

Choose your path based on your current situation:

- **[Starting a new prototype](/patternfly-ai/rapid-prototyping/new-prototypes):** Use the [patternfly-react-seed (ai_enabled branch)](https://github.com/patternfly/patternfly-react-seed/tree/ai_enabled) application for optimal setup.
- **[Enhancing existing projects](/patternfly-ai/rapid-prototyping/enhancing-existing-projects):** Integrate AI tools into your current codebase.

## Best practices for AI-assisted prototyping

### Effective prompting with vibe coding

When working with AI tools using the vibe coding approach:
- Describe the user's emotional journey and what they need to accomplish.
- Focus first on the experience, rather than specific component names. For example, "I want users to feel confident as they complete this critical task."
- Use sensory and experiential language. For example, "This should feel quick and lightweight." or "Users need to easily scan and compare options."
- If you do know of a specific PatternFly component you want used, be specific in your prompt.
- Reference existing PatternFly patterns when possible. For example, "Similar to how the data list pattern works, but for this specific use case."
- Specify responsive behavior and accessibility requirements in terms of user impact

### Vibe coding examples

| **Before** | **After** |
| --- | --- | 
| "Create a data table with pagination and sorting" | "Users need to quickly scan through a large dataset to find specific items. They should be able to easily narrow down results and understand the data hierarchy at a glance. The experience should feel efficient and not overwhelming." |
| "Add a modal with a form" | "When users click this action, they need a focused space to input information without losing context of what they were doing. The interaction should feel lightweight but important." |

## Experimentation and feedback

This rapid prototyping approach is an evolving experiment. We'd love to learn from your experience:

- Share your feedback and experiences on our [GitHub discussions board](https://github.com/orgs/patternfly/discussions).
- Connect with the community on our [PatternFly Slack workspace](https://join.slack.com/t/patternfly/shared_invite/zt-1npmqswgk-bF2R1E2rglV8jz5DNTezMQ).

This guidance represents the first step in maturing AI-assisted PatternFly prototyping. As the process evolves, we'll continue to refine tools and recommendations based on community feedback and real-world usage. 