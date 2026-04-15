import React from "react";
import { Heading, Text } from "../atoms";

/**
 * About section component
 */
const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section heading */}
          <Heading as="h2" size="lg" className="mb-8 text-center text-white">
            About Aura Digitals
          </Heading>

          {/* Content */}
          <div className="space-y-6 text-white">
            <Text size="base" className="leading-relaxed text-white">
              Aura Digitals is a Vizag-based digital marketing agency helping
              startups, SMEs, and local businesses build their digital presence
              from the ground up.
            </Text>

            <Text size="base" className="leading-relaxed text-white">
              We are a young, driven team that believes real growth doesn't come
              from templates or shortcuts. It comes from understanding brands
              deeply, creating meaningful content, and executing strategies that
              deliver consistent results.
            </Text>

            <Text
              size="base"
              className="leading-relaxed font-semibold text-white"
            >
              Our approach is simple — build brands first, performance follows.
            </Text>
          </div>

          {/* Stats or highlights (optional) */}
          {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heading
                as="div"
                size="md"
                className="text-white font-bold mb-2 text-2xl"
              >
                100%
              </Heading>
              <Text size="sm" className="text-white">
                Dedicated to Results
              </Text>
            </div>
            <div className="text-center">
              <Heading
                as="div"
                size="md"
                className="text-white font-bold mb-2 text-2xl"
              >
                Fresh
              </Heading>
              <Text size="sm" className="text-white">
                Modern Strategies
              </Text>
            </div>
            <div className="text-center">
              <Heading
                as="div"
                size="md"
                className="text-white font-bold mb-2 text-2xl"
              >
                Local
              </Heading>
              <Text size="sm" className="text-white">
                Vizag Based
              </Text>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
