
import React, { useState } from "react";
import { Anime, UserAnimeEntry, WatchStatus, getStatusLabel } from "@/data/animeData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimeGrid } from "@/components/anime/AnimeGrid";
import { SearchBar } from "@/components/ui/SearchBar";

interface WatchlistStatusProps {
  userWatchlist: Record<number, UserAnimeEntry>;
  animeData: Anime[];
  onStatusChange: (animeId: number, status: WatchStatus) => void;
  onAnimeClick: (anime: Anime) => void;
}

export const WatchlistStatus = ({
  userWatchlist,
  animeData,
  onStatusChange,
  onAnimeClick,
}: WatchlistStatusProps) => {
  const [activeTab, setActiveTab] = useState<WatchStatus | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter anime by status and search query
  const filteredAnime = React.useMemo(() => {
    const userAnimeIds = Object.values(userWatchlist)
      .filter((entry) => {
        if (activeTab === "all") return true;
        return entry.status === activeTab;
      })
      .map((entry) => entry.animeId);

    return animeData
      .filter((anime) => userAnimeIds.includes(anime.id))
      .filter((anime) => {
        if (!searchQuery) return true;
        return anime.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
  }, [userWatchlist, animeData, activeTab, searchQuery]);

  // Count anime by status
  const statusCounts = React.useMemo(() => {
    const counts: Record<WatchStatus | "all", number> = {
      all: 0,
      plan_to_watch: 0,
      watching: 0,
      completed: 0,
      on_hold: 0,
      dropped: 0,
    };

    Object.values(userWatchlist).forEach((entry) => {
      counts[entry.status]++;
      counts.all++;
    });

    return counts;
  }, [userWatchlist]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-semibold">My Watchlist</h2>
        <SearchBar onSearch={setSearchQuery} placeholder="Search in your list..." />
      </div>

      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as WatchStatus | "all")}>
        <TabsList className="mb-6 overflow-x-auto flex-nowrap w-full md:w-auto">
          <TabsTrigger value="all" className="whitespace-nowrap">
            All ({statusCounts.all})
          </TabsTrigger>
          <TabsTrigger value="watching" className="whitespace-nowrap">
            Watching ({statusCounts.watching})
          </TabsTrigger>
          <TabsTrigger value="completed" className="whitespace-nowrap">
            Completed ({statusCounts.completed})
          </TabsTrigger>
          <TabsTrigger value="plan_to_watch" className="whitespace-nowrap">
            Plan to Watch ({statusCounts.plan_to_watch})
          </TabsTrigger>
          <TabsTrigger value="on_hold" className="whitespace-nowrap">
            On Hold ({statusCounts.on_hold})
          </TabsTrigger>
          <TabsTrigger value="dropped" className="whitespace-nowrap">
            Dropped ({statusCounts.dropped})
          </TabsTrigger>
        </TabsList>

        {["all", "watching", "completed", "plan_to_watch", "on_hold", "dropped"].map((status) => (
          <TabsContent key={status} value={status}>
            {filteredAnime.length > 0 ? (
              <AnimeGrid
                animeList={filteredAnime}
                userWatchlist={userWatchlist}
                onStatusChange={onStatusChange}
                onAnimeClick={onAnimeClick}
              />
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {searchQuery
                    ? "No anime found matching your search"
                    : `No anime in your ${status === "all" ? "watchlist" : getStatusLabel(status as WatchStatus).toLowerCase()} list`}
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
