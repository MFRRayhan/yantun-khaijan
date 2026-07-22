import FeedbackCard from "@/components/cards/FeedbackCard";
import Link from "next/link";

export const metadata = {
  title: "Feedbacks",
};

const getFeedbacks = async () => {
  const res = await fetch("http://localhost:3000/api/feedbacks", {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  const data = await res.json();

  return data;
};

export default async function Feedbacks() {
  const feedbacks = await getFeedbacks();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl">
          <span className="text-amber-300">{feedbacks.length} </span>
          Feedbacks Found
        </h2>

        <Link href={"/feedbacks/add-feedback"} className="btn">
          Add Feedback
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback._id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
}
