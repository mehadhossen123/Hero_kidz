const ProductSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-200 overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="h-48 w-full bg-gray-200"></div>

      {/* Card Body Skeleton */}
      <div className="p-4 space-y-3">
        {/* Title Skeleton (2 lines) */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>

        {/* Rating & Sold Skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-3 bg-gray-200 rounded w-10"></div>
          <div className="h-3 bg-gray-200 rounded w-16"></div>
        </div>

        {/* Price Skeleton */}
        <div className="h-6 bg-gray-200 rounded w-24 mt-2"></div>

        {/* Button Skeleton */}
        <div className="pt-2">
          <div className="h-8 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
