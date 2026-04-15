import { useState, useEffect } from "react";
import { throttle } from "../utils/helpers";

/**
 * Custom hook to detect if device is mobile
 * @returns {boolean} - True if screen width is less than 768px
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = throttle(() => {
      setIsMobile(window.innerWidth < 768);
    }, 150);

    // Set initial value
    setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
