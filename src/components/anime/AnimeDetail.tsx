
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Anime, UserAnimeEntry, WatchStatus, getStatusLabel } from "@/data/animeData";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, Edit2 } from "lucide-react";

interface AnimeDetailProps {
  anime: Anime | null;
  userEntry?: UserAnimeEntry;
  onClose: () => void;
  onStatusChange?: (animeId: number, status: WatchStatus) => void;
  onProgressUpdate?: (animeId: number, progress: number) => void;
}

export const AnimeDetail = ({ 
  anime, 
  userEntry, 
  onClose,
  onStatusChange,
  onProgressUpdate 
}: AnimeDetailProps) => {
  const { currentUser } = useAuth();
  const [isEditingProgress, setIsEditingProgress] = useState(false);
  const [progressInput, setProgressInput] = useState<string>("");

  if (!anime) return null;

  const handleStatusChange = (value: string) => {
    if (onStatusChange && value !== "not_in_list") {
      onStatusChange(anime.id, value as WatchStatus);
    } else if (onStatusChange && value === "not_in_list") {
      // Handle removal through a separate function call
      onStatusChange(anime.id, "" as WatchStatus);
    }
  };

  const handleProgressUpdate = (value: number) => {
    if (onProgressUpdate) {
      onProgressUpdate(anime.id, value);
    }
  };

  const handleDirectProgressInput = () => {
    const progress = parseInt(progressInput, 10);
    if (!isNaN(progress) && progress >= 0 && progress <= anime.episodes) {
      handleProgressUpdate(progress);
      setIsEditingProgress(false);
      setProgressInput("");
    }
  };

  const handleProgressInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleDirectProgressInput();
    }
  };

  return (
    <Dialog open={!!anime} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{anime.title}</DialogTitle>
          <DialogDescription>
            {anime.releaseYear} • {anime.episodes} episodes
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative">
            <img 
              src={anime.imageUrl} 
              alt={anime.title} 
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute top-2 right-2">
              <div className="flex items-center bg-black/60 rounded-full px-2 py-0.5">
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
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="space-y-4">
              <p className="text-base">{anime.description}</p>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Genres</h3>
                <div className="flex flex-wrap gap-1">
                  {anime.genres.map((genre) => (
                    <Badge key={genre} variant="secondary">
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {currentUser && (
                <div className="pt-4 border-t border-border">
                  <h3 className="text-sm font-semibold mb-3">Add to Your List</h3>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex-grow">
                      <Select
                        value={userEntry?.status || "not_in_list"}
                        onValueChange={handleStatusChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="not_in_list">Not in list</SelectItem>
                          <SelectItem value="plan_to_watch">Plan to Watch</SelectItem>
                          <SelectItem value="watching">Watching</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="on_hold">On Hold</SelectItem>
                          <SelectItem value="dropped">Dropped</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {userEntry && (
                      <Button 
                        variant="destructive"
                        size="sm"
                        onClick={() => onStatusChange && onStatusChange(anime.id, "" as WatchStatus)}
                      >
                        <X className="w-4 h-4 mr-1" />
                        Remove
                      </Button>
                    )}
                  </div>
                  
                  {userEntry && userEntry.status === "watching" && (
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>
                          {userEntry.progress} / {anime.episodes} episodes
                        </span>
                      </div>
                      <Progress value={(userEntry.progress / anime.episodes) * 100} />
                      
                      {isEditingProgress ? (
                        <div className="flex items-center gap-2 mt-2">
                          <Input
                            type="number"
                            min="0"
                            max={anime.episodes}
                            value={progressInput}
                            onChange={(e) => setProgressInput(e.target.value)}
                            onKeyDown={handleProgressInputKeyDown}
                            placeholder="Enter episode number"
                            className="w-40"
                          />
                          <Button size="sm" onClick={handleDirectProgressInput}>Save</Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => {
                              setIsEditingProgress(false);
                              setProgressInput("");
                            }}
                          >
                            Cancel
                          </Button>
                        </div>
                      ) : (
                        <div className="flex justify-between mt-2">
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => handleProgressUpdate(Math.max(0, userEntry.progress - 1))}
                              disabled={userEntry.progress <= 0}
                            >
                              -
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => handleProgressUpdate(Math.min(anime.episodes, userEntry.progress + 1))}
                              disabled={userEntry.progress >= anime.episodes}
                            >
                              +
                            </Button>
                          </div>
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => {
                              setProgressInput(userEntry.progress.toString());
                              setIsEditingProgress(true);
                            }}
                          >
                            <Edit2 className="w-4 h-4 mr-1" />
                            Set Episode
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
