import { create } from "zustand";
import type { CurrentWeather } from "../types/type";

interface IWeatherStore {
  weather: CurrentWeather | null;
  setWeather: (data: CurrentWeather) => void;
}

export const useWeatherStore = create<IWeatherStore>((set) => ({
  weather: null,
  setWeather: (data: CurrentWeather) => set({ weather: data }),
}));
