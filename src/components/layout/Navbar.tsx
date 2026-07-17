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
import { User, LogOut, Menu } from "lucide-react";

export const Navbar = () => {
  const { currentUser, signOut } = useAuth();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/70 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-self-start">
          <span className="font-bold text-2xl bg-gradient-to-r from-anime-light-purple to-anime-purple bg-clip-text text-transparent">
            AnimeVerse
          </span>
        </Link>

        {/* Desktop Navigation — truly centered */}
        <div className="hidden md:flex items-center gap-8 justify-self-center">
          <Link
            to="/"
            className={`font-medium transition-colors nav-link ${
              isActive("/")
                ? "text-anime-light-purple"
                : "text-foreground/80 hover:text-anime-light-purple"
            }`}
          >
            Home
          </Link>
          <Link
            to="/browse"
            className={`font-medium transition-colors nav-link ${
              isActive("/browse")
                ? "text-anime-light-purple"
                : "text-foreground/80 hover:text-anime-light-purple"
            }`}
          >
            Browse
          </Link>
          {currentUser && (
            <Link
              to="/dashboard"
              className={`font-medium transition-colors nav-link ${
                isActive("/dashboard")
                  ? "text-anime-light-purple"
                  : "text-foreground/80 hover:text-anime-light-purple"
              }`}
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* User Actions */}
        <div className="flex items-center justify-self-end gap-3">
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
                <Button
                  asChild
                  variant="default"
                  className="btn-glow rounded-full px-6"
                >
                  <Link to="/auth">Sign In</Link>
                </Button>
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
