const ForecastSkeleton = () => {
  return (
    <div className="bg-[#1f1f1f] p-4 rounded-xl animate-pulse">
      <div className="h-6 w-1/3 bg-[#333] mb-4 rounded" />
      <div className="grid grid-cols-5 gap-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="bg-[#2a2a2a] p-4 rounded-md h-28">
            <div className="h-4 w-1/2 bg-[#444] mb-2 rounded" />
            <div className="h-6 w-2/3 bg-[#444] rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastSkeleton;
