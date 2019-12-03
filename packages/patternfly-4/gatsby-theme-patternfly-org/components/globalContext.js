// We should use a proper redux-like state manager
import React from 'react';
import staticVersions from 'gatsby-theme-patternfly-org/versions.json';

let versions = staticVersions;

if (typeof window !== 'undefined' && window.fetch) {
  fetch('/versions.json')
    .then(data => data.json())
    .then(json => versions = json);
}

function getVersions() {
  return versions;
}

export default React.createContext({
  initialVersion: staticVersions,
  getVersions
});
