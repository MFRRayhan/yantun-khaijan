export default function ReviewSkeleton() {
  return (
    <div className="flex h-full animate-pulse flex-col rounded-2xl border border-stone-700 bg-stone-800 p-6">
      {/* User */}
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-stone-700"></div>

        <div className="flex-1 space-y-2">
          <div className="h-5 w-32 rounded bg-stone-700"></div>
          <div className="h-4 w-44 rounded bg-stone-700"></div>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-4 flex gap-2">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="h-5 w-5 rounded bg-stone-700"></div>
        ))}
      </div>

      {/* Review */}
      <div className="mt-4 flex-1 space-y-3">
        <div className="h-4 w-full rounded bg-stone-700"></div>
        <div className="h-4 w-full rounded bg-stone-700"></div>
        <div className="h-4 w-5/6 rounded bg-stone-700"></div>
        <div className="h-4 w-3/4 rounded bg-stone-700"></div>
        <div className="h-4 w-2/3 rounded bg-stone-700"></div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-stone-700 pt-4">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-stone-700"></div>
          <div className="h-4 w-16 rounded bg-stone-700"></div>
        </div>

        <div className="h-4 w-20 rounded bg-stone-700"></div>
      </div>
    </div>
  );
}
