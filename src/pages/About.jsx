import React from "react";
import { Heading, Text } from "../components/atoms";

/**
 * About page - company details and team (future page)
 */
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading as="h1" size="lg" className="mb-6">
          About Aura Digitals
        </Heading>
        <Text size="base" color="gray-600">
          Detailed about page coming soon. This will include company history,
          team members, and more.
        </Text>
      </div>
    </div>
  );
};

export default AboutPage;
