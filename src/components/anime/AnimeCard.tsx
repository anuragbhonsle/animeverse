
import React from "react";
import { Anime, UserAnimeEntry, WatchStatus } from "@/data/animeData";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

interface AnimeCardProps {
  anime: Anime;
  userEntry?: UserAnimeEntry;
  onStatusChange?: (animeId: number, status: WatchStatus) => void;
  onClick?: (anime: Anime) => void;
}

export const AnimeCard = ({ 
  anime, 
  userEntry,
  onStatusChange,
  onClick 
}: AnimeCardProps) => {
  const { currentUser } = useAuth();
  
  const handleStatusChange = (status: WatchStatus) => {
    if (onStatusChange) {
      onStatusChange(anime.id, status);
    }
  };

  return (
    <Card 
      className="anime-card flex flex-col h-full"
      onClick={() => onClick && onClick(anime)}
    >
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img 
          src={anime.imageUrl} 
          alt={anime.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {userEntry && (
          <div className="absolute top-2 right-2">
            <StatusBadge status={userEntry.status} />
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg truncate">{anime.title}</CardTitle>
        <CardDescription className="text-xs flex justify-between">
          <span>{anime.releaseYear}</span>
          <span>{anime.episodes} episodes</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm line-clamp-3 text-muted-foreground">
          {anime.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1">
          {anime.genres.slice(0, 3).map((genre) => (
            <Badge key={genre} variant="outline" className="text-xs">
              {genre}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-yellow-500 mr-1"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm font-medium">{anime.rating.toFixed(1)}</span>
        </div>
        
        {currentUser && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                {userEntry ? "Update" : "Add to List"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleStatusChange("plan_to_watch")}>
                Plan to Watch
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleStatusChange("watching")}>
                Watching
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleStatusChange("completed")}>
                Completed
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleStatusChange("on_hold")}>
                On Hold
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleStatusChange("dropped")}>
                Dropped
              </DropdownMenuItem>
              {userEntry && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStatusChange("" as WatchStatus); // This is to remove the anime
                    }}
                    className="text-destructive"
                  >
                    Remove from List
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </CardFooter>
    </Card>
  );
};
