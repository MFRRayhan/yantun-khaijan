export default function ReviewCard({ review }) {
  const { user, email, photo, rating, review: comment, likes, date } = review;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-stone-700 bg-stone-800 p-6 transition duration-300 hover:border-orange-500">
      {/* User */}
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={user}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg font-semibold text-white">{user}</h3>
          <p className="text-sm text-stone-400">{email}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-4 flex text-lg text-yellow-400">
        {[...Array(rating)].map((_, index) => (
          <span key={index}>⭐</span>
        ))}
      </div>

      {/* Review */}
      <p className="mt-4 flex-1 leading-7 text-stone-300 line-clamp-5">
        {comment}
      </p>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-stone-700 pt-4 text-sm text-stone-400">
        <span>❤️ {likes.length} Likes</span>

        <span>
          {new Date(date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
    </div>
  );
}
