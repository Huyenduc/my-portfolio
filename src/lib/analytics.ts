import { sendGAEvent } from "@next/third-parties/google";

type EventParams = Record<string, string | number | boolean>;

/**
 * Send a custom Google Analytics 4 event in production only.
 */
export function trackEvent(eventName: string, params?: EventParams) {
  if (process.env.NODE_ENV !== "production") return;
  sendGAEvent("event", eventName, params ?? {});
}
