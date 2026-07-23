"use client";
import { format } from "date-fns";
import DeleteFeedback from "../DeleteFeedback";

export default function FeedbackCard({ feedback }) {
  return (
    <div className="border-2 p-5 rounded-2xl space-y-2 flex flex-col h-full">
      <h3 className="text-lg">{feedback.message}</h3>
      <p className="text-xs text-amber-300">
        {format(new Date(feedback.createdAt), "dd MMMM, yyyy")}
      </p>
      <div className="flex items-center gap-2 mt-auto">
        <button className="btn bg-amber-300!">Update</button>
        <DeleteFeedback />
      </div>
    </div>
  );
}
