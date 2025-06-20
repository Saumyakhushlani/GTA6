import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";

const page = () => {
  return (
    <div className="bg-[#111111] min-h-screen flex flex-col gap-1">
      {/* Hero Section */}
      {/* <section className="z-10"> */}
      <Hero />
      {/* </section> */}

      {/* Navbar */}
      <Navbar />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default page;
