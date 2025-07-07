---
id: Rapid prototyping
section: PatternFly-AI
source: enhancing-existing-projects
sortValue: 2
---

# Enhancing existing projects

This guide provides instructions for integrating AI-assisted PatternFly development tools into your existing codebase.

Before you get started, review [best practices for AI-assisted prototyping](/patternfly-ai/rapid-prototyping/rapid-prototyping#best-practices-for-ai-assisted-prototyping) and learn about [vibe coding principles](/patternfly-ai/rapid-prototyping/rapid-prototyping#what-is-vibe-coding) for effective AI-assisted development.

If you need to start a new project, follow our guidelines for [starting a new prototype](/patternfly-ai/rapid-prototyping/new-prototypes).

## Why enhance existing projects?

If you have an existing codebase that you'd like to enhance with AI-driven PatternFly development, you can integrate the **patternfly-ai-coding tool** directly into your project. This tool can be pulled into any existing codebase to:

- Improve future AI-driven development sessions.
- Provide AI tools with PatternFly-specific context and best practices.
- Enable more accurate code generation for PatternFly components.
- Reduce common implementation mistakes.

## The patternfly-ai-coding tool

The patternfly-ai-coding tool is a collection of AI-friendly documentation files designed to guide Large Language Models and AI development assistants toward successful PatternFly implementation.

Once you've integrated this tool, you'll notice a variety of benefits for AI-assisted rapid prototyping, including:
- More accurate PatternFly component suggestions.
- Better adherence to PatternFly design patterns.
- Reduced need for manual corrections.
- Improved consistency across your codebase.
- Tools that evolve to better cater to your specific project needs.

### What it includes

- **AI-friendly knowledge base**: Current PatternFly documentation formatted for optimal AI consumption.
- **Relevant examples**: Code samples and implementation patterns.
- **Common pitfalls**: Documentation of frequent mistakes and how to avoid them.
- **Best practices**: Proven approaches for PatternFly development.
- **Cross-linked files**: Interconnected documentation that helps AI tools quickly find relevant information.
- **Cursor rules**: Special configuration files that flag important PatternFly context for the Cursor AI editor.

### How it works

1. The tool provides static files (primarily markdown) that contain comprehensive PatternFly guidance.
2. These files are loaded into a development project alongside your code.
3. AI development tools can reference this context when generating PatternFly components.
4. The result is more accurate, PatternFly-compliant code generation.

## Set up patternfly-ai-coding

1. **Download the patternfly-ai-coding tool** from the repository.
2. **Copy the tool files** into your existing project structure.
3. **Configure your AI development environment** to recognize the new context files.
4. **Test the integration** by generating some PatternFly components.
5. **Customize as needed** for your specific project requirements.