"use client";

export default function InputSearch() {
  const handleCartForm = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search);
  };

  return (
    <>
      <form onSubmit={handleCartForm} className="flex gap-2">
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
