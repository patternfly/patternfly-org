---
id: Rapid prototyping
section: PatternFly-AI
source: migrating-to-patternfly
sortValue: 2
---

# Migrating to PatternFly

This document outlines a practical approach to leveraging Artificial Intelligence (AI) for the migration of applications from a legacy or dated framework to PatternFly React components, drawing insights from "Using AI as a PatternFly Enablement Developer." Our experiments with AI have shown that this approach can accelerate migration by 4 to 5 times compared to manual methods. This guide is intended for developers seeking to efficiently modernize their user interfaces while adhering to best practices.

## Introduction: The PatternFly enablement developer role

As a PatternFly enablement developer, the primary goal is to assist teams in building consistent, accessible, and scalable user interfaces. This often involves:

- **Rapid adaptation**: Quickly adjusting to new products, teams, and tools.
- **Quick onboarding**: Efficiently learning new codebases, architectures, patterns, and standards.
- **Best practice application**: Implementing React and PatternFly best practices for both new and existing features.

## Using AI in each migration phase

AI serves as a powerful accelerator throughout the migration process. Below, we break it down by phase with practical examples.

### Learning phase

AI bridges knowledge gaps, identifies relevant code sections, and assists in setting up development environments. For example:

- Query AI to explain things such as Angular-specific patterns (like directives or services) and their React/PatternFly equivalents.
- Query AI to explain project specific details.
- Use AI to configure tools like Podman.

### Planning phase

AI aids in estimating migration scope and mapping existing features to latest PatternFly React equivalents:

- Query AI to generate a list of components that need to be migrated.
- Query AI to identify areas that may be difficult. Examples could include state management and routing.

### Development phase

AI can assist in building features iteratively, particularly in generating:

- Forms
- Validation logic
- Reusable components

### Testing phase

AI can significantly accelerate test coverage by generating:

- Boilerplate unit tests using a testing library
- Mocks for API integrations dependencies
- End-to-end test outlines using tools like Cypress

## Leveraging AI for PatternFly React migration: Findings and recommendations

To maximize the effectiveness of AI in development, consider the following tips:

- **Prioritize tasks**: Avoid using AI for common tasks that can be done more easily manually. Explicitly instruct it not to perform such tasks.
- **Leverage different models**: Utilize various language models to suit different needs.
- **Optimize requests**: Avoid overloading requests to the AI; the "Stop" button is a useful tool.
- **Utilize To-Do lists**: Take advantage of AI-generated to-do lists for task management.

## Prompting tips for cursor

When interacting with AI, especially with tools like Cursor, specificity is key:

- **Be specific**: Clearly state what you want to achieve.
- **Adhere to best practices**: Instruct the AI to follow best practices for React and PatternFly.
- **Build incrementally**: Use previously completed features and functionalities as models for new requests.
- **Visual aids**: When textual prompts are insufficient, screenshots can provide valuable context.

## Key takeaway: AI as an accelerator

AI is an accelerator, not a replacement for human developers. Even if the initial output from AI is not perfect, it significantly speeds up the development process when combined with engineering judgment and domain expertise.