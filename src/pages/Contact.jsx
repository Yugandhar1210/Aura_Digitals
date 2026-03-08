import React from "react";
import { Heading, Text } from "../components/atoms";

/**
 * Contact page - contact form and information (future page)
 */
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading as="h1" size="lg" className="mb-6">
          Contact Us
        </Heading>
        <Text size="base" color="gray-600">
          Contact form and information coming soon. Alternatively, use the
          WhatsApp button to get in touch.
        </Text>
      </div>
    </div>
  );
};

export default ContactPage;
