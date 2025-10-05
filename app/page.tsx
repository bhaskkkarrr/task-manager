"use client";

import { useState } from "react";
import { useTasks } from "./hooks/useTasks";
import { TaskFilters } from "./components/TaskFilters";
import { TaskList } from "./components/TaskList";
import { useScroll } from "./hooks/useScroll";
import { TaskStatus, TaskPriority } from "./data/tasks";

export default function Home() {
  const { data, loading, error } = useTasks();
  const [status, setStatus] = useState<TaskStatus | "all">("all");
  const [priority, setPriority] = useState<TaskPriority | "all">("all");
  const isAtEnd = useScroll();

  const filteredTasks = data.filter(
    (task) =>
      (status === "all" || task.status === status) &&
      (priority === "all" || task.priority === priority)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Elegant Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            Task Manager
          </h1>
          <div className="flex justify-center gap-2 text-sm text-gray-600">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium border border-blue-100">
              {filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'}
            </span>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200/50 backdrop-blur-xl">
          {/* Filters Section */}
          <div className="p-6 border-b border-gray-100">
            <TaskFilters
              status={status}
              priority={priority}
              setStatus={setStatus}
              setPriority={setPriority}
            />
          </div>

          {/* Content Section */}
          <div className="p-6">
            {/* Loading State */}
            {loading && (
              <div className="flex justify-center py-12">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                </div>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="mx-auto max-w-md p-4 bg-red-50 border border-red-100 rounded-lg">
                <div className="flex gap-3 items-center text-red-700">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm font-medium">{error}</p>
                </div>
              </div>
            )}

            {/* Task List */}
            {!loading && !error && (
              <div className="transition-all duration-300">
                <TaskList tasks={filteredTasks} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced End Indicator */}
      {isAtEnd && (
        <div className="fixed inset-x-0 bottom-6 flex justify-center">
          <div className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full shadow-lg transform transition-all duration-500 hover:scale-105">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">You&apos;ve reached the end</span>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}
