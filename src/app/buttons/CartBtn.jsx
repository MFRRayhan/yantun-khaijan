"use client";
import { CartContext } from "@/context/CartProvider";
import { useContext, useState } from "react";
import styles from "./CartBtn.module.css";

export default function CartBtn({ food }) {
  const [inCart, setInCart] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleCart = () => {
    addToCart(food);
    setInCart((prev) => !prev);
  };

  return (
    <button
      onClick={handleCart}
      disabled={inCart}
      className={`btn flex-1 ${inCart ? `${styles.btn} disabled:cursor-not-allowed` : ""}`}
    >
      {inCart ? "Added" : "Add to cart"}
    </button>
  );
}
