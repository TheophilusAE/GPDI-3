'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  onComplete: () => void;
}

function SplashBackgroundParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    // Generate particles only on client side
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-white rounded-full opacity-20"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequence the animations
    const steps = [
      { delay: 0, duration: 2000 },    // Logo and name
      { delay: 2000, duration: 2000 }, // Welcome message
      { delay: 4000, duration: 1000 }  // Exit
    ];

    let currentStep = 0;
    let timer: NodeJS.Timeout;

    const runStep = () => {
      timer = setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setStep(currentStep + 1);
          currentStep++;
          runStep();
        } else {
          setIsVisible(false);
          setTimeout(onComplete, 500);
        }
      }, steps[currentStep].duration);
    };

    runStep();

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute inset-0"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              }}
            />
          </div>

          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="mb-12 relative"
            >
              {/* Church Logo with Glow Effect */}
              <div className="w-40 h-40 mx-auto relative">
                <div className="absolute inset-0 bg-blue-500 opacity-20 blur-2xl rounded-full"></div>
                <div className="relative w-full h-full">
                  <Image
                    src="/Logo_GPDI-removebg-preview.png"
                    alt="GPDI Persadamas Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Church Name with Gradient Text */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                GPDI Persadamas
              </h1>
              <p className="text-2xl md:text-3xl text-blue-200 font-light">
                Banjarmasin
              </p>
            </motion.div>

            {/* Welcome Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 20 }}
              transition={{ duration: 1 }}
              className="mt-12 space-y-6"
            >
              <p className="text-xl md:text-2xl text-blue-100 font-light">
                Selamat datang di GPDI Persadamas, tempat di mana iman bertumbuh dan komunitas berkembang.
              </p>
              <div className="flex justify-center space-x-3 mt-4">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Background Animation */}
          <SplashBackgroundParticles />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
