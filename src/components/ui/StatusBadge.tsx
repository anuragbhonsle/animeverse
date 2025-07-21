
import React from "react";
import { cn } from "@/lib/utils";
import { WatchStatus, getStatusLabel } from "@/data/animeData";

interface StatusBadgeProps {
  status: WatchStatus;
  className?: string;
}

// New function to get status colors that match our black and white theme
const getStatusColor = (status: WatchStatus) => {
  switch (status) {
    case "watching":
      return "bg-slate-700 text-white dark:bg-white dark:text-black";
    case "completed":
      return "bg-emerald-700 text-white dark:bg-emerald-200 dark:text-emerald-900";
    case "plan_to_watch":
      return "bg-gray-500 text-white dark:bg-gray-300 dark:text-gray-800";
    case "on_hold":
      return "bg-amber-600 text-white dark:bg-amber-200 dark:text-amber-900";
    case "dropped":
      return "bg-red-600 text-white dark:bg-red-200 dark:text-red-900";
    default:
      return "bg-gray-500 text-white dark:bg-gray-300 dark:text-gray-800";
  }
};

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  return (
    <span className={cn("status-badge text-xs py-1 px-2 rounded-full font-medium", getStatusColor(status), className)}>
      {getStatusLabel(status)}
    </span>
  );
};
