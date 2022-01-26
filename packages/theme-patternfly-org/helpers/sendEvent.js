export const sendEvent = (name, eventCategory, eventLabel, value) => {
  gtag('event', name, {
    'event_category': eventCategory,
    'event_label': eventLabel,
    // Optional non-negative integer
    ...(value >= 0 && {value})
  });
};
