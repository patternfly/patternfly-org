---
id: CLI handbook
title: Command-line interface handbook
source: overview
section: developer-resources
---

# Designing for command-line interfaces

Our CLI handbook offers best practices for designing consistent, usable, and developer-friendly command-line interfaces (CLIs). It supports developers building CLI tools and designers collaborating on technical products. These guidelines are particularly helpful for environments where CLI tools are the primary or critical part of the user experience, emphasizing clarity, structure, and user-centered design across command syntax, help documentation, error messaging, and interactive behaviors. 

## Accessibility considerations

While CLIs don't have visual UI elements, many [accessibility principles](/accessibility/about-accessibility/) still apply.

Accessibility matters in CLI design just as much as it does in graphical interfaces. Clear, inclusive output ensures all users can successfully interact with the tool&mdash;including those using screen readers or alternative input devices. 

To ensure a CLI's accessibility, adhere to the following additional color, content, and testing practices.

### Color 

<div class="ws-content-table">

| **Don't** | **Do** |
| --- | --- |
| Don’t convey meaning through color alone. | Do use text alongside color-based cues. For example, “Success” and “Error” labels. |
| | Do use text alongside red/green indicators, to make the information accessible to colorblind users. |

</div>

### Content

<div class="ws-content-table">

| **Don't** | **Do** |
| --- | --- |
| Don't use vague terms like “it failed”.| Do be direct and transparent with descriptive, specific language. |
| Don’t assume users can infer meaning from context alone.| Do use descriptive text for prompts and feedback. | 
| Don't use prompt flows that require visual scanning without clear text guidance. | Do ensure all commands and prompts are keyboard-accessible and non-interactive-safe. <br/><br/> Do use flags like `--non-interactive` for scripting or assistive tech users. |
| Don't use overly styled ASCII tables, long walls of text, or dynamic animations. | Do use plain, structured output that screen readers can parse. <br/><br/> Do use clean, labeled output with headings, bullet points, or clear separators. |
</div>

### Testing 

<div class="ws-content-table">

| **Don't** | **Do** |
| --- | --- |
| Don't assume that your design is accessible. | Do test with screen readers and colorblind simulators to reveal subtle issues in contrast, clarity, and verbosity. |
</div>

### Example

Accessible:

```plaintext
✅ Deployment successful.
Run `tool status` to check environment health.
```

Less accessible:

```plaintext
✅ You did it!
```

## CLI inputs

To write effectively for CLIs, it is important to understand the different elements of CLI inputs: 
1. **[Command name:](#command-names)** Identifies the action a command will perform and the subject that the action applies to.
1. **[Arguments:](#arguments)** Additional details used alongside the command name, which users select to specify the way that a command is applied.
1. **[Flags:](#flags)** Named parameters that modify the behavior of the command.

### Commands

A command describes the action triggered by the CLI.

Command names should consistently use a verb-noun structure:
- **Verb:** The action performed.
- **Noun:** The resource or object affected.

This structure mirrors how people think about tasks, making commands more intuitive and discoverable. The verb-noun format also aligns with widely-used CLIs like `git`, `kubectl`, and `docker`. In contrast, noun-verb structures can be harder to parse and don't scale well.

#### Example

In the following code block, `create project`, `delete environment`, and `scale deployment` are all commands.

```bash
tool create project
tool delete environment
tool scale deployment
```

### Arguments

Arguments are non-flag values following a command, typically unique identifiers like file paths or project names.

A command requires an argument in order to execute. While multiple arguments can be used, their order matters. Fewer arguments are preferable to support easier recall and avoid confusion.

#### Example

In the following code block, `delete project` and `deploy environment` are commands, while `my-app` and `production` are arguments that represent the object being acted on.

```bash
tool delete project my-app
tool deploy environment production
```

### Flags

Flags are named parameters, prefixed with 2 hyphens (--), that modify the behavior of a command. They allow users to specify command modifiers, options, or other non-essential configuration. Flags can be added in any order.

#### Example

In the following code block, `--env`, `--force`, `--role`, and `--email` are flags.

```bash
tool deploy --env staging --force
tool create user --role admin --email user@Examples:.com
```

#### Long-form and short-form 

There are 2 forms for flags: 

1. **Long-form flags:** More descriptive and clear.  

  ```bash
  tool deploy app --enable-autoscaling
  tool configure user --assign-admin-privileges
  tool update cluster --set-min-replicas 3
  ```
1. **Short-form flags:** More concise, with 1-2 letters. 
  
    - Reserve for frequently-used options. This benefits experienced users who prefer speed and situations with limited space.
    - When possible, pair with long-form equivalents for better clarity and discoverability.

  ```bash
  tool --help          # Long-form
  tool -h              # Short-form (Help)

  tool --verbose       # Long-form
  tool -v              # Short-form (Verbose)

  tool --config path/to/file
  tool -c path/to/file # Short-form (Config file path)
  ```

#### Types of flags

1. **Boolean flags:** Represent on/off or true/false options. 

    - Set a sensible default.
    - Don’t require explicit values unless necessary. For example, allow `--force` rather than `--force=true`.

    ```bash
    tool deploy --dry-run         # Runs without executing
    tool delete --force           # Skips confirmation prompt
    ```

2. **Help flags:** Provide help documentation that explains a command's purpose, its arguments/flags, and usage examples.

    - Offer both long `--help`  and short `-h` options.