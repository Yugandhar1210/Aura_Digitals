import React from "react";

/**
 * Badge component - tag or label element
 */
const Badge = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles = "inline-block rounded-full font-semibold font-sans";

  const variants = {
    primary: "bg-primary-900 text-primary-300 border border-primary-700",
    secondary: "bg-gray-900 text-gray-200 border border-gray-600",
    success: "bg-green-900 text-green-300 border border-green-700",
    warning: "bg-yellow-900 text-yellow-300 border border-yellow-700",
    error: "bg-red-900 text-red-300 border border-red-700",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <span
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
