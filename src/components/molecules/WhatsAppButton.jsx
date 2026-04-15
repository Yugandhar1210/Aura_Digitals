import React from "react";
import { Button } from "../atoms";
import { useWhatsAppChat } from "../../hooks";
import { FaWhatsapp } from "react-icons/fa";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from "../../utils/constants";

/**
 * WhatsAppButton component - button to open WhatsApp chat
 */
const WhatsAppButton = ({
  label = "Chat on WhatsApp",
  message = DEFAULT_WHATSAPP_MESSAGE,
  phoneNumber = WHATSAPP_NUMBER,
  variant = "primary",
  size = "md",
  className = "",
  showIcon = true,
  ...props
}) => {
  const { handleClick } = useWhatsAppChat(phoneNumber, message);

  return (
    <Button
      variant={variant}
      size={size}
      className={`inline-flex items-center justify-center gap-2 ${className}`}
      onClick={handleClick}
      {...props}
    >
      {showIcon && <FaWhatsapp size={18} />}
      <span>{label}</span>
    </Button>
  );
};

export default WhatsAppButton;
