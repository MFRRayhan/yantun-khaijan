import FoodCard from "@/components/cards/FoodCard";
import CartItems from "@/components/CartItems";
import InputSearch from "@/components/InputSearch";

const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    { next: { revalidate: 60 } },
  );

  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.foods || [];
};

export default async function Foods({ searchParams }) {
  const { search = "" } = await searchParams;
  const foods = await getFoods(search);

  if (!foods) return <h2>No Foods Found...</h2>;

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-4xl">
          Total <span className="text-amber-300">{foods.length}</span> Foods
          Found
        </h2>

        <InputSearch></InputSearch>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 my-10 grid grid-cols-3 gap-6">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        <div className="w-70 border-2 rounded-2xl p-5 my-10">
          <h2 className="text-2xl">Cart Items</h2>
          <div className="divider"></div>
          <CartItems />
        </div>
      </div>
    </>
  );
}
