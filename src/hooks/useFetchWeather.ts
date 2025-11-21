import { useEffect, useState } from "react";
import type { CurrentWeather } from "../types/type";
import { weatherServices } from "../services/weatherServices";
import { delay } from "../helper/delay";

const useFetchWeather = (city: string) => {
  const [data, setData] = useState<CurrentWeather | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!city) {
      setError("City is required");
      return;
    }
    const fetchWeather = async () => {
      setIsLoading(true);
      setError(null);
      try {
        await delay(1000);
        const response = await weatherServices.getWeatherByCity(city);
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
    fetchWeather();
  }, [city]);
  return { data, isLoading, error };
};

export default useFetchWeather;
