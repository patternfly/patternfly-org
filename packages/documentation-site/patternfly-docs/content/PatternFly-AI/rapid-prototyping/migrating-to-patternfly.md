---
id: AI-assisted code migration
section: PatternFly-AI
---

This guide outlines steps you can take to leverage AI when migrating your project from a legacy or dated framework to PatternFly React components, modernizing your UI while adhering to best practices. While AI is **not** a replacement for human developers, it is still a valuable accelerator for code migrations. Even when its initial output is imperfect, using AI in combination with engineering judgment and domain expertise can significantly speed up the development process. 

Our team's experiments have shown that using AI to migrate simple pages can be 4 times faster than a fully manual migration, as long as you have expertise in the technologies involved and an understanding of the product architecture. However, if you have limited product or technology knowledge, debugging the output from AI can ultimately be more time consuming than approaching the migration manually from the start.


## Best practices
To maximize the effectiveness of using AI during code migrations, consider the following tips:
- **Use AI as a helper for planning and managing tasks:** Use AI-generated to-do lists for easier and more streamlined task management.
- **Prioritize tasks for AI assistance:** Avoid using AI for common tasks that can be done more easily manually. Explicitly instruct it not to perform these tasks, so that it will be more efficient and prioritize the areas where it can be the most impactful.
- **Leverage different models:** Utilize various language models throughout your migration. One model might be better at a specific task than another. Be willing to swap between models for different tasks as needed.
- **Optimize your requests and prompts:** Avoid overloading a model with a long or time consuming task. If a request is taking longer than you'd like, or going beyond what you intended, interrupt the AI with the "Stop" button.
### Prompting tips
When interacting with AI, especially with tools like Cursor, specificity is key. In order to efficiently and successfully request something from an AI tool, there are a few "do's and don'ts" to follow:
| **Don't** | **Do** |
| --- | --- |
| Expect AI to assume your needs. | Be specific and clearly state what you want to achieve. |
| Let AI follow its own rules. | Instruct AI to follow best practices for React and PatternFly, providing clear definitions and examples for these practices. |
| Restrict yourself to text-based prompts. | When texts prompts are insufficient, you can share screenshots with AI to provide valuable context. |
| Reinvent the wheel|  Use previously completed features and functionalities as models for new requests. |


## Using AI throughout migration phases

AI serves as a powerful accelerator throughout all steps of the migration process, including learning, planning, and development phases.

### Learning phase

The learning phase of a migration project often requires building project-specific context, such as understanding the architecture, code-base, best practices and diffrences in technologies. You can query AI to help bridge knowledge gaps, set up development environments, and identify relevant code sections.

For example, if your project is written with Angular, AI can help explain Angular-specific patterns (like directives or services) and point to their equivalents in React and PatternFly.

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

In our experimentation we converted a simple Angular page to React using PatternFly components. A prompt we used after creating a placeholder page for our experimentation was: "Copy the Angular content credentials page content into the ReactPf5PlaceholderPage.js using React and PatternFly5 using best practices with bias towards how other React and PatternFly files in this project are doing things."

AI was able to successfully recreate page content while adhering to our request: 

**Before:**
![Before migration - Angular Content Credentials page](./img/content-credentials-before.png)

**After:**
![After migration - React PatternFly Content Credentials page](./img/content-credentials-after.png)

### Testing phase

The testing phase of a migration project is the final step to validate your work and ensure that there are no significant issues. 

During this phase, AI can significantly accelerate test coverage by generating:

- Boilerplate unit tests using a testing library.
- Mocks for API integrations dependencies.
- End-to-end test outlines using tools like Cypress.
