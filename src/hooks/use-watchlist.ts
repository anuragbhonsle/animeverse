
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { UserAnimeEntry, WatchStatus } from '@/data/animeData';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/components/ui/use-toast';

export const useWatchlist = () => {
  const [userWatchlist, setUserWatchlist] = useState<Record<number, UserAnimeEntry>>({});
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  // Fetch user watchlist from Supabase
  const fetchWatchlist = async () => {
    if (!currentUser) {
      setUserWatchlist({});
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('user_watchlist')
        .select('*')
        .eq('user_id', currentUser.id);

      if (error) throw error;

      // Convert from array to object with animeId as key
      const watchlistMap: Record<number, UserAnimeEntry> = {};
      data?.forEach(item => {
        watchlistMap[item.anime_id] = {
          animeId: item.anime_id,
          status: item.status as WatchStatus,
          progress: item.progress,
        };
      });

      setUserWatchlist(watchlistMap);
    } catch (error: any) {
      console.error('Error fetching watchlist:', error);
      toast({
        title: 'Failed to load watchlist',
        description: error.message || 'Please try again later',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  // Update status for anime in watchlist
  const updateAnimeStatus = async (animeId: number, status: WatchStatus | "") => {
    if (!currentUser) {
      toast({
        title: 'Authentication required',
        description: 'Please sign in to update your watchlist',
        variant: 'destructive',
      });
      return;
    }

    try {
      if (!status) {
        // Remove from watchlist
        await supabase
          .from('user_watchlist')
          .delete()
          .eq('user_id', currentUser.id)
          .eq('anime_id', animeId);

        // Update local state
        const newWatchlist = { ...userWatchlist };
        delete newWatchlist[animeId];
        setUserWatchlist(newWatchlist);
        
        toast({
          title: 'Removed from watchlist',
          description: 'The anime has been removed from your watchlist',
        });
      } else {
        const existingEntry = userWatchlist[animeId];
        
        // First check if the entry already exists
        if (existingEntry) {
          // Update existing entry
          const { error } = await supabase
            .from('user_watchlist')
            .update({
              status: status,
              updated_at: new Date().toISOString()
            })
            .eq('user_id', currentUser.id)
            .eq('anime_id', animeId);

          if (error) throw error;
        } else {
          // Insert new entry
          const { error } = await supabase
            .from('user_watchlist')
            .insert({
              user_id: currentUser.id,
              anime_id: animeId,
              status: status,
              progress: 0,
            });

          if (error) throw error;
        }

        // Update local state
        setUserWatchlist({
          ...userWatchlist,
          [animeId]: {
            animeId,
            status,
            progress: existingEntry?.progress || 0,
          },
        });
        
        toast({
          title: 'Watchlist updated',
          description: `Anime has been updated in your ${status.replace("_", " ")} list`,
        });
      }
    } catch (error: any) {
      console.error('Error updating watchlist:', error);
      toast({
        title: 'Failed to update watchlist',
        description: error.message || 'Please try again later',
        variant: 'destructive',
      });
    }
  };

  // Update progress for anime in watchlist
  const updateAnimeProgress = async (animeId: number, progress: number) => {
    if (!currentUser || !userWatchlist[animeId]) {
      return;
    }

    try {
      const { error } = await supabase
        .from('user_watchlist')
        .update({ progress, updated_at: new Date().toISOString() })
        .eq('user_id', currentUser.id)
        .eq('anime_id', animeId);

      if (error) throw error;

      // Update local state
      setUserWatchlist({
        ...userWatchlist,
        [animeId]: {
          ...userWatchlist[animeId],
          progress,
        },
      });
      
      toast({
        title: 'Progress updated',
        description: `Progress updated to ${progress} episodes`,
      });
    } catch (error: any) {
      console.error('Error updating progress:', error);
      toast({
        title: 'Failed to update progress',
        description: error.message || 'Please try again later',
        variant: 'destructive',
      });
    }
  };

  // Fetch watchlist on mount and when user changes
  useEffect(() => {
    fetchWatchlist();
  }, [currentUser?.id]);

  return {
    userWatchlist,
    loading,
    updateAnimeStatus,
    updateAnimeProgress,
    refreshWatchlist: fetchWatchlist
  };
};
