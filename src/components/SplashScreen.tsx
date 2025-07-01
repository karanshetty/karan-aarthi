'use client';

import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer1 = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Auto-transition after 3 seconds
    const timer2 = setTimeout(() => {
      handleExit();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleExit = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500);
  };

  // Realistic leaf SVG component
  const LeafDecoration = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
    <div className={`absolute ${className} ${flip ? 'scale-x-[-1]' : ''}`}>
      <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-50">
        {/* Large realistic leaf */}
        <g transform="translate(30, 20)">
          <path
            d="M30 5 C35 8, 40 15, 42 25 C43 35, 40 45, 35 52 C30 58, 20 60, 15 58 C10 55, 8 50, 7 45 C6 35, 8 25, 12 18 C16 10, 23 5, 30 5 Z"
            fill="currentColor"
            className="text-olive"
          />
          {/* Central vein */}
          <path
            d="M30 5 Q28 20, 25 35 Q22 50, 20 58"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-olive-dark opacity-60"
          />
          {/* Side veins */}
          <path
            d="M25 15 Q30 18, 35 20 M23 25 Q28 28, 33 30 M21 35 Q26 38, 31 40 M20 45 Q25 48, 30 50"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-olive-dark opacity-40"
          />
        </g>

        {/* Medium leaf */}
        <g transform="translate(60, 40) rotate(25)">
          <path
            d="M20 3 C24 5, 27 10, 28 18 C29 25, 27 32, 24 37 C20 41, 14 42, 10 41 C7 39, 5 36, 4 32 C3 25, 5 18, 8 13 C11 7, 16 3, 20 3 Z"
            fill="currentColor"
            className="text-olive-light"
          />
          <path
            d="M20 3 Q19 12, 17 22 Q15 32, 13 41"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
            className="text-olive-dark opacity-50"
          />
        </g>

        {/* Small leaf */}
        <g transform="translate(10, 60) rotate(-15)">
          <path
            d="M15 2 C18 3, 20 7, 21 12 C22 17, 20 22, 18 25 C15 28, 11 29, 8 28 C6 27, 4 25, 3 22 C2 17, 3 12, 5 9 C7 5, 11 2, 15 2 Z"
            fill="currentColor"
            className="text-olive-light opacity-80"
          />
          <path
            d="M15 2 Q14 8, 13 15 Q11 22, 10 28"
            stroke="currentColor"
            strokeWidth="0.6"
            fill="none"
            className="text-olive-dark opacity-40"
          />
        </g>

        {/* Tiny decorative leaves */}
        <g transform="translate(70, 15) rotate(45)">
          <path
            d="M8 1 C10 2, 11 4, 12 7 C12 10, 11 13, 9 15 C7 16, 5 16, 4 15 C3 14, 2 13, 2 11 C1 8, 2 6, 3 4 C4 2, 6 1, 8 1 Z"
            fill="currentColor"
            className="text-olive opacity-60"
          />
        </g>

        <g transform="translate(15, 90) rotate(-30)">
          <path
            d="M8 1 C10 2, 11 4, 12 7 C12 10, 11 13, 9 15 C7 16, 5 16, 4 15 C3 14, 2 13, 2 11 C1 8, 2 6, 3 4 C4 2, 6 1, 8 1 Z"
            fill="currentColor"
            className="text-olive-dark opacity-70"
          />
        </g>
      </svg>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-white via-green-50 to-green-100 flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-olive/5 to-olive/10"></div>
      </div>

      {/* Corner decorations */}
      <LeafDecoration className="top-8 left-8 text-olive" />
      <LeafDecoration className="top-8 right-8 text-olive-light" flip={true} />
      <LeafDecoration className="bottom-8 left-8 text-olive-dark rotate-180" />
      <LeafDecoration className="bottom-8 right-8 text-olive rotate-180" flip={true} />

      {/* Additional floating realistic leaves */}
      <div className="absolute top-1/4 left-1/4 opacity-20">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <g transform="rotate(45 20 20)">
            <path
              d="M20 5 C23 6, 26 10, 27 16 C28 22, 26 28, 23 32 C20 35, 15 36, 12 35 C9 34, 7 31, 6 28 C5 22, 6 16, 9 12 C12 7, 16 5, 20 5 Z"
              fill="currentColor"
              className="text-olive-light"
            />
            <path
              d="M20 5 Q19 12, 17 20 Q15 28, 13 35"
              stroke="currentColor"
              strokeWidth="0.8"
              fill="none"
              className="text-olive-dark opacity-50"
            />
          </g>
        </svg>
      </div>
      
      <div className="absolute top-3/4 right-1/4 opacity-20">
        <svg width="35" height="35" viewBox="0 0 35 35">
          <g transform="rotate(-30 17.5 17.5)">
            <path
              d="M17.5 3 C20 4, 22 7, 23 12 C24 17, 22 22, 20 25 C17.5 28, 13 29, 10 28 C8 27, 6 25, 5 22 C4 17, 5 12, 7 9 C9 5, 13 3, 17.5 3 Z"
              fill="currentColor"
              className="text-olive"
            />
            <path
              d="M17.5 3 Q16.5 9, 15 16 Q13 23, 11 28"
              stroke="currentColor"
              strokeWidth="0.6"
              fill="none"
              className="text-olive-dark opacity-40"
            />
          </g>
        </svg>
      </div>

      {/* Main content */}
      <div className={`text-center transition-all duration-1000 ease-out transform ${
        isVisible 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-90 translate-y-4'
      }`}>
        
        {/* Invitation text */}
        <div className="mb-8">
          <p className="text-lg text-olive/80 wedding-subtitle mb-6">
            You are invited to our wedding!
          </p>
        </div>

        {/* Names */}
        <div className="mb-8 space-y-2">
          <h1 className="font-dancing-script text-7xl md:text-8xl font-semibold text-olive-dark mb-4">
            Karan
          </h1>
          
          <div className="font-dancing-script text-4xl text-olive-light mb-4">
            &
          </div>
          
          <h1 className="font-dancing-script text-7xl md:text-8xl font-semibold text-olive-dark">
            Aarthi
          </h1>
        </div>

        {/* Decorative line */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-olive to-transparent mx-auto"></div>
      </div>

      {/* Subtle background animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-olive/5 to-transparent animate-pulse"></div>
      </div>
    </div>
  );
} 