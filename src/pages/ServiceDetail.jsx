import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Heading, Text, Button } from "../components/atoms";
import { SERVICES } from "../utils/constants";
import * as FaIcons from "react-icons/fa";

/**
 * Service Detail page - displays full service information
 */
const ServiceDetail = () => {
  const { serviceId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Get service from constants or from location state
  const service = SERVICES.find((s) => s.id === serviceId) || location.state;

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <Heading as="h1" size="lg" className="mb-4">
            Service Not Found
          </Heading>
          <Button
            onClick={() => navigate("/#services")}
            className="mt-6 bg-primary-600 hover:bg-primary-700 text-white"
          >
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  // Get icon component
  const getIcon = (iconName) => {
    const iconMap = {
      FaPalette: FaIcons.FaPalette,
      FaShareAlt: FaIcons.FaShareAlt,
      FaPen: FaIcons.FaPen,
      FaChartLine: FaIcons.FaChartLine,
      FaSearch: FaIcons.FaSearch,
      FaCode: FaIcons.FaCode,
    };
    return iconMap[iconName] || FaIcons.FaBox;
  };

  const IconComponent = getIcon(service.icon);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button
          onClick={() => navigate("/#services")}
          className="mb-8 text-primary-400 hover:text-primary-300 flex items-center gap-2 transition-colors"
        >
          ← Back to Services
        </button>

        {/* Main content */}
        <div className="bg-gray-800 rounded-xl p-8 md:p-12 border border-gray-700">
          {/* Icon and title */}
          <div className="flex items-start gap-6 mb-8">
            <div className="mb-4">
              <IconComponent size={60} className="text-primary-400" />
            </div>
            <div>
              <Heading as="h1" size="lg" className="text-white mb-2">
                {service.title}
              </Heading>
              <div className="h-1 w-20 bg-gradient-to-r from-primary-400 to-primary-600"></div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12">
            <Heading as="h2" size="md" className="text-white mb-4">
              About This Service
            </Heading>
            <Text size="base" className="text-gray-300 leading-relaxed mb-6">
              {service.description}
            </Text>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                This service page is ready for customization. You can add more
                detailed information, benefits, pricing, case studies, and
                testimonials here.
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="flex gap-4 flex-wrap">
            <Button
              className="bg-gradient-to-r from-accent to-pink-500 text-white hover:from-pink-500 hover:to-accent font-bold"
              onClick={() => (window.location.href = "/#contact")}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white"
              onClick={() => navigate("/#services")}
            >
              View Other Services
            </Button>
          </div>
        </div>

        {/* Additional information sections (template for future updates) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <Heading as="h3" size="sm" className="text-white mb-3">
              Key Benefits
            </Heading>
            <Text size="sm" className="text-gray-400">
              Update this section with specific benefits and advantages of this
              service.
            </Text>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <Heading as="h3" size="sm" className="text-white mb-3">
              Our Process
            </Heading>
            <Text size="sm" className="text-gray-400">
              Add details about how you deliver this service to your clients.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
