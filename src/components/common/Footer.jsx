import React from "react";
import { Text, Heading } from "../atoms";
import { SocialLink, WhatsAppButton } from "../molecules";
import { APP_NAME, APP_LOCATION, SOCIAL_LINKS } from "../../utils/constants";

/**
 * Footer component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand info */}
          <div>
            <Heading as="h3" size="sm" className="text-white mb-4">
              {APP_NAME}
            </Heading>
            <Text size="sm" color="gray-300">
              Digital Marketing Agency
            </Text>
            <Text size="sm" color="gray-300">
              {APP_LOCATION}
            </Text>
          </div>

          {/* Quick links */}
          <div>
            <Heading as="h4" size="xs" className="text-white mb-4">
              Quick Links
            </Heading>
            <div className="space-y-2">
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                About Us
              </a>
              <a
                href="#services"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Services
              </a>
              <a
                href="#why-us"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Why Us
              </a>
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <Heading as="h4" size="xs" className="text-white mb-4">
              Get In Touch
            </Heading>
            <WhatsAppButton
              label="Start Your Digital Journey"
              size="sm"
              variant="primary"
            />
            <Text size="xs" color="gray-400" className="mt-2">
              Let's build your digital success together.
            </Text>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Text size="sm" color="gray-400">
            © {currentYear} {APP_NAME}. All rights reserved.
          </Text>

          {/* Social links */}
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <SocialLink
                key={link.label}
                label={link.label}
                url={link.url}
                icon={link.icon}
                size={20}
                className="text-gray-400 hover:text-white"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
