import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SectionHeading } from "./SectionHeading";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Is tracking my anime free?",
    answer:
      "Yes — creating an account and tracking, rating, and organizing your anime library is completely free, no credit card required.",
  },
  {
    question: "How do I add an anime to my watchlist?",
    answer:
      'Search or browse for a title, open its page, and hit "Add to List." You can sort it into Watching, Completed, Plan to Watch, or Dropped.',
  },
  {
    question: "Can I sync my progress across devices?",
    answer:
      "Your account syncs automatically across web, mobile, and tablet, so your episode progress and ratings update everywhere in real time.",
  },
  {
    question: "Does this work with MyAnimeList or AniList?",
    answer:
      "You can import your existing list from MAL or AniList in a couple of clicks, and we'll keep your ratings and progress intact.",
  },
  {
    question: "How often is the anime database updated?",
    answer:
      "New episodes, seasonal releases, and metadata are refreshed daily, so airing shows and upcoming premieres stay current.",
  },
  {
    question: "Can I request an anime that's missing?",
    answer:
      'Absolutely — use the "Request a Title" form in your dashboard and our team typically adds it within 48 hours.',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-14 lg:py-16">
      {/* Background Grid Pattern — matches HeroSection */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none [mask-image:radial-gradient(ellipse_90%_70%_at_50%_30%,black_30%,transparent_75%)]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "96px 96px",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-6 sm:mb-8">
          <motion.h2
            initial="hidden"
            animate="show"
            custom={0.2}
            variants={fadeUp}
            style={{ fontFamily: "'Raleway', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-[0.95] tracking-tighter text-white"
          >
            <SectionHeading prefix="Frequently Asked" highlight="Questions" />
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                initial="hidden"
                animate="show"
                custom={0.4 + index * 0.07}
                variants={fadeUp}
                className="rounded-2xl sm:rounded-3xl border border-white/10 bg-black backdrop-blur-md overflow-hidden transition-colors duration-300 hover:border-white/20"
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 sm:px-7 py-5 text-left"
                >
                  <span
                    className="text-sm sm:text-base font-semibold tracking-tight text-white"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="shrink-0 flex items-center justify-center size-7 rounded-full bg-white/10 text-violet-400"
                  >
                    <Plus className="size-3.5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p
                        className="px-5 sm:px-7 pb-5 text-xs sm:text-sm leading-relaxed text-white/60"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
