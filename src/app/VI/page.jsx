"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Leonida from "@/Components/Leonida";
import Hampton from "@/Components/Hampton";
import LoadingAnimation from "@/Components/LoadingAnimation";
import Lucia_caminos from "@/Components/Lucia_caminos";

const page = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Delay showing content until after loading animation
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 3500); // Slightly longer than the loading animation duration
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingAnimation />
      {contentLoaded && (
        <div className="bg-gradient-to-r from-[#121217] to-[#181624] min-h-screen flex flex-col gap-1">
          {/* Hero Section */}
          <Hero />

          {/* Lucia Caminos */}
          <Lucia_caminos /> 

          {/* Navbar */}
          <Navbar />
          <Leonida/>
          <Hampton/>
          
          <Footer />
        </div>
      )}
    </>
  );
};

export default page;