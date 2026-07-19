export default function Loading() {
  return (
    <section className="container mx-auto animate-pulse px-5 py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Image */}
        <div className="h-125 rounded-2xl bg-stone-700"></div>

        {/* Content */}
        <div className="flex flex-col">
          <div className="mb-6 flex gap-3">
            <div className="h-8 w-24 rounded-full bg-stone-700"></div>
            <div className="h-8 w-24 rounded-full bg-stone-700"></div>
          </div>

          <div className="h-10 w-3/4 rounded bg-stone-700"></div>

          <div className="mt-6 h-10 w-32 rounded bg-stone-700"></div>

          <div className="mt-8 space-y-3">
            <div className="h-4 w-full rounded bg-stone-700"></div>
            <div className="h-4 w-full rounded bg-stone-700"></div>
            <div className="h-4 w-5/6 rounded bg-stone-700"></div>
            <div className="h-4 w-2/3 rounded bg-stone-700"></div>
          </div>

          <div className="mt-10 flex gap-4">
            <div className="h-12 w-40 rounded-lg bg-stone-700"></div>
            <div className="h-12 w-40 rounded-lg bg-stone-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
