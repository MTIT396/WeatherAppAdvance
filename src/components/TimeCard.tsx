import Sunrise from "../assets/imgs/sunrise.png";
import Sunset from "../assets/imgs/sunset.png";
import { getDateTime } from "../utils/dateUtils";

type TimeCardProps = {
  time: number;
  timezone: number;
  variant: "sunrise" | "sunset";
};
const TimeCard = ({ time, timezone, variant }: TimeCardProps) => {
  return (
    <div className="bg-third rounded-3xl px-6 py-[35px] w-full">
      <div className="flex items-center justify-between">
        <div>
          <img src={variant === "sunrise" ? Sunrise : Sunset} alt="" />
        </div>
        <div className="text-white flex flex-col items-center gap-[10px]">
          <span className="font-medium">
            {variant === "sunrise" ? "Sunrise" : "Sunset"}
          </span>
          <h1 className="text-2xl font-semibold">
            {getDateTime(time, timezone)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
