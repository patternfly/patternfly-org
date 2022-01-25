export const sendEvent = (name, paramsObj) => {
  gtag('event', name, paramsObj);
};
