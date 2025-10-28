import React, { useEffect, useRef, useCallback } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameId = useRef<number>();

  const createStars = useCallback((canvas: HTMLCanvasElement) => {
    const numStars = Math.floor((canvas.width * canvas.height) / 9000);
    const newStars: Star[] = [];
    for (let i = 0; i < numStars; i++) {
      newStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.2 + 0.05,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    starsRef.current = newStars;
  }, []);

  const animate = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    starsRef.current.forEach(star => {
      star.y += star.speed;
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();
    });
    animationFrameId.current = requestAnimationFrame(() => animate(ctx, canvas));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
      createStars(canvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      animate(ctx, canvas);
    };

    setup();
    window.addEventListener('resize', setup);

    // Re-calculate on content changes
    const resizeObserver = new ResizeObserver(setup);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener('resize', setup);
      resizeObserver.disconnect();
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [createStars, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ backgroundColor: '#010409' }}
    />
  );
};

export default StarField;
