import React from "react";
import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";
import { FeaturesGrid } from "./FeaturesGrid";
import { SectionHeading } from "./SectionHeading";

export const FeaturesSection = () => {
  return (
    <section className="w-full py-20 lg:py-20 bg-black rounded-3xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <SectionHeading
          prefix="Manage Your"
          highlight="Anime"
          suffix="Experience"
        />

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <FeaturesGrid />
        </motion.div>
      </div>
    </section>
  );
};
