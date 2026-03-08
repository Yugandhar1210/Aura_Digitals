import React from "react";

/**
 * Text component - paragraph and text element
 */
const Text = ({
  as = "p",
  size = "base",
  color = "gray-700",
  className = "",
  children,
  ...props
}) => {
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const Tag = as;
  const baseStyles = "font-sans leading-relaxed";

  return (
    <Tag
      className={`${baseStyles} ${sizes[size]} text-${color} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Text;
