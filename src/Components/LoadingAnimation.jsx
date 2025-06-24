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
              {/* <img
                src="/rockstar_logo.svg"
                alt="GTA Logo"
                className="w-48 md:w-64 h-auto"
              /> */}
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-48 md:w-64 h-auto"
              >
                <path
                  fillRule="evenodd"
                  clipule="evenodd"
                  d="M6.44052 7.38435H9.95148C11.5432 7.38435 12.9208 6.89944 12.9208 5.12552C12.9208 3.71806 11.7112 3.41913 10.5482 3.41913H7.28158L6.44052 7.38435ZM20.3443 16.8659H25.9433L20.8905 20.3632L21.7076 25.8742L17.3297 22.5481L11.4544 26L14.2015 20.159C14.2015 20.159 11.0063 16.8272 11.0088 16.8272C10.794 16.5436 10.7222 15.8132 10.7222 15.4989C10.7222 15.1016 10.7476 14.6992 10.7746 14.2706C10.8054 13.7822 10.8383 13.2599 10.8383 12.6723C10.8383 11.2223 10.1977 10.464 8.63164 10.464H5.69546L4.41699 16.4493H0L3.51262 0H11.8248C14.9137 0 17.2711 0.759898 17.2711 4.26394C17.2711 6.73043 16.0572 8.48245 13.3793 8.85033V8.89759C14.6385 9.19693 15.1102 10.0487 15.1102 11.636C15.1102 12.2697 15.091 12.8258 15.0728 13.3489C15.0567 13.8134 15.0415 14.2517 15.0415 14.6952C15.0415 15.2636 15.1893 16.1927 15.5613 16.8272H16.175L19.4563 11.3459L20.3443 16.8659ZM19.6495 17.6698H23.3653L20.0153 19.9878L20.6139 24.0291L17.3905 21.5779L13.2984 23.9806L15.1717 20.0029L12.8939 17.6307H16.6388L19.0079 13.6733L19.6495 17.6698Z"
                  fill="#ffb303"
                />
              </svg>
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
