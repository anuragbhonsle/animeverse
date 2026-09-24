import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconDeviceTv,
  IconFlame,
  IconChartDots,
  IconSparkles,
} from "@tabler/icons-react";

/* --- MAIN FEATURES SECTION --- */

export const FeaturesSection = () => {
  return (
    <section className="w-full py-20 lg:py-20 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <SectionHeading
          prefix="Control Your"
          highlight="Anime"
          suffix="Experience"
        />

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <FeaturesGrid />
        </motion.div>
      </div>
    </section>
  );
};

/* --- FEATURES GRID --- */

export function FeaturesGrid() {
  return (
    <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

/* --- ANIMEVERSE HEADER SKELETONS --- */

// 1. Image/GIF Header
const ImageHeader = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div
    initial={{ opacity: 1 }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
    className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-2xl overflow-hidden group border border-border/40"
  >
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
    />
  </motion.div>
);

// 2. Pixel Art UI Header
const SkeletonPixelArt = () => (
  <motion.div
    initial={{ opacity: 1 }}
    whileHover={{ opacity: 1, scale: 1.01 }}
    className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden group border border-border/40"
  >
    <img
      src="https://i.pinimg.com/originals/b1/06/1f/b1061f725b4b5f1f7a2a2df5a6f8b3ba.gif"
      alt="AnimeVerse Pixel World"
      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  </motion.div>
);

/* --- ANIMEVERSE BENTO ITEMS --- */

const items = [
  {
    title: "Unified Anime Watchlists",

    description: (
      <span className="text-sm text-muted-foreground">
        Track episode progress, mark favorites, and build custom categories
        across thousands of series.
      </span>
    ),

    header: (
      <ImageHeader
        src="https://i.pinimg.com/1200x/25/b3/eb/25b3eb398e5133961dd6a120d979b53f.jpg"
        alt="Anime Watchlist Tracking"
      />
    ),

    className: "md:col-span-2",

    icon: <IconDeviceTv className="h-4 w-4 text-primary" />,
  },

  {
    title: "Unique Anime List",

    description: (
      <span className="text-sm text-muted-foreground">
        A curated collection featuring various anime series and movies available
        in the database.
      </span>
    ),

    header: (
      <ImageHeader
        src="https://i.pinimg.com/originals/96/50/7e/96507e321531c31973d99ee33feceb60.gif"
        alt="Unique Anime GIF"
      />
    ),

    className: "md:col-span-1",

    icon: <IconFlame className="h-4 w-4 text-primary" />,
  },

  {
    title: "Animated Interface",

    description: (
      <span className="text-sm text-muted-foreground">
        Motion-powered GIF previews rather than flat static images.
      </span>
    ),

    header: <SkeletonPixelArt />,

    className: "md:col-span-1",

    icon: <IconSparkles className="h-4 w-4 text-primary" />,
  },

  {
    title: "Personalized Anime Stats & Social",

    description: (
      <span className="text-sm text-muted-foreground">
        Analyze your viewing habits with genre distribution charts, total watch
        hours, and share your profiles.
      </span>
    ),

    header: (
      <ImageHeader
        src="https://i.pinimg.com/1200x/2a/ec/21/2aec2151a4b7fd442823f2235d6ccde8.jpg"
        alt="Anime Stats & Insights"
      />
    ),

    className: "md:col-span-2",

    icon: <IconChartDots className="h-4 w-4 text-primary" />,
  },
];
