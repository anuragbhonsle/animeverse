import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut, Menu, X, Sun, Moon } from "lucide-react";

export function Navbar() {
  const { currentUser, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="sticky top-0 z-50 w-full pt-3 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-3 sm:px-6">
        {/* Floating Navbar Pill */}
        <div className="relative flex h-14 sm:h-16 w-full max-w-4xl items-center justify-between gap-2 rounded-full border border-border/40 bg-background/70 px-3 shadow-sm backdrop-blur-md md:max-w-5xl transition-colors duration-300">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-2 pl-2 sm:pl-4 pr-4 group"
          >
            <img
              src="/logo.png"
              alt="AnimeVerse Logo"
              className="h-7 w-7 sm:h-8 sm:w-8 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className="text-xl sm:text-2xl font-bold tracking-tight"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              <span className="bg-gradient-to-br from-foreground via-foreground/90 to-foreground/60 bg-clip-text text-transparent drop-shadow-sm">
                AnimeVerse
              </span>
            </span>
          </Link>

          {/* Desktop Navigation — strictly centered */}
          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
            ref={dropdownRef}
          >
            <ul className="flex items-center gap-1">
              <li>
                <Link
                  to="/"
                  className={`flex h-9 items-center justify-center rounded-full px-4 text-sm font-medium transition-colors ${
                    isActive("/")
                      ? "text-primary font-semibold"
                      : "text-foreground/80 hover:bg-accent/50 hover:text-foreground"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/browse"
                  className={`flex h-9 items-center justify-center rounded-full px-4 text-sm font-medium transition-colors ${
                    isActive("/browse")
                      ? "text-primary font-semibold"
                      : "text-foreground/80 hover:bg-accent/50 hover:text-foreground"
                  }`}
                >
                  Browse
                </Link>
              </li>
              {currentUser && (
                <li>
                  <Link
                    to="/dashboard"
                    className={`flex h-9 items-center justify-center rounded-full px-4 text-sm font-medium transition-colors ${
                      isActive("/dashboard")
                        ? "text-primary font-semibold"
                        : "text-foreground/80 hover:bg-accent/50 hover:text-foreground"
                    }`}
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          {/* Right Action Icons: Theme Toggle & Login/User Menu */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-accent/50"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-foreground transition-transform hover:rotate-45" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700 transition-transform hover:-rotate-12" />
              )}
            </Button>

            {/* Desktop Auth State */}
            <div className="hidden sm:flex items-center">
              {currentUser ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative rounded-full hover:bg-primary/10"
                    >
                      <User className="w-5 h-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-56 bg-card/95 backdrop-blur-sm"
                  >
                    <div className="px-2 py-1.5 text-sm font-medium border-b border-border mb-1">
                      {currentUser.email}
                    </div>
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard" className="cursor-pointer">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={signOut}
                      className="cursor-pointer text-destructive hover:text-destructive focus:text-destructive"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign Out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  to="/auth"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none transition-transform duration-300 hover:scale-105"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#7C3AED_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-5 text-sm font-medium text-foreground backdrop-blur-3xl">
                    Login
                  </span>
                </Link>
              )}
            </div>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                className="flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:bg-accent/50"
              >
                <Menu className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 flex w-80 max-w-[85vw] flex-col justify-between bg-background/95 p-6 shadow-2xl backdrop-blur-md border-l border-border transition-transform">
            <div className="flex flex-col gap-8">
              {/* Drawer Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/logo.png"
                    alt="AnimeVerse Logo"
                    className="h-6 w-6 object-contain"
                  />
                  <span
                    className="text-lg font-bold tracking-tight"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    <span className="bg-gradient-to-br from-foreground via-foreground/90 to-foreground/60 bg-clip-text text-transparent">
                      AnimeVerse
                    </span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="rounded-full p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex flex-col gap-2">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-xl px-3 py-2 text-base font-medium transition-colors ${
                    isActive("/")
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground/80 hover:bg-accent hover:text-foreground"
                  }`}
                >
                  Home
                </Link>

                <Link
                  to="/browse"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-xl px-3 py-2 text-base font-medium transition-colors ${
                    isActive("/browse")
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground/80 hover:bg-accent hover:text-foreground"
                  }`}
                >
                  Browse
                </Link>

                {currentUser && (
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`rounded-xl px-3 py-2 text-base font-medium transition-colors ${
                      isActive("/dashboard")
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground/80 hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    Dashboard
                  </Link>
                )}
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="mt-auto flex flex-col gap-4 pt-6 border-t border-border">
              {currentUser ? (
                <>
                  <div className="flex items-center space-x-2 px-1">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground truncate">
                      {currentUser.email}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      signOut();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full rounded-full text-destructive border-destructive/20 hover:bg-destructive/10"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <Link
                  to="/auth"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative flex items-center justify-center w-full overflow-hidden rounded-full p-[1px] focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#7C3AED_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background py-2.5 text-sm font-medium text-foreground backdrop-blur-3xl">
                    Login
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
