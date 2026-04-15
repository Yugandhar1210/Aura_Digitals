import React, { useRef, useState } from "react";
import { Heading, Text } from "../atoms";
import "../styles/testimonials.css";

/**
 * Testimonials section component with horizontal scrolling cards
 */
const Testimonials = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Founder, Tech Startups",
      content:
        "Aura Digitals transformed our online presence. Their strategies were data-driven and results spoke for themselves within the first month.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Marketing Director, E-commerce",
      content:
        "Working with Aura has been a game-changer. They understand the local market dynamics and create campaigns that actually convert.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "CEO, Local Business",
      content:
        "Finally found a digital marketing partner who treats our business like their own. Highly recommended for any Vizag-based business.",
      rating: 5,
    },
    {
      id: 4,
      name: "Sneha Singh",
      role: "Product Manager, SaaS",
      content:
        "Aura's creative approach and technical expertise helped us reach our target audience effectively. Worth every penny!",
      rating: 5,
    },
    {
      id: 5,
      name: "Vikram Reddy",
      role: "Owner, Retail Chain",
      content:
        "From brand strategy to execution, Aura Digitals handles everything with professionalism. Our sales have increased significantly.",
      rating: 5,
    },
  ];

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = 320; // Width of card + gap

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    setTimeout(checkScrollPosition, 600);
  };

  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10,
    );
  };

  React.useEffect(() => {
    checkScrollPosition();
    window.addEventListener("resize", checkScrollPosition);
    return () => window.removeEventListener("resize", checkScrollPosition);
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <Heading as="h2" size="lg" className="mb-4 text-center text-white">
          What Our Clients Say
        </Heading>
        <Text
          size="base"
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Hear from businesses that have grown with Aura Digitals
        </Text>

        {/* Testimonials container */}
        <div className="relative">
          {/* Left scroll button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-gray-800 to-transparent p-3 rounded-r-lg hover:bg-gray-700 transition"
              aria-label="Scroll left"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Scroll container */}
          <div
            ref={scrollContainerRef}
            className="testimonials-scroll-container overflow-x-auto scroll-smooth"
            onScroll={checkScrollPosition}
          >
            <div className="flex gap-6 pb-4">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="testimonial-card flex-shrink-0 w-80 bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Content */}
                  <Text
                    size="sm"
                    className="text-gray-300 mb-6 italic leading-relaxed"
                  >
                    "{testimonial.content}"
                  </Text>

                  {/* Client info */}
                  <div className="border-t border-gray-600 pt-4">
                    <Heading
                      as="div"
                      size="sm"
                      className="text-white font-semibold"
                    >
                      {testimonial.name}
                    </Heading>
                    <Text size="xs" className="text-gray-400">
                      {testimonial.role}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right scroll button */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-gray-800 to-transparent p-3 rounded-l-lg hover:bg-gray-700 transition"
              aria-label="Scroll right"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
