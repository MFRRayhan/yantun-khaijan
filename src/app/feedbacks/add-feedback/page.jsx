import FeedbackForm from "@/components/FeedbackForm";

export default function AddFeedback() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-2xl border border-stone-700 bg-stone-900 p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Share Your Feedback</h1>
          <p className="mt-2 text-sm text-stone-400">
            We'd love to hear your thoughts. Your feedback helps us improve our
            service.
          </p>
        </div>

        <FeedbackForm />
      </div>
    </section>
  );
}
