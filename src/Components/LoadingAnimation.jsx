"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingStage, setLoadingStage] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // First show Rockstar logo
    const stageOneTimer = setTimeout(() => {
      setLoadingStage(1);
    }, 2000);

    // Then show GTA VI logo
    const stageTwoTimer = setTimeout(() => {
      setLoadingStage(2);
    }, 4000);

    // Finally complete loading
    const finalTimer = setTimeout(() => {
      setIsLoading(false);
    }, 6500);

    // Simulate loading progress updates
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 15;
      });
    }, 400);

    return () => {
      clearTimeout(stageOneTimer);
      clearTimeout(stageTwoTimer);
      clearTimeout(finalTimer);
      clearInterval(progressInterval);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
  const initialLogoVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      scale: 1.1,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const gtaLogoVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const viNumberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const loadingBarVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: (custom) => ({
      scaleX: custom / 100,
      transition: {
        duration: 0.4,
        ease: "linear",
      },
    }),
  };
  // If loading is complete, return null to remove this component
  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <AnimatePresence mode="wait">
        {" "}
        {/* Stage 0: GTA Logo */}
        {loadingStage === 0 && (
          <motion.div
            key="gtalogo"
            variants={initialLogoVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center"
          >
            {/* GTA Logo from logo_white.svg */}
            <motion.div
              className="mb-4 relative"
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0.85, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/rockstar_logo.svg"
                alt="GTA Logo"
                className="w-48 md:w-64 h-auto"
              />
            </motion.div>

            {/* Loading spinner */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mt-2 mb-4"
            >
              <div className="w-8 h-8 border-2 border-t-2 border-white rounded-full border-t-transparent"></div>
            </motion.div>
          </motion.div>
        )}
        {/* Stage 1: GTA VI Logo */}
        {loadingStage >= 1 && (
          <motion.div
            key="gtavi"
            className="relative flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* GTA Logo
            <motion.div 
              variants={gtaLogoVariants}
              initial="hidden"
              animate="visible"
              className="mb-2"
            >
              <img 
                src="/gta_logo_purple.webp" 
                alt="GTA Logo" 
                className="h-16 md:h-24"
              />
            </motion.div> */}

            {/* VI Number */}
            <motion.div
              variants={viNumberVariants}
              initial="hidden"
              animate="visible"
              className="flex justify-center items-center"
            >
              <span className="font-bold text-white text-7xl md:text-9xl tracking-tighter">
                VI
              </span>
            </motion.div>

            {/* Loading Bar */}
            {loadingStage >= 1 && (
              <div className="w-60 md:w-80 h-1 bg-[#2a283b] mt-10 overflow-hidden rounded-full">
                <motion.div
                  variants={loadingBarVariants}
                  custom={loadingProgress}
                  initial="hidden"
                  animate="visible"
                  className="h-full bg-gradient-to-r from-[#ffb0c4] to-[#fff9cb]"
                />
              </div>
            )}

            {/* Loading Text & Progress */}
            <div className="flex justify-between w-60 md:w-80 mt-4">
              <p className="text-gray-400 font-sans text-sm">
                Loading Vice City...
              </p>
              <p className="text-gray-400 font-sans text-sm">
                {Math.min(100, Math.round(loadingProgress))}%
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LoadingAnimation;
