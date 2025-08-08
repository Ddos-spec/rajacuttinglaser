// src/utils/tracker.js
// WhatsApp tracking utilities

/**
 * Track WhatsApp button clicks
 */
export function trackWhatsAppClick(message = 'General inquiry', source = 'website') {
  // Track with Google Analytics if available
  if (typeof gtag !== 'undefined') {
    gtag('event', 'whatsapp_click', {
      'event_category': 'engagement',
      'event_label': 'whatsapp_button',
      'custom_parameter_1': source
    });
  }
  
  // Send tracking data to our API
  fetch('/api/tracker-customer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      whatsappNumber: 'unknown',
      messageText: `WhatsApp button clicked: ${message}`,
      aiResponseText: null,
      extractedName: null,
      extractedPhone: null,
      extractedLocation: null,
      extractedProductInterest: message,
      isLeadReady: false,
      timestamp: new Date().toISOString(),
      source: source
    }),
  }).catch(error => console.log('Tracking error:', error));
}

/**
 * Add WhatsApp tracking to all WhatsApp links on the page
 */
export function addWhatsAppTrackers() {
  document.addEventListener('DOMContentLoaded', () => {
    // Find all WhatsApp links
    const whatsappLinks = document.querySelectorAll('a[href*="whatsapp.com"], a[href*="wa.me"]');
    
    whatsappLinks.forEach(link => {
      link.addEventListener('click', () => {
        const message = extractMessageFromUrl(link.href) || 'General inquiry';
        const source = link.getAttribute('data-source') || 'website';
        trackWhatsAppClick(message, source);
      });
    });
  });
}

/**
 * Extract message from WhatsApp URL
 */
function extractMessageFromUrl(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('text') || 'General inquiry';
  } catch {
    return 'General inquiry';
  }
}

/**
 * Track form submissions
 */
export function trackFormSubmission(formName, formData) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_submit', {
      'event_category': 'engagement',
      'event_label': formName
    });
  }
  
  // Send to tracking API
  fetch('/api/tracker-customer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      whatsappNumber: formData.phone || 'unknown',
      messageText: `Form submission: ${formName}`,
      aiResponseText: null,
      extractedName: formData.name || null,
      extractedPhone: formData.phone || null,
      extractedLocation: formData.location || null,
      extractedProductInterest: formData.message || 'Form inquiry',
      isLeadReady: true,
      timestamp: new Date().toISOString(),
      source: 'contact_form'
    }),
  }).catch(error => console.log('Tracking error:', error));
}