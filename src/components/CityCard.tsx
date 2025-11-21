import useFetchWeather from "../hooks/useFetchWeather";
import type { City } from "../types/type";
import { getWeatherImage } from "../utils/weatherUtils";
import OtherCitiesSkeleton from "./ui/skeleton/OtherCitiesSkeleton";
type CityCardProps = {
  city: City;
};
const CityCard = ({ city }: CityCardProps) => {
  const { data, isLoading } = useFetchWeather(city.name);
  return isLoading ? (
    <OtherCitiesSkeleton />
  ) : (
    data && (
      <div className="p-6 rounded-3xl bg-third flex items-center gap-4 flex-wrap justify-between">
        {/* Location */}
        <div className="flex flex-col gap-1">
          <span className="text-sm font-light text-white opacity-70">
            Vietnam
          </span>
          <span className="sm:text-2xl text-base text-white">{city.name}</span>
          <span className="text-sm text-white font-medium capitalize">
            {data?.weather[0].description}
          </span>
        </div>
        {/* Img weather */}
        <div className="size-[60px] md:size-[60px]">
          <img
            src={getWeatherImage(data?.weather[0].main || "")}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        {/* Temperature */}
        <div className="">
          <span className="text-2xl text-white font-semibold">
            {Math.round(data?.main.feels_like)}°
            <span className="opacity-70 text-base font-light">
              /{Math.round(data?.main.temp_min)}°
            </span>
          </span>
        </div>
      </div>
    )
  );
};

export default CityCard;
