import { CiLocationOn } from "react-icons/ci";
import { formatDate } from "../utils/dateUtils";
import { getWeatherImage } from "../utils/weatherUtils";
import { BASE_CARD_CLASS } from "../constants/classes";
import type { CurrentWeather } from "../types/type";
import Select from "./ui/Select";
import { TempContext } from "../contexts/TempContext";
import { useContext } from "react";
import CurrentSkeleton from "./ui/skeleton/CurrentSkeleton";

interface CurrentProps {
  weather: CurrentWeather;
  isLoading: boolean;
}

const Current: React.FC<CurrentProps> = ({ weather, isLoading }) => {
  const context = useContext(TempContext);
  if (!context) throw new Error("TempContext must be used within TempProvider");
  const { formatTemperature } = context;

  if (isLoading) return <CurrentSkeleton />;

  const date = formatDate(weather.dt, weather.timezone, "date");
  const day = formatDate(weather.dt, weather.timezone, "day");

  return (
    <div className={`${BASE_CARD_CLASS}`}>
      {/* Top */}
      <div className="flex items-center justify-between">
        <div className="py-2 px-4 flex items-center gap-2 text-white bg-secondary rounded-full">
          <CiLocationOn size={20} />
          <span className="sm:text-sm text-xs">{weather.name}</span>
        </div>
        <Select value="°C" />
      </div>

      {/* Date */}
      <div className="text-white py-4">
        <h1 className="font-medium sm:text-[36px] text-3xl">{day}</h1>
        <span className="sm:text-base text-sm font-light">{date}</span>
      </div>

      {/* Weather Main */}
      <div className="relative h-30 flex items-center justify-center">
        <div className="lg:size-[150px] size-[100px] mr-auto">
          <img
            src={getWeatherImage(weather.weather[0].main)}
            alt="weather"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute -top-6 right-0 flex flex-col items-end">
          <span className="lg:text-[40px] text-[30px] font-medium text-white leading-6 mb-2">
            {formatTemperature(weather.main.temp_max)}
          </span>
          <span className="text-white opacity-70 font-medium text-sm lg:text-[24px]">
            /{formatTemperature(weather.main.temp_max)}
          </span>
        </div>

        <div className="flex flex-col gap-2 text-white absolute bottom-0 right-0">
          <h1 className="font-medium text-xl capitalize">
            {weather.weather[0].description}
          </h1>
          <span className="font-light">
            Feels like {formatTemperature(weather.main.feels_like)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Current;
