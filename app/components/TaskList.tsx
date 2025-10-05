"use client";

import { Task } from "../data/tasks";

interface TaskListProps {
  tasks: Task[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <div key={task.id} className="p-4 border rounded shadow-sm">
          <h2 className="font-bold">{task.title}</h2>
          <p>{task.description}</p>
          <p>Status: {task.status} | Priority: {task.priority}</p>
        </div>
      ))}
    </div>
  );
};
