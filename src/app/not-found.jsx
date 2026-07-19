import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mb-2 text-center">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="mt-2">Page Not Found</p>
      </div>

      <Link href="/" className="btn">
        Go Home
      </Link>
    </div>
  );
}
