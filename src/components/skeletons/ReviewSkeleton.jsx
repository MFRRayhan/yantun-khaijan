export default function ReviewSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-stone-700 bg-stone-800 p-6">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-stone-700"></div>

        <div className="space-y-2">
          <div className="h-5 w-36 rounded bg-stone-700"></div>
          <div className="h-4 w-28 rounded bg-stone-700"></div>
        </div>
      </div>

      <div className="mt-5 h-5 w-24 rounded bg-stone-700"></div>

      <div className="mt-5 space-y-3">
        <div className="h-4 rounded bg-stone-700"></div>
        <div className="h-4 rounded bg-stone-700"></div>
        <div className="h-4 w-5/6 rounded bg-stone-700"></div>
        <div className="h-4 w-2/3 rounded bg-stone-700"></div>
      </div>

      <div className="mt-6 flex justify-between border-t border-stone-700 pt-4">
        <div className="h-4 w-16 rounded bg-stone-700"></div>
        <div className="h-4 w-20 rounded bg-stone-700"></div>
      </div>
    </div>
  );
}
