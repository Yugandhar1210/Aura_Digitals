import React from "react";
import { Heading, Text } from "../atoms";
import { WhatsAppButton } from "../molecules";

/**
 * Call-to-Action section component
 */
const CTASection = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-primary-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Heading */}
          <Heading as="h2" size="lg" className="text-white mb-6">
            Ready to Build Your Digital Presence?
          </Heading>

          {/* Description */}
          <Text size="lg" className="text-white mb-8">
            Let's create content, platforms, and strategies that reflect your
            brand and drive real growth.
          </Text>

          {/* CTA Button */}
          <WhatsAppButton
            label="Start Your Digital Journey Now"
            size="lg"
            showIcon={true}
            className="!bg-black text-white hover:!bg-gray-800 font-bold transform hover:scale-105 transition-all duration-200 inline-flex"
          />

          {/* Trust message */}
          <Text size="sm" className="text-white mt-8">
            No long-term contracts. No setup fees. Just results-driven
            marketing.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
