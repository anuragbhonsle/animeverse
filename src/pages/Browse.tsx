import React, { useState, useMemo, useRef } from "react";
import { Anime, animeData, WatchStatus } from "@/data/animeData";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimeGrid } from "@/components/anime/AnimeGrid";
import { AnimeDetail } from "@/components/anime/AnimeDetail";
import { SearchBar } from "@/components/ui/SearchBar";
import { Button } from "@/components/ui/button";
import { useWatchlist } from "@/hooks/use-watchlist";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";

const Browse = () => {
  const { userWatchlist, updateAnimeStatus, updateAnimeProgress } = useWatchlist();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [minRating, setMinRating] = useState(0);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);
  const [sortBy, setSortBy] = useState<string>("title_asc");
  const randomButtonRef = useRef<HTMLButtonElement>(null);
  
  // Get unique genres from anime data
  const genres = useMemo(() => {
    const allGenres = new Set<string>();
    animeData.forEach(anime => {
      anime.genres.forEach(genre => allGenres.add(genre));
    });
    return Array.from(allGenres).sort();
  }, []);

  // Filter and sort anime
  const filteredAnime = useMemo(() => {
    let filtered = [...animeData];

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(anime => 
        anime.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply genre filter
    if (selectedGenre) {
      filtered = filtered.filter(anime => 
        anime.genres.includes(selectedGenre)
      );
    }

    // Apply rating filter
    if (minRating > 0) {
      filtered = filtered.filter(anime => anime.rating >= minRating);
    }

    // Sort anime
    switch (sortBy) {
      case "title_asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title_desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "rating_desc":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "year_desc":
        filtered.sort((a, b) => b.releaseYear - a.releaseYear);
        break;
      case "year_asc":
        filtered.sort((a, b) => a.releaseYear - b.releaseYear);
        break;
      default:
        break;
    }

    return filtered;
  }, [animeData, searchQuery, selectedGenre, minRating, sortBy]);

  // Top rated anime
  const topRatedAnime = useMemo(() => {
    return [...animeData]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 8);
  }, []);

  // Recent anime (based on release year)
  const recentAnime = useMemo(() => {
    return [...animeData]
      .sort((a, b) => b.releaseYear - a.releaseYear)
      .slice(0, 8);
  }, []);

  const handleRandomAnime = () => {
    if (filteredAnime.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredAnime.length);
      setSelectedAnime(filteredAnime[randomIndex]);
      
      // Add animation
      if (randomButtonRef.current) {
        randomButtonRef.current.classList.add('animate-spin');
        setTimeout(() => {
          if (randomButtonRef.current) {
            randomButtonRef.current.classList.remove('animate-spin');
          }
        }, 500);
      }
    }
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedGenre("");
    setMinRating(0);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow container px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Discover Anime</h1>
        
        {/* Search and filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-start">
          <div className="flex-grow w-full md:w-auto">
            <SearchBar 
              onSearch={setSearchQuery}
              placeholder="Search anime by title..."
              className="w-full"
            />
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              variant="outline"
              type="button"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters
              {(selectedGenre || minRating > 0) && (
                <Badge variant="secondary" className="ml-2">
                  {(selectedGenre ? 1 : 0) + (minRating > 0 ? 1 : 0)}
                </Badge>
              )}
            </Button>
            <Button
              ref={randomButtonRef}
              onClick={handleRandomAnime}
              variant="outline"
              disabled={filteredAnime.length === 0}
            >
              Random
            </Button>
          </div>
        </div>
        
        {/* Filter and sort bar */}
        {isFiltersOpen && (
          <div className="bg-card border border-border rounded-lg p-4 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 animate-scale-in">
            <div>
              <label className="text-sm font-medium mb-2 block">Genre</label>
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger>
                  <SelectValue placeholder="Select genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>
                  {genres.map(genre => (
                    <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Minimum Rating</label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[minRating]}
                  min={0}
                  max={10}
                  step={0.5}
                  onValueChange={(value) => setMinRating(value[0])}
                  className="flex-grow"
                />
                <span className="w-12 text-center font-medium">
                  {minRating > 0 ? minRating : 'Any'}
                </span>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title_asc">Title (A-Z)</SelectItem>
                  <SelectItem value="title_desc">Title (Z-A)</SelectItem>
                  <SelectItem value="rating_desc">Highest Rating</SelectItem>
                  <SelectItem value="year_desc">Newest First</SelectItem>
                  <SelectItem value="year_asc">Oldest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="md:col-span-3 flex justify-end">
              <Button
                variant="ghost"
                size="sm"
                onClick={resetFilters}
                disabled={!selectedGenre && minRating === 0 && !searchQuery}
              >
                <X className="mr-2 h-4 w-4" />
                Reset Filters
              </Button>
            </div>
          </div>
        )}
        
        {/* Browse Tabs */}
        {!searchQuery && !selectedGenre && minRating === 0 ? (
          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All Anime</TabsTrigger>
              <TabsTrigger value="top">Top Rated</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="pt-6">
              <AnimeGrid
                animeList={animeData}
                userWatchlist={userWatchlist}
                onStatusChange={updateAnimeStatus}
                onAnimeClick={(anime) => setSelectedAnime(anime)}
              />
            </TabsContent>
            
            <TabsContent value="top" className="pt-6">
              <AnimeGrid
                animeList={topRatedAnime}
                userWatchlist={userWatchlist}
                onStatusChange={updateAnimeStatus}
                onAnimeClick={(anime) => setSelectedAnime(anime)}
              />
            </TabsContent>
            
            <TabsContent value="recent" className="pt-6">
              <AnimeGrid
                animeList={recentAnime}
                userWatchlist={userWatchlist}
                onStatusChange={updateAnimeStatus}
                onAnimeClick={(anime) => setSelectedAnime(anime)}
              />
            </TabsContent>
          </Tabs>
        ) : (
          <>
            <div className="mb-4">
              <h2 className="text-xl font-medium">Search Results</h2>
              <p className="text-muted-foreground">
                {filteredAnime.length} {filteredAnime.length === 1 ? 'result' : 'results'} found
              </p>
            </div>
            <AnimeGrid
              animeList={filteredAnime}
              userWatchlist={userWatchlist}
              onStatusChange={updateAnimeStatus}
              onAnimeClick={(anime) => setSelectedAnime(anime)}
            />
          </>
        )}
        
        {/* Anime Detail Modal */}
        <AnimeDetail
          anime={selectedAnime}
          userEntry={selectedAnime ? userWatchlist[selectedAnime.id] : undefined}
          onClose={() => setSelectedAnime(null)}
          onStatusChange={updateAnimeStatus}
          onProgressUpdate={updateAnimeProgress}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Browse;
