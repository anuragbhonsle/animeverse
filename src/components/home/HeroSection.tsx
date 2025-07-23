import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const { currentUser } = useAuth();

  return (
    <section className="relative bg-background dark:bg-background min-h-[91vh] flex items-center py-24 md:py-0 overflow-hidden bg-secondary/20 dark:bg-secondary/10">
      {/* 🧼 Clean section, no background image or gradient */}

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h1
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Track Your Anime{" "}
            <span
              style={{ fontFamily: "Raleway, sans-serif" }}
              className="bg-gradient-to-r from-anime-tertiary to-anime-secondary dark:from-anime-light-purple dark:to-anime-purple bg-clip-text text-transparent"
            >
              Journey
            </span>
          </h1>

          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto typewriter"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Effortlessly track, manage, and explore your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              anime
            </span>{" "}
            world — all in one place.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {currentUser ? (
              <Button asChild size="lg" className="btn-glow group">
                <Link to="/dashboard" className="flex items-center">
                  Go to Dashboard
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            ) : (
              <Button asChild size="lg" className="btn-glow group">
                <Link to="/auth" className="flex items-center">
                  Sign In
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            )}

            <Button
              asChild
              variant="outline"
              size="lg"
              className="dark:border-white/20 dark:hover:border-white/30"
            >
              <Link to="/browse">Browse Anime</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
