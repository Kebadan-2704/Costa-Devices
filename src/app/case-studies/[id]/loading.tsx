export default function CaseStudyLoading() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-32 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          {/* Header Skeleton */}
          <div className="h-6 bg-black/10 rounded w-1/4"></div>
          <div className="h-16 bg-black/10 rounded w-full"></div>
          <div className="h-16 bg-black/10 rounded w-3/4"></div>
          
          {/* Metrics Skeleton */}
          <div className="flex gap-8 pt-8">
            <div className="h-20 bg-black/5 rounded w-32"></div>
            <div className="h-20 bg-black/5 rounded w-32"></div>
            <div className="h-20 bg-black/5 rounded w-32"></div>
          </div>
        </div>
        
        {/* Right side Image/Graphic Skeleton */}
        <div className="w-full aspect-square bg-black/5 rounded-3xl"></div>
      </div>
    </div>
  );
}
