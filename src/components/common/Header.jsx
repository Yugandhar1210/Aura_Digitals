import React, { useState } from "react";
import { Button } from "../atoms";
import { useScrollToSection, useIsMobile } from "../../hooks";
import { NAVIGATION_ITEMS } from "../../utils/constants";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

/**
 * Header/Navigation component
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const scrollToSection = useScrollToSection();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href) => {
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollToSection("hero");
    } else {
      navigate("/");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="flex items-center">
            <img
              src="/logo.svg"
              alt="Aura Digitals Logo"
              className="h-12 w-auto hover:opacity-80 transition-opacity duration-200"
            />
          </a>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex gap-8 items-center">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-medium"
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
              className="p-2 text-gray-300 hover:text-primary-400"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <nav className="pb-4 border-t border-gray-700">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-900 transition-colors duration-200"
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
