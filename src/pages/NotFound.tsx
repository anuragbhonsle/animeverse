import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <main className="relative flex-grow flex items-center justify-center py-20 px-4 overflow-hidden bg-background">
        {/* Ambient glow decoration */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
          <div className="w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-md mx-auto space-y-6">
          {/* Big Stylized 404 Header */}
          <h1 className="text-8xl md:text-9xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground via-muted-foreground/70 to-muted-foreground/20 select-none">
            404
          </h1>

          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Lost in the AnimeVerse?
            </h2>
            <p className="text-muted-foreground">
              The page you are looking for doesn't exist.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button asChild size="lg" className="rounded-full btn-glow gap-2">
              <Link to="/">
                <Home className="w-4 h-4" />
                Return to Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full gap-2"
            >
              <Link to="/browse">
                <ArrowLeft className="w-4 h-4" />
                Browse Anime
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
