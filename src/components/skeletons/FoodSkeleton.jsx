export default function FoodCardSkeleton() {
  return (
    <div className="flex h-full animate-pulse flex-col overflow-hidden rounded-2xl border border-gray-200 bg-stone-800">
      {/* Image */}
      <div className="relative h-56 w-full bg-stone-700">
        {/* Category Badge */}
        <div className="absolute left-3 top-3 h-7 w-24 rounded-full bg-stone-600"></div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <div className="space-y-2">
          <div className="h-6 w-4/5 rounded bg-stone-700"></div>
          <div className="h-6 w-2/3 rounded bg-stone-700"></div>
        </div>

        {/* Price */}
        <div className="mt-4 h-8 w-24 rounded bg-stone-700"></div>

        {/* Buttons */}
        <div className="mt-auto flex gap-3 pt-6">
          <div className="h-12 flex-1 rounded-lg bg-stone-700"></div>
          <div className="h-12 flex-1 rounded-lg bg-stone-700"></div>
        </div>
      </div>
    </div>
  );
}
