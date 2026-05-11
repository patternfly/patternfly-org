---
id: PatternFly CLI
title: PatternFly CLI
section: AI
---

The [PatternFly CLI](https://github.com/patternfly/patternfly-cli) is a command-line tool for scaffolding projects, performing code modifications, and running project-related tasks. It streamlines everyday development work and PatternFly upgrades, making it convenient and easy to work straight from the terminal. You can run it in the terminal on its own, or use it from an AI-enabled editor (such as [Cursor](https://www.cursor.com/)) so coding agents can rely on the same predictable commands for scaffolding, updates, and git workflows. The published package is [`@patternfly/patternfly-cli` on npm](https://www.npmjs.com/package/@patternfly/patternfly-cli).

The npm package installs two equivalent entry points: `patternfly-cli` and the shorter alias `pfcli`. The examples below use `patternfly-cli`; substitute `pfcli` if you prefer.

## What does the PatternFly CLI help with?

- **Project scaffolding:** Quickly set up new PatternFly based projects for development and prototyping via predefined templates.
- **Code modifications:** Automate repetitive code changes to help accelerate PatternFly version upgrades.
- **Task runner:** Execute project-related tasks efficiently, such as source code management and task running.


## How do I set up PatternFly CLI?

### Prerequisites
There are a few key prerequisites to meet before using PatternFly CLI. For macOS, WSL, and Linux, we recommend using [install script](#install-script-macos-and-linux) to address the following prerequisites (you might still need administrator access for system packages). For a Windows-based system, you will need to install the following items manually:

- **[Node.js](https://nodejs.org/)** (Supported versions: 20–24) and **[npm](https://www.npmjs.com/)**
- **[Corepack](https://nodejs.org/api/corepack.html)** (Included with Node.js and enabled via `corepack enable` after installing npm)
- **[GitHub CLI](https://cli.github.com/)** (`gh`)

## Installation

### Install script (macOS and Linux)

You can pipe the repository install script into `bash`. This installs Node.js with [nvm](https://github.com/nvm-sh/nvm) when `node` is not available, enables Corepack, installs GitHub CLI when it is missing, and installs the CLI globally from npm:

```sh
curl -fsSL https://raw.githubusercontent.com/patternfly/patternfly-cli/main/scripts/install.sh | bash
```

The script might prompt you to include `sudo` when your system package manager installs GitHub CLI.

### Windows

After installing the [prerequisites](#prerequisites) on your machine, install the published package globally:

```sh
npm install -g @patternfly/patternfly-cli
```

## How do I use PatternFly CLI?

After installation, you can verify the latest version of the CLI has been installed by running the following terminal command:

```sh
patternfly-cli --version
```

### Available CLI commands
Once the PatternFly CLI is installed, you can run the following commands via `patternfly-cli [command]`:
| Command | Usage |
| --- | --- |
| `create` | Create a new project from the available templates. |
| `list` | List all available templates (built-in and optional custom). |
| `update` | Update your project to a newer version. |
| `cli-upgrade` | Upgrade the globally installed CLI to the latest npm release. It runs `npm install -g @patternfly/patternfly-cli@latest`&mdash;use your package manager’s equivalent if you did not install with npm. |
| `init` | Initialize a git repository and optionally create a GitHub repository. |
| `save` | Commit and push changes to the current branch. |
| `load` | Pull the latest updates from GitHub. |
| `deploy` | Build and deploy your app to GitHub Pages. |

For the most up-to-date flags and behavior guidance, refer to [PatternFly CLI README](https://github.com/patternfly/patternfly-cli/blob/main/README.md) on GitHub.

### Custom templates

In addition to the built-in templates, you can add your own templates by passing a JSON file with `--template-file` (or `-t`). Custom templates are merged with the built-in list&mdash;if a custom template has the same `name` as a built-in template, the custom definition is used.

**Create a project based on custom templates:**

```sh
patternfly-cli create my-app --template-file ./my-templates.json
```

**List templates included in custom file:**

```sh
patternfly-cli list --template-file ./my-templates.json
```

**JSON format** (Array of template objects, shown in the same shape as the built-in templates):

```json
[
  {
    "name": "my-template",
    "description": "My custom project template",
    "repo": "https://github.com/org/repo.git",
    "options": ["--single-branch", "--branch", "main"],
    "packageManager": "npm"
  }
]
```

- **`name`** (required): Template identifier
- **`description`** (required): Short description shown in prompts and `list`
- **`repo`** (required): Git clone URL
- **`options`** (optional): Array of extra arguments for `git clone` (such as `["--single-branch", "--branch", "main"]`)
- **`packageManager`** (optional): `npm`, `yarn`, or `pnpm`; defaults to `npm` if omitted
