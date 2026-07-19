import Link from "next/link";

export default function Header() {
  return (
    <div className="px-4 py-2 bg-stone-800 flex items-center justify-between">
      <Link href={"/"}>
        <img src="/logo.png" alt="yantun khaijan" className="w-40" />
      </Link>

      <div className="space-x-2">
        <Link href={"/foods"} className="btn">
          Foods
        </Link>
        <Link href={"/reviews"} className="btn">
          Reviews
        </Link>
      </div>
    </div>
  );
}
