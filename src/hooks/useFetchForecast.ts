// src/hooks/useFetchForecast.ts
import { useEffect, useState } from "react";
import { weatherServices } from "../services/weatherServices";
import type { ForecastData } from "../types/type";

const useFetchForecast = (city: string) => {
  const [data, setData] = useState<ForecastData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) {
      setData(null);
      setError("Vui lòng nhập tên thành phố.");
      return;
    }

    const fetchForecast = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await weatherServices.getWeatherForecastByCity(city);
        setData(response.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error("Lỗi khi fetch forecast:", err);
        setError(
          err?.response?.data?.message || "Không thể lấy dữ liệu thời tiết."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchForecast();
  }, [city]);

  return { data, isLoading, error };
};

export default useFetchForecast;
