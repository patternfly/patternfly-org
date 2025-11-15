---
id: AI-assisted code migration
section: AI
---

This guide explores a workflow that enables developers to leverage AI to accelerate code migrations, with best practices and recommendations to follow when replicating the process.  

## What is AI-assisted code migration?

For the purposes of this guide, a code migration refers to moving your project from a legacy or dated framework to PatternFly React components. An **AI-assisted code migration** heavily utilizes AI tools and models to help speed up the process of modernizing your UI, while adhering to best practices. 

## What are the benefits of AI-assisted migrations? 

Even when its initial output is imperfect, using AI in combination with engineering judgment and domain expertise can significantly speed up the development process.

While AI is *not* a replacement for human developers, it offers key benefits: 
- **Faster migrations:** Migrate simple pages up to 4 times faster, compared to a fully manual migration. 
- **Learning support:** Quickly develop an understanding of the project's unique context by prompting AI to explain topics. 
- **Planning support:** Identify and scope all requirements and steps needed for the migration. 

## Multi-phased workflow example

AI serves as a powerful accelerator throughout all steps of the migration process, including learning, planning, development, and testing phases. This example outlines what an AI-assisted workflow could look like throughout a migration project. While your specific workflow will look different and be in context of your own codebase, this example is meant to serve as a reference point, outlining ideas that you can use in your own scenario.

### 1. Learning phase

When you're first starting a migration project, AI can help you build project-specific context by bridging knowledge gaps, setting up development environments, and identifying relevant code sections.

In this workflow example, the original code is written with Angular. Here, AI can help to quickly explain Angular-specific patterns (like directives or services) and point to their equivalents in React and PatternFly. 

**Prompt:** 
_"Can you explain the Angular directives to me?"_

**Response:** 

![Angular Directives information 1](./img/angular-directives-1.png) ![Angular Directives information 2](./img/angular-directives-2.png)

### 2. Planning phase

Once you've gathered enough context in the learning phase, you can create a migration plan by asking AI to estimate scope and map features. To make the plan more concrete and comprehensive, you might find it useful to have AI:
- Generate a list of components that need migration.
- Identify potentially difficult areas, such as state management and routing.

**Prompt:**
_"I want to convert all the Katello pages that are written in Angular to React. Can you list the Katello pages that would need to be converted. Give results in a table format."_

**Response:**

![Results from scope query](./img/scope-results.png)

### 3. Development phase

After establishing a migration plan, you can use AI to build new features iteratively. This can be especially useful for generating forms, validating logic, and creating reusable components.

For example, you could use AI to migrate a simple Angular feature like this table:
        
![Before migration - Angular Products page](./img/products-before.png)

During the development phase, you could take a couple of different approaches to migrate code. You might be able to simply change the code within the same file or you might want to start fresh, using the patternfly-react-seed and following [our rapid prototyping guide.](https://www.patternfly.org/AI/rapid-prototyping/new-prototypes)

In this example, we created a placeholder page (PF6placeholder.js) and asked AI to replicate the Angular component on the new page, using PatternFly. 

**Prompt:**
_"Copy the Angular Products page content into PF6placeholder.js using React and PatternFly6, using best practices with bias towards how other React and PatternFly files in this project are doing things."_

This simple and direct prompt quickly and successfully recreated the table using PatternFly components:  

![After migration - React PatternFly Products page](./img/products-after.svg)

### 4. Testing phase

Use AI to accelerate test coverage by generating boilerplate unit tests, mocks for API integrations or dependencies, and end-to-end test outlines using tools like Cypress.

**Prompt:** 
_"Generate tests for PF6placeholder.js page following best practices and what is done in this project."_

**Response:**

![Generated tests](./img/generated-tests.png)

## Best practices
	
Because AI can make inaccurate assumptions, providing it with careful direction helps ensure that it will perform more reliably. Follow these best practices to help ensure consistency in AI behavior.
    
- Use AI as a helper for planning and managing tasks. For example, use AI-generated to-do lists for easier and more streamlined task management.
- Avoid using AI for common tasks that can be done more easily manually and explicitly. Instead ask it to focus on more complex tasks that will have more impact. 
- Leverage different language models throughout your migration and swap to more efficient models for different tasks. 
- Avoid overloading a model with a long or time consuming task. If a request is taking longer than you'd like, or is going beyond what you intended, use the "Stop" button and refine your prompt.
- Ensure that you understand the product architecture and are familiar with any technologies used. Otherwise, using AI can actually be more time consuming than a manual migration.
- Follow our [prompting tips](#prompting-tips) when requesting something from an AI model.

### Prompting tips 

When interacting with AI, especially with tools like Cursor, specificity is key. In order to efficiently and successfully request something from an AI tool, there are a few "do's and don'ts" to follow:

| **Don't** | **Do** |
| --- | --- |
| Expect AI to assume your needs. | Be specific and clearly state what you want to achieve. |
| Let AI follow its own rules. | Instruct AI to follow best practices for React and PatternFly, providing clear definitions and examples. |
| Restrict yourself to text-based prompts. | When text prompts are insufficient, share screenshots with AI to provide valuable context. |
| Reinvent the wheel. |  Use previously completed features and functionalities as models for new requests. |

## Experimentation and feedback 

AI-assisted code migrations are still an evolving experiment, and we'd love to learn from your experiences: 
- Share your feedback and experiences on our [GitHub discussions board](https://github.com/orgs/patternfly/discussions).
- Connect with the community on our [PatternFly Slack workspace](https://join.slack.com/t/patternfly/shared_invite/zt-1npmqswgk-bF2R1E2rglV8jz5DNTezMQ).
 
As this process evolves, we'll continue to refine our recommendations based on community feedback and real-world usage. 

