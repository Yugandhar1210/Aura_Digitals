import React from "react";
import { Heading, Text } from "../atoms";
import * as FaIcons from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/**
 * ServiceCard component - flipable card that redirects on click
 */
const ServiceCard = ({
  id,
  title,
  description,
  icon,
  className = "",
  ...props
}) => {
  const navigate = useNavigate();

  // Map icon names to actual icon components
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

  const IconComponent = getIcon(icon);

  const handleCardClick = () => {
    navigate(`/service/${id}`, { state: { title, description, icon } });
  };

  return (
    <div
      className={`flip-card ${className}`}
      onClick={handleCardClick}
      {...props}
    >
      <div className="flip-card-inner">
        {/* Front of card */}
        <div className="flip-card-front">
          <div>
            <div className="mb-4">
              <IconComponent size={40} className="text-primary-400" />
            </div>
            <Heading as="h3" size="sm" className="mb-3 text-white">
              {title}
            </Heading>
            {/* <Text size="sm" className="text-gray-400">
              {description}
            </Text> */}
          </div>
          {/* <div className="text-center text-primary-400 text-sm font-semibold">
            Click to Learn More →
          </div> */}
        </div>

        {/* Back of card */}
        <div className="flip-card-back">
          <div>
            <Heading as="h3" size="sm" className="mb-3 text-white">
              {title}
            </Heading>
            <Text size="sm" className="text-white leading-relaxed">
              {description}
            </Text>
          </div>
          <div className="text-center text-white text-sm font-semibold">
            Click to View Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
