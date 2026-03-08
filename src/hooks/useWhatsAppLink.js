import { useCallback } from "react";
import { generateWhatsAppLink } from "../utils/helpers";
import { WHATSAPP_NUMBER } from "../utils/constants";

/**
 * Custom hook to generate WhatsApp link
 * @param {string} phoneNumber - Optional phone number (uses default if not provided)
 * @param {string} message - Optional message (uses default if not provided)
 * @returns {string} - WhatsApp link
 */
export const useWhatsAppLink = (
  phoneNumber = WHATSAPP_NUMBER,
  message = "",
) => {
  return useCallback(() => {
    return generateWhatsAppLink(phoneNumber, message);
  }, [phoneNumber, message])();
};

/**
 * Hook to generate WhatsApp link and handler
 * @param {string} phoneNumber - Optional phone number
 * @param {string} message - Optional message
 * @returns {Object} - Object with link and handler function
 */
export const useWhatsAppChat = (
  phoneNumber = WHATSAPP_NUMBER,
  message = "",
) => {
  const link = useWhatsAppLink(phoneNumber, message);

  const handleClick = useCallback(() => {
    window.open(link, "_blank", "noopener,noreferrer");
  }, [link]);

  return { link, handleClick };
};
