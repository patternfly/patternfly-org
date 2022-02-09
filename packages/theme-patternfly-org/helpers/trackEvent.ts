// required to reference window.gtag function below
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export enum EventCategory {
  Click = 'click_event'
}

/**
 * Sends network call using Google Analytic's gtag function
 * https://developers.google.com/analytics/devguides/collection/gtagjs/events#send_events
 * 
 * @param name {string} - The value that will appear as the event action in Google Analytics Event reports.
 * @param eventCategory {string} - The category of the event.
 * @param eventLabel {string} - The label of the event.
 * @param value {number} - A non-negative integer that will appear as the event value.
 */
export const trackEvent = (
  name: string,
  eventCategory: EventCategory,
  eventLabel: string,
  value?: number
) => {
  window.gtag && window.gtag('event', name, {
    'event_category': eventCategory,
    'event_label': eventLabel,
    // Optional non-negative integer
    ...(value >= 0 && {value})
  });
};
