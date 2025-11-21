/* eslint-disable react-hooks/exhaustive-deps */
import "swiper/css";

import { useEffect, useState } from "react";
import ForecastCard from "./ForecastCard";
import { getDailyForecast } from "../utils/forecastUtils";
import { BASE_CARD_CLASS } from "../constants/classes";
import useFetchForecast from "../hooks/useFetchForecast";
import type { ForecastData } from "../types/type";
import { useSearchStore } from "../store/useSearchStore";
import { DEFAULT_CITY_QUERY, DELAY_MILISECONDS } from "../constants/constants";
import useDebounce from "../hooks/useDebounce";
import { SwiperSlide, Swiper } from "swiper/react";
import ForecastSkeleton from "./ui/skeleton/ForecastSkeleton";

const Forecast = () => {
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const searchQuery = useSearchStore((state) => state.searchQuery);
  const debounceSearchQuery = useDebounce(searchQuery, DELAY_MILISECONDS);
  const { data, isLoading } = useFetchForecast(
    debounceSearchQuery || DEFAULT_CITY_QUERY
  );
  useEffect(() => {
    if (data) {
      setForecast(data);
    }
  }, [data]);
  const dailyForecast = getDailyForecast(
    forecast?.list || [],
    forecast?.city.timezone || 0
  );
  return (
    <div className={`${BASE_CARD_CLASS} h-full `}>
      <h1 className="text-2xl text-white font-semibold">5 Day Forecast</h1>
      {isLoading ? (
        <ForecastSkeleton />
      ) : (
        <Swiper
          breakpoints={{
            330: {
              slidesPerView: 2.5,
            },
            460: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1268: {
              slidesPerView: 5,
            },
          }}
          spaceBetween={20}
          slidesPerView={2.5}
          className="mt-4"
        >
          {dailyForecast.map((item) => (
            <SwiperSlide>
              <ForecastCard
                key={item.dt}
                item={item}
                timezone={forecast?.city.timezone || 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Forecast;
