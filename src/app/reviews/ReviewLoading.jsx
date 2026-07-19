import ReviewSkeleton from "@/components/skeletons/ReviewSkeleton";

export default function ReviewLoading() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {[...Array(12)].map((_, i) => (
        <ReviewSkeleton key={i} />
      ))}
    </div>
  );
}
