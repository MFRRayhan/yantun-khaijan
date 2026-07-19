import FoodCard from "@/components/cards/FoodCard";
import { resolve } from "styled-jsx/css";

const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );

  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data.foods || [];
};

export default async function Foods() {
  const foods = await getFoods();

  if (!foods) return <h2>No Foods Found...</h2>;

  return (
    <>
      <h2 className="text-4xl">
        Total <span className="text-amber-300">{foods.length}</span> Foods Found
      </h2>

      <div className="my-10 grid grid-cols-4 gap-6">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </>
  );
}
