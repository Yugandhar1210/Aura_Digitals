import React from "react";
import * as Icons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";

/**
 * Icon component - wrapper for react-icons
 */
const Icon = ({
  name,
  size = 24,
  color = "currentColor",
  className = "",
  library = "fa",
  ...props
}) => {
  // Map of available icon libraries
  const iconLibraries = {
    fa: Icons,
    fi: FiIcons,
  };

  const IconLibrary = iconLibraries[library] || Icons;
  const IconComponent = IconLibrary[name] || Icons.FaExclamationTriangle;

  return (
    <IconComponent size={size} color={color} className={className} {...props} />
  );
};

export default Icon;
