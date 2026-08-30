import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const AnimeSparkleAccents = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="absolute inset-0 pointer-events-none z-0"
    >
      {/* Top Left Sparkle - Pulled inward */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[6%] text-white/80 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
      >
        <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
      </motion.div>

      {/* Bottom Right Sparkle - Pulled inward */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[30%] right-[6%] text-white/80 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
      >
        <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
      </motion.div>
    </motion.div>
  );
};
