const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );

  const data = await res.json();

  return data.foods || [];
};

export default async function Foods() {
  const foods = await getFoods();
  console.log(foods);

  return <div>Total {foods.length} Foods Found</div>;
}
