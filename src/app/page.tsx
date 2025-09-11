'use client';

import { useState, useEffect } from 'react';
import SplashScreen from '@/components/SplashScreen';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleSplashComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
    </>
  );
}