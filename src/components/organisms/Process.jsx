import React from "react";
import { Heading } from "../atoms";
import { ProcessStep } from "../molecules";
import { PROCESS_STEPS } from "../../utils/constants";

/**
 * Process section component - how we work
 */
const Process = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-animated text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <Heading as="h2" size="lg" className="mb-4 text-white">
            How We Work
          </Heading>
          <p className="text-gray-100 max-w-2xl mx-auto">
            Our proven process ensures your success from start to finish.
          </p>
        </div>

        {/* Process steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        {/* Connection line (visual element for desktop) */}
        <div className="hidden lg:block mt-8">
          {/* This could be a visual connecting line between steps */}
        </div>
      </div>
    </section>
  );
};

export default Process;
