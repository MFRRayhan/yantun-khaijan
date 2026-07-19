/*

- SERVER SIDE RENDERING

import ReviewCard from "@/components/cards/ReviewCard";

const getReviews = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/reviews",
    {
      cache: "no-store",
    },
  );

  const data = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return data.reviews;
};

export default async function Reviews() {
  const reviews = await getReviews();

  if (!reviews) return <h2>No Reviews Found...</h2>;

  return (
    <section className="container mx-auto px-5 py-12">
      <h2 className="mb-8 text-center text-4xl font-bold text-white">
        Customer Reviews
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
*/

/* -------------------------------------------------------------------------- */
"use client";
import ReviewCard from "@/components/cards/ReviewCard";
import { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

// - CLIENT SIDE RENDERING

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false);
      });
  }, []);

  if (loading) return <ReviewLoading />;

  if (!reviews) return <h2>No Reviews Found...</h2>;

  return (
    <section className="container mx-auto px-5 py-12">
      <h2 className="mb-8 text-center text-4xl font-bold text-white">
        Customer Reviews
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
