---
id: AI development tools
section: AI
sortValue: 3
---

The [PatternFly AI helpers](https://github.com/patternfly/ai-helpers) marketplace is an open source collection of plugins for AI coding tools like [Claude Code](https://docs.anthropic.com/en/docs/claude-code) and [Cursor](https://www.cursor.com/). These plugins provide development knowledge and skills tailored to PatternFly workflows, so your AI tools generate more accurate, best-practice code out of the box.

Whether you're building PatternFly UIs, prototyping in code, or evaluating AI tooling for your team, AI helpers can help.

With AI helpers installed, you can expect:

- More consistent use of PatternFly components and patterns.
- Faster prototyping and development cycles.
- Fewer common implementation mistakes.
- Built-in awareness of PatternFly coding standards, accessibility, and design tokens.

## What's available

The marketplace is organized into plugins, each focused on a different area of PatternFly development — from building and testing React components, to working with design tokens and accessibility, to reviewing Figma changes. New plugins are added regularly as the community contributes.

For the full, always-current list of available plugins, skills, and agents, see the [plugin catalog](https://github.com/patternfly/ai-helpers/blob/main/PLUGINS.md).

## Getting started

### Claude Code

```bash
# Add the marketplace
/plugin marketplace add patternfly/ai-helpers

# Install the plugins you need
/plugin install react@ai-helpers
```

After installation, the plugin's skills and knowledge are available in any project.

### Cursor

Cursor can discover plugins from `.cursor-plugin/` directories. If you also have Claude Code installed, Cursor may pick up installed plugins automatically via its third-party plugin settings. See the [AI helpers README](https://github.com/patternfly/ai-helpers#cursor) for details.

### PatternFly MCP server (recommended)

For the best experience, also set up the [PatternFly MCP server](https://github.com/patternfly/patternfly-mcp), which gives AI tools direct access to PatternFly component documentation, prop schemas, and design guidelines. Plugins work without it, but provide stronger results when it's available.

## Contributing

The AI helpers marketplace is open source and welcomes contributions from the community. Whether you want to add a new skill to an existing plugin, create an entirely new plugin, or improve the documentation that AI tools rely on, there's a place for your contribution.

To get started, check out the [contributing guide](https://github.com/patternfly/ai-helpers/blob/main/CONTRIBUTING.md) and the [step-by-step skill creation guide](https://github.com/patternfly/ai-helpers/blob/main/CONTRIBUTING-SKILLS.md).
