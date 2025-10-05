"use client";

import { TaskStatus, TaskPriority } from "../data/tasks";

interface FiltersProps {
  status: TaskStatus | "all";
  priority: TaskPriority | "all";
  setStatus: (s: TaskStatus | "all") => void;
  setPriority: (p: TaskPriority | "all") => void;
}

export const TaskFilters = ({ status, priority, setStatus, setPriority }: FiltersProps) => {
  return (
    <div className="flex gap-4 mb-4">
      <select value={status} onChange={e => setStatus(e.target.value as any)} className="p-2 border rounded">
        <option value="all">All Status</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <select value={priority} onChange={e => setPriority(e.target.value as any)} className="p-2 border rounded">
        <option value="all">All Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};
