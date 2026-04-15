import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Animated cursor with multi-colored ripple effects
 * Creates 3 different ripples on click that merge when cursor stops
 */
const AnimatedCursor = ({ isActive = true }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);
  const [showCursor, setShowCursor] = useState(false);
  const [isCursorMoving, setIsCursorMoving] = useState(false);
  const cursorStopTimeoutRef = useRef(null);
  const lastPositionRef = useRef({ x: 0, y: 0 });

  const rippleColors = [
    { name: "orange", hex: "#ff8c42", rgb: "255, 140, 66" },
    { name: "pink", hex: "#ec4899", rgb: "236, 72, 153" },
    { name: "blue", hex: "#3b82f6", rgb: "59, 130, 246" },
  ];

  // Handle mouse movement to track real cursor
  useEffect(() => {
    if (!isActive) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setShowCursor(true);
      setIsCursorMoving(true);

      // Clear previous timeout
      if (cursorStopTimeoutRef.current) {
        clearTimeout(cursorStopTimeoutRef.current);
      }

      // Set timeout to detect when cursor stops
      cursorStopTimeoutRef.current = setTimeout(() => {
        setIsCursorMoving(false);
      }, 500);

      lastPositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      setShowCursor(false);
      setIsCursorMoving(false);
      if (cursorStopTimeoutRef.current) {
        clearTimeout(cursorStopTimeoutRef.current);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (cursorStopTimeoutRef.current) {
        clearTimeout(cursorStopTimeoutRef.current);
      }
    };
  }, [isActive]);

  // Handle click ripple effect
  useEffect(() => {
    if (!isActive) return;

    const handleClick = (e) => {
      createRipples(e.clientX, e.clientY);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isActive]);

  const createRipples = (x, y) => {
    // Create 3 ripples with different delays and sizes
    rippleColors.forEach((color, idx) => {
      setTimeout(() => {
        const id = Date.now() + Math.random();
        const newRipple = {
          id,
          x,
          y,
          color: color.hex,
          colorRgb: color.rgb,
          colorName: color.name,
          index: idx,
        };
        setRipples((prev) => [...prev, newRipple]);

        // Remove ripple after animation completes
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== id));
        }, 800);
      }, idx * 100);
    });
  };

  if (!isActive || !showCursor) return null;

  const cursorX = position.x - 8;
  const cursorY = position.y - 8;

  return (
    <>
      {/* Animated cursor with concentric circles */}
      <motion.div
        className="fixed pointer-events-none z-50"
        animate={{
          x: cursorX,
          y: cursorY,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        {/* Gradient circle cursor - 0px distance */}
        <div
          className="w-4 h-4 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, #ff8c42 0%, #ec4899 50%, #3b82f6 100%)",
            boxShadow:
              "0 0 12px rgba(255, 140, 66, 0.6), 0 0 8px rgba(236, 72, 153, 0.4)",
          }}
        />

        {/* Circle at 20px distance */}
        <div
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: "50%",
            top: "-20px",
            transform: "translateX(-50%)",
            background:
              "linear-gradient(135deg, #ff8c42 0%, #ec4899 50%, #3b82f6 100%)",
            opacity: 0.7,
            boxShadow:
              "0 0 10px rgba(255, 140, 66, 0.5), 0 0 6px rgba(236, 72, 153, 0.3)",
          }}
        />

        {/* Circle at 40px distance */}
        <div
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            left: "50%",
            top: "-40px",
            transform: "translateX(-50%)",
            background:
              "linear-gradient(135deg, #ff8c42 0%, #ec4899 50%, #3b82f6 100%)",
            opacity: 0.5,
            boxShadow:
              "0 0 8px rgba(255, 140, 66, 0.4), 0 0 4px rgba(236, 72, 153, 0.2)",
          }}
        />

        {/* Circle at 60px distance */}
        <div
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: "50%",
            top: "-60px",
            transform: "translateX(-50%)",
            background:
              "linear-gradient(135deg, #ff8c42 0%, #ec4899 50%, #3b82f6 100%)",
            opacity: 0.3,
            boxShadow:
              "0 0 6px rgba(255, 140, 66, 0.3), 0 0 2px rgba(236, 72, 153, 0.1)",
          }}
        />
      </motion.div>

      {/* Ripple effects - colorful circles */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
          // Merge ripples toward cursor when stopped
          animate={
            !isCursorMoving
              ? {
                  x: lastPositionRef.current.x - ripple.x,
                  y: lastPositionRef.current.y - ripple.y,
                }
              : {
                  x: 0,
                  y: 0,
                }
          }
          transition={
            !isCursorMoving
              ? {
                  duration: 0.8,
                  ease: "easeInOut",
                }
              : {
                  duration: 0.3,
                  ease: "easeOut",
                }
          }
        >
          {/* Outer expanding ring */}
          <motion.div
            className="absolute rounded-full border-2"
            initial={{
              width: 0,
              height: 0,
              opacity: 1,
              borderColor: ripple.color,
            }}
            animate={{
              width: 120 + ripple.index * 40,
              height: 120 + ripple.index * 40,
              opacity: 0,
              borderColor: ripple.color,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            style={{
              left: -(60 + ripple.index * 20),
              top: -(60 + ripple.index * 20),
              boxShadow: `0 0 ${25 + ripple.index * 8}px ${ripple.color}`,
            }}
          />

          {/* Middle glow circle */}
          <motion.div
            className="absolute rounded-full"
            initial={{
              width: 16,
              height: 16,
              opacity: 0.8,
              backgroundColor: ripple.color,
            }}
            animate={{
              width: 4,
              height: 4,
              opacity: 0,
              backgroundColor: ripple.color,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            style={{
              left: -8,
              top: -8,
              boxShadow: `0 0 ${18 + ripple.index * 6}px ${ripple.color}`,
            }}
          />

          {/* Solid center dot */}
          <motion.div
            className="absolute rounded-full"
            initial={{
              width: 10,
              height: 10,
              opacity: 1,
              backgroundColor: ripple.color,
            }}
            animate={{
              width: 2,
              height: 2,
              opacity: 0.2,
              backgroundColor: ripple.color,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            style={{
              left: -5,
              top: -5,
              boxShadow: `0 0 ${12 + ripple.index * 4}px ${ripple.color}`,
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default AnimatedCursor;
