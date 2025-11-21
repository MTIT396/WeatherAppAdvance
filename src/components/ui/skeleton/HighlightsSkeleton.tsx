const HighlightsSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-4 animate-pulse">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-[#2c2c2c] p-4 rounded-xl h-32 w-full">
          <div className="h-4 w-1/2 bg-[#444] mb-2 rounded" />
          <div className="h-6 w-1/3 bg-[#444] mb-1 rounded" />
          <div className="h-3 w-1/4 bg-[#444] rounded" />
        </div>
      ))}
    </div>
  );
};

export default HighlightsSkeleton;
