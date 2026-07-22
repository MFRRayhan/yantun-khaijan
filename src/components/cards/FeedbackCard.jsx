"use client";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function FeedbackCard({ feedback }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(`/api/feedbacks/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.deletedCount > 0) {
        Swal.fire({
          title: "Deleted!",
          text: "Feedback deleted successfully.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        router.refresh();
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: "Error!",
        text: "Something went wrong.",
        icon: "error",
      });
    }
  };

  return (
    <div className="border-2 p-5 rounded-2xl space-y-2 flex flex-col h-full">
      <h3 className="text-lg">{feedback.message}</h3>
      <p className="text-xs text-amber-300">
        {format(new Date(feedback.createdAt), "dd MMMM, yyyy")}
      </p>
      <div className="flex items-center gap-2 mt-auto">
        <button className="btn bg-amber-300!">Update</button>
        <button
          onClick={() => handleDelete(feedback._id)}
          className="btn bg-red-500!"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
