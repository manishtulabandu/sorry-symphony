
import React, { useEffect } from 'react';
import ApologyHero from '@/components/ApologyHero';
import SorryWall from '@/components/SorryWall';
import MessageSection from '@/components/MessageSection';

const Index: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <ApologyHero />
      
      <div id="sorries">
        <SorryWall />
      </div>
      
      <MessageSection />
      
      <footer className="py-6 text-center text-apology-dark/60 bg-apology-light/90">
        <div className="container mx-auto px-6">
          <p className="text-sm">Made with love and regret. I hope this helps us heal.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
