/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { useEffect } from "react";
import Highlights from "./components/Highlights";
import Forecast from "./components/Forecast";
import OtherCities from "./components/OtherCities";
import Current from "./components/Current";

import HighlightsSkeleton from "./components/ui/skeleton/HighlightsSkeleton";
import ForecastSkeleton from "./components/ui/skeleton/ForecastSkeleton";

import useFetchWeather from "./hooks/useFetchWeather";
import useDebounce from "./hooks/useDebounce";
import { DEFAULT_CITY_QUERY, DELAY_MILISECONDS } from "./constants/constants";
import { useWeatherStore } from "./store/useWeatherStore";
import { useSearchStore } from "./store/useSearchStore";
import CurrentSkeleton from "./components/ui/skeleton/CurrentSkeleton";
import OtherCitiesSkeleton from "./components/ui/skeleton/OtherCitiesSkeleton";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

function App() {
  const weather = useWeatherStore((state) => state.weather);
  const setWeather = useWeatherStore((state) => state.setWeather);

  const searchQuery = useSearchStore((state) => state.searchQuery);
  const debouncedQuery = useDebounce(searchQuery, DELAY_MILISECONDS);

  const { data, isLoading, error } = useFetchWeather(
    debouncedQuery || DEFAULT_CITY_QUERY
  );

  useEffect(() => {
    if (data) {
      setWeather(data);
    }
  }, [data]);

  return (
    <div className="bg-[#121111] min-h-screen font-inter">
      <div className="container mx-auto py-10 lg:px-20 md:px-10 px-6">
        {/* Main Layout */}
        <div>
          {/* Header */}
          <Header />

          {/* Error */}
          {error && (
            <div className="text-red-500 bg-red-900 p-4 rounded mb-4">
              {error}
            </div>
          )}

          {/* Content */}
          <div className="flex lg:flex-nowrap flex-wrap gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-6 w-full xl:max-w-[556px]">
              {isLoading ? (
                <CurrentSkeleton />
              ) : weather ? (
                <Current weather={weather} isLoading={false} />
              ) : null}

              {isLoading ? <OtherCitiesSkeleton /> : <OtherCities />}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 min-w-0 w-full">
              {isLoading ? (
                <HighlightsSkeleton />
              ) : weather ? (
                <Highlights weather={weather} />
              ) : null}

              {isLoading ? <ForecastSkeleton /> : <Forecast />}
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
