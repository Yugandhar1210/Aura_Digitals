import { useCallback } from "react";
import { scrollToSection } from "../utils/helpers";

/**
 * Custom hook for smooth scrolling to sections
 * @returns {Function} - Function that scrolls to section by ID
 */
export const useScrollToSection = () => {
  return useCallback((sectionId) => {
    scrollToSection(sectionId);
  }, []);
};
