import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_endpoint = "https://api.openweathermap.org/data/2.5";
export const weatherServices = {
  getWeatherByCity: (city: string) =>
    axios.get(`${API_endpoint}/weather`, {
      params: { q: city, appid: API_KEY, units: "metric", lang: "en" },
    }),
  getWeatherForecastByCity: (city: string) =>
    axios.get(`${API_endpoint}/forecast`, {
      params: { q: city, appid: API_KEY, units: "metric", lang: "en" },
    }),
};
