import React from "react";
import { Heading } from "../atoms";
import { FeatureItem } from "../molecules";
import { WHY_US_FEATURES } from "../../utils/constants";

/**
 * Why Us section component
 */
const WhyUs = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section heading */}
          <Heading as="h2" size="lg" className="mb-12 text-center text-white">
            Why Aura Digitals
          </Heading>

          {/* Features grid */}
          <div className="space-y-8">
            {WHY_US_FEATURES.map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
