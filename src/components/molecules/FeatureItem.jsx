import React from "react";
import { Heading, Text } from "../atoms";
import { FaCheckCircle } from "react-icons/fa";

/**
 * FeatureItem component - displays a feature or benefit
 */
const FeatureItem = ({
  title,
  description,
  icon = null,
  className = "",
  ...props
}) => {
  return (
    <div className={`flex gap-4 ${className}`} {...props}>
      {/* Icon or checkbox */}
      <div className="flex-shrink-0 mt-1">
        {icon ? icon : <FaCheckCircle size={24} className="text-primary-600" />}
      </div>

      {/* Content */}
      <div>
        <Heading as="h4" size="sm" className="mb-2">
          {title}
        </Heading>
        <Text size="sm" color="gray-600">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default FeatureItem;
