import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

const FLOATING_IMAGES = [
  "/ok.png",
  "/love.png",
  "/mockery.png",
  "/yes.png",
  "/disbelief.png",
  "/confused.png",
  "/blushing.png",
];

interface StripItem {
  id: number;
  src: string;
  size: number;
  duration: number;
  delay: number;
  yOffset: number;
  rotate: number;
  zIndex: number;
}

export const HeroSection = () => {
  const { currentUser } = useAuth();
  const [items, setItems] = useState<StripItem[]>([]);

  // Parallax mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const parallaxX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-16, 16]),
    springConfig,
  );
  const parallaxY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-12, 12]),
    springConfig,
  );
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  useEffect(() => {
    const generatedItems: StripItem[] = FLOATING_IMAGES.map((src, index) => ({
      id: index,
      src,
      size: Math.floor(Math.random() * 12) + 56,
      duration: Math.random() * 2 + 3.5,
      delay: index * 0.08,
      yOffset: Math.random() * 6 + 5,
      rotate: (index % 2 === 0 ? 1 : -1) * (Math.random() * 10 + 3),
      zIndex: Math.floor(Math.random() * 10) + 1,
    }));

    setItems(generatedItems);
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay },
    }),
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[88vh] w-full flex flex-col items-center justify-center overflow-hidden bg-background text-foreground py-20 lg:py-28 transition-colors duration-300"
    >
      {/* Grain overlay — adapts opacity to match theme seamlessly */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08] dark:opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Sticker shelf */}
          <motion.div
            style={{ x: parallaxX, y: parallaxY }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex items-center justify-center mb-4 max-w-full px-6 py-3 rounded-full border border-border/60 bg-muted/30 backdrop-blur-sm"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative group cursor-pointer"
                style={{
                  zIndex: item.zIndex,
                  marginLeft: index === 0 ? "0px" : "-14px",
                }}
                initial={{ opacity: 0, scale: 0.6, rotate: item.rotate }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [-item.yOffset, item.yOffset, -item.yOffset],
                  rotate: [item.rotate - 3, item.rotate + 3, item.rotate - 3],
                }}
                transition={{
                  opacity: { duration: 0.4, delay: item.delay },
                  scale: { duration: 0.4, delay: item.delay },
                  y: {
                    duration: item.duration,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: item.delay,
                  },
                  rotate: {
                    duration: item.duration * 1.2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: item.delay,
                  },
                }}
              >
                <img
                  src={item.src}
                  alt=""
                  aria-hidden="true"
                  className="object-contain drop-shadow-[0_6px_14px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_6px_14px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-125 group-hover:z-50"
                  style={{
                    width: `${item.size}px`,
                    height: `${item.size}px`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="show"
            custom={0.15}
            variants={fadeUp}
            style={{
              fontFamily: "'Bricolage Grotesque', 'Raleway', sans-serif",
            }}
            className="text-5xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tight bg-gradient-to-br from-foreground via-foreground/95 to-foreground/70 bg-clip-text text-transparent drop-shadow-sm font-semibold"
          >
            Track Your Anime
            <br />
            <span className="bg-gradient-to-br from-foreground via-foreground/95 to-foreground/70 bg-clip-text text-transparent drop-shadow-sm text-8xl italic font-thin">
              Journey
            </span>
          </motion.h1>

          {/* CTA */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.48}
            variants={fadeUp}
            className="flex items-center justify-center mt-10"
          >
            <Button
              asChild
              size="lg"
              className="group px-8 py-6 rounded-full font-medium text-base text-primary-foreground bg-primary transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90 active:scale-95 shadow-md"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Link
                to="/browse"
                className="flex items-center justify-center gap-2"
              >
                Library
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
