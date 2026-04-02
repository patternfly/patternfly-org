---
id: PatternFly CLI
title: PatternFly CLI
section: get-started
---

import './get-started.css';

The [PatternFly CLI](https://github.com/patternfly/patternfly-cli) is a command-line tool for scaffolding projects, performing code modifications, and running project-related tasks. It aims to streamline development workflows and improve productivity. The published package is [`@patternfly/patternfly-cli` on npm](https://www.npmjs.com/package/@patternfly/patternfly-cli).

## Features

- **Project scaffolding:** Quickly set up new PatternFly based projects for development, and prototyping. This is done using predefined templates.
- **Code modifications:** Automate repetitive code changes that helps users upgrade to the latest version of PatternFly.
- **Task runner:** Execute project-related tasks efficiently, such as source code management and task running.


## Prerequisites

Prerequistes can be found below. For macOS, WSL, and Linux it is recommended that you use [install script](#install-script-macos-and-linux), it covers the items below (you may still need administrator access for system packages). Window based system you will need to install the following yourself before using the CLI:

- **[Node.js and npm](https://nodejs.org/)** (supported versions **20–24**) — also see [npm](https://www.npmjs.com/).
- **[Corepack](https://nodejs.org/api/corepack.html)** — included with Node.js; enable with `corepack enable` after installing npm.
- **[GitHub CLI](https://cli.github.com/)** (`gh`)

## Installation

### Install script (macOS and Linux)

You can pipe the repository install script into `bash`. It installs Node.js with [nvm](https://github.com/nvm-sh/nvm) when `node` is not available, enables Corepack, installs GitHub CLI when it is missing, then installs the CLI globally from npm:

```sh
curl -fsSL https://raw.githubusercontent.com/patternfly/patternfly-cli/main/scripts/install.sh | bash
```

The script may prompt for `sudo` when your system package manager installs GitHub CLI.

### Windows Install

 After installing the [prerequisites](#prerequisites) on your machine, install the published package globally:

```sh
npm install -g @patternfly/patternfly-cli
```

## Uninstall

### Uninstall script (macOS and Linux)

If you ever wish to uninstall PatternFly Cli, you can do the following. Pipe the repository uninstall script into `bash`. It removes the globally installed `@patternfly/patternfly-cli` package with npm. It does **not** remove Node.js, nvm, Corepack, or GitHub CLI.

```sh
curl -fsSL https://raw.githubusercontent.com/patternfly/patternfly-cli/main/scripts/uninstall.sh | bash
```

Swap `main` for another branch or tag if you need a specific revision. To save the script and inspect it before running:

```sh
curl -fsSL https://raw.githubusercontent.com/patternfly/patternfly-cli/main/scripts/uninstall.sh -o uninstall-patternfly-cli.sh
bash uninstall-patternfly-cli.sh
```

### Windows npm package uninstall

If you installed the CLI on Windows, you can remove the CLI with:

```sh
npm uninstall -g @patternfly/patternfly-cli
```

## Usage

After installation, you can verify the latest version of the CLI has been installed by running the following in the termianl:

```sh
patternfly-cli -v
```

### Available CLI commands

| Command | Description |
| --- | --- |
| `create` | Create a new project from the available templates. |
| `list` | List all available templates (built-in and optional custom). |
| `update` | Update your project to a newer version. |
| `cli-upgrade` | Upgrade the globally installed CLI to the latest npm release. It runs `npm install -g @patternfly/patternfly-cli@latest`; use your package manager’s equivalent if you did not install with npm. |
| `init` | Initialize a git repository and optionally create a GitHub repository. |
| `save` | Commit and push changes to the current branch. |
| `load` | Pull the latest updates from GitHub. |
| `deploy` | Build and deploy your app to GitHub Pages. |

For the most up-to-date flags and behavior, see the [PatternFly CLI README](https://github.com/patternfly/patternfly-cli/blob/main/README.md) on GitHub.

## Custom templates

You can add your own templates in addition to the built-in ones by passing a JSON file with `--template-file` (or `-t`). Custom templates are merged with the built-in list; if a custom template has the same `name` as a built-in one, the custom definition is used.

**Create with custom templates:**

```sh
patternfly-cli create my-app --template-file ./my-templates.json
```

**List templates including custom file:**

```sh
patternfly-cli list --template-file ./my-templates.json
```

**JSON format** (array of template objects, same shape as the built-in templates):

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

- **`name`** (required): Template identifier.
- **`description`** (required): Short description shown in prompts and `list`.
- **`repo`** (required): Git clone URL.
- **`options`** (optional): Array of extra arguments for `git clone` (e.g. `["--single-branch", "--branch", "main"]`).
- **`packageManager`** (optional): `npm`, `yarn`, or `pnpm`; defaults to `npm` if omitted.

## Source and releases

The CLI is developed in the open at [github.com/patternfly/patternfly-cli](https://github.com/patternfly/patternfly-cli). Report issues or contribute there; release notes and tags are published on the repository’s [Releases](https://github.com/patternfly/patternfly-cli/releases) page.
