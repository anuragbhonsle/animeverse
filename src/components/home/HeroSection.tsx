import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
    useTransform(mouseX, [-0.5, 0.5], [-20, 20]),
    springConfig,
  );
  const parallaxY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-15, 15]),
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
      size: Math.floor(Math.random() * 15) + 70,
      duration: Math.random() * 2 + 3.5,
      delay: index * 0.1,
      yOffset: Math.random() * 8 + 6,
      rotate: (index % 2 === 0 ? 1 : -1) * (Math.random() * 12 + 4),
      zIndex: Math.floor(Math.random() * 10) + 1,
    }));

    setItems(generatedItems);
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay },
    }),
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[85vh] w-full flex flex-col items-center justify-center overflow-hidden bg-black py-14 lg:py-20"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* 4. Overlapping PNG Strip with Parallax Tracking */}
          <motion.div
            style={{ x: parallaxX, y: parallaxY }}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center mb-6 max-w-full overflow-visible px-4"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative group cursor-pointer"
                style={{
                  zIndex: item.zIndex,
                  marginLeft: index === 0 ? "0px" : "-18px",
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
                  className="object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] transition-all duration-300 group-hover:scale-125 group-hover:z-50 saturate-110 contrast-110"
                  style={{
                    width: `${item.size}px`,
                    height: `${item.size}px`,
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
                    maskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* 5. Enhanced Heading with Animated Gradient Text */}
          <h1
            style={{ fontFamily: "'Raleway', sans-serif" }}
            className="flex flex-wrap items-center justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tighter text-white gap-x-[0.3em] font-medium "
          >
            <motion.span
              initial="hidden"
              animate="show"
              custom={0.2}
              variants={fadeUp}
              className="bg-gradient-to-br from-white via-white/95 to-white/70 bg-clip-text text-transparent drop-shadow-sm"
            >
              Track
            </motion.span>

            <motion.span
              initial="hidden"
              animate="show"
              custom={0.25}
              variants={fadeUp}
              className="bg-gradient-to-br from-white via-white/90 to-white/60 bg-clip-text text-transparent drop-shadow-sm"
            >
              Your
            </motion.span>
            <motion.span
              initial="hidden"
              animate="show"
              custom={0.25}
              variants={fadeUp}
              className="bg-gradient-to-br from-white via-white/90 to-white/60 bg-clip-text text-transparent drop-shadow-sm"
            >
              Anime
            </motion.span>

            <motion.span
              initial="hidden"
              animate="show"
              custom={0.25}
              variants={fadeUp}
              className="bg-gradient-to-br from-white via-white/90 to-white/60 bg-clip-text text-transparent drop-shadow-sm"
            >
              Journey
            </motion.span>
          </h1>

          {/* Subtext */}
          <motion.p
            initial="hidden"
            animate="show"
            custom={0.5}
            variants={fadeUp}
            className="text-[10px] md:text-xs font-black text-white/70  ps-[0.5em] mb-1 mt-8 tracking-widest"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Effortlessly track and explore your anime world, all in one place.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.65}
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto px-4"
          >
            <Button
              asChild
              size="lg"
              className="group relative w-full sm:w-auto px-8 py-6 rounded-full bg-white text-black font-semibold shadow-[0_0_25px_rgba(139,92,246,0.10)] transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-[0_0_40px_rgba(139,92,246,0.55)] active:scale-95 overflow-hidden"
            >
              <Link
                to={currentUser ? "/dashboard" : "/auth"}
                className="flex items-center justify-center gap-3 text-base tracking-wide"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span>{currentUser ? "Dashboard" : "Login"}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="group w-full sm:w-auto px-8 py-6 rounded-full border-white/15 bg-white/5 backdrop-blur-md text-white/90 font-medium transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/30 hover:text-white active:scale-95 shadow-sm"
            >
              <Link
                to="/browse"
                className="flex items-center justify-center gap-2 text-base tracking-wide"
                style={{ fontFamily: "'Poppins', sans-serif" }}
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
