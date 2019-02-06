/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
require('./_repos/core/src/patternfly/patternfly.scss');

/**
 * Display message when update is available, see:
 * https://www.gatsbyjs.org/docs/add-offline-support-with-a-service-worker/#displaying-a-message-when-a-service-worker-updates
 */
exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `A newer version of the site is available. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}