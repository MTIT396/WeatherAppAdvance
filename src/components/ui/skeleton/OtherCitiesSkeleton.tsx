const OtherCitiesSkeleton = () => {
  return (
    <div className="bg-[#1f1f1f] p-4 rounded-2xl animate-pulse">
      {/* Title */}
      <div className="h-6 w-1/3 bg-[#333] mb-4 rounded" />

      {/* City cards (3 rows giả lập) */}
      <div className="flex flex-col gap-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-[#2a2a2a] p-4 rounded-xl"
          >
            <div className="flex flex-col gap-1">
              <div className="h-4 w-24 bg-[#444] rounded" />
              <div className="h-3 w-36 bg-[#444] rounded" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-[#444] rounded-full" />
              <div className="h-5 w-10 bg-[#444] rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherCitiesSkeleton;
