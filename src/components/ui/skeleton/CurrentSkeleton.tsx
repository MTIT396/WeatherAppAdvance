const CurrentSkeleton = () => {
  return (
    <div className="w-[556px] p-6 rounded-2xl bg-third animate-pulse shadow-md">
      {/* Top */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 py-2 px-4 rounded-full bg-main w-[120px] h-[32px]">
          <div className="w-5 h-5 bg-secondary rounded-full" />
          <div className="h-3 w-16 bg-secondary rounded" />
        </div>
        <div className="w-10 h-6 bg-secondary rounded" />
      </div>

      {/* Date */}
      <div className="mb-4">
        <div className="h-8 w-32 bg-secondary rounded mb-2" />
        <div className="h-4 w-20 bg-secondary rounded" />
      </div>

      {/* Weather Image + Temp */}
      <div className="relative flex items-center justify-center h-[150px]">
        <div className="w-[150px] h-[150px] bg-secondary rounded-xl" />

        <div className="absolute -top-6 right-0 flex flex-col items-end">
          <div className="h-10 w-24 bg-secondary rounded mb-2" />
          <div className="h-6 w-20 bg-secondary rounded" />
        </div>

        <div className="absolute bottom-0 right-0 flex flex-col gap-2">
          <div className="h-6 w-32 bg-secondary rounded" />
          <div className="h-4 w-28 bg-secondary rounded" />
        </div>
      </div>
    </div>
  );
};

export default CurrentSkeleton;
