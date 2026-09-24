import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Text before the highlighted word(s) */
  prefix?: string;

  /** The word/phrase to display */
  highlight?: string;

  /** Text after the highlighted word(s) */
  suffix?: string;

  /** Optional small eyebrow/label above the heading */
  eyebrow?: string;

  /** Optional supporting subtext below the heading */
  subtext?: string;

  className?: string;

  align?: "center" | "left";
}

export const SectionHeading = ({
  prefix,
  highlight,
  suffix,
  eyebrow,
  subtext,
  className,
  align = "center",
}: SectionHeadingProps) => {
  const isCenter = align === "center";

  // Unified gradient applied equally across all text parts
  const headingTextClass =
    "bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent font-bold";

  return (
    <div className={cn("mb-12 md:mb-16", isCenter && "text-center", className)}>
      {/* Eyebrow Label */}
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary mb-2.5"
        >
          {eyebrow}
        </motion.span>
      )}

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "flex flex-wrap items-center text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight gap-x-[0.3em]",
          isCenter ? "justify-center" : "justify-start",
        )}
      >
        {prefix && <span className={headingTextClass}>{prefix}</span>}
        {highlight && <span className={headingTextClass}>{highlight}</span>}
        {suffix && <span className={headingTextClass}>{suffix}</span>}
      </motion.h2>

      {/* Subtext Paragraph */}
      {subtext && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.1,
          }}
          className={cn(
            "text-sm sm:text-base md:text-lg mt-3 text-muted-foreground leading-relaxed",
            isCenter && "mx-auto max-w-2xl",
          )}
        >
          {subtext}
        </motion.p>
      )}
    </div>
  );
};
