#!/bin/sh

default()
{
  # Add paths to env (non-Travis build)
  if [ -z "$TRAVIS" ]; then
    PATH=/bin:/usr/bin:/usr/local/bin:$PATH
    export PATH
  fi

  SCRIPT=`basename $0`
  SCRIPT_DIR=`dirname $0`
  SCRIPT_DIR=`cd $SCRIPT_DIR; pwd`

  . $SCRIPT_DIR/env.sh
  . $SCRIPT_DIR/common.sh

  BOWER_JSON=bower.json
  PACKAGE_JSON=package.json
  HOME_HTML=source/index.html

  TMP_DIR="/tmp/patternfly-releases"
  PTNFLY_DIR="$TMP_DIR/patternfly-org"

  # For Travis, build the current repo instead of using a clone.
  if [ -n "$TRAVIS" ]; then
    PTNFLY_DIR=`cd $SCRIPT_DIR/../..; pwd`
  fi
}

# Bump version number in bower.json
#
bump_bower()
{
  echo "*** Bumping version in $BOWER_JSON to $VERSION"
  cd $PTNFLY_DIR

  PF_VERSION=get_pf_version
  APF_VERSION=get_apf_version

  sed "s|\"version\":.*|\"version\": \"$VERSION\",|" $BOWER_JSON | \
  sed "s|\"patternfly\":.*|\"patternfly\": \"$PTNFLY_PKG_REPO$VERSION\",|" | \
  sed "s|\"angular-patternfly\":.*|\"angular-patternfly\": \"$APF_PKG_REPO$VERSION\",|" > $BOWER_JSON.tmp
  check $? "Version bump failure"

  mv $BOWER_JSON.tmp $BOWER_JSON
}

# Bump version number in package.json
#
bump_package()
{
  echo "*** Bumping version in $PACKAGE_JSON to $VERSION"
  cd $PTNFLY_DIR

  sed "s|\"version\":.*|\"version\": \"$VERSION\",|" $PACKAGE_JSON > $PACKAGE_JSON.tmp
  check $? "Version bump failure"

  mv $PACKAGE_JSON.tmp $PACKAGE_JSON
}

# Bump version in home page
#
bump_home()
{
  echo "*** Bumping version in $HOME_HTML to $VERSION"
  cd $PTNFLY_DIR

  PREFIX="<p class=\"version wow fadeIn\" data-wow-delay=\"1500ms\">Version"
  sed "s|$PREFIX.*|$PREFIX $VERSION</p>|" $HOME_HTML > $HOME_HTML.tmp
  check $? "Version bump failure"

  mv $HOME_HTML.tmp $HOME_HTML
}

# Clean dependencies
#
clean()
{
  echo "*** Cleaning dependencies"
  cd $PTNFLY_DIR

  if [ -z "$TRAVIS" ]; then
    npm cache clean
    bower cache clean

    # Remove for repo rebuild
    if [ -d node_modules ]; then
      rm -rf node_modules
    fi
    if [ -d source/components ]; then
      rm -rf source/components
    fi
  fi
}

# Commit changes
#
commit()
{
  echo "*** Committing changes"
  cd $PTNFLY_DIR

  git add -u
  git commit -m "Bumped version number to $VERSION"
}

# Test prerequisites
#
prereqs()
{
  JUNK=`which npm`
  check $? "Cannot find npm in path"

  JUNK=`which bower`
  check $? "Cannot find bower in path"

  JUNK=`which grunt`
  check $? "Cannot find grunt in path"

  JUNK=`which jekyll`
  check $? "Cannot find jekyll in path"
}

# Push changes to remote repo (non-Travis build)
#
push()
{
  if [ -n "$TRAVIS" ]; then
    return
  fi

  echo "*** Pushing changes to $PTNFLY_REPO_SLUG"
  cd $PTNFLY_DIR

  git push --set-upstream origin $BRANCH --force
  check $? "git push failure"

  echo "*** Changes pushed to the $BRANCH branch of $PTNFLY_REPO_SLUG"
  echo "*** Review changes and create a PR via GitHub"
}

# Setup local repo (non-Travis build)
#
setup_repo() {
  if [ -n "$TRAVIS" ]; then
    return
  fi

  echo "*** Setting up local repo $PTNFLY_DIR"
  rm -rf $PTNFLY_DIR

  mkdir -p $TMP_DIR
  cd $TMP_DIR

  git clone https://github.com/$PTNFLY_REPO_SLUG.git
  check $? "git clone failure"

  cd $PTNFLY_DIR
  git checkout $BRANCH
  if [ "$?" -ne 0 ]; then
    git checkout -B $BRANCH
  fi
  check $? "git checkout failure"
}

usage()
{
cat <<- EEOOFF

    This script will bump the repo version numbers, build, and push to GitHub.

    Success depends on the version number matching a release of Pattenrfly and Angular Patternfly.

    Note: After changes are pushed, a PR will need to be created via GitHub.

    sh [-x] $SCRIPT [-h|p|f|s] -v <version>

    Example: sh $SCRIPT -v 3.15.0 -f

    OPTIONS:
    h       Display this message (default) 
    f       Force push new branch to GitHub (e.g., bump-v3.15.0)
    p       Publish to npm (not valid with -s or -v)
    s       Skip new clone, clean, and install to rebuild previously created repo
    v       The version number (e.g., 3.15.0)

EEOOFF
}

# main()
{
  default

  if [ "$#" -eq 0 ]; then
    usage
    exit 1
  fi

  while getopts hfpsv c; do
    case $c in
      h) usage; exit 0;;
      f) PUSH=1;;
      s) SKIP_SETUP=1;;
      v) VERSION=$2; shift
         BRANCH=bump-v$VERSION;;
      \?) usage; exit 1;;
    esac
  done

  if [ -z "$VERSION" ]; then
    usage
    exit 1
  fi

  prereqs

  if [ -z "$SKIP_SETUP" ]; then
    setup_repo
  fi

  bump_bower
  bump_package
  bump_home

  if [ -z "$SKIP_SETUP" ]; then
    clean
    build_install
  fi

  build
  commit

  # Push changes to remote branch
  if [ -n "$PUSH" ]; then
    push
  fi

  if [ -z "$TRAVIS" ]; then
    echo "*** Remove $TMP_DIR directory manually after testing"
  fi
}
