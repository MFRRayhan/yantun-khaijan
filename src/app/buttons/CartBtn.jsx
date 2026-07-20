"use client";
import { CartContext } from "@/context/CartProvider";
import { useContext, useState } from "react";

export default function CartBtn({ food }) {
  const [inCart, setInCart] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleCart = () => {
    addToCart(food);
    setInCart(true);
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
