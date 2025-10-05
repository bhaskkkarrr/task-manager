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
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
          Status Filter
        </label>
        <div className="relative group">
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as TaskStatus | "all")}
            className="w-full appearance-none bg-white border-2 border-gray-200 text-gray-900 py-2.5 pl-3 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer hover:border-gray-300 [&>*]:py-2"
            style={{
              backgroundImage: 'none'
            }}
          >
            {statusOptions.map((opt) => (
              <option 
                key={opt} 
                value={opt}
                className={` font-medium`}
              >
                {opt === "all" 
                  ? "📋 All Status" 
                  : `${opt === "done" ? "✅" : opt === "in-progress" ? "⏳" : "📝"} ${
                      opt.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                    }`
                }
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5">
            <div className="p-0.5 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
              <svg className="w-4 h-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex-1">
        <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
          Priority Filter
        </label>
        <div className="relative group">
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as TaskPriority | "all")}
            className="w-full appearance-none bg-white border-2 border-gray-200 text-gray-900 py-2.5 pl-3 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer hover:border-gray-300 [&>*]:py-2"
            style={{
              backgroundImage: 'none'
            }}
          >
            {priorityOptions.map((opt) => (
              <option 
                key={opt}
                value={opt}
                className={`font-medium`}
              >
                {opt === "all"
                  ? "🔄 All Priority"
                  : `${opt === "high" ? "🔴" : opt === "medium" ? "🟡" : "🟢"} ${
                      opt.charAt(0).toUpperCase() + opt.slice(1)
                    }`
                }
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5">
            <div className="p-0.5 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
              <svg className="w-4 h-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
