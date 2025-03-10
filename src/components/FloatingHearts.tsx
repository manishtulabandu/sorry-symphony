
import React, { useEffect, useRef } from 'react';

interface FloatingHeartsProps {
  count?: number;
  speed?: number;
  opacity?: number;
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ 
  count = 30, 
  speed = 1,
  opacity = 0.6 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Remove any existing hearts to prevent duplicates on re-render
    container.innerHTML = '';
    
    // Create hearts
    for (let i = 0; i < count; i++) {
      const heart = document.createElement('div');
      
      // Randomize size
      const size = Math.random() * 20 + 10;
      
      // Randomize position
      const posX = Math.random() * containerWidth;
      const posY = Math.random() * containerHeight;
      
      // Randomize animation duration
      const duration = (Math.random() * 8 + 10) / speed;
      
      // Randomize starting delay
      const delay = Math.random() * 5;
      
      // Apply styles
      heart.innerHTML = '❤';
      heart.style.position = 'absolute';
      heart.style.left = `${posX}px`;
      heart.style.top = `${posY}px`;
      heart.style.fontSize = `${size}px`;
      heart.style.color = 'var(--color-primary)';
      heart.style.opacity = (Math.random() * opacity + 0.2).toString();
      heart.style.animation = `float ${duration}s ease-in-out infinite`;
      heart.style.animationDelay = `${delay}s`;
      heart.className = 'text-apology-primary pointer-events-none';
      
      container.appendChild(heart);
    }
  }, [count, speed, opacity]);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default FloatingHearts;
