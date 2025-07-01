'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import SplashScreen from './SplashScreen';

interface SplashContextType {
  showSplash: boolean;
  setShowSplash: (show: boolean) => void;
}

const SplashContext = createContext<SplashContextType | undefined>(undefined);

export const useSplash = () => {
  const context = useContext(SplashContext);
  if (context === undefined) {
    throw new Error('useSplash must be used within a SplashProvider');
  }
  return context;
};

interface SplashProviderProps {
  children: ReactNode;
}

export const SplashProvider: React.FC<SplashProviderProps> = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const value = {
    showSplash,
    setShowSplash,
  };

  return (
    <SplashContext.Provider value={value}>
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        children
      )}
    </SplashContext.Provider>
  );
}; 