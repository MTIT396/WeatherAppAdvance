/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import type { City } from "../types/type";
import axios from "axios";

const useFetchCities = () => {
  const [data, setData] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get("/data/vn-cities.json");
        setData(response.data);
      } catch (err: any) {
        console.error("Lỗi khi fetch cities:", err);
        setError(
          err?.response?.data?.message || "Không thể lấy dữ liệu thành phố."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  return { data, isLoading, error };
};

export default useFetchCities;
