"use client";
import { format } from "date-fns";
import DeleteFeedback from "../DeleteFeedback";
import UpdateFeedback from "../UpdateFeedback";

export default function FeedbackCard({ feedback }) {
  return (
    <div className="border-2 p-5 rounded-2xl space-y-2 flex flex-col h-full">
      <h3 className="text-lg">{feedback.message}</h3>
      <p className="text-xs text-amber-300">
        {format(new Date(feedback.createdAt), "dd MMMM, yyyy 'at' hh:mm a")}
      </p>
      <div className="flex items-center gap-2 mt-auto">
        <UpdateFeedback feedback={feedback} />
        <DeleteFeedback feedback={feedback} />
      </div>
    </div>
  );
}
