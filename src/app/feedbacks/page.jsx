import FeedbackCard from "@/components/cards/FeedbackCard";
import Link from "next/link";
import { connect } from "../lib/dbConnect";

export const metadata = {
  title: "Feedbacks",
};

export const dynamic = "force-dynamic";

// const getFeedbacks = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/feedbacks`, {
//     // cache: "force-cache",
//     next: { revalidate: 60 },
//   });
//   const data = await res.json();

//   return data;
// };

export default async function Feedbacks() {
  // const feedbacks = await getFeedbacks();
  const feedbacks = await connect("feedbacks").find().toArray();
  const serializedFeedbacks = feedbacks.map((feedback) => ({
    ...feedback,
    _id: feedback._id.toString(),
  }));

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
        {serializedFeedbacks.map((feedback) => (
          <FeedbackCard key={feedback._id.toString()} feedback={feedback} />
        ))}
      </div>
    </div>
  );
}
