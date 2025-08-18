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
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative min-h-[91vh] flex items-center justify-center overflow-hidden
      bg-white dark:bg-black"
    >
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/originals/b0/a5/40/b0a5403e757bd83e02131c4d2e82c351.gif")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.9) contrast(1.3) blur(1px) saturate(120%)",
            opacity: 0.9,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Heading */}
          <h1
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white/90"
          >
            Track Your Anime{" "}
            <span
              style={{ fontFamily: "Raleway, sans-serif" }}
              className="bg-gradient-to-r from-anime-light-purple to-anime-purple bg-clip-text text-transparent animate-gradient-x font-extrabold"
            >
              Journey
            </span>
          </h1>

          {/* Paragraph */}
          <p
            style={{ fontFamily: "Raleway, sans-serif" }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-white/90  "
          >
            Effortlessly track, manage, and explore your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent font-semibold">
              Anime
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
                className="group px-10 py-4 rounded-3xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white font-bold shadow-xl transition-all duration-500 ease-out
                 hover:scale-105 hover:shadow-2xl animate-gradient-x"
              >
                <Link to="/dashboard" className="flex items-center gap-2">
                  Go to Dashboard
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            ) : (
              <Button
                asChild
                size="lg"
                className="group px-10 py-4 rounded-3xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white font-bold shadow-xl transition-all duration-500 ease-out
                 hover:scale-105 hover:shadow-2xl animate-gradient-x"
              >
                <Link to="/auth" className="flex items-center gap-2">
                  Sign In
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            )}

            <Button
              asChild
              size="lg"
              className="group px-10 py-4 rounded-3xl bg-black/95 text-white font-bold shadow-xl transition-all duration-500 ease-out
               hover:scale-105 hover:shadow-2xl hover:bg-black/80"
            >
              <Link
                to="/browse"
                className="flex items-center justify-center gap-2"
              >
                Browse Anime
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
