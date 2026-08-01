/**
 * Centralized Analytics Facade
 * Use this module to track events across the application.
 * Currently logs to console in development, but is ready to be wired up to
 * Google Analytics, PostHog, or any other provider.
 */

type EventData = Record<string, string | number | boolean>;

export function trackEvent(eventName: string, data?: EventData) {
  if (process.env.NODE_ENV === 'development') {
    console.info(`[Analytics] Tracked Event: ${eventName}`, data || {});
  }
  
  // Example integration:
  // if (typeof window !== 'undefined' && window.posthog) {
  //   window.posthog.capture(eventName, data);
  // }
}

export function trackPageView(url: string) {
  if (process.env.NODE_ENV === 'development') {
    console.info(`[Analytics] Page View: ${url}`);
  }
}
