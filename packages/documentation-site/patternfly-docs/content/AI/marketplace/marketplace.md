---
id: Marketplace
section: AI
sortValue: 3
---

The [PatternFly AI Helpers](https://github.com/patternfly/ai-helpers) marketplace is an open source collection of **plugins** for AI coding tools like [Claude Code](https://docs.anthropic.com/en/docs/claude-code) and [Cursor](https://www.cursor.com/). These plugins provide models with knowledge and skills that are tailored to PatternFly workflows, so your AI tools can generate more accurate solutions that follow our best practices.

Whether you're building PatternFly UIs, prototyping in code, or evaluating AI tooling for your team, our AI Helpers can simplify and enhance your experience.

With AI Helpers installed, you can expect a few benefits when using generative AI:

- More consistent use of PatternFly components and patterns.
- Faster prototyping and development cycles.
- Fewer common implementation mistakes.
- Built-in awareness of PatternFly coding standards, accessibility, and design tokens.

## What plugins are available?

The AI Helpers marketplace is organized into plugins, each focused on a different area of PatternFly — from building and testing React components, to working with design tokens and accessibility, to reviewing Figma changes. New plugins are added regularly as the community contributes.

We are actively maintaining and evolving our plugins based on the needs of our maintainers and users. For the current list of plugins, view our [plugin catalog](https://github.com/patternfly/ai-helpers/blob/main/PLUGINS.md).

## Get started

You can use our plugins with the AI coding tool of your choice, such as Claude Code or Cursor, by following these onboarding steps.

For the best experience, set up the [PatternFly MCP server](https://github.com/patternfly/patternfly-mcp) to give AI tools direct access to PatternFly component documentation, prop schemas, and design guidelines. While our plugins work without the PatternFly MCP, connecting your tools to it will provide stronger results.

### Claude Code

To use our AI Helpers in Claude Code:

1. Add the AI Helpers marketplace:
```bash
/plugin marketplace add patternfly/ai-helpers
```

2. Install the specific plugins you need:
```bash
/plugin install react@ai-helpers
```

3. Utilize the plugin's skills and knowledge in your project.

### Cursor

Cursor can discover plugins from `.cursor-plugin/` directories. If you also have Claude Code installed, Cursor may pick up installed plugins automatically via its third-party plugin settings. See the [AI Helpers README](https://github.com/patternfly/ai-helpers#cursor) for details.

## How can I contribute a plugin?

The PatternFly AI Helpers marketplace is open source and welcomes contributions from our community. Whether you want to add a new skill to an existing plugin, create an entirely new plugin, or improve the documentation that AI tools rely on, there's a place for your contribution.

To get started, check out the [contributing guide](https://github.com/patternfly/ai-helpers/blob/main/CONTRIBUTING.md) and the [step-by-step skill creation guide](https://github.com/patternfly/ai-helpers/blob/main/CONTRIBUTING-SKILLS.md).
