---
id: CLI handbook
title: Command-line interface handbook
source: writing-guidelines
section: developer-resources
---

## CLI outputs

CLI output messages typically fall into one of 3 categories:

| Category | Usage | Example |
| --- | --- | --- |
| Success | Completed actions. | `✅ Dataset uploaded successfully.` |
| Warning | Completed actions that require review. |  `⚠️ Model trained, but validation accuracy is low.` |
| Error | Failed actions. |  `❌ Error: Cannot connect to remote service. Check your network connection or try again with --offline mode.` |

### Success messages

To build trust, reinforce that a command worked as intended, and guide users toward their next step, clearly communicate successful actions.

#### Example

```plaintext
✅ Project "my-app" deployed successfully.

Next steps:
- Run `tool status my-app` to check deployment health
- Run `tool logs my-app` to view runtime output
```

### Error messages

When errors occur, explain what happened, why, and how to fix it.

Expanding on our [UI error writing guidelines](/ux-writing/error-messages), CLI errors should:
- Use plain language, avoiding internal jargon.
- Offer suggestions and actionable next steps.
- Conclude with the most important information. This is the opposite of content design for products with GUIs.
- By default, provide a clean message. Full stack traces or internal logs should only be exposed via debug flags (like `--debug` or `--trace`).

#### Examples

1. Generic failure with correction:
    ```plaintext
    ❌ Error: Cannot connect to remote service.
    Check your network connection or try again with `--offline` mode.
    ```

1. File permission issue:
    ```plaintext
    ❌ Error: Unable to write to file.txt
    You may need to change the file’s permissions or run the command with elevated privileges.
    ```

1. Command syntax error:
    ```plaintext
    ❌ Error: Unrecognized flag --versoin
    Did you mean: --version ?
    ```

### Output patterns

#### Formatting 

To ensure that output is readable: 
1. Structure large outputs:
    - Use spacing, dividers, indentation, or table/column formats to break up large blocks and avoid unstructured text. 
    - Ensure consistent headers or labels for repeated information (like results or summaries).
2. Manage lists effectively:
    - Structure lists for easy scanning&mdash;including software versions, resources, or deployment options.
    - Display the most relevant or default item first (like the current version) and clearly label it with "Yes" or "*".
    - [Paginate](#pagination) lists that exceed 5–7 items.

#### Version listing

When listing version information: 
- Arrange versions top-down from newest to oldest.
- Clearly mark the current default.
- Display upgrade paths beside each item.

##### Example

```plaintext
Available Versions
-
VERSION     DEFAULT    AVAILABLE UPGRADES
1.4.3         Yes       1.4.4, 1.4.5, 1.5.0
1.3.9                   1.4.0, 1.4.1
1.3.8                   1.3.9
```

#### Pagination

Paginate long lists into 5–7 item pages, prompting users to continue with `--more`, `--page`, by pressing the **Enter** key.

##### Example

```bash
tool versions list --limit 5
tool resources list --page 2
```

#### Sorting and filtering

To help users make sense of large CLI outputs, provide sorting and filtering options:
Default to sorting by relevance or recency.- 
- Offer flags like `--sort`, `--filter`, or `--status` for flexible control.
- Ensure the default view serves most users without requiring flags for basic usability.

## Help documentation

CLIs must provide accessible in-application help. To ensure its relevance, write from a new user's perspective: would they immediately know what to do?

Effective help documentation is:
- Brief yet meaningful.
- Clear, avoiding unexplained jargon or acronyms.
- Consistent across all commands.
- Referenced in [interactive prompts](#interactive-mode) (via `--help`) if supported.

### Writing help output

Structure help output consistently with these elements:
- **Description:** Plain language explanation of the command’s function.
- **Usage:** Command syntax, including required arguments and flags.
- **Examples:** At least 1 clear, real-world usage scenario.
- **Flags:** List of available options with brief, actionable descriptions.
- **Documentation link (optional):** For further details.

#### Example 

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

### Documenting flags
Well-documented flags improve discoverability, reduce user error, and make it easier for contributors and users to understand the CLI’s capabilities.

Document flags clearly in:
- A command's `--help` output.
- Official CLI documentation or reference guides.
- Interactive prompt hints (if applicable).

#### Best practices
- Use descriptive names that clearly indicate the flag’s purpose. Avoid ambiguous names like `--flag1`.
- Document the input type (such as string, boolean, or int).
- Show any default value.
- Mention if the flag is optional or required.

Flag documentation should generally follow this format:

```plaintext
--flag-name <type>     Description of what this flag does (default: value)
```

##### Example

```plaintext
Flags:
  -n, --name string             Name of the project to create
  -e, --env string              Target environment (e.g., staging, prod)
  -f, --force                   Skip confirmation prompts (default: false)
  -o, --output string           Output format: json, yaml, or table (default: table)
  -h, --help                    Show help for this command
```

For boolean flags that act as switches (true/false):
- Typically default to `false`.
- Don't require an explicit value (for example, use `--force`, not `--force=true`).
- Clearly state what enabling the flag does.
- When possible, explain the flag's effect or common use cases:

    ```plaintext
    --dry-run     Simulate the command without making changes. Useful for validation or preview.
    --watch       Continuously stream status updates until completion.
    ```

## Interactive mode

Interactive mode guides users step-by-step with prompts, commonly for setup wizards, configuration flows, or complex inputs not suited for single commands.

### When to use interactive mode

User interactive mode for:
- Setup or initialization wizards.
- Optional configuration flows.
- Profile or environment selection.

### When not to use interactive mode

Do not use interactive mode for: 
- Simple one-off tasks.
- Repetitive actions, such as run, delete, status.
- Automated commands, such as in CI/CD pipelines.
- Essential inputs that could be passed as flags.

### Writing interactive prompts 

When designing interactive prompts, prioritize flags for essential inputs and use prompts primarily for optional choices or guided multi-step processes. 

Key considerations include:

#### Default values
Choose defaults based on common use cases or sensible fallbacks.

- Make defaults obvious&mdash;don't hide them in help text or assume user knowledge.
- Visually indicate defaults clearly (such as `[default]`, `(default)` or `(Y/n)`/`(y/N)`).
- If using a list, ensure a first-item default is genuinely the most common choice.
- Explain that pressing **Enter** accepts the default (if the input is left blank).
- Confirm (log or echo) the selected value after the prompt, even if it was the default.

#### Clarity

Ensure prompts are as clear as possible.

- Phrase prompts as questions.
    - For example: "Enable autoscaling? (Y/n)"
- Clearly state if responding to a prompt is optional.
- Offer inline help where useful.
    - For example: "Output directory [? for help]"
- Avoid chaining an excessive number of prompts.
- Include optional next steps when appropriate (like view status, open logs). 
- Avoid silent success unless explicitly requested (like in `--quiet` mode).

#### User control

Empower users with control over their CLI experience.

- Consider using a `--guided` flag to let users intentionally trigger multi-step interactive flows.
- Let users bypass prompts with a `--non-interactive` or `--yes` flag.
- Allow users to cancel or exit flows early with **Ctrl+C** or a similar command.

### Example 

```plaintext
Welcome! Let's configure your project.

Project name: my-app
Language (js, py, go) [py]: 
Use Docker? (y/N): y

✅ Project "my-app" configured successfully.
```

```plaintext
Choose deployment region:
[1] US East (N. Virginia)
[2] US West (Oregon) (default)
[3] Europe (Frankfurt)

Enable telemetry? (y/N)
```

```plaintext
Select output format (default = 'json') [Use arrows to move, type to filter, ? for help]:
```




