
import React, { useMemo } from "react";
import { Anime, UserAnimeEntry, WatchStatus } from "@/data/animeData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface StatisticsProps {
  userWatchlist: Record<number, UserAnimeEntry>;
  animeData: Anime[];
}

export const Statistics = ({ userWatchlist, animeData }: StatisticsProps) => {
  const stats = useMemo(() => {
    const statusCounts = {
      watching: 0,
      completed: 0,
      plan_to_watch: 0,
      on_hold: 0,
      dropped: 0,
    };
    
    const totalEpisodes = {
      watching: 0,
      completed: 0,
      total: 0,
    };
    
    Object.values(userWatchlist).forEach((entry) => {
      const anime = animeData.find((a) => a.id === entry.animeId);
      if (!anime) return;
      
      statusCounts[entry.status]++;
      
      if (entry.status === "watching") {
        totalEpisodes.watching += entry.progress;
      } else if (entry.status === "completed") {
        totalEpisodes.completed += anime.episodes;
      }
    });
    
    totalEpisodes.total = totalEpisodes.watching + totalEpisodes.completed;
    
    const totalAnime = Object.values(statusCounts).reduce((acc, count) => acc + count, 0);
    
    return {
      statusCounts,
      totalAnime,
      totalEpisodes,
    };
  }, [userWatchlist, animeData]);
  
  // Prepare data for the pie chart
  const chartData = useMemo(() => {
    return [
      { name: "Watching", value: stats.statusCounts.watching, color: "#3b82f6" },
      { name: "Completed", value: stats.statusCounts.completed, color: "#10b981" },
      { name: "Plan to Watch", value: stats.statusCounts.plan_to_watch, color: "#8b5cf6" },
      { name: "On Hold", value: stats.statusCounts.on_hold, color: "#f59e0b" },
      { name: "Dropped", value: stats.statusCounts.dropped, color: "#ef4444" },
    ].filter((item) => item.value > 0);
  }, [stats.statusCounts]);
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
    return percent > 0.05 ? (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl">{stats.totalAnime}</CardTitle>
          <CardDescription>Total Anime</CardDescription>
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl">{stats.statusCounts.completed}</CardTitle>
          <CardDescription>Completed</CardDescription>
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl">{stats.statusCounts.watching}</CardTitle>
          <CardDescription>Currently Watching</CardDescription>
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl">{stats.totalEpisodes.total}</CardTitle>
          <CardDescription>Total Episodes Watched</CardDescription>
        </CardHeader>
      </Card>
      
      <Card className="md:col-span-2 lg:col-span-4">
        <CardHeader>
          <CardTitle>Anime Status Distribution</CardTitle>
          <CardDescription>Breakdown of your anime by status</CardDescription>
        </CardHeader>
        <CardContent>
          {chartData.length > 0 ? (
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <p className="text-center py-10 text-muted-foreground">
              Add anime to your lists to see statistics
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
