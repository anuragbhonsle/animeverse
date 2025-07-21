
import React from "react";
import { Anime, UserAnimeEntry, WatchStatus } from "@/data/animeData";
import { AnimeCard } from "./AnimeCard";

interface AnimeGridProps {
  animeList: Anime[];
  userWatchlist?: Record<number, UserAnimeEntry>;
  onStatusChange?: (animeId: number, status: WatchStatus) => void;
  onAnimeClick?: (anime: Anime) => void;
}

export const AnimeGrid = ({ 
  animeList, 
  userWatchlist = {}, 
  onStatusChange,
  onAnimeClick
}: AnimeGridProps) => {
  if (animeList.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-muted-foreground">No anime found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {animeList.map((anime) => (
        <AnimeCard
          key={anime.id}
          anime={anime}
          userEntry={userWatchlist[anime.id]}
          onStatusChange={onStatusChange}
          onClick={() => onAnimeClick && onAnimeClick(anime)}
        />
      ))}
    </div>
  );
};
