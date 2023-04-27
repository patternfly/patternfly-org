# patternfly-org

The PatternFly Org is the source for the official documentation for PatternFly.

## Development

Development setup requires yarn. If you do not already have yarn installed on your system, see https://yarnpkg.com/en/.

A Node version between 13.7 and 14.19.2 is also required.

### Live Reload Server
#### New server
You can install the NPM dependencies with:

    yarn install

A local development server at http://localhost:8003 can be started with:

    yarn start

### Build

The new v4 site can be built with:

    yarn build:v4

The static assets get copied to build/patternfly-org.

### Deploy

When you submit a PR, previews should be automatically generated for you and uploaded as PR comments. This takes between 5-10 minutes.

When the PR is merged to main, the site is first deployed to a [staging S3 bucket.](https://staging.patternfly.org)

When PatternFly does a release (currently every 3 weeks) this bucket is copied to https://patternfly.org.

### Old submodules

You might have a dirty file tree with old submodules and folders lying around. You can remove these with:

    git clean -dfx

