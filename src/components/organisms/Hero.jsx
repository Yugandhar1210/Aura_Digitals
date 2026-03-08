import React from "react";
import { Heading, Text, Button } from "../atoms";
import { WhatsAppButton } from "../molecules";
import { useScrollToSection } from "../../hooks";

/**
 * Hero section component
 */
const Hero = () => {
  const scrollToSection = useScrollToSection();

  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <Heading as="h1" size="xl" className="text-white mb-6">
            Building Brands Digitally
          </Heading>

          {/* Subheading */}
          <Text size="lg" className="text-primary-100 mb-8 leading-relaxed">
            We help businesses build a strong digital presence through content,
            strategy, and performance-driven marketing that actually works.
          </Text>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton
              label="WhatsApp Now"
              size="lg"
              variant="primary"
              className="bg-white text-primary-600 hover:bg-gray-100 w-full sm:w-auto"
            />
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-primary-700 w-full sm:w-auto"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
          </div>

          {/* Trust indicator */}
          <div className="mt-12 text-primary-200">
            <Text size="sm">
              Trusted by startups and SMEs across Visakhapatnam
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
