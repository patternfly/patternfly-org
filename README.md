# patternfly-org

The PatternFly Org is the source for the official documentation for PatternFly 3 and PatternFly 4.

## Development

Development setup requires yarn. If you do not already have yarn installed on your system, see https://yarnpkg.com/en/.

### Live Reload Server

A local [Gatsby](https://www.gatsbyjs.org/) development server can be started with:

    yarn start

Takes 1m26s to load http://localhost:8003 on a 2015 Macbook.

An old grunt development server can be with:

    yarn start:v3

Takes 13s to load http://localhost:9002 on a 2015 Macbook.

### Build

Install the [Gatsby](https://www.gatsbyjs.org/) site dependencies and build it using yarn:

    yarn install
    yarn build:v4

Takes 38s to install + 3m18s to build. Subsequent runs with cache take 1m10s on a 2015 Macbook.

You can build the old /v3 [Jekyll](http://jekyllrb.com/) site using yarn:

    yarn install
    yarn build:v3

Takes 13s on a 2015 Macbook.

### Deploy

When you submit a PR, previews should be automatically generated for you and uploaded as PR comments. This takes between 5-10 minutes.

When the PR is merged to master, the site is first deployed to a [staging S3 bucket.](https://staging.patternfly.org)

When PatternFly does a release (currently every 3 weeks) this bucket is copied to https://patternfly.org.

### Old submodules

You might have a dirty file tree with old submodules and folders lying around. You can remove these with:

    git clean -dfx 
