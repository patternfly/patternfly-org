---
id: Marketplace
section: AI
subsection: AI-assisted development
sortValue: 3
---

The [AI Helpers](https://github.com/rh-uxd/ai-helpers) marketplace is an open source collection of **plugins** for AI coding tools like [Claude Code](https://docs.anthropic.com/en/docs/claude-code) and [Cursor](https://www.cursor.com/). Hosted in the `rh-uxd/ai-helpers` repository, it includes plugins for both PatternFly and UXD workflows. These plugins provide models with knowledge and skills tailored to our design system and team practices, so your AI tools can generate more accurate solutions that follow our best practices.

Whether you're building PatternFly UIs, prototyping in code, or evaluating AI tooling for your team, AI Helpers can simplify and enhance your experience.

With AI Helpers installed, you can expect a few benefits when using generative AI:

- More consistent use of PatternFly components and patterns.
- Faster prototyping and development cycles.
- Fewer common implementation mistakes.
- Built-in awareness of PatternFly coding standards, accessibility, and design tokens.
- Support for UXD workflows such as prototyping, research, and design review.

## What plugins are available?

The AI Helpers marketplace is organized into plugins across PatternFly and UXD:

- **PatternFly plugins** cover React component development, design guidance, design audits, migration, code review, team workflows, and MCP documentation access. On Claude Code, you can install the `patternfly` meta-plugin to get the PatternFly sub-plugins in one step.
- **UXD plugins** (such as `uxd-workshop`) support prototyping, research, design review, and related team workflows.

New plugins are added regularly as the community contributes. For the current list of plugins and skills, view our [plugin catalog](https://github.com/rh-uxd/ai-helpers/blob/main/PLUGINS.md).

## Get started

You can use our plugins with the AI coding tool of your choice, such as Claude Code or Cursor, by following these onboarding steps.

For the best experience, set up the [PatternFly MCP server](https://github.com/patternfly/patternfly-mcp) to give AI tools direct access to PatternFly component documentation, prop schemas, and design guidelines. On Claude Code, MCP is included when you install the `patternfly` meta-plugin. On Cursor, the MCP server requires [separate setup](https://github.com/rh-uxd/ai-helpers/blob/main/FAQ.md#how-do-i-test-a-skill-without-the-patternfly-mcp-server).

### Claude Code

To use AI Helpers in Claude Code:

1. Add the AI Helpers marketplace:
```bash
claude plugins marketplace add rh-uxd/ai-helpers
```

2. Install the PatternFly meta-plugin (recommended), which auto-installs the PatternFly sub-plugins:
```bash
claude plugins install patternfly@uxd-ai-helpers
```

Or install individual plugins as needed (for example, `claude plugins install pf-react@uxd-ai-helpers`). Don't install both `patternfly` and individual PatternFly sub-plugins — `patternfly` already includes them.

3. Use the plugin's skills and knowledge in your project. Skills are available as slash commands, such as `/pf-react:pf-test-gen`.

### Cursor

In Cursor, add the marketplace in **Settings → Marketplace**, then install the plugins you need. See the [Plugins table in the AI Helpers README](https://github.com/rh-uxd/ai-helpers#plugins) for the full list.

After installing, skills work the same way — as slash commands in any project. For MCP server access, also install `pf-mcp` and complete the [Cursor MCP setup](https://github.com/rh-uxd/ai-helpers/blob/main/FAQ.md#how-do-i-test-a-skill-without-the-patternfly-mcp-server).

## How can I contribute a plugin?

The AI Helpers marketplace is open source and welcomes contributions from our community. Whether you want to add a new skill to an existing plugin, create an entirely new plugin, or improve the documentation that AI tools rely on, there's a place for your contribution.

To get started, check out the [contributing guide](https://github.com/rh-uxd/ai-helpers/blob/main/CONTRIBUTING.md) and the [step-by-step skill creation guide](https://github.com/rh-uxd/ai-helpers/blob/main/CONTRIBUTING-SKILLS.md).
