"use client";
import { useState } from "react";

export default function CartBtn() {
  const [inCart, setInCart] = useState(false);

  const handleCart = () => {
    setInCart((prev) => !prev);
  };

  return (
    <button
      onClick={handleCart}
      className={`btn flex-1 ${inCart && "bg-green-600! text-white!"}`}
    >
      {inCart ? "Added" : "Add to cart"}
    </button>
  );
}
