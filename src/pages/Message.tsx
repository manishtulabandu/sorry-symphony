
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApologyButton from '@/components/ApologyButton';
import FloatingHearts from '@/components/FloatingHearts';

const Message: React.FC = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Trigger animation after a short delay
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // The personal customizable message
  const personalMessage = "I miss your smile, your laugh, and everything about you. Please give me a chance to make things right.";
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-apology-light to-apology-medium py-16">
      <FloatingHearts count={30} opacity={0.4} />
      
      <div className={`glass-panel max-w-xl w-full mx-6 p-8 md:p-12 z-10 transition-all duration-1000 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <h1 className="text-4xl md:text-5xl font-medium text-apology-dark mb-8 text-center">
          Just For You
        </h1>
        
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-sm">
          <p className="text-xl text-apology-dark/90 italic font-serif leading-relaxed text-center">
            "{personalMessage}"
          </p>
        </div>
        
        <div className="space-y-6 text-apology-dark/80 mb-8">
          <p>
            I'm taking this moment to reflect on what happened and how I can be better. 
            I value our relationship more than words can express, and I'm committed to making 
            things right.
          </p>
          
          <p>
            I hope this small gesture shows that I'm serious about making amends. 
            I want to rebuild what we have, stronger than before.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <ApologyButton onClick={() => navigate('/')}>
            Return Home
          </ApologyButton>
        </div>
      </div>
    </div>
  );
};

export default Message;
