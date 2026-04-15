import React from "react";
import * as FaIcons from "react-icons/fa";

/**
 * SocialLink component - for social media links
 */
const SocialLink = ({
  label,
  url,
  icon,
  size = 24,
  className = "",
  ...props
}) => {
  // Map icon names to actual icon components
  const getIcon = (iconName) => {
    const iconMap = {
      FaInstagram: FaIcons.FaInstagram,
      FaFacebook: FaIcons.FaFacebook,
      FaTwitter: FaIcons.FaTwitter,
      FaLinkedin: FaIcons.FaLinkedin,
      FaYoutube: FaIcons.FaYoutube,
      FaWhatsapp: FaIcons.FaWhatsapp,
    };
    return iconMap[iconName] || FaIcons.FaLink;
  };

  const IconComponent = getIcon(icon);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className={`inline-flex items-center justify-center p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200 ${className}`}
      {...props}
    >
      <IconComponent size={size} />
    </a>
  );
};

export default SocialLink;
