import React, { useState } from "react";
import { SkipForward, Star, Tv } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Import your data here
import { animeData } from "@/data/animeData";
import { SectionHeading } from "./SectionHeading";

const FALLBACK_ANIME = {
  id: 44,
  title: "Blue Lock",
  imageUrl:
    "https://i.pinimg.com/originals/95/13/c9/9513c90be5af985db65f85da4307ec44.gif",
  description:
    "A group of high school soccer players compete in a ruthless training program to become Japan’s ultimate striker and dominate the world stage.",
  genres: ["Sports", "Drama", "Psychological"],
  episodes: 24,
  rating: 8.4,
  releaseYear: 2022,
};

export const AnimeSpotlightCard = () => {
  const [currentAnimeIndex, setCurrentAnimeIndex] = useState(0);

  const currentAnime =
    animeData && animeData.length > 0
      ? animeData[currentAnimeIndex]
      : FALLBACK_ANIME;

  const handleNextAnime = () => {
    if (animeData && animeData.length > 0) {
      setCurrentAnimeIndex((prevIndex) => (prevIndex + 1) % animeData.length);
    }
  };

  return (
    <section className="relative min-h-[85vh] w-full flex flex-col items-center justify-center overflow-hidden bg-background text-foreground py-20 lg:py-20 transition-colors duration-300">
      {/* Background Glow Accents - adapted for both light and dark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 dark:bg-primary/20 blur-[120px] pointer-events-none rounded-full" />

      <div className="group relative w-full max-w-5xl mx-auto z-10 px-4">
        <div className="text-center flex flex-col items-center mb-8">
          <SectionHeading
            prefix="Explore Your"
            highlight="Favorite"
            suffix="Series"
          />
        </div>

        <div className="relative aspect-[16/9] sm:aspect-[16/8.5] w-full overflow-hidden rounded-3xl bg-card border border-border shadow-xl dark:shadow-[0_30px_100px_rgba(0,0,0,0.8)] transition-all">
          {/* Subtle Gradient Overlay for contrast */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-background/10 via-transparent to-background/20 pointer-events-none" />

          {/* Active Image Animation */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentAnime.id}
              initial={{ opacity: 0, scale: 1.08, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              src={currentAnime.imageUrl}
              alt={`Scene from ${currentAnime.title}`}
              className="absolute inset-0 h-full w-full object-cover contrast-105 saturate-105 brightness-95 dark:brightness-98 rounded-3xl p-2 sm:p-4"
            />
          </AnimatePresence>

          {/* Top Metadata Badges */}
          <div className="absolute top-5 left-5 sm:top-8 sm:left-8 z-20 flex flex-wrap items-center gap-2">
            {currentAnime.genres?.slice(0, 3).map((genre) => (
              <span
                key={genre}
                className="px-3 py-1 rounded-full bg-background/70 backdrop-blur-md border border-border/60 text-[10px] sm:text-xs font-medium tracking-wide text-foreground shadow-sm"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Floating Caption / Information Bar */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 z-20 flex w-[92%] sm:w-[94%] -translate-x-1/2 items-center justify-between gap-3 sm:gap-6 rounded-2xl sm:rounded-full bg-background/80 backdrop-blur-xl border border-border/80 p-3.5 sm:p-4 shadow-lg dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
            <div className="flex min-w-0 flex-1 items-center gap-3.5 sm:gap-4">
              {/* Thumbnail Image */}
              <div className="hidden size-11 shrink-0 overflow-hidden rounded-full sm:block relative border border-border shadow-md">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentAnime.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    src={currentAnime.imageUrl}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* Anime Details */}
              <div className="min-w-0">
                <div className="mb-0.5 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/75 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <p
                    className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.2em] text-primary sm:text-[10px]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Featured Spotlight
                  </p>
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentAnime.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="truncate text-sm sm:text-base font-bold tracking-tight text-foreground"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    {currentAnime.title}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Quick Stats & Actions */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Episodes & Rating Stats */}
              <div className="hidden md:flex items-center gap-4 border-r border-border pr-6">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Tv className="size-3.5 text-primary" />
                  <span className="font-mono text-xs font-semibold">
                    {currentAnime.episodes} eps
                  </span>
                </div>
                {currentAnime.rating && (
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Star className="size-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-mono text-xs font-semibold">
                      {currentAnime.rating}
                    </span>
                  </div>
                )}
              </div>

              <Button
                size="sm"
                onClick={handleNextAnime}
                className="shrink-0 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs font-bold uppercase tracking-wider gap-2 px-5 shadow-md"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Next <SkipForward className="size-3.5 fill-current" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
