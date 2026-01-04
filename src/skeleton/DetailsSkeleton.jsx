const DetailsSkeleton = () => {
  return (
    <div className="bg-base-100 min-h-screen py-10 px-4 animate-pulse">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Image Skeleton */}
        <div className="relative h-[350px] md:h-[500px] w-full rounded-2xl bg-gray-200"></div>

        {/* Right Side: Info Skeleton */}
        <div className="space-y-6">
          <div className="space-y-3">
            {/* Title Skeleton */}
            <div className="h-10 bg-gray-200 rounded-lg w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded-lg w-1/2"></div>
          </div>

          {/* Rating & Sold Skeleton */}
          <div className="flex gap-4">
            <div className="h-6 bg-gray-200 rounded-full w-24"></div>
            <div className="h-6 bg-gray-200 rounded-full w-20"></div>
          </div>

          {/* Price Skeleton */}
          <div className="h-12 bg-gray-200 rounded-lg w-40"></div>

          {/* Info/Bullet points Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-base-200">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-2">
                <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                <div className="h-5 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>

          {/* Button Skeleton */}
          <div className="h-14 bg-gray-200 rounded-xl w-full md:w-64"></div>
        </div>
      </div>

      {/* Description Section Skeleton */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          <div className="h-8 bg-gray-200 rounded w-48 mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>

        {/* Q&A Sidebar Skeleton */}
        <div className="bg-gray-100 p-6 rounded-2xl space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
