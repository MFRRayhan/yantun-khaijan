"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function InputSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCartForm = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("search", search);
    router.push(`?${newParams.toString()}`);
  };

  return (
    <>
      <form onSubmit={handleCartForm} className="flex gap-2 w-full max-w-3xl">
        <input
          name="search"
          type="search"
          placeholder="Enter food name"
          className="input w-full rounded-xl"
        />
        <button type="submit" className="btn bg-amber-300!">
          Search
        </button>
      </form>
    </>
  );
}
