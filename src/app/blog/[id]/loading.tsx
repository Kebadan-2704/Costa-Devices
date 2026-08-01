export default function BlogLoading() {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-24 animate-pulse">
      {/* Title Skeleton */}
      <div className="h-12 bg-black/10 rounded-lg w-3/4 mb-6"></div>
      
      {/* Meta Skeleton */}
      <div className="flex gap-4 mb-12">
        <div className="h-4 bg-black/5 rounded w-24"></div>
        <div className="h-4 bg-black/5 rounded w-32"></div>
      </div>
      
      {/* Hero Image Skeleton */}
      <div className="w-full aspect-[16/9] bg-black/5 rounded-2xl mb-12"></div>
      
      {/* Content Skeleton */}
      <div className="space-y-4">
        <div className="h-4 bg-black/5 rounded w-full"></div>
        <div className="h-4 bg-black/5 rounded w-full"></div>
        <div className="h-4 bg-black/5 rounded w-11/12"></div>
        <div className="h-4 bg-black/5 rounded w-full"></div>
        <div className="h-4 bg-black/5 rounded w-4/5"></div>
      </div>
    </div>
  );
}
