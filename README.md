# patternfly-org

The PatternFly Org is the source for the official documentation for PatternFly.

## Development

Development setup requires PNPM. If you do not already have PNPM installed on your system, see https://pnpm.io/installation#using-corepack

A Node version 22 or greater is also required.

### Live Reload Server

#### New server

You can install the NPM dependencies with:

```sh
pnpm install
```

A local development server at http://localhost:8003 can be started with:

```sh
pnpm start
```

### Build

The site can be built with:

```sh
pnpm build
```

The static assets get copied to build/patternfly-org.

### Deploy

When you submit a PR, previews should be automatically generated for you and uploaded as PR comments. This takes between 5-10 minutes.

When the PR is merged to main, the site is first deployed to a [staging S3 bucket.](https://staging.patternfly.org)

When PatternFly does a release (currently every 3 weeks) this bucket is copied to https://patternfly.org.

### Update screenshots
To update the screenshots (these are the images that you click on to see a full-page demo):

- open a terminal and run `pnpm build && pnpm serve`
- in another terminal, run `pnpm screenshots`

Make sure that the version of Chromium you are using is relatively recent. Version 112.0.5614.0 (Developer Build), for example, isn't compatible with the latest versions of PatternFly, and your screenshots will be off.

Browse the screenshots to make sure that nothing seems super off. You can compare to [PatternFly React staging](https://patternfly-react.surge.sh/) and [PatternFly Core staging](https://pf.patternfly.org/) to verify. You may need to bump PatternFly-React and Core versions if things are only off in the patternfly-org workspace.

### Old submodules

You might have a dirty file tree with old submodules and folders lying around. You can remove these with:

```sh
git clean -dfx
```

### Contribute to HTML/CSS

To contribute to PatternFly's HTML/CSS core repo, refer to the [core contribution guide](https://github.com/patternfly/patternfly/blob/main/patternfly-docs/site/pages/contribution.md) and the related [guidelines](https://github.com/patternfly/patternfly/blob/main/patternfly-docs/site/pages/guidelines.md).  

### pf-docs-framework documentation

There is some historic documentation on pf-docs-framework at [packages/documentation-framework/README.md](packages/documentation-framework/README.md).