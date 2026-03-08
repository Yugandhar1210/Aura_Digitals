import { DEFAULT_WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "../utils/constants";
import { generateWhatsAppLink } from "../utils/helpers";

/**
 * WhatsApp service for managing WhatsApp interactions
 */
export const WhatsAppService = {
  /**
   * Get the WhatsApp chat link
   * @param {string} message - Optional custom message
   * @param {string} phoneNumber - Optional custom phone number
   * @returns {string} - WhatsApp link
   */
  getChatLink: (
    message = DEFAULT_WHATSAPP_MESSAGE,
    phoneNumber = WHATSAPP_NUMBER,
  ) => {
    return generateWhatsAppLink(phoneNumber, message);
  },

  /**
   * Open WhatsApp chat link
   * @param {string} message - Optional custom message
   * @param {string} phoneNumber - Optional custom phone number
   */
  openChat: (
    message = DEFAULT_WHATSAPP_MESSAGE,
    phoneNumber = WHATSAPP_NUMBER,
  ) => {
    const link = WhatsAppService.getChatLink(message, phoneNumber);
    window.open(link, "_blank", "noopener,noreferrer");
  },

  /**
   * Get the phone number
   * @returns {string} - WhatsApp phone number
   */
  getPhoneNumber: () => WHATSAPP_NUMBER,

  /**
   * Get the default message
   * @returns {string} - Default WhatsApp message
   */
  getDefaultMessage: () => DEFAULT_WHATSAPP_MESSAGE,
};

export default WhatsAppService;
