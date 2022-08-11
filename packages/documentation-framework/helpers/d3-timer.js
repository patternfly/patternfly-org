// react-charts depends on victory-core which uses d3-timer to create an
// animation event loop using setInterval. This event loop will cause Node.js
// to hang if we prerender charts pages, so just replace with calls that resolve instantly.
module.exports = {
  timer: () => {},
  now: () => {}
};
