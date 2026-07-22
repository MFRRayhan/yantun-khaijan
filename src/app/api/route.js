export const feedbacks = [
  {
    id: 1,
    message:
      "The food was absolutely delicious and served fresh. Highly recommended!",
  },
  {
    id: 2,
    message: "Loved the cozy atmosphere and the staff were very friendly.",
  },
  {
    id: 3,
    message: "The burger was juicy, but the fries could have been crispier.",
  },
  {
    id: 4,
    message: "Fast delivery and excellent packaging. Food arrived hot.",
  },
  {
    id: 5,
    message: "One of the best restaurants I've visited. Great value for money.",
  },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "Yantun Khaijan server is running...",
  });
}
