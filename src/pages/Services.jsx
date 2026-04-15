import React from "react";
import { Heading, Text } from "../components/atoms";

/**
 * Services page - detailed services (future page)
 */
const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading as="h1" size="lg" className="mb-6">
          Our Services
        </Heading>
        <Text size="base" color="gray-600">
          Detailed services page coming soon. This page will showcase in-depth
          information about each service.
        </Text>
      </div>
    </div>
  );
};

export default ServicesPage;
