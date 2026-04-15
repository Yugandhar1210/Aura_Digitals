import React, { useEffect, useMemo, useState } from "react";

const BURST_LIFETIME_MS = 1200;
const AMBIENT_BUBBLES = 14;

const createAmbientBubbles = (count) => {
  const bubbles = [];

  for (let i = 0; i < count; i += 1) {
    bubbles.push({
      id: `ambient-${i}`,
      x: 4 + ((i * 7.3) % 92),
      y: 8 + ((i * 11.1) % 78),
      size: 32 + ((i * 13) % 64),
      delay: Number((i * 0.28).toFixed(2)),
      duration: Number((9 + ((i * 1.7) % 6)).toFixed(2)),
      driftX: -16 + ((i * 9) % 32),
      driftY: -20 - ((i * 5) % 24),
    });
  }

  return bubbles;
};

const createBurstParticles = () => {
  const particleCount = 9 + Math.floor(Math.random() * 5);

  return Array.from({ length: particleCount }, (_, index) => {
    const angle =
      (Math.PI * 2 * index) / particleCount + (Math.random() - 0.5) * 0.45;
    const travel = 38 + Math.random() * 78;
    const drift = 10 + Math.random() * 36;

    return {
      id: `${Date.now()}-${index}-${Math.random()}`,
      dx: Math.cos(angle) * travel,
      dy: Math.sin(angle) * travel,
      size: 10 + Math.random() * 22,
      delay: index * 0.02,
      wobble: 7 + Math.random() * 20,
      drift,
      hueShift: -8 + Math.random() * 16,
    };
  });
};

const LiquidBubbles = ({ hostRef }) => {
  const [pointer, setPointer] = useState({ x: 50, y: 42 });
  const [bursts, setBursts] = useState([]);
  const ambientBubbles = useMemo(
    () => createAmbientBubbles(AMBIENT_BUBBLES),
    [],
  );

  useEffect(() => {
    if (!hostRef?.current) return undefined;

    const host = hostRef.current;

    const handlePointerMove = (event) => {
      const bounds = host.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;

      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;

      setPointer({
        x: Math.min(100, Math.max(0, x)),
        y: Math.min(100, Math.max(0, y)),
      });
    };

    const handleClick = (event) => {
      const bounds = host.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;

      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;

      const id = `${Date.now()}-${Math.random()}`;
      const nextBurst = {
        id,
        x: Math.min(100, Math.max(0, x)),
        y: Math.min(100, Math.max(0, y)),
        particles: createBurstParticles(),
      };

      setBursts((prev) => [...prev, nextBurst]);

      window.setTimeout(() => {
        setBursts((prev) => prev.filter((burst) => burst.id !== id));
      }, BURST_LIFETIME_MS);
    };

    host.addEventListener("pointermove", handlePointerMove);
    host.addEventListener("click", handleClick);

    return () => {
      host.removeEventListener("pointermove", handlePointerMove);
      host.removeEventListener("click", handleClick);
    };
  }, [hostRef]);

  return (
    <div
      className="hero-liquid-layer"
      style={{
        "--pointer-x": `${pointer.x}%`,
        "--pointer-y": `${pointer.y}%`,
      }}
    >
      <div className="hero-liquid-glow" />

      {ambientBubbles.map((bubble) => (
        <span
          key={bubble.id}
          className="hero-ambient-bubble"
          style={{
            "--bubble-x": `${bubble.x}%`,
            "--bubble-y": `${bubble.y}%`,
            "--bubble-size": `${bubble.size}px`,
            "--bubble-delay": `${bubble.delay}s`,
            "--bubble-duration": `${bubble.duration}s`,
            "--bubble-drift-x": `${bubble.driftX}px`,
            "--bubble-drift-y": `${bubble.driftY}px`,
          }}
        />
      ))}

      {bursts.map((burst) => (
        <div
          key={burst.id}
          className="hero-burst"
          style={{
            left: `${burst.x}%`,
            top: `${burst.y}%`,
          }}
        >
          <span className="hero-burst-ring" />
          <span className="hero-burst-core" />

          {burst.particles.map((particle) => (
            <span
              key={particle.id}
              className="hero-burst-particle"
              style={{
                "--p-dx": `${particle.dx}px`,
                "--p-dy": `${particle.dy}px`,
                "--p-size": `${particle.size}px`,
                "--p-delay": `${particle.delay}s`,
                "--p-wobble": `${particle.wobble}px`,
                "--p-drift": `${particle.drift}px`,
                "--p-hue": `${particle.hueShift}deg`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default LiquidBubbles;
