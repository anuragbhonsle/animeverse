
import React, { useEffect, useState } from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Theme = "light" | "dark" | "system";

export const ThemeToggle = () => {
  // Initialize theme from localStorage or default to system preference
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme === "light" || savedTheme === "dark" || savedTheme === "system") {
      return savedTheme;
    }
    // Default to system
    return "system";
  });

  // Update the DOM when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      
      root.classList.remove("light", "dark");
      root.classList.add(systemTheme);
    } else {
      root.classList.remove("light", "dark");
      root.classList.add(theme);
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listen for system preference changes when in system mode
  useEffect(() => {
    if (theme !== "system") return;
    
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      const root = window.document.documentElement;
      if (mediaQuery.matches) {
        root.classList.remove("light");
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
        root.classList.add("light");
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 dark:hover:bg-primary/20">
          {theme === "light" ? (
            <Sun className="h-5 w-5 transition-all" />
          ) : theme === "dark" ? (
            <Moon className="h-5 w-5 transition-all" />
          ) : (
            <Laptop className="h-5 w-5 transition-all" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark:bg-card/95 dark:backdrop-blur-sm">
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className={`cursor-pointer flex items-center justify-between ${theme === "light" ? "bg-muted" : ""}`}
        >
          <div className="flex items-center">
            <Sun className="h-4 w-4 mr-2" />
            <span>Light</span>
          </div>
          {theme === "light" && <span className="h-1.5 w-1.5 rounded-full bg-primary ml-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className={`cursor-pointer flex items-center justify-between ${theme === "dark" ? "bg-muted" : ""}`}
        >
          <div className="flex items-center">
            <Moon className="h-4 w-4 mr-2" />
            <span>Dark</span>
          </div>
          {theme === "dark" && <span className="h-1.5 w-1.5 rounded-full bg-primary ml-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className={`cursor-pointer flex items-center justify-between ${theme === "system" ? "bg-muted" : ""}`}
        >
          <div className="flex items-center">
            <Laptop className="h-4 w-4 mr-2" />
            <span>System</span>
          </div>
          {theme === "system" && <span className="h-1.5 w-1.5 rounded-full bg-primary ml-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
