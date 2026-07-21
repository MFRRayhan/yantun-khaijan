import ReviewSkeleton from "@/components/skeletons/ReviewSkeleton";

export default function ReviewLoading() {
  return (
    <section className="container mx-auto px-5 py-12">
      {/* Section Title */}
      <div className="mb-8 flex justify-center">
        <div className="h-10 w-72 animate-pulse rounded-lg bg-stone-700"></div>
      </div>

      {/* Review Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <ReviewSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
