import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
          backgroundImage: `url("https://images.unsplash.com/photo-1591459034470-d1e05d7e5ce4?q=80&w=1470&auto=format&fit=crop")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) blur(2px)",
        }}
        aria-hidden="true"
      />

      <div className="container px-4 text-center relative z-10">
        <h2
          className="text-3xl md:text-4xl font-bold mb-6 animate-pulse-slow"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          Ready to Start Your Anime Journey?
        </h2>
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
            className="bg-gradient-to-r from-anime-light-purple to-anime-purple text-white hover:from-anime-purple hover:to-anime-light-purple transition-colors"
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
            className="bg-gradient-to-r from-anime-light-purple to-anime-purple text-white hover:from-anime-purple hover:to-anime-light-purple transition-colors"
          >
            <Link to="/auth">Sign In</Link>
          </Button>
        )}
      </div>
    </section>
  );
};
