
import React, { useEffect, useRef, useState } from 'react';
import ApologyButton from './ApologyButton';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MessageSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    observer.observe(sectionRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div 
      id="message" 
      ref={sectionRef} 
      className="min-h-screen w-full py-24 relative bg-gradient-to-b from-apology-medium/50 to-apology-light/80"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className={`glass-panel p-8 md:p-12 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-8">
            <Heart className="text-apology-accent animate-heart-beat h-12 w-12" />
          </div>
          
          <h2 className="text-4xl font-medium text-apology-dark mb-6 text-center">
            My Heartfelt Apology
          </h2>
          
          <div className="space-y-6 text-apology-dark/90">
            <p>
              I know words alone cannot undo what happened, but I want you to know how deeply sorry I am. 
              The moment I realized I hurt you, my heart sank. That was never my intention.
            </p>
            
            <p>
              What we have is special and valuable to me. I cherish every moment we've shared, 
              and the thought of causing you pain makes me feel terrible. I take full responsibility 
              for my actions and their impact on you.
            </p>
            
            <p>
              I understand if you need time, and I respect that. Whenever you're ready to talk, 
              I'm here to listen. I want to understand better how you feel and learn from this 
              mistake so I never repeat it.
            </p>
            
            <p>
              Thank you for being part of my life. I promise to be more mindful, more present, 
              and more considerate of your feelings. You deserve nothing less.
            </p>
          </div>
          
          <div className="border-t border-apology-primary/20 mt-8 pt-8 flex flex-col sm:flex-row justify-center gap-4">
            <ApologyButton onClick={() => navigate('/message')}>
              See Personal Message
            </ApologyButton>
            
            <ApologyButton variant="outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Back to Top
            </ApologyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
