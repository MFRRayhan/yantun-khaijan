import Image from "next/image";
import Link from "next/link";

export const generateStaticParams = () => {
  return [{ id: "52874" }, { id: "53071" }, { id: "52878" }];
};

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    {
      cache: "no-store",
    },
  );

  const { details = {} } = await res.json();

  return {
    title: details.title,
    generator: "Next.js",
    applicationName: "Yantun Khaijan",
    referrer: "origin-when-cross-origin",
    keywords: ["Next.js", "React", "JavaScript"],
    authors: [{ name: "Rayhan" }],
    creator: "MFR Rayhan",
    publisher: "MFR Rayhan",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
};

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    {
      cache: "no-store",
    },
  );

  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data.details;
};

export default async function FoodDetails({ params }) {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) return <h2>food not found...</h2>;

  const { title, foodImg, category, area, price, video } = food;

  return (
    <section className="container mx-auto px-5 py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-2xl border border-stone-700">
          <img
            src={foodImg}
            alt={title}
            width={700}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <div className="mb-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-orange-500 px-4 py-1 text-sm font-semibold text-white">
              {category}
            </span>

            <span className="rounded-full bg-stone-700 px-4 py-1 text-sm text-white">
              {area}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white">{title}</h1>

          <h2 className="mt-5 text-4xl font-bold text-orange-500">${price}</h2>

          <p className="mt-6 leading-8 text-stone-300">
            Enjoy this delicious {category.toLowerCase()} recipe inspired by{" "}
            {area} cuisine. Fresh ingredients, rich flavor, and an unforgettable
            taste make this dish a perfect choice for any meal.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="btn">Add to Cart</button>

            <Link href={video} target="_blank" className="btn">
              Watch Recipe
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
