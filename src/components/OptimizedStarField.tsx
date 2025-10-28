import React, { useEffect, useRef, useCallback } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkle: number;
  color: string;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
}

const OptimizedStarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const meteorsRef = useRef<Meteor[]>([]);
  const animationFrameId = useRef<number>();

  const colors = [
    'rgba(255, 255, 255, ',
    'rgba(9, 105, 218, ',     // GitHub blue
    'rgba(255, 0, 64, ',      // Accent red
    'rgba(31, 41, 55, ',      // Navy
  ];

  const createStars = useCallback((canvas: HTMLCanvasElement) => {
    const numStars = Math.floor((canvas.width * canvas.height) / 8000);
    const newStars: Star[] = [];
    
    for (let i = 0; i < numStars; i++) {
      newStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.3 + 0.05,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    starsRef.current = newStars;
  }, []);

  const createMeteors = useCallback((canvas: HTMLCanvasElement) => {
    const newMeteors: Meteor[] = [];
    for (let i = 0; i < 3; i++) {
      newMeteors.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.3,
        length: Math.random() * 80 + 20,
        speed: Math.random() * 3 + 2,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }
    meteorsRef.current = newMeteors;
  }, []);

  const animate = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Animate stars
    starsRef.current.forEach(star => {
      star.y += star.speed;
      star.twinkle += 0.02;
      
      if (star.y > canvas.height) {
        star.y = -10;
        star.x = Math.random() * canvas.width;
      }

      const twinkleOpacity = star.opacity + Math.sin(star.twinkle) * 0.3;
      const finalOpacity = Math.max(0.1, Math.min(1, twinkleOpacity));

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      
      // Create glow effect
      const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 4);
      gradient.addColorStop(0, star.color + finalOpacity + ')');
      gradient.addColorStop(1, star.color + '0)');
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Add core star
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = star.color + '1)';
      ctx.fill();
    });

    // Animate meteors
    meteorsRef.current.forEach((meteor, index) => {
      meteor.x += meteor.speed * 2;
      meteor.y += meteor.speed;

      if (meteor.x > canvas.width + meteor.length || meteor.y > canvas.height) {
        meteor.x = -meteor.length;
        meteor.y = Math.random() * canvas.height * 0.3;
        meteor.opacity = Math.random() * 0.5 + 0.3;
      }

      // Draw meteor trail
      const gradient = ctx.createLinearGradient(
        meteor.x - meteor.length, meteor.y - meteor.length * 0.5,
        meteor.x, meteor.y
      );
      gradient.addColorStop(0, `rgba(255, 0, 64, 0)`);
      gradient.addColorStop(0.5, `rgba(255, 0, 64, ${meteor.opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(255, 255, 255, ${meteor.opacity})`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(meteor.x - meteor.length, meteor.y - meteor.length * 0.5);
      ctx.lineTo(meteor.x, meteor.y);
      ctx.stroke();
    });

    animationFrameId.current = requestAnimationFrame(() => animate(ctx, canvas));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = Math.max(document.body.scrollHeight, window.innerHeight) * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = Math.max(document.body.scrollHeight, window.innerHeight) + 'px';
      ctx.scale(dpr, dpr);
      
      createStars(canvas);
      createMeteors(canvas);
      
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      animate(ctx, canvas);
    };

    setup();
    
    const handleResize = () => {
      setTimeout(setup, 100);
    };

    window.addEventListener('resize', handleResize);
    
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [createStars, createMeteors, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ 
        background: 'radial-gradient(ellipse at center, #0d1117 0%, #010409 100%)',
      }}
    />
  );
};

export default OptimizedStarField;
