import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const CURSOR_CIRCLES = [
  { size: 16, opacity: 1, maxOffset: 0, smoothing: 0.3 },
  { size: 30, opacity: 0.72, maxOffset: 14, smoothing: 0.15 },
  { size: 10, opacity: 0.52, maxOffset: 30, smoothing: 0.1 },
  { size: 8, opacity: 0.34, maxOffset: 48, smoothing: 0.05 },
];

const getCursorCircleStyle = (index, opacity) => {
  if (index === 0) {
    return {
      opacity,
      background:
        "linear-gradient(135deg, #ff8c42 0%, #ec4899 50%, #3b82f6 100%)",
      boxShadow:
        "0 0 12px rgba(255, 140, 66, 0.6), 0 0 8px rgba(236, 72, 153, 0.4)",
      border: "none",
    };
  }

  if (index === 1) {
    return {
      opacity: 1,
      background: "transparent",
      border: "1px solid #000000",
      boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.12)",
    };
  }

  if (index === 2) {
    return {
      opacity: 0.85,
      background:
        "radial-gradient(circle at 30% 30%, #ffffff 0%, #cbd5e1 75%, #94a3b8 100%)",
      border: "none",
      boxShadow: "0 0 10px rgba(148, 163, 184, 0.45)",
    };
  }

  return {
    opacity: 0.9,
    background: "transparent",
    border: "1.5px solid #38bdf8",
    boxShadow: "0 0 9px rgba(56, 189, 248, 0.55)",
  };
};

/**
 * Animated cursor with multi-colored ripple effects
 * Creates 3 different ripples on click that merge when cursor stops
 */
const AnimatedCursor = ({ isActive = true }) => {
  const [ripples, setRipples] = useState([]);
  const [showCursor, setShowCursor] = useState(false);
  const [isCursorMoving, setIsCursorMoving] = useState(false);
  const [circlePositions, setCirclePositions] = useState(() =>
    CURSOR_CIRCLES.map(() => ({ x: 0, y: 0 })),
  );

  const showCursorRef = useRef(false);
  const cursorStopTimeoutRef = useRef(null);
  const mouseTargetRef = useRef({ x: 0, y: 0 });
  const previousMouseRef = useRef({ x: 0, y: 0, time: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const circlesRef = useRef(CURSOR_CIRCLES.map(() => ({ x: 0, y: 0 })));

  const rippleColors = [
    { name: "orange", hex: "#ff8c42", rgb: "255, 140, 66" },
    { name: "pink", hex: "#ec4899", rgb: "236, 72, 153" },
    { name: "blue", hex: "#3b82f6", rgb: "59, 130, 246" },
  ];

  // Handle mouse movement to track real cursor
  useEffect(() => {
    if (!isActive) return;

    const handleMouseMove = (e) => {
      const now = performance.now();
      const prev = previousMouseRef.current;

      if (prev.time > 0) {
        const dt = Math.max(now - prev.time, 1);
        velocityRef.current = {
          x: (e.clientX - prev.x) / dt,
          y: (e.clientY - prev.y) / dt,
        };
      }

      previousMouseRef.current = { x: e.clientX, y: e.clientY, time: now };
      mouseTargetRef.current = { x: e.clientX, y: e.clientY };

      if (!showCursorRef.current) {
        const initialPositions = CURSOR_CIRCLES.map(() => ({
          x: e.clientX,
          y: e.clientY,
        }));
        circlesRef.current = initialPositions;
        setCirclePositions(initialPositions);
      }

      showCursorRef.current = true;
      setShowCursor(true);
      setIsCursorMoving(true);

      // Clear previous timeout
      if (cursorStopTimeoutRef.current) {
        clearTimeout(cursorStopTimeoutRef.current);
      }

      // Set timeout to detect when cursor stops
      cursorStopTimeoutRef.current = setTimeout(() => {
        setIsCursorMoving(false);
      }, 120);
    };

    const handleMouseLeave = () => {
      showCursorRef.current = false;
      setShowCursor(false);
      setIsCursorMoving(false);
      velocityRef.current = { x: 0, y: 0 };
      previousMouseRef.current = { x: 0, y: 0, time: 0 };
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

  // Animate circles with velocity-based max offset while moving.
  useEffect(() => {
    if (!isActive) return;

    let animationFrameId;

    const animateCircles = () => {
      const { x: targetX, y: targetY } = mouseTargetRef.current;
      const { x: vx, y: vy } = velocityRef.current;
      const speed = Math.hypot(vx, vy);
      const speedFactor = Math.min(speed / 1.4, 1);

      const direction =
        speed > 0.001 ? { x: vx / speed, y: vy / speed } : { x: 0, y: 0 };

      const nextPositions = circlesRef.current.map((circle, index) => {
        const config = CURSOR_CIRCLES[index];
        const desiredX = targetX - direction.x * config.maxOffset * speedFactor;
        const desiredY = targetY - direction.y * config.maxOffset * speedFactor;

        return {
          x: circle.x + (desiredX - circle.x) * config.smoothing,
          y: circle.y + (desiredY - circle.y) * config.smoothing,
        };
      });

      circlesRef.current = nextPositions;
      setCirclePositions(nextPositions);

      velocityRef.current = {
        x: velocityRef.current.x * 0.86,
        y: velocityRef.current.y * 0.86,
      };

      animationFrameId = requestAnimationFrame(animateCircles);
    };

    animationFrameId = requestAnimationFrame(animateCircles);

    return () => {
      cancelAnimationFrame(animationFrameId);
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

  return (
    <>
      {/* Animated cursor with dynamic trailing circles */}
      {CURSOR_CIRCLES.map((circle, index) => {
        const position = circlePositions[index] || { x: 0, y: 0 };
        const visualStyle = getCursorCircleStyle(index, circle.opacity);
        return (
          <div
            key={`cursor-circle-${index}`}
            className="fixed pointer-events-none z-50 rounded-full"
            style={{
              width: circle.size,
              height: circle.size,
              left: position.x - circle.size / 2,
              top: position.y - circle.size / 2,
              ...visualStyle,
            }}
          />
        );
      })}

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
                  x: mouseTargetRef.current.x - ripple.x,
                  y: mouseTargetRef.current.y - ripple.y,
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
