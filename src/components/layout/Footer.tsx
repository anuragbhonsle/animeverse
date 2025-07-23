import React from "react";
import { Link } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="font-bold text-xl text-foreground">
              <span className="bg-gradient-to-r from-anime-tertiary to-anime-secondary dark:from-anime-light-purple dark:to-anime-purple bg-clip-text text-transparent">
                AnimeVerse
              </span>
            </Link>
            <p className="mt-2 text-muted-foreground text-sm">
              Your personal anime watchlist manager
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
            <div>
              <h4 className="font-medium mb-3 text-foreground">Navigation</h4>
              <div className="flex flex-col space-y-2">
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/browse"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Browse
                </Link>
                <Link
                  to="/dashboard"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Dashboard
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-foreground">
                External Links
              </h4>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <Github className="h-3.5 w-3.5 mr-1.5" />
                  GitHub
                </a>
                <a
                  href="https://myanimelist.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                  MyAnimeList
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 pt-2 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} AnimeVerse. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-1 opacity-70">
            This project is for educational purposes only. Created by{" "}
            <strong>Anurag</strong>. This is not the final version of the site.
          </p>
        </div>
      </div>
    </footer>
  );
};
