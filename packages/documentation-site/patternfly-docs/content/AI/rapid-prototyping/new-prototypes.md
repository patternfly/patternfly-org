---
id: Rapid prototyping
section: AI
source: new-prototypes
sortValue: 2
---

# Starting new prototypes

This guide provides instructions for setting up new PatternFly prototypes using AI-assisted development tools.

Before you get started, review [best practices for AI-assisted prototyping](/ai/rapid-prototyping/#best-practices-for-ai-assisted-prototyping).

If you need to add AI tools to existing codebases instead, follow our guidelines for [enhancing existing projects](/ai/rapid-prototyping/enhancing-existing-projects).

## Get started

For new prototypes, we recommend using the [patternfly-react-seed (ai_enabled branch)](https://github.com/patternfly/patternfly-react-seed/tree/ai_enabled) application as your starting point. This application provides AI tools with immediate access to PatternFly context and guidelines, which offers better support for vibe coding.

The patternfly-react-seed ai_enabled branch comes pre-configured with:

- A working PatternFly React application structure with essential dependencies and build configuration.
- AI-friendly documentation that provides context about PatternFly components and best practices.
- Example components and patterns to reference.

### Set up the patternfly-react-seed

1. Clone or download the patternfly-react-seed repository using the ai_enabled branch.
2. Install dependencies according to [the project's README](https://github.com/patternfly/patternfly-react-seed/tree/ai_enabled?tab=readme-ov-file#patternfly-seed).
3. To give your AI tools additional context and skills for PatternFly development, install plugins from our [AI Helpers](https://github.com/patternfly/ai-helpers) marketplace. For instructions on getting started, refer to our [Marketplace](/ai/marketplace) page.
4. Start the development server.
5. Begin prototyping with your AI development tools.

## How do I prototype?

Once you've set up the patternfly-react-seed and installed the PatternFly AI Helpers plugins, follow these steps to begin prototyping:

1. **Define your scope**: Clearly articulate what you want to build using [vibe coding principles](/ai/rapid-prototyping/#effective-prompting-with-vibe-coding). Describe the experience, not the technical implementation.
2. **Leverage AI assistance**: Use AI tools to generate PatternFly components based on your requirements, communicating through natural language descriptions of user needs and design intent.
3. **Iterate and refine**: Review generated code and make adjustments as needed, continuing to use vibe coding to guide refinements.
4. **Test and validate**: Ensure your prototype meets design and functional requirements.