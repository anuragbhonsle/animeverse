import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconDeviceTv,
  IconFlame,
  IconChartDots,
  IconSparkles,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

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

/* --- BRAND LOGO COMPONENTS --- */

const AniListLogo = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5 text-black shrink-0"
  >
    <path d="M24 17.53v2.421c0 .71-.576 1.284-1.286 1.284h-5.185c-.71 0-1.285-.574-1.285-1.284v-2.421c0-.71.575-1.285 1.285-1.285h5.185c.71 0 1.286.575 1.286 1.285zM6.361 2.765l6.097 18.47H8.783l-1.077-3.486H3.393l-1.026 3.486H0L6.361 2.765zm.772 11.233L5.5 8.875l-1.603 5.123h3.236z" />
  </svg>
);

const MyAnimeListLogo = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5 text-black shrink-0"
  >
    <path d="M10.978 12.392V6.848h-1.63v4.208L7.818 6.848H6.188v5.544h1.63V8.184l1.53 4.208h1.63zm3.176 0v-1.392h2.24V9.6h-2.24V8.24h2.448V6.848h-4.078v5.544h4.078V11.00h-2.448zm6.528-5.544h-1.632v5.544h3.264V11.00h-1.632V6.848z" />
  </svg>
);

const JikanLogo = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 text-black shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

/* --- ANIMEVERSE HEADER SKELETONS --- */

// 1. Image Header
const ImageHeader = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div
    initial={{ opacity: 1 }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
    className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-2xl overflow-hidden group"
  >
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
  </motion.div>
);

// 2. Integration Stack
const SkeletonIntegrations = () => {
  const variantsLeft = {
    initial: { x: 0 },
    animate: {
      x: 8,
      rotate: 2,
      transition: { duration: 0.2 },
    },
  };

  const variantsRight = {
    initial: { x: 0 },
    animate: {
      x: -8,
      rotate: -2,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.12] flex-col space-y-2 justify-center p-3"
    >
      <motion.div
        variants={variantsLeft}
        className="flex flex-row rounded-full border border-neutral-200 p-2 items-center space-x-2 bg-white shadow-sm"
      >
        <AniListLogo />

        <span className="text-xs font-mono font-medium text-neutral-800">
          AniList API
        </span>
      </motion.div>

      <motion.div
        variants={variantsRight}
        className="flex flex-row rounded-full border border-neutral-200 p-2 items-center justify-end space-x-2 w-5/6 ml-auto bg-white shadow-sm"
      >
        <span className="text-xs font-mono font-medium text-neutral-800">
          Jikan API v4 REST
        </span>

        <JikanLogo />
      </motion.div>

      <motion.div
        variants={variantsLeft}
        className="flex flex-row rounded-full border border-neutral-200 p-2 items-center space-x-2 bg-white shadow-sm"
      >
        <MyAnimeListLogo />

        <span className="text-xs font-mono font-medium text-neutral-800">
          MyAnimeList Sync
        </span>
      </motion.div>
    </motion.div>
  );
};

// 3. Pixel Art UI Header
const SkeletonPixelArt = () => (
  <motion.div
    initial={{ opacity: 1 }}
    whileHover={{ opacity: 1, scale: 1.01 }}
    className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden group"
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
      <span className="text-sm text-neutral-600">
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

    icon: <IconDeviceTv className="h-4 w-4 text-black" />,
  },

  {
    title: "Multi-Source API Integration",

    description: (
      <span className="text-sm text-neutral-600">
        Sync effortlessly with AniList, Jikan API, and MyAnimeList for real-time
        metadata updates.
      </span>
    ),

    header: <SkeletonIntegrations />,

    className: "md:col-span-1",

    icon: <IconFlame className="h-4 w-4 text-black" />,
  },

  {
    title: "Animated Interface",

    description: (
      <span className="text-sm text-neutral-600">
        Motion-powered GIF previews rather than flat static images for an
        immersive anime exploration UI across mobile and desktop.
      </span>
    ),

    header: <SkeletonPixelArt />,

    className: "md:col-span-1",

    icon: <IconSparkles className="h-4 w-4 text-black" />,
  },

  {
    title: "Personalized Anime Stats & Social",

    description: (
      <span className="text-sm text-neutral-600">
        Analyze your viewing habits with genre distribution charts, total watch
        hours, and share profiles with friends.
      </span>
    ),

    header: (
      <ImageHeader
        src="https://i.pinimg.com/1200x/2a/ec/21/2aec2151a4b7fd442823f2235d6ccde8.jpg"
        alt="Anime Stats & Insights"
      />
    ),

    className: "md:col-span-2",

    icon: <IconChartDots className="h-4 w-4 text-black" />,
  },
];
