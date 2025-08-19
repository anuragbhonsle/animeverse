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
        y: -6,
        scale: 1.02,
        boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
      }}
      className="relative rounded-2xl p-6 transition-all duration-300
        border bg-card/80 backdrop-blur-lg 
        border-border hover:border-primary/40 hover:shadow-lg group"
    >
      {/* Icon wrapper */}
      <div
        className="h-14 w-14 flex items-center justify-center rounded-xl 
        bg-primary/10 dark:bg-primary/20 text-primary 
        ring-1 ring-inset ring-primary/20 dark:ring-primary/30
        shadow-sm mb-4 transition-transform duration-300
        group-hover:scale-110"
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-foreground">{title}</h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
        {description}
      </p>

      {/* Subtle animated border highlight */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};
