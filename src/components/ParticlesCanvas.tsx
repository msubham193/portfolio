import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Generate random points in a 3D space
const generatePoints = (count: number, radius: number) => {
  const points = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const angle = Math.random() * Math.PI * 2;
    const z = Math.random() * 2 - 1;
    const r = Math.sqrt(1 - z * z) * radius;

    points[i3] = Math.cos(angle) * r; // x
    points[i3 + 1] = Math.sin(angle) * r; // y
    points[i3 + 2] = z * radius; // z
  }

  return points;
};

interface PointsProps {
  color: string;
  count: number;
}

const Points = ({ color, count = 100 }: PointsProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const radius = 10;
  const points = React.useMemo(() => generatePoints(count, radius), [count]);

  // Create a material that won't rely on drei
  const material = React.useMemo(() => {
    return new THREE.PointsMaterial({
      color: color,
      size: 0.15,
      sizeAttenuation: true,
      transparent: true,
      depthWrite: false,
    });
  }, [color]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x =
        Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
      pointsRef.current.rotation.y =
        Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <primitive object={material} />
    </points>
  );
};

interface ParticlesCanvasProps {
  className?: string;
}

const ParticlesCanvas = ({ className }: ParticlesCanvasProps) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <Points color="#9b87f5" count={500} />
        <Points color="#d6bcfa" count={300} />
      </Canvas>
    </div>
  );
};

export default ParticlesCanvas;
