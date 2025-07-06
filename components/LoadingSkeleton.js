"use client";

export default function LoadingSkeleton() {
  return (
    <div className="space-y-8">
      {/* Profile Skeleton */}
      <div className="p-6 rounded-2xl bg-gray-200 dark:bg-gray-800">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-3 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="mt-6 space-y-2">
          <div className="flex justify-between">
            <div className="h-3 w-16 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-3 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
          <div className="w-full h-2.5 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Benefits Skeleton */}
      <div>
        <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-6 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-gray-200 dark:bg-gray-800 h-48 animate-pulse"
            ></div>
          ))}
        </div>
      </div>

      {/* Rewards Skeleton */}
      <div>
        <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-6 animate-pulse"></div>
        <div className="p-6 rounded-2xl bg-gray-200 dark:bg-gray-800 h-64 animate-pulse"></div>
      </div>
    </div>
  );
}