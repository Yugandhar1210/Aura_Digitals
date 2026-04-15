import React from "react";
import { Heading, Text, Button } from "../atoms";
import { WhatsAppButton } from "../molecules";
import { useScrollToSection } from "../../hooks";
import AnimatedCursor from "./AnimatedCursor";

/**
 * Hero section component
 */
const Hero = () => {
  const scrollToSection = useScrollToSection();

  return (
    <section id="hero" className="bg-animated text-white py-20 md:py-32">
      {/* Animated cursor overlay */}
      <AnimatedCursor isActive={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <Heading as="h1" size="xl" className="text-white mb-6 hero-heading">
            Building Brands Digitally
          </Heading>

          {/* Subheading */}
          <Text
            size="lg"
            className="text-primary-100 mb-8 leading-relaxed hero-subheading"
          >
            We help businesses build a strong digital presence through content,
            strategy, and performance-driven marketing that actually works.
          </Text>

          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton
              label="WhatsApp Now"
              size="lg"
              showIcon={true}
              className="!bg-black text-white hover:!bg-gray-800 font-bold transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
            />
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold transition-all duration-200 w-full sm:w-auto"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
