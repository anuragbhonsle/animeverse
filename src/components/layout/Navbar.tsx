import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut, Menu, Home } from "lucide-react";
import { IconBrowser, IconDashboard } from "@tabler/icons-react";

export const Navbar = () => {
  const { currentUser, signOut } = useAuth();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/70 backdrop-blur-md">
      {/* 12-column grid guarantees absolute horizontal centering for the middle column */}
      <div className="container mx-auto py-3 grid grid-cols-12 items-center">
        {/* Left: Logo (3 columns) */}
        <div className="col-span-3 flex items-center justify-start">
          <Link to="/">
            <span
              className="text-2xl font-bold tracking-tight"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              <span className="bg-gradient-to-br from-white via-white/90 to-white/60 bg-clip-text text-transparent drop-shadow-sm">
                AnimeVerse
              </span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links (6 columns - strictly centered) */}
        <div className="hidden md:col-span-6 md:flex items-center justify-center gap-8">
          <Link
            to="/"
            className={`font-medium transition-colors nav-link ${
              isActive("/")
                ? "text-white"
                : "text-foreground/80 hover:text-anime-light-purple"
            }`}
          >
            <Home className="w-5 h-5" />
          </Link>
          <Link
            to="/browse"
            className={`font-medium transition-colors nav-link ${
              isActive("/browse")
                ? "text-white"
                : "text-foreground/80 hover:text-anime-light-purple"
            }`}
          >
            <IconBrowser className="w-5 h-5" />
          </Link>
          {currentUser && (
            <Link
              to="/dashboard"
              className={`font-medium transition-colors nav-link ${
                isActive("/dashboard")
                  ? "text-white"
                  : "text-foreground/80 hover:text-anime-light-purple"
              }`}
            >
              <IconDashboard className="w-5 h-5" />
            </Link>
          )}
        </div>

        {/* Right: User Actions (3 columns) */}
        <div className="col-span-9 md:col-span-3 flex items-center justify-end gap-3">
          {/* User Menu - Desktop */}
          {!isMobile && (
            <>
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
                  onClick={() => setIsMenuOpen(false)}
                  className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-transform duration-300 hover:scale-105"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#7C3AED_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl group">
                    Login
                  </span>
                </Link>
              )}
            </>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="md:hidden rounded-full"
            >
              <Menu className="h-6 w-6" />
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden px-4 py-3 bg-background/90 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className={`px-3 py-2 rounded-full transition-colors ${
                isActive("/")
                  ? "bg-anime-light-purple/20 text-anime-light-purple"
                  : "hover:bg-muted text-foreground/80"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/browse"
              className={`px-3 py-2 rounded-full transition-colors ${
                isActive("/browse")
                  ? "bg-anime-light-purple/20 text-anime-light-purple"
                  : "hover:bg-muted text-foreground/80"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Browse
            </Link>
            {currentUser && (
              <Link
                to="/dashboard"
                className={`px-3 py-2 rounded-full transition-colors ${
                  isActive("/dashboard")
                    ? "bg-anime-light-purple/20 text-anime-light-purple"
                    : "hover:bg-muted text-foreground/80"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}

            <div className="border-t border-border my-2"></div>

            {currentUser ? (
              <>
                <div className="px-3 py-2 flex items-center space-x-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">
                    {currentUser.email}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="mx-3 rounded-full text-destructive border-destructive/20 hover:bg-destructive/10"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </>
            ) : (
              <Button
                asChild
                variant="default"
                size="sm"
                className="mx-3 w-full rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/auth">Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
