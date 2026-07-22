import FeedbackSkeleton from "@/components/skeletons/FeedbackSkeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="h-10 w-72 animate-pulse rounded-lg bg-stone-700"></div>

        <div className="h-12 w-36 animate-pulse rounded-xl bg-stone-700"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <FeedbackSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
