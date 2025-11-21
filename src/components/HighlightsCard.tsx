type HighlightsCardProps = {
  icon: React.ReactNode;
  title: string;
  param: number;
  unit: string;
  desc: string;
};
const HighlightsCard = ({
  icon,
  title,
  param,
  unit,
  desc,
}: HighlightsCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-third p-4 w-full h-[134px]">
      <div className="flex items-center gap-2 text-white mx-auto">
        <span>{icon}</span>
        <span className="font-medium text-lg sm:text-base">{title}</span>
      </div>
      <span className="text-white font-bold text-2xl mx-auto">
        {param} <span className="text-base font-medium"> {unit}</span>
      </span>
      <span className="text-sm font-light text-white mx-auto">{desc}</span>
    </div>
  );
};

export default HighlightsCard;
