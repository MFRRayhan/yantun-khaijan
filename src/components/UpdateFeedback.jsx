"use client";

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { updateFeedback } from "@/app/actions/feedbackActions";

export default function UpdateFeedback({ feedback }) {
  const router = useRouter();

  const handleUpdate = async () => {
    const { value: message } = await Swal.fire({
      title: "Update feedback",
      input: "textarea",
      inputValue: feedback.message,
      inputPlaceholder: "Write feedback...",
      showCancelButton: true,
      confirmButtonText: "Update",
      inputValidator: (value) => {
        if (!value?.trim()) {
          return "Feedback message is required";
        }
      },
    });

    if (!message) return;

    // const res = await fetch(`/api/feedbacks/${feedback._id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ message }),
    // });

    const data = await updateFeedback(id, { message });

    if (data.modifiedCount) {
      await Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Your feedback has been updated.",
        timer: 1500,
        showConfirmButton: false,
      });

      router.refresh();
    }
  };

  return (
    <button onClick={handleUpdate} className="btn bg-amber-300!">
      Update
    </button>
  );
}
