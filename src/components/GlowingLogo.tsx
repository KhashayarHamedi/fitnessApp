import React, { useState, useEffect, useRef, useCallback } from 'react';
import './glow.css';

interface GlowingLogoProps {
  src: string;
  alt: string;
  size?: number;
  colors?: [string, string, string];
  intensity?: number;
  showRing?: boolean;
  showSparks?: boolean;
  className?: string;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  color: string;
}

const GlowingLogo: React.FC<GlowingLogoProps> = ({
  src,
  alt,
  size = 680,
  colors = ['#FFB347', '#FFD700', '#FF1493'], // amber, gold, magenta
  intensity = 0.75,
  showRing = true,
  showSparks = true,
  className = '',
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: size, height: size });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const sparksRef = useRef<Spark[]>([]);
  const lastTimeRef = useRef<number>(0);

  // Particle system constants
  const MAX_SPARKS = 50;
  const SPAWN_RATE = 0.3; // sparks per frame
  const SPARK_SPEED = 0.5;
  const SPARK_SIZE_RANGE = { min: 1, max: 4 };
  const SPARK_LIFE_RANGE = { min: 60, max: 120 }; // frames

  // Initialize image dimensions
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      setImageDimensions({
        width: size,
        height: size / aspectRatio,
      });
      setImageLoaded(true);
    };
    img.src = src;
  }, [src, size]);

  // Canvas resize handler
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
  }, []);

  // Initialize canvas
  useEffect(() => {
    if (!showSparks) return;

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [showSparks, resizeCanvas]);

  // Create new spark
  const createSpark = useCallback((canvas: HTMLCanvasElement): Spark => {
    const centerX = canvas.width / (2 * window.devicePixelRatio);
    const centerY = canvas.height / (2 * window.devicePixelRatio);
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 50 + 20;
    
    return {
      x: centerX + Math.cos(angle) * distance,
      y: centerY + Math.sin(angle) * distance,
      vx: (Math.random() - 0.5) * SPARK_SPEED * 2,
      vy: (Math.random() - 0.5) * SPARK_SPEED * 2,
      size: Math.random() * (SPARK_SIZE_RANGE.max - SPARK_SIZE_RANGE.min) + SPARK_SIZE_RANGE.min,
      opacity: Math.random() * 0.8 + 0.2,
      life: 0,
      maxLife: Math.random() * (SPARK_LIFE_RANGE.max - SPARK_LIFE_RANGE.min) + SPARK_LIFE_RANGE.min,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
  }, [colors]);

  // Update and render sparks
  const updateSparks = useCallback((deltaTime: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !showSparks) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Spawn new sparks
    if (Math.random() < SPAWN_RATE && sparksRef.current.length < MAX_SPARKS) {
      sparksRef.current.push(createSpark(canvas));
    }

    // Update and render existing sparks
    sparksRef.current = sparksRef.current.filter(spark => {
      // Update position
      spark.x += spark.vx;
      spark.y += spark.vy;
      spark.life++;

      // Remove dead sparks
      if (spark.life >= spark.maxLife) {
        return false;
      }

      // Calculate opacity based on life
      const lifeProgress = spark.life / spark.maxLife;
      const currentOpacity = spark.opacity * (1 - lifeProgress);

      // Render spark
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = currentOpacity * intensity;
      
      // Create gradient for spark
      const gradient = ctx.createRadialGradient(
        spark.x, spark.y, 0,
        spark.x, spark.y, spark.size
      );
      gradient.addColorStop(0, spark.color);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();

      return true;
    });
  }, [showSparks, intensity, createSpark]);

  // Animation loop
  useEffect(() => {
    if (!showSparks) return;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      updateSparks(deltaTime);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [showSparks, updateSparks]);

  const containerStyle = {
    '--glow-color-1': colors[0],
    '--glow-color-2': colors[1],
    '--glow-color-3': colors[2],
    '--glow-intensity': intensity,
    width: `${imageDimensions.width}px`,
    height: `${imageDimensions.height}px`,
  } as React.CSSProperties;

  return (
    <div
      className={`glowing-logo-container ${showRing ? 'with-ring' : ''} ${className}`}
      style={containerStyle}
    >
      {/* Mesh gradient background layer */}
      <div className="mesh-gradient-bg" />
      
      {/* Sparks canvas */}
      {showSparks && (
        <canvas
          ref={canvasRef}
          className="sparks-canvas"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        />
      )}
      
      {/* Outer glow ring */}
      {showRing && <div className="outer-glow-ring" />}
      
      {/* Logo image with bloom effect */}
      <img
        src={src}
        alt={alt}
        className={`glowing-logo ${imageLoaded ? 'loaded' : ''}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
        onLoad={() => setImageLoaded(true)}
      />
      
      {/* Additional bloom layers */}
      <div className="bloom-layer bloom-layer-1" />
      <div className="bloom-layer bloom-layer-2" />
      <div className="bloom-layer bloom-layer-3" />
    </div>
  );
};

export default GlowingLogo;
