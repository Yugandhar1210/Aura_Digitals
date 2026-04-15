import React from "react";
import { Text, Heading } from "../atoms";
import { SocialLink, WhatsAppButton } from "../molecules";
import { APP_NAME, APP_LOCATION, SOCIAL_LINKS } from "../../utils/constants";

/**
 * Footer component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Load Instagram embed script
  React.useEffect(() => {
    // Check if Instagram embed script is already loaded
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      // Load Instagram embed script
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
    }
  }, []);

  return (
    <footer className="bg-dark-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Footer Links Section */}
          <div className="md:col-span-1 space-y-8">
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

          {/* Instagram Preview Section */}
          <div className="md:col-span-2">
            <Heading as="h4" size="xs" className="text-white mb-6">
              Latest on Instagram
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Instagram Post 1 */}
              {/* <div className="flex justify-center">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/p/DVYCDb7jSyR/?igsh=MWQ1ZGttbmg3ZzdrZA=="
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: "0",
                    borderRadius: "3px",
                    boxShadow:
                      "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "300px",
                    minWidth: "250px",
                    padding: "0",
                    width: "99.375%",
                  }}
                ></blockquote>
              </div> */}

              {/* Instagram Post 2 */}
              {/* <div className="flex justify-center">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/reel/DVOJSoZDb4O/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: "0",
                    borderRadius: "3px",
                    boxShadow:
                      "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "300px",
                    minWidth: "250px",
                    padding: "0",
                    width: "99.375%",
                  }}
                ></blockquote>
              </div> */}
              {/* Instagram Post 3 */}
              {/* <div className="flex justify-center">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/reel/DU4iSgBCCPY/?igsh=N3p3d3dra2NkeHps"
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div> */}
              {/* Instagram Post 4 */}
              {/* <div className="flex justify-center">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/DUQDCAuj37D/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div> */}
              {/* Instagram Post 5 */}
              {/* <div className="flex justify-center">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/reel/DUE3-wXCPOk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                data-instgrm-version="14"
                data-instgrm-disable-web-api="false"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "300px",
                  minWidth: "250px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div> */}
            </div>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="border-t border-gray-700 my-8"></div> */}

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
