import React from "react";

/**
 * Button component - reusable button with multiple variants
 */
const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}) => {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 font-display";

  const variants = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 disabled:bg-gray-600",
    secondary:
      "bg-gray-900 text-white hover:bg-gray-600 active:bg-gray-500 disabled:bg-gray-600",
    outline:
      "border-2 border-primary-500 text-primary-400 hover:bg-primary-950 active:bg-primary-900 disabled:border-gray-600 disabled:text-gray-600",
    ghost:
      "text-primary-400 hover:bg-gray-900 active:bg-gray-900 disabled:text-gray-600",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl",
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={buttonClass} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
