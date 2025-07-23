import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/70 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span
            style={{ fontFamily: "Raleway, sans-serif" }}
            className="font-bold text-2xl bg-gradient-to-r from-anime-tertiary to-anime-secondary dark:from-anime-light-purple dark:to-anime-purple bg-clip-text text-transparent"
          >
            AnimeVerse
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`font-medium transition-colors nav-link ${
              isActive("/")
                ? "text-primary"
                : "text-foreground/80 hover:text-primary"
            }`}
          >
            Home
          </Link>
          <Link
            to="/browse"
            className={`font-medium transition-colors nav-link ${
              isActive("/browse")
                ? "text-primary"
                : "text-foreground/80 hover:text-primary"
            }`}
          >
            Browse
          </Link>
          {currentUser && (
            <Link
              to="/dashboard"
              className={`font-medium transition-colors nav-link ${
                isActive("/dashboard")
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />

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
                    className="w-56 dark:bg-card/95 dark:backdrop-blur-sm"
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
                <Button asChild variant="default" className="btn-glow">
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
              className="md:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden px-4 py-3 bg-background/95 dark:bg-background/90 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive("/") ? "bg-primary/10 text-primary" : "hover:bg-muted"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/browse"
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive("/browse")
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-muted"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Browse
            </Link>
            {currentUser && (
              <Link
                to="/dashboard"
                className={`px-3 py-2 rounded-md transition-colors ${
                  isActive("/dashboard")
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted"
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
                  className="mx-3 text-destructive border-destructive/20 hover:bg-destructive/10"
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
                className="mx-3 w-full"
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
