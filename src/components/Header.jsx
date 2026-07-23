import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-stone-800 py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            {/* <img src="/logo.png" alt="yantun khaijan" className="w-40" /> */}
            <Image
              width={120}
              height={30}
              src="/logo.png"
              alt="yantun khaijan"
              className="w-40"
              loading="eager"
            />
          </Link>

          <div className="space-x-2">
            <Link href={"/foods"} className="btn">
              Foods
            </Link>
            <Link href={"/reviews"} className="btn">
              Reviews
            </Link>
            <Link href={"/feedbacks"} className="btn">
              Feedbacks
            </Link>
            <Link href={"/practice"} className="btn">
              Practice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
