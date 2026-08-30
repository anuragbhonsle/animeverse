import { Link } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/browse", label: "Browse" },
    { to: "/dashboard", label: "Dashboard" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/anuragbhonsle/animeverse",
      label: "GitHub",
      icon: Github,
    },
    {
      href: "https://x.com/Anuraaaag7",
      label: "X",
      icon: FaXTwitter,
    },
    {
      href: "https://myanimelist.net/profile/Kazuya___",
      label: "MyAnimeList",
      icon: ExternalLink,
    },
  ];

  return (
    <footer className="relative bg-black pb-6 pt-12 lg:pb-8 lg:pt-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Section: Brand + Social Icons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Link
            to="/"
            className="flex items-center gap-x-2 w-fit"
            aria-label="AnimeVerse"
          >
            <span
              className="text-xl font-medium tracking-tight"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              <span className="bg-gradient-to-br from-white via-white/90 to-white/60 bg-clip-text text-transparent drop-shadow-sm">
                AnimeVerse
              </span>
            </span>
          </Link>

          {/* Direct Social Icons */}
          <ul className="flex list-none space-x-5 items-center">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/60 hover:text-white transition-colors p-1 flex items-center justify-center"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider & Bottom Grid */}
        <div className="mt-6 pt-6 md:mt-8 md:pt-8 lg:grid lg:grid-cols-10 gap-4 items-center ">
          {/* Main Navigation Links */}
          <nav className="lg:col-[4/11] lg:row-start-1">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
              {navLinks.map((link) => (
                <li key={link.to} className="my-1 mx-2 shrink-0">
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white underline-offset-4 hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright & Info */}
          <div className="mt-6 text-sm leading-6 text-white/40 lg:mt-0 lg:row-start-1 lg:col-[1/4]">
            <div>© {currentYear} AnimeVerse. All rights reserved.</div>
            <div className="text-xs text-white/30 mt-0.5">
              Built by <span className="text-white/50 font-medium">Anurag</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
