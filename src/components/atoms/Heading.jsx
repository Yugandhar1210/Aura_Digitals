import React from "react";

/**
 * Heading component - semantic heading element
 */
const Heading = ({
  as = "h1",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const sizes = {
    xs: "text-lg md:text-xl",
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-4xl",
    lg: "text-3xl md:text-5xl",
    xl: "text-4xl md:text-6xl",
  };

  const Tag = as;
  const baseStyles = "font-bold font-display text-gray-900 leading-tight";

  return (
    <Tag className={`${baseStyles} ${sizes[size]} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
