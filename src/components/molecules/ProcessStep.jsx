import React from "react";
import { Heading, Text } from "../atoms";

/**
 * ProcessStep component - displays a single step in a process
 */
const ProcessStep = ({
  number,
  title,
  description,
  className = "",
  ...props
}) => {
  return (
    <div className={`relative ${className}`} {...props}>
      {/* Step number circle */}
      <div className="mb-4 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center">
          <span className="text-2xl font-bold font-display">{number}</span>
        </div>
      </div>

      {/* Step content */}
      <div className="text-center">
        <Heading as="h3" size="sm" className="mb-2">
          {title}
        </Heading>
        <Text size="sm" color="gray-600">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default ProcessStep;
