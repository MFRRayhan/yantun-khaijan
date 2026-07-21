import CartBtn from "@/app/buttons/CartBtn";
import Image from "next/image";
import Link from "next/link";

export default function FoodCard({ food }) {
  const { id, title, category, foodImg, price } = food;

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-stone-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col h-full">
      {/* Food Image */}
      <div className="relative h-56 w-full overflow-hidden">
        {/* <img
          src={foodImg}
          alt={title}
          className="object-cover transition-transform duration-300 hover:scale-105"
        /> */}

        <Image
          src={foodImg}
          alt={title}
          className="object-cover transition-transform duration-300 hover:scale-105"
          width={500}
          height={300}
        />

        {/* Category Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5 flex flex-1 flex-col">
        <div>
          <h3 className="line-clamp-1 text-xl font-bold text-white">{title}</h3>

          <p className="mt-2 text-2xl font-bold text-orange-500">${price}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <CartBtn food={food}></CartBtn>

          <Link href={`/foods/${id}`} className="btn flex-1 text-center">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
