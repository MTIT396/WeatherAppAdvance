import { useContext } from "react";
import { useWeatherStore } from "../store/useWeatherStore";
import type { ForecastItem } from "../types/type";
import { formatDate } from "../utils/dateUtils";
import { getWeatherImage } from "../utils/weatherUtils";
import Separate from "./ui/Separate";
import { TempContext } from "../contexts/TempContext";

const ForecastCard = ({
  item,
  timezone,
}: {
  item: ForecastItem;
  timezone: number;
}) => {
  const weather = useWeatherStore((state) => state.weather);

  const context = useContext(TempContext);
  if (!context) throw new Error("TempContext must be used within TempProvider");
  const { formatTemperature } = context;
  return (
    <div className="rounded-3xl bg-third px-6 py-[22px] h-[249px] flex flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <span className="text-base font-semibold text-white">
          {formatDate(item.dt, timezone, "date") ===
          formatDate(weather?.dt || 0, timezone, "date")
            ? "Today"
            : formatDate(item.dt, timezone, "day")}
        </span>
        <span className="text-[10px] text-center font-medium text-white mt-2">
          {formatDate(item.dt, timezone, "date")}
        </span>
        <span className="text-sm text-center font-medium text-white">
          {new Date().getFullYear()}
        </span>
      </div>
      <Separate />
      <div className="w-[72px]">
        <img
          src={getWeatherImage(item.weather[0].main)}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-[18px] font-medium text-white">
        {formatTemperature(item.main.temp)}
      </span>
    </div>
  );
};

export default ForecastCard;
