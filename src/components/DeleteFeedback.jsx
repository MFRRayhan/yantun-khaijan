"use client";
import { deleteFeedback } from "@/app/actions/feedbackActions";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function DeleteFeedback({ feedback }) {
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
      // const res = await fetch(`/api/feedbacks/${id}`, {
      //   method: "DELETE",
      // });

      // const data = await res.json();

      const data = await deleteFeedback(id);

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
    <button
      onClick={() => handleDelete(feedback._id)}
      className="btn bg-red-500!"
    >
      Delete
    </button>
  );
}
