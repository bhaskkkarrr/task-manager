"use client";

import { useEffect, useState } from "react";
import { Task, tasks } from "../data/tasks";

export const useTasks = () => {
  const [data, setData] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Mock error 20% of time
      if (Math.random() < 0.2) {
        setError("Failed to fetch tasks");
      } else {
        setData(tasks);
      }
      setLoading(false);
    }, 1000); // 1s loading

    return () => clearTimeout(timer);
  }, []);

  return { data, loading, error };
};
