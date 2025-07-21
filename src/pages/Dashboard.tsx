
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { animeData, Anime } from "@/data/animeData";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Statistics } from "@/components/dashboard/Statistics";
import { WatchlistStatus } from "@/components/dashboard/WatchlistStatus";
import { AnimeDetail } from "@/components/anime/AnimeDetail";
import { useWatchlist } from "@/hooks/use-watchlist";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const { currentUser, loading: authLoading } = useAuth();
  const { userWatchlist, loading: watchlistLoading, updateAnimeStatus, updateAnimeProgress } = useWatchlist();
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);

  // If not logged in and not loading, redirect to home page
  if (!authLoading && !currentUser) {
    return <Navigate to="/auth" />;
  }

  const loading = authLoading || watchlistLoading;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
          <p>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {currentUser?.email?.split('@')[0] || "Anime Fan"}!
          </p>
        </div>

        <Tabs defaultValue="watchlist" className="space-y-8">
          <TabsList>
            <TabsTrigger value="watchlist">My Watchlist</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="watchlist">
            <WatchlistStatus
              userWatchlist={userWatchlist}
              animeData={animeData}
              onStatusChange={updateAnimeStatus}
              onAnimeClick={(anime) => setSelectedAnime(anime)}
            />
          </TabsContent>
          
          <TabsContent value="stats">
            <Statistics userWatchlist={userWatchlist} animeData={animeData} />
          </TabsContent>
        </Tabs>

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

export default Dashboard;
