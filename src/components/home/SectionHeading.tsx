// components/ui/section-heading.tsx
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Text before the highlighted word(s) */
  prefix?: string;

  /** The word/phrase to display normally */
  highlight: string;

  /** Text after the highlighted word(s) */
  suffix?: string;

  /** Optional small eyebrow/label above the heading */
  eyebrow?: string;

  /** Optional supporting subtext below the heading */
  subtext?: string;

  className?: string;

  align?: "center" | "left";

  /** Color for prefix/suffix text */
  textColor?: "white" | "black";
}

export const SectionHeading = ({
  prefix,
  highlight,
  suffix,
  eyebrow,
  subtext,
  className,
  align = "center",
  textColor = "white",
}: SectionHeadingProps) => {
  const isCenter = align === "center";
  const textGradientClass =
    "bg-gradient-to-br from-white via-white/90 to-white/60 bg-clip-text text-transparent drop-shadow-sm";

  return (
    <div className={cn("mb-14", isCenter && "text-center", className)}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-sm font-semibold tracking-wide uppercase text-violet-400 mb-3"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "flex flex-wrap items-center text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight gap-x-[0.3em]",
          isCenter ? "justify-center" : "justify-start",
        )}
        style={{ fontFamily: "'Raleway', sans-serif" }}
      >
        {prefix && (
          <span
            className={textColor === "black" ? "text-black" : textGradientClass}
          >
            {prefix}
          </span>
        )}

        <span
          className={cn(
            "inline-block font-sans font-normal tracking-normal px-1",
            textColor === "black" ? "text-black" : "text-white",
          )}
        >
          {highlight}
        </span>

        {suffix && (
          <span
            className={textColor === "black" ? "text-black" : textGradientClass}
          >
            {suffix}
          </span>
        )}
      </motion.h2>

      {subtext && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.1,
          }}
          className={cn(
            "text-sm sm:text-base md:text-lg mt-4 text-black/70 dark:text-white/70",
            isCenter && "mx-auto max-w-xl",
          )}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {subtext}
        </motion.p>
      )}
    </div>
  );
};
