import { Link } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="py-16 px-4 md:px-8 bg-background text-foreground  transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-6 md:gap-4">
          {/* Left: Navigation Links */}
          <nav className="flex items-center gap-6 text-sm font-medium justify-center md:justify-start">
            <Link
              to="/"
              className="group relative text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <span>Home</span>
              <span className="absolute left-0 bottom-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              to="/browse"
              className="group relative text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <span>Browse</span>
              <span className="absolute left-0 bottom-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              to="/dashboard"
              className="group relative text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <span>Dashboard</span>
              <span className="absolute left-0 bottom-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Center: Big AnimeVerse Text */}
          <div className="flex items-center justify-center overflow-hidden my-2 md:my-0 text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground via-muted-foreground/70 to-muted-foreground/20 select-none tracking-tight leading-none whitespace-nowrap">
              AnimeVerse
            </h1>
          </div>

          {/* Right: Inline Social Links */}
          <div className="flex items-center gap-5 text-sm justify-center md:justify-end">
            <a
              href="https://github.com/anuragbhonsle/animeverse"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
            </a>
            <a
              href="https://x.com/Anuraaaag7"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-0.5"
            >
              <FaXTwitter className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
            </a>
            <a
              href="https://myanimelist.net/profile/Kazuya___"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-0.5"
            >
              <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-12" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
