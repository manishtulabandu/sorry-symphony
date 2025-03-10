
import React, { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import FloatingHearts from './FloatingHearts';
import ApologyButton from './ApologyButton';

const ApologyHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();
  
  // Handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background layers for parallax effect */}
      <div 
        className="parallax-layer bg-gradient-to-b from-apology-light to-apology-medium" 
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      
      <div 
        className="parallax-layer opacity-20"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <FloatingHearts count={isMobile ? 15 : 30} opacity={0.3} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full mx-auto px-6 text-center">
        <span className="inline-block text-sm uppercase tracking-widest text-apology-accent/80 mb-2 animate-fade-in">
          From the heart
        </span>
        
        <h1 className="text-5xl md:text-7xl font-medium mb-6 text-apology-dark animate-blur-in">
          I'm Deeply Sorry
        </h1>
        
        <p className="text-lg md:text-xl text-apology-dark/80 max-w-2xl mx-auto mb-8 animate-fade-in-up">
          Words cannot express how sorry I am. I value us, our relationship, and the trust we've built. 
          Please accept this as the beginning of my apology.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <ApologyButton onClick={() => document.getElementById('sorries')?.scrollIntoView()}>
            See My 1000 Sorries
          </ApologyButton>
          
          <ApologyButton variant="outline" onClick={() => document.getElementById('message')?.scrollIntoView()}>
            Read My Message
          </ApologyButton>
        </div>
      </div>
    </div>
  );
};

export default ApologyHero;
