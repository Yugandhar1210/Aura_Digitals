import React from "react";
import { Heading, Text, Badge } from "../atoms";
import { INDUSTRIES } from "../../utils/constants";

/**
 * Industries section component
 */
const Industries = () => {
  return (
    <section id="industries" className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section heading */}
          <Heading as="h2" size="lg" className="mb-8 text-center text-white">
            Industries We Work With
          </Heading>

          {/* Industries list as badges */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {INDUSTRIES.map((industry, index) => (
              <Badge key={index} variant="primary" size="md">
                {industry}
              </Badge>
            ))}
          </div>

          {/* Additional text */}
          <Text size="base" color="gray-400" className="text-center">
            If your business needs a strong digital presence, we can help. We
            specialize in understanding your unique industry challenges and
            crafting tailored digital strategies that deliver real results.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default Industries;
