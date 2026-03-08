import React from "react";
import { Heading } from "../atoms";
import { ServiceCard } from "../molecules";
import { SERVICES } from "../../utils/constants";

/**
 * Services section component
 */
const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <Heading as="h2" size="lg" className="mb-4">
            What We Do
          </Heading>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of digital marketing services
            designed to help your business thrive online.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
