
import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AuthModal from '@/components/AuthModal';

const Index = () => {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'signin' | 'signup' }>({
    isOpen: false,
    mode: 'signin'
  });

  const handleAuthAction = (action: 'signin' | 'signup') => {
    setAuthModal({ isOpen: true, mode: action });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'signin' });
  };

  const switchAuthMode = () => {
    setAuthModal(prev => ({ 
      ...prev, 
      mode: prev.mode === 'signin' ? 'signup' : 'signin' 
    }));
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen">
        <Header onAuthAction={handleAuthAction} />
        <HeroSection onAuthAction={handleAuthAction} />
        <FeaturesSection />
        
        <AuthModal
          isOpen={authModal.isOpen}
          onClose={closeAuthModal}
          mode={authModal.mode}
          onSwitchMode={switchAuthMode}
        />
      </div>
    </ThemeProvider>
  );
};

export default Index;
