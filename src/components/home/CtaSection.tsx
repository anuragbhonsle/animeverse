import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export const CtaSection = () => {
  const { currentUser } = useAuth();

  return (
    <section className="relative text-white py-14 lg:py-16 overflow-hidden bg-black">
      <div className="container mx-auto px-4 text-center relative z-10">
        <SectionHeading
          prefix="Ready to Start Your"
          highlight="Anime"
          suffix="Journey?"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-8"
        ></motion.div>
      </div>
    </section>
  );
};
