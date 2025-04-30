import React from "react";
import { useParticles } from "./hooks/useParticles";

interface ParticlesProps {
  count?: number;
}

const Particles: React.FC<ParticlesProps> = ({ count = 100 }) => {
  const { canvasRef } = useParticles({ count });

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      }}
    />
  );
};

export default Particles;
