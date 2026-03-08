import React from "react";
import { Heading, Text, Icon } from "../atoms";
import * as FaIcons from "react-icons/fa";

/**
 * ServiceCard component - displays a single service
 */
const ServiceCard = ({
  title,
  description,
  icon,
  className = "",
  ...props
}) => {
  // Map icon names to actual icon components
  const getIcon = (iconName) => {
    const iconMap = {
      FaShareAlt: FaIcons.FaShareAlt,
      FaPen: FaIcons.FaPen,
      FaChartLine: FaIcons.FaChartLine,
      FaSearch: FaIcons.FaSearch,
      FaCode: FaIcons.FaCode,
    };
    return iconMap[iconName] || FaIcons.FaBox;
  };

  const IconComponent = getIcon(icon);

  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}
      {...props}
    >
      <div className="mb-4">
        <IconComponent size={40} className="text-primary-600" />
      </div>
      <Heading as="h3" size="sm" className="mb-3">
        {title}
      </Heading>
      <Text size="sm" color="gray-600">
        {description}
      </Text>
    </div>
  );
};

export default ServiceCard;
