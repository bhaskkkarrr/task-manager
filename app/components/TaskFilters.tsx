import { TaskStatus, TaskPriority } from "../data/tasks";

interface FiltersProps {
  status: TaskStatus | "all";
  priority: TaskPriority | "all";
  setStatus: (s: TaskStatus | "all") => void;
  setPriority: (p: TaskPriority | "all") => void;
}

export const TaskFilters = ({ status, priority, setStatus, setPriority }: FiltersProps) => {
  const statusOptions: (TaskStatus | "all")[] = ["all", "todo", "in-progress", "done"];
  const priorityOptions: (TaskPriority | "all")[] = ["all", "low", "medium", "high"];

  return (
    <div className="flex gap-4 mb-4">
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as TaskStatus | "all")}
        className="p-2 border rounded"
      >
        {statusOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt === "all" ? `All Status` : opt.charAt(0).toUpperCase() + opt.slice(1)}
          </option>
        ))}
      </select>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as TaskPriority | "all")}
        className="p-2 border rounded"
      >
        {priorityOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt === "all" ? `All Priority` : opt.charAt(0).toUpperCase() + opt.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};
