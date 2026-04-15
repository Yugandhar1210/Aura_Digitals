import React from "react";
import {
  Hero,
  About,
  Services,
  WhyUs,
  Process,
  Testimonials,
  Industries,
  CTASection,
} from "../components/organisms";

/**
 * Home page - main landing page with all sections
 */
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Hero />
      {/* <About /> */}
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <Industries />
      <CTASection />
    </div>
  );
};

export default Home;
