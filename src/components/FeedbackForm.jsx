"use client";

import { redirect, useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function FeedbackForm() {
  const router = useRouter();
  const handleFeedback = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;

    const newFeedback = {
      message,
    };

    const res = await fetch("/api/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await res.json();

    if (data.insertedId) {
      Swal.fire({
        title: "Good job!",
        text: "Your feedback was submitted",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      router.push("/feedbacks");
    }

    e.target.reset();
  };

  return (
    <form onSubmit={handleFeedback} className="space-y-5">
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-stone-300"
        >
          Your Feedback
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Write your feedback here..."
          className="textarea textarea-bordered w-full resize-none"
        />
      </div>

      <button type="submit" className="btn w-full">
        Submit Feedback
      </button>
    </form>
  );
}
