export type TaskStatus = 'todo' | 'in-progress' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
}

export const tasks: Task[] = [
  { id: 1, title: "Task 1", description: "Dummy description 1", status: "todo", priority: "high" },
  { id: 2, title: "Task 2", description: "Dummy description 2", status: "in-progress", priority: "medium" },
  { id: 3, title: "Task 3", description: "Dummy description 3", status: "done", priority: "low" },
  { id: 4, title: "Task 4", description: "Dummy description 4", status: "todo", priority: "medium" },
  { id: 5, title: "Task 5", description: "Dummy description 5", status: "todo", priority: "medium" },
  { id: 6, title: "Task 6", description: "Dummy description 6", status: "in-progress", priority: "high" },
  { id: 7, title: "Task 7", description: "Dummy description 7", status: "todo", priority: "medium" },
  { id: 8, title: "Task 8", description: "Dummy description 8", status: "todo", priority: "low" },
  { id: 9, title: "Task 9", description: "Dummy description 9", status: "in-progress", priority: "high" },
  { id: 10, title: "Task 10", description: "Dummy description 9", status: "in-progress", priority: "high" },
  { id: 11, title: "Task 11", description: "Dummy description 9", status: "in-progress", priority: "high" },
];
