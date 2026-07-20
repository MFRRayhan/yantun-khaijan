"use client";
import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";

export default function CartItems() {
  const { cart } = useContext(CartContext);

  return <div>{cart.length} items add to the cart</div>;
}
