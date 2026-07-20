"use client";
import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";

export default function CartItems() {
  const { cart } = useContext(CartContext);

  console.log(cart);
  return (
    <div>
      <h3>{cart.length} items add to the cart</h3>
      <div className="space-y-5">
        {cart.map((item) => (
          <div key={item.div} className="flex items-center gap-2">
            <img src={item.foodImg} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
