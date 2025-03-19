# @patternfly/documentation-framework

## The PatternFly documentation framework lets you develop component examples in markdown format, so that they can be added to [patternfly.org](https://www.patternfly.org/).

## Install

We publish this theme [on npm.](https://www.npmjs.com/package/@patternfly/documentation-framework) Install it as a devDependency with your package manager.

1. @patternfly/documentation-framework

    ```sh
    npm i --save-dev @patternfly/documentation-framework
    ```

    or

    ```sh
    pnpm add --save-dev @patternfly/documentation-framework
    ```

2. Provide or install the following either as dependencies if you want to use them in your own project, or as devDependencies:
    ```json
    "@patternfly/patternfly": "6.0.0-alpha.205",
    "@patternfly/react-core": "6.0.0-alpha.94",
    "@patternfly/react-table": "6.0.0-alpha.95",
    "@patternfly/react-code-editor": "6.0.0-alpha.94",
    ```
    ```sh
    pnpm add --save-dev @patternfly/patternfly @patternfly/react-core @patternfly/react-table @patternfly/react-code-editor
    ```

## First time setup

### Init documentation project

To get started, you can scaffold out a sample extension docs setup:

```sh
npx pf-docs-framework init --name "My extension"
```

If you also want to add relevant script targets to package.json, pass in `--scripts` as well:

```sh
npx pf-docs-framework init --name "My extension" --scripts
```

## Usage

For all CLI options, run:

```sh
npx pf-docs-framework --help
```

For individual CLI commands, you can also display more information by running:

```sh
npx pf-docs-framework <COMMAND> --help
```

### Develop docs

```sh
npx pf-docs-framework start
```

### Build docs

```sh
npx pf-docs-framework build all --output public
```

> [!NOTE]
> If you have `sideEffects: false` in your package.json, that will prevent the CSS from loading in the documentation production build. Set it to true or remove it to enable the CSS from being loaded.

### Publish docs to patternfly.org

  1. Include the `patternfly-docs/content` and `patternfly-docs/generated` folders as part of your npm published module

  2. Create a PR at [patternfly-org](https://github.com/patternfly/patternfly-org) to bundle in the package's examples so that they're part of the patternfly.org documentation.