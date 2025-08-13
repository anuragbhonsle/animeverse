import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const { currentUser } = useAuth();

  // State for mouse position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalized values between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[91vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary/10 via-background to-secondary/20 dark:from-secondary/10 dark:via-background dark:to-secondary/5">
      {/* Floating background elements with parallax */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-anime-purple/20 dark:bg-anime-purple/10 rounded-full blur-3xl animate-pulse-slow transition-transform duration-300"
        style={{
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
        }}
      ></div>
      <div
        className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-anime-tertiary/20 dark:bg-anime-tertiary/10 rounded-full blur-3xl animate-pulse-slow delay-2000 transition-transform duration-300"
        style={{
          transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
        }}
      ></div>

      {/* Content */}
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h1
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Track Your Anime{" "}
            <span
              style={{ fontFamily: "Raleway, sans-serif" }}
              className="bg-gradient-to-r from-anime-tertiary to-anime-secondary dark:from-anime-light-purple dark:to-anime-purple bg-clip-text text-transparent animate-gradient-x"
            >
              Journey
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Effortlessly track, manage, and explore your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent font-semibold">
              anime
            </span>{" "}
            world — all in one place. Your next favorite show is just a click
            away.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-200">
            {currentUser ? (
              <Button
                asChild
                size="lg"
                className="btn-glow group hover:scale-105 transition-transform duration-300"
              >
                <Link to="/dashboard" className="flex items-center">
                  Go to Dashboard
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            ) : (
              <Button
                asChild
                size="lg"
                className="btn-glow group hover:scale-105 transition-transform duration-300"
              >
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
              className="dark:border-white/20 dark:hover:border-white/30 hover:scale-105 transition-transform duration-300"
            >
              <Link to="/browse">Browse Anime</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
