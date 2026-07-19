import FoodCardSkeleton from "@/components/skeletons/FoodSkeleton";

export default function Loading() {
  return (
    <div className="my-10 grid grid-cols-4 gap-6">
      {[...Array(12)].map((_, i) => (
        <FoodCardSkeleton key={i} />
      ))}
    </div>
  );
}
