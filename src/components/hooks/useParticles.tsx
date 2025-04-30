import { useRef, useEffect } from "react";
import {
  Particle,
  generateParticles,
  calculateDistance,
} from "../utils/ParticleUtils";

interface UseParticlesProps {
  count: number;
}

export const useParticles = ({ count }: UseParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationFrameRef = useRef<number | null>(null);

  // Initialize particles
  const initParticles = () => {
    particlesRef.current = generateParticles(count);
  };

  // Connect particles with lines if they're close enough
  const connectParticles = (p1: Particle, index: number) => {
    if (!contextRef.current) return;

    const ctx = contextRef.current;

    for (let i = index + 1; i < particlesRef.current.length; i++) {
      const p2 = particlesRef.current[i];
      const distance = calculateDistance(p1.x, p1.y, p2.x, p2.y);

      if (distance < 150) {
        // The closer they are, the more opaque the line
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 150})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.closePath();
      }
    }
  };

  // Animation loop
  const animate = () => {
    if (!contextRef.current || !canvasRef.current) return;

    const ctx = contextRef.current;
    const canvas = canvasRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw and update particles
    particlesRef.current.forEach((particle, index) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Bounce off edges
      if (
        particle.x > canvas.width - particle.size ||
        particle.x < particle.size
      ) {
        particle.speedX = -particle.speedX;
      }
      if (
        particle.y > canvas.height - particle.size ||
        particle.y < particle.size
      ) {
        particle.speedY = -particle.speedY;
      }

      // Mouse interaction
      const mouseDistance = calculateDistance(
        mouseRef.current.x,
        mouseRef.current.y,
        particle.x,
        particle.y
      );

      if (mouseDistance < 150) {
        // Create a repelling force from the mouse
        const angle = Math.atan2(
          particle.y - mouseRef.current.y,
          particle.x - mouseRef.current.x
        );
        const force = (150 - mouseDistance) / 1500;
        particle.speedX += Math.cos(angle) * force;
        particle.speedY += Math.sin(angle) * force;

        // Limit speed
        const speed = Math.sqrt(
          particle.speedX * particle.speedX + particle.speedY * particle.speedY
        );
        if (speed > 3) {
          particle.speedX = (particle.speedX / speed) * 3;
          particle.speedY = (particle.speedY / speed) * 3;
        }
      }

      // Draw the particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;

      // Add glow effect
      if (particle.glowing) {
        const time = Date.now() / 1000;
        const glow = Math.sin(time + index) * 0.5 + 0.5; // Value between 0 and 1
        ctx.shadowBlur = 15 * glow;
        ctx.shadowColor = particle.color;
      } else {
        ctx.shadowBlur = 0;
      }

      ctx.fill();
      ctx.closePath();

      // Draw connections between nearby particles
      connectParticles(particle, index);
    });

    // Call next frame
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Set up mouse tracking
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches[0]) {
        mouseRef.current = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        };
      }
    };

    const context = canvas.getContext("2d");
    if (!context) return;
    contextRef.current = context;

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    handleResize();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [count]);

  return { canvasRef };
};
