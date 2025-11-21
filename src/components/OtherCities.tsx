import { BASE_CARD_CLASS } from "../constants/classes";
import CityCard from "./CityCard";
import useFetchCities from "../hooks/useFetchCities";
import OtherCitiesSkeleton from "./ui/skeleton/OtherCitiesSkeleton";
import { shuffleArray } from "../helper/calculate";
import { useEffect, useState } from "react";
import type { City } from "../types/type";

const OtherCities = () => {
  const { data, isLoading } = useFetchCities();

  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    if (data) {
      setCities(shuffleArray(data).slice(0, 10));
    }
  }, [data]);

  if (isLoading) return <OtherCitiesSkeleton />;

  return (
    <div
      className={`${BASE_CARD_CLASS} scrollbar max-h-[600px] overflow-y-auto`}
    >
      <span className="text-white font-semibold text-[24px]">Other Cities</span>
      <ul className="mt-6 flex flex-col gap-[18px]">
        {cities.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </ul>
    </div>
  );
};

export default OtherCities;
