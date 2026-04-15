/**
 * Encode a message for WhatsApp URL
 * @param {string} message - The message to encode
 * @returns {string} - URL encoded message
 */
export const encodeWhatsAppMessage = (message) => {
  return encodeURIComponent(message);
};

/**
 * Format phone number for WhatsApp
 * @param {string} phoneNumber - Phone number with country code (e.g., 919876543210)
 * @returns {string} - Formatted phone number
 */
export const formatPhoneNumber = (phoneNumber) => {
  // Remove any non-digit characters
  return phoneNumber.replace(/\D/g, "");
};

/**
 * Generate WhatsApp link with message
 * @param {string} phoneNumber - Phone number with country code
 * @param {string} message - Message to send
 * @returns {string} - WhatsApp link (wa.me URL)
 */
export const generateWhatsAppLink = (phoneNumber, message = "") => {
  const formattedNumber = formatPhoneNumber(phoneNumber);
  const encodedMessage = encodeWhatsAppMessage(message);
  return `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
};

/**
 * Scroll to a specific section
 * @param {string} sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

/**
 * Check if device is mobile
 * @returns {boolean} - True if mobile
 */
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
};

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit time in ms
 * @returns {Function} - Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
