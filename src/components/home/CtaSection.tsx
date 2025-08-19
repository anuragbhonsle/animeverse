import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const CtaSection = () => {
  const { currentUser } = useAuth();

  return (
    <section
      className="relative bg-secondary/20 dark:bg-secondary/10 text-black dark:text-white py-16 overflow-hidden border-t border-border
"
    >
      {/* Manga Panel Background */}
      <div
        className="absolute inset-0 z-0 opacity-10 dark:opacity-15"
        style={{
          backgroundImage: `url("")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) blur(2px)",
        }}
        aria-hidden="true"
      />

      <div className="container px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-4xl font-bold text-center mb-12"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          Ready to Start Your{" "}
          <span className="bg-gradient-to-r from-anime-light-purple to-anime-purple text-transparent bg-clip-text">
            Anime
          </span>{" "}
          Journey?
        </motion.h2>

        <p
          className="text-base mb-8 mx-auto max-w-2xl text-center whitespace-nowrap sm:whitespace-normal"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Sign in now and start organizing your anime watchlist. It’s free and
          easy to use!
        </p>

        {currentUser ? (
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="group px-10 py-4 rounded-3xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white font-bold shadow-xl transition-all duration-500 ease-out
                 hover:scale-105 hover:shadow-2xl animate-gradient-x"
          >
            <Link to="/dashboard" className="flex items-center group">
              Go to Your Dashboard
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        ) : (
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="group px-10 py-4 rounded-3xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white font-bold shadow-xl transition-all duration-500 ease-out
                 hover:scale-105 hover:shadow-2xl animate-gradient-x"
          >
            <Link to="/auth">Sign In</Link>
          </Button>
        )}
      </div>
    </section>
  );
};
