/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
require('./_repos/core/src/patternfly/patternfly.scss');
require('./_repos/core/src/patternfly/patternfly-addons.scss');
require('./src/styles/prism-coy.css');
require('./src/workspace.scss');

/**
 * Display message when update is available, see:
 * https://www.gatsbyjs.org/docs/add-offline-support-with-a-service-worker/#displaying-a-message-when-a-service-worker-updates
 */
// exports.onServiceWorkerUpdateReady = () => {
//   const answer = window.confirm(
//     `A newer version of the site is available. ` +
//       `Reload to display the latest version?`
//   )

//   if (answer === true) {
//     window.location.reload()
//   }
// }

/**
 * Scroll to the given id
 */
const scrollTo = id => () => {	
  const hash = id.replace('#', '');
  const element = document.getElementById(hash);
  if (element) {
    const offset = element.offsetTop;
    // Wait for the browser to finish rendering before scrolling.
    setTimeout((function() {
      window.scrollTo(0, offset)
    }), 0);
  }
};	

/**
 * Check URL for hash and if so attempt to scroll to the relevant section of the page
 */
 export const onRouteUpdate = ({ location }) => {	
  const { hash } = location;
  if (hash) {	
    window.setTimeout(scrollTo(hash), 1000);	
  }	
};