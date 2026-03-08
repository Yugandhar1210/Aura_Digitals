import React, { useState } from "react";
import { Button, Heading } from "../atoms";
import { useScrollToSection, useIsMobile } from "../../hooks";
import { NAVIGATION_ITEMS, APP_NAME } from "../../utils/constants";
import { FaBars, FaTimes } from "react-icons/fa";

/**
 * Header/Navigation component
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const scrollToSection = useScrollToSection();

  const handleNavClick = (href) => {
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Heading as="h1" size="sm" className="text-primary-600">
            {APP_NAME}
          </Heading>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex gap-8 items-center">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <nav className="pb-4 border-t">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
