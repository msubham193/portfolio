/**
 * Utility functions for particle system
 */

export interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  glowing: boolean;
}

/**
 * Generate an array of particle objects with random properties
 */
export const generateParticles = (count: number): Particle[] => {
  const particles: Particle[] = [];
  const colors = [
    "rgba(139, 92, 246, 0.7)", // Purple
    "rgba(59, 130, 246, 0.7)", // Blue
    "rgba(99, 102, 241, 0.7)", // Indigo
    "rgba(168, 85, 247, 0.7)", // Violet
    "rgba(236, 72, 153, 0.7)", // Pink
  ];

  for (let i = 0; i < count; i++) {
    const size = Math.random() * 4 + 1;
    particles.push({
      x: Math.random() * (window.innerWidth - size * 2) + size,
      y: Math.random() * (window.innerHeight - size * 2) + size,
      size,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * 2 - 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.1,
      glowing: Math.random() > 0.8, // 20% of particles will glow
    });
  }

  return particles;
};

/**
 * Calculate distance between two points
 */
export const calculateDistance = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};
