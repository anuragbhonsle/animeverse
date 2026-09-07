import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { CtaSection } from "@/components/home/CtaSection";
import { FAQSection } from "@/components/home/FAQSection";
import { AnimeSpotlightCard } from "@/components/home/AnimeSpotlightCard";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <AnimeSpotlightCard />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
