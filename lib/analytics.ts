/**
 * Analytics utility for logging events to Xano API
 */

const API_ENDPOINT = 'https://x8ki-letl-twmt.n7.xano.io/api:noTfiLGv/event';

export interface EventData {
  event: string;
  path?: string;
  referer?: string;
  user_agent?: string;
  ip?: string;
  user_id?: number;
  metadata?: Record<string, unknown>;
}

/**
 * Get client IP address using a public API
 * Falls back to empty string if unavailable
 */
async function getClientIP(): Promise<string> {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip || '';
  } catch (error) {
    console.warn('Failed to get client IP:', error);
    return '';
  }
}

/**
 * Log an event to the Xano API
 * @param eventData - Event data to log
 */
export async function logEvent(eventData: EventData): Promise<void> {
  try {
    // Get current path if not provided
    const path = eventData.path || (typeof window !== 'undefined' ? window.location.pathname : '');
    
    // Get referer if not provided
    const referer = eventData.referer || (typeof window !== 'undefined' ? document.referrer : '');
    
    // Get user agent if not provided
    const user_agent = eventData.user_agent || (typeof window !== 'undefined' ? navigator.userAgent : '');
    
    // Get IP if not provided (only on client side)
    let ip = eventData.ip || '';
    if (!ip && typeof window !== 'undefined') {
      ip = await getClientIP();
    }
    
    const payload = {
      event: eventData.event,
      path: path,
      referer: referer,
      user_agent: user_agent,
      ip: ip,
      user_id: eventData.user_id !== undefined ? eventData.user_id : 5,
      ...(eventData.metadata && { metadata: eventData.metadata })
    };

    // Log event to Xano API
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.warn('Failed to log event:', response.statusText);
    }
  } catch (error) {
    // Silently fail to not disrupt user experience
    console.warn('Error logging event:', error);
  }
}

/**
 * Convenience function to log CTA clicks
 * Fire-and-forget - doesn't block execution
 */
export function logCTAClick(ctaName: string, metadata?: Record<string, unknown>): void {
  logEvent({
    event: 'cta_click',
    metadata: {
      cta_name: ctaName,
      ...metadata
    }
  }).catch(() => {
    // Silently fail - already handled in logEvent
  });
}

/**
 * Convenience function to log page views
 * Fire-and-forget - doesn't block execution
 */
export function logPageView(path?: string): void {
  logEvent({
    event: 'page_view',
    path: path
  }).catch(() => {
    // Silently fail - already handled in logEvent
  });
}

/**
 * Convenience function to log navigation clicks
 * Fire-and-forget - doesn't block execution
 */
export function logNavigationClick(linkName: string, destination: string): void {
  logEvent({
    event: 'navigation_click',
    metadata: {
      link_name: linkName,
      destination: destination
    }
  }).catch(() => {
    // Silently fail - already handled in logEvent
  });
}

/**
 * Convenience function to log form submissions
 * Fire-and-forget - doesn't block execution
 */
export function logFormSubmission(formName: string, metadata?: Record<string, unknown>): void {
  logEvent({
    event: 'form_submission',
    metadata: {
      form_name: formName,
      ...metadata
    }
  }).catch(() => {
    // Silently fail - already handled in logEvent
  });
}

