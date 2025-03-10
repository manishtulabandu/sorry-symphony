
import React, { useEffect, useRef, useState } from 'react';

interface SorryWallProps {
  count?: number;
}

const SorryWall: React.FC<SorryWallProps> = ({ count = 1000 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  
  // Create an array of sorry variations
  const sorryVariations = [
    "Sorry", "I'm sorry", "Forgive me", "My apologies", 
    "I apologize", "My bad", "My fault", "I regret", 
    "Pardon me", "Excuse me", "I'm to blame"
  ];
  
  // Generate a sorry with random styling
  const generateSorry = (index: number) => {
    const size = Math.random() * 1.2 + 0.8; // between 0.8 and 2
    const opacity = Math.random() * 0.8 + 0.2; // between 0.2 and 1
    const rotation = Math.random() * 60 - 30; // between -30 and 30 degrees
    const text = sorryVariations[Math.floor(Math.random() * sorryVariations.length)];
    
    return (
      <div 
        key={index}
        className="sorry-text animate-fade-in text-apology-accent/90"
        style={{
          fontSize: `${size}rem`,
          opacity: opacity,
          transform: `rotate(${rotation}deg)`,
          animationDelay: `${index * 0.01}s`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          zIndex: Math.floor(Math.random() * 10)
        }}
      >
        {text}
      </div>
    );
  };
  
  // Create an array of sorry elements
  const sorries = Array.from({ length: count }, (_, i) => generateSorry(i));
  
  // Use Intersection Observer to check when the component is visible
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-apology-light/50 backdrop-blur-sm">
      <div className="absolute inset-0">
        {visible && sorries}
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="glass-panel p-8 max-w-2xl w-full animate-fade-in-up">
          <h2 className="text-4xl font-medium text-apology-dark mb-4 text-center">
            A Thousand Apologies
          </h2>
          <p className="text-apology-dark/90 text-center mb-6">
            If I could say sorry a thousand times, I would. Each word represents a moment
            I wish I could take back, a feeling I never meant to hurt, and a promise to do better.
          </p>
          <div className="flex justify-center">
            <a href="#message" className="apology-button">
              Read My Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SorryWall;
