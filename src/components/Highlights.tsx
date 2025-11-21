import { LuWind } from "react-icons/lu";
import type { CurrentWeather } from "../types/type";
import HighlightsCard from "./HighlightsCard";
import TimeCard from "./TimeCard";
import { IoWaterOutline } from "react-icons/io5";
import { MdOutlineVisibility } from "react-icons/md";
import { WiWindDeg } from "react-icons/wi";
import { getWeatherDesc } from "../utils/weatherUtils";
import { getDateTime } from "../utils/dateUtils";
import { BASE_CARD_CLASS } from "../constants/classes";

const Highlights = ({ weather }: { weather: CurrentWeather }) => {
  return (
    <div className={`${BASE_CARD_CLASS}`}>
      <span className="font-semibold text-2xl text-white">
        Today’s Highlight
      </span>
      <div className="flex flex-wrap items-center gap-[18px] mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-[18px] items-center">
          <HighlightsCard
            title="Wind Status"
            icon={<LuWind size={24} />}
            param={Number(weather.wind.speed)}
            unit="km/h"
            desc={getDateTime(weather.dt, weather.timezone)}
          />
          <HighlightsCard
            title="Humidity"
            icon={<IoWaterOutline size={24} />}
            param={Math.round(weather.main.humidity)}
            unit="%"
            desc={getWeatherDesc.humidity(weather.main.humidity)}
          />
          <HighlightsCard
            title="Pressure"
            icon={<WiWindDeg size={24} />}
            param={weather.main.pressure}
            unit="hPa"
            desc={getWeatherDesc.pressure(weather.main.pressure)}
          />
          <HighlightsCard
            title="Visibility"
            icon={<MdOutlineVisibility size={24} />}
            param={Math.round(weather.visibility / 1000)} // Convert visibility to km
            unit="km"
            desc={getDateTime(weather.dt, weather.timezone)}
          />
        </div>
        <div className="flex flex-col sm:flex-col xl:flex-row w-full gap-[18px] items-center">
          <TimeCard
            time={weather.sys.sunrise}
            timezone={weather.timezone}
            variant="sunrise"
          />
          <TimeCard
            time={weather.sys.sunset}
            timezone={weather.timezone}
            variant="sunset"
          />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
