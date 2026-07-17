import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{
        y: 0,
        scale: 1.04,
        boxShadow: "0 18px 35px rgba(0,0,0,0.15)",
      }}
      className="relative rounded-3xl p-6 transition-all duration-300
        border border-transparent bg-secondary
        backdrop-blur-xl hover:border-primary/50 hover:shadow-2xl group"
    >
      {/* Icon wrapper */}
      <div
        className="h-16 w-16 flex items-center justify-center rounded-xl 
        bg-gradient-to-tr from-purple-500/20 to-purple-600/30 text-purple-600
        ring-1 ring-inset ring-purple-500/30 dark:ring-purple-400/40
        shadow-md mb-5 transition-transform duration-300 group-hover:scale-110"
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Subtle animated border highlight */}
      <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-purple-500/40 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};
