---
id: CLI Guidelines
title: Command Line Interface Guidelines
section: developer-resources
---

## Overview

This document provides best practices and UX guidelines for designing consistent, usable, and developer-friendly command-line interfaces (CLIs). These principles are intended to support both developers building CLI tooling and UX designers collaborating on technical products.

These guidelines emphasize clarity, structure, and user-centered design across command syntax, help documentation, error messaging, and interactive behaviors. While they are applicable to a wide range of use cases, they are particularly helpful for teams working in environments where CLI tools serve as the primary or critical part of the user experience.

## Accessibility considerations

Accessibility matters in CLI design just as much as it does in graphical interfaces. Clear, inclusive output ensures all users — including those using screen readers or alternative input devices — can successfully interact with the tool.

While CLIs don't have visual UI elements, many accessibility principles still apply.

### Best Practices

- Don’t rely on **color alone** to convey meaning  
  - Use text alongside color-based cues (e.g., “Success”, “Error” labels)  
  - Avoid red/green-only indicators that may be difficult for colorblind users

- Use **descriptive text** for prompts and feedback  
  - Don’t assume users can infer meaning from context alone  
  - Avoid vague terms like “it failed” — be specific

- Ensure all commands and prompts are **keyboard-accessible and non-interactive-safe**  
  - Use flags like `--non-interactive` for scripting or assistive tech users  
  - Avoid prompt flows that require visual scanning without clear text guidance

- Use **plain, structured output** that screen readers can parse  
  - Avoid overly styled ASCII tables, long walls of text, or dynamic animations  
  - Prefer clean, labeled output with headings, bullet points, or clear separators

### Examples:

**Good:**
```plaintext
✅ Deployment successful.
Run `tool status` to check environment health.
```

**Less accessible**
```plaintext
✅ You did it!
```
**Tip:** Test with screen readers and colorblind simulators
Even though CLIs aren’t GUIs, testing your output through accessibility tools can reveal subtle issues in contrast, clarity, and verbosity — all of which can affect user experience.

## Naming conventions

Command names should follow a clear and consistent **verb-noun** structure. This convention improves readability, reinforces expected behavior, and aligns with common patterns seen in widely-used CLIs like `git`, `kubectl`, and `docker`.

- **Verb**: Describes the action the command performs.
- **Noun**: Identifies the resource or object the action applies to.

### Why verb-noun?

Verb-noun commands mirror how people think about tasks: _"create a project"_, _"delete a user"_, _"list models"_. This makes the command more intuitive and easier to discover or guess. In contrast, **noun-verb** structures (e.g., `project create`) can be harder to parse and don't scale well as command options grow.

### Examples:

```bash
tool create project
tool delete environment
tool scale deployment
```

## Inputs: Flags vs Arguments
_choosing between positional arguments vs flags_

Command-line inputs come in two main forms:

- **Arguments** – Positional inputs that are required and order-dependent
- **Flags** – Named inputs (using `-` or `--`) that modify behavior or provide optional parameters

### Arguments

Use arguments for required, primary inputs that define the core action. Because arguments are positional, their order matters and should be kept minimal to avoid confusion.

**Examples:**
- my-app and production are arguments
- They represent the main object being acted on

```bash
tool delete project my-app
tool deploy environment production
```

### Flags
Use flags for optional or named inputs, especially when:
- Order should not matter
- The input is not required
- It's important to clarify intent with a label

**Examples:**
```bash
tool deploy --env staging --force
tool create user --role admin --email user@Examples:.com
```
These flags:
- Can appear in any order
- Make the command easier to understand and script
- Support long-form and short-form (--env / -e)

### Guidelines
- ✅ Use arguments for required, unique inputs (e.g., a file path, project name)
- ✅ Use flags for modifiers, options, or non-essential configuration
- ❌ Don’t use too many arguments — it becomes hard to parse and remember
- ✅ Document expected input types (e.g., string, int, boolean) for all flags

## Flags and options
_when and why to use long/short/boolean_

Flags are named parameters that modify the behavior of a command. They provide flexibility, improve clarity, and allow users to specify input in a structured way.

There are two main types of flags:
- **Long-form flags**: More descriptive, ideal for clarity and scripting.
- **Short-form flags**: Concise, best for highly-used commands or power users.

### Long-Form Flags

Long-form flags use two hyphens and a descriptive name. They should be:
- Clear and self-explanatory
- Easy to read and remember
- Consistent across commands

**Examples:**

```bash
tool deploy app --enable-autoscaling
tool configure user --assign-admin-privileges
tool update cluster --set-min-replicas 3
```

### Short-Form Flags

Short-form flags use a single hyphen followed by one or two letters. They’re useful for:
- Frequently used options
- Experienced users who prefer speed
- Situations where space or typing efficiency matters

When possible, pair short-form flags with long-form equivalents for clarity and discoverability.

**Examples:**

```bash
tool --help          # Long-form
tool -h              # Short-form (Help)

tool --verbose       # Long-form
tool -v              # Short-form (Verbose)

tool --config path/to/file
tool -c path/to/file # Short-form (Config file path)
```

### Boolean Flags
Boolean flags represent on/off or true/false options. If possible:
- Set a sensible default (e.g., false)
- Don’t require users to pass an explicit value unless necessary

**Examples:**
```bash
tool deploy --dry-run         # Runs without executing
tool delete --force           # Skips confirmation prompt
```

## Help flags and documentation

Every CLI should provide structured, easy-to-access help output that explains:
- What a command does
- What arguments or flags it accepts
- How to use it, with clear Examples:

### Standard Help Flags

Provide both a long and short help flag:
- `--help` for discoverability and scripting
- `-h` for quick access

### Help Output Structure
Help output should be consistent across commands and follow a clear structure:

1. Description – What the command does in plain language
2. Usage – Syntax with required arguments and flags
3. Examples: – At least one clear, real-world usage Examples:
4. Flags – A list of available options with brief, actionable descriptions
5. Documentation Link (optional) – If more detail exists elsewhere

**Examples: Help Output**
```bash
Usage:
  tool deploy <project_name> [flags]

Description:
  Deploys the specified project to your active environment.

Examples:
  tool deploy my-app --env staging

Flags:
  -e, --env string        Environment to deploy to
  -f, --force             Force deployment even if conflicts exist
  -h, --help              Show help for the deploy command

For more information, visit: https://Examples:.com/docs/deploy
```

### Best Practices
- Keep help text brief but meaningful
- Avoid internal jargon and acronyms without explanation
- Ensure consistency across all commands
- If your CLI supports interactive prompts, reference --help in the prompt (e.g., Type ? or --help for more info)


## Documenting flags
_how to write about flags in --help and docs_

Well-documented flags improve discoverability, reduce user error, and make it easier for contributors and users alike to understand the CLI’s capabilities.

Clear flag documentation should be included in:
- `--help` output for the command
- Official CLI documentation or reference guides
- Interactive prompt hints (if applicable)

### Best Practices

- Use **descriptive names** that clearly indicate the flag’s purpose  
- Document the **flag’s input type** (string, boolean, int, etc.)  
- Show the **default value** if one exists  
- Mention whether the flag is optional or required  
- Avoid vague or ambiguous flag names (e.g., `--flag1`, `--optionX`)

### Recommended Flag Format

In help text and documentation, each flag should show:

```plaintext
--flag-name <type>     Description of what this flag does (default: value)
```

**Examples: Flags Documentation:**
```plaintext
Flags:
  -n, --name string             Name of the project to create
  -e, --env string              Target environment (e.g., staging, prod)
  -f, --force                   Skip confirmation prompts (default: false)
  -o, --output string           Output format: json, yaml, or table (default: table)
  -h, --help                    Show help for this command
```

### Boolean Flags
For flags that act as switches (true/false):
- Default to false unless enabled
- Do not require an explicit value (i.e., use --force, not --force=true)
- Clearly state what enabling the flag does

**Tip:** Include usage context
When possible, explain how the flag affects the command’s behavior or when it’s most useful:

```plaintext
--dry-run     Simulate the command without making changes. Useful for validation or preview.
--watch       Continuously stream status updates until completion.
```
By documenting flags thoroughly and consistently, you create a better experience for users and contributors alike — reducing friction, guesswork, and onboarding time.

**Tip:** Think like a user
- Ask: “If I saw this message for the first time, would I know what to do?”
- Avoid hidden meanings, technical slang, or filler words
- Be intentional with every line of output — it’s the primary UX for many CLI tools

## Interactive prompts

Interactive prompts guide users through a process step-by-step. They’re commonly used for setup wizards, configuration flows, or when input is too complex to pass in a single command.

When designed well, prompts can reduce friction and help users make informed decisions — especially during onboarding or first use. But when overused or inconsistent, they can frustrate users or become blockers in automated workflows.

### Best Practices

- Use prompts for guided setup, not quick or repeatable tasks
- Let users bypass prompts with a `--non-interactive` or `--yes` flag
- Clearly show default values and how to accept them
- Offer inline help (e.g., `? for help`)
- Don’t require prompts for essential inputs that could be passed as flags

### Examples: Prompt Flow

```plaintext
Welcome! Let's configure your project.

Project name: my-app
Language (js, py, go) [py]: 
Use Docker? (y/N): y

✅ Project "my-app" configured successfully.
```

### Prompt design tips
- Use question-style phrasing
Good: Enable autoscaling? (Y/n)
Avoid: Autoscaling enabled:
- Offer help inline
Output directory [? for help]:
- Be explicit about defaults
Framework (React/Vue) [React]: clearly shows what happens on Enter
- Avoid chaining too many prompts
Consider using a --guided flag to trigger multi-step flows intentionally

### Exit and Escape options
Always allow users to:
- Cancel with Ctrl+C
- Exit early from multi-step flows
= Provide equivalent flags to bypass promots

```bash
tool init --name my-app --language js --use-docker
```

### When to use interactive mode
- Recommended:
-- Setup or initialization wizards
-- Optional configuration flows
-- Profile or environment selection

- Avoid:
-- Simple one-off tasks
-- Repetitive actions (e.g., run, delete, status)
-- Commands that will be run in automation, CI, or pipelines

## Handling default values in prompts

When users are presented with a list of options in an interactive prompt, it’s important to clearly indicate which choice will be selected by default — especially if the user simply presses Enter.

Default values provide helpful guidance, but unclear or unintentional defaults can cause confusion, errors, or misconfiguration.

### Best Practices

- Always indicate the default value in a clear, visual way
- Choose defaults based on common use cases or sensible fallbacks
- Avoid making the **first item** the default unless it is truly the most likely choice
- Don’t hide defaults in help text or assume the user knows them

### Ways to Display Defaults

Use a consistent format to indicate which option will be used by default:

- Brackets: `[default]`
- Parentheses: `(default)`
- Yes/No conventions: `(Y/n)` or `(y/N)` depending on which is default

**Examples:**

```plaintext
Choose deployment region:
[1] US East (N. Virginia)
[2] US West (Oregon) (default)
[3] Europe (Frankfurt)

Enable telemetry? (y/N)
```

### Optional vs. Default Inputs
Clarify whether a prompt is:
- Optional: User can skip it entirely
- Has a Default: Will proceed with a pre-set value if left blank
*Tip*: Use inline notes to explain default behavior, especially in longer flows.

```plaintext
Select output format (default = 'json') [Use arrows to move, type to filter, ? for help]:
```

### Implementation Tips
- Inform users that pressing Enter will accept the default
- If using interactive libraries, make sure default selections are pre-highlighted or noted in the prompt
- Log or echo the selected value for confirmation (even if it was a default)

**Examples: Output:**

```plaintext
OIDC Configuration ID (default = 'abc123xyz'): 
✅ Using default: abc123xyz
```

By handling defaults clearly and consistently, you reduce friction, increase trust, and create a better user experience across interactive and scripted workflows.


## Error messaging and corrections

When something goes wrong, the CLI should help users understand:
- What happened
- Why it happened
- How to fix it

Error messages are a core part of the user experience. They should be written in plain language, not internal jargon, and provide actionable next steps.

### Best Practices

- ✅ Make error messages human-readable  
- ❌ Avoid stack traces unless a debug flag is enabled  
- ✅ Place the most important information at the end (where scanning starts)  
- ✅ Suggest solutions whenever possible

### Examples:

**Generic failure with correction:**

```plaintext
❌ Error: Cannot connect to remote service.
Check your network connection or try again with `--offline` mode.
```

**File permission issue:**
```plaintext
❌ Error: Unable to write to file.txt
You may need to change the file’s permissions or run the command with elevated privileges.
```

**Command syntax error**
```plaintext
❌ Error: Unrecognized flag --versoin
Did you mean: --version ?
```

### Auto-correction and suggestions
Where appropriate, CLIs may offer suggestions or corrections for common typos:

```plaintext
❌ Error: Unknown command “initaite”
Did you mean: “initiate”?
```

### Debugging information
For unexpected or low-level errors:
- Provide a clean message by default
- Use --debug or --trace flags to expose full stack traces or internal logs

```plaintext
❌ Unexpected error: Operation timed out.
Run with --debug for more details.
```

## Feedback and output formatting

CLIs should clearly communicate when an action completes successfully. This builds trust, reinforces that a command worked as intended, and helps guide users toward their next step.

### Best Practices

- ✅ Confirm successful actions with a short, clear message  
- ✅ Use consistent formatting, symbols, or icons for different message types  
- ✅ Include optional next steps when appropriate (e.g., view status, open logs)  
- ❌ Avoid silent success unless explicitly requested (e.g., in `--quiet` mode)

### Message Types and Symbols

- **Success**: Action completed  
  `✅ Dataset uploaded successfully.`

- **Warning**: Action completed but with something to review  
  `⚠️ Model trained, but validation accuracy is low.`

- ❌ **Error**: Something failed (covered in previous section)

### Examples: Output Patterns

```plaintext
✅ Project "my-app" deployed successfully.

Next steps:
- Run `tool status my-app` to check deployment health
- Run `tool logs my-app` to view runtime output
```

### Structuring output for readability
- Use spacing, dividers, or indentation to break up large blocks of output.
- Use consistent headers or labels for repeated outputs (e.g., listing results or summaries).

```plaintext
Results:

✓ 12 files processed
✓ 2 files skipped (already up to date)
✓ 1 warning: Unused flag --optimize
```

## Version listing and pagination

When your CLI displays lists of items — such as software versions, available resources, or deployment options — it should be structured for easy scanning and include guidance when the list becomes long.

Pagination and sensible ordering improve readability and reduce cognitive overload, especially when the output may exceed the visible terminal window.

### Best Practices

- **Show the most relevant or default item first** (e.g., the currently installed version)
- **Clearly label the default or active item** (e.g., with a "Yes" or "*")
- **Paginate output when the list exceeds 5–7 items**
- **Use table formatting or columns for consistency**
- Avoid dumping unstructured text or long, scrollable blobs

### Examples:: Version Listing Output

```plaintext
Available Versions
-
VERSION     DEFAULT    AVAILABLE UPGRADES
1.4.3         Yes       1.4.4, 1.4.5, 1.5.0
1.3.9                   1.4.0, 1.4.1
1.3.8                   1.3.9
```
- Versions are ordered top-down from newest to oldest
- The current default is clearly marked
- Upgrade paths are shown next to each item

### Pagination tips
For long lists:
- Break into pages of 5–7 items at a time
- Prompt the user with --more, --page, or allow Enter to continue

**Examples:**
```bash
tool versions list --limit 5
tool resources list --page 2
```

### Sorting and Filtering
- Default sort should be by relevance or recency (e.g., newest version first)
- Offer flags like --sort, --filter, or --status for flexible output
- Make sure the default view meets the needs of most users — avoid requiring flags to make output usable


## Final thoughts

These CLI UX guidelines are intended to create a more consistent, thoughtful experience for users — whether they’re interacting through interactive prompts, automation scripts, or help commands.

As command-line tools continue to play a growing role in infrastructure, AI, and automation workflows, applying good design practices is more important than ever.

This document is a starting point. Contributions and improvements are welcome as CLI patterns evolve and as we learn more from user feedback and real-world use.

Together, we can build tooling that’s not only powerful — but intuitive, inclusive, and a pleasure to use.
