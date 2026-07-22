export default function FeedbackSkeleton() {
  return (
    <div className="flex h-full animate-pulse flex-col space-y-3 rounded-2xl border-2 p-5">
      {/* Message */}
      <div className="h-6 w-11/12 rounded bg-stone-700"></div>
      <div className="h-6 w-3/4 rounded bg-stone-700"></div>

      {/* Date */}
      <div className="h-4 w-32 rounded bg-stone-700"></div>

      {/* Buttons */}
      <div className="mt-auto flex gap-2 pt-4">
        <div className="h-11 w-24 rounded-xl bg-stone-700"></div>
        <div className="h-11 w-24 rounded-xl bg-stone-700"></div>
      </div>
    </div>
  );
}
