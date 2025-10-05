"use client";

import { useState } from "react";
import { useTasks } from "./hooks/useTasks";
import { TaskFilters } from "./components/TaskFilters";
import { TaskList } from "./components/TaskList";
import { useScroll } from "./hooks/useScroll";

export default function Home() {
  const { data, loading, error } = useTasks();
  const [status, setStatus] = useState("all");
  const [priority, setPriority] = useState("all");
  const isAtEnd = useScroll();

  const filteredTasks = data.filter(task =>
    (status === "all" || task.status === status) &&
    (priority === "all" || task.priority === priority)
  );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskFilters status={status as any} priority={priority as any} setStatus={setStatus} setPriority={setPriority} />

      {loading && <p>Loading tasks...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && <TaskList tasks={filteredTasks} />}

      {isAtEnd && (
        <div className="fixed bottom-4 right-4 p-2 bg-green-500 text-white rounded shadow">
          You reached the end of the page!
        </div>
      )}
    </div>

  );
}
