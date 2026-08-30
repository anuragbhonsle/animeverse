import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { AnimeSparkleAccents } from "./AnimeSparkleAccents";

export const CtaSection = () => {
  const { currentUser } = useAuth();

  return (
    <section className="relative text-black dark:text-white py-14 lg:py-16 overflow-hidden bg-transparent">
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
        >
          <Button
            asChild
            size="lg"
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-transform duration-300 hover:scale-105"
          >
            <Link to={currentUser ? "/dashboard" : "/auth"}>
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl group">
                {currentUser ? "Dashboard" : "Login"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
