import Rain from "../assets/imgs/rain.png";
import Sun from "../assets/imgs/sun.png";
import Thunder from "../assets/imgs/thunder.png";
import Clouds from "../assets/imgs/clouds.png";

export const getWeatherDesc = {
  humidity: (value: number): string => {
    if (value < 30) {
      return "Low";
    } else if (value >= 30 && value <= 60) {
      return "Comfortable";
    } else {
      return "High";
    }
  },
  pressure: (value: number): string => {
    if (value < 1000) {
      return "Low";
    } else if (value >= 1000 && value <= 1020) {
      return "Normal";
    } else {
      return "High";
    }
  },
};

export const getWeatherImage = (status: string) => {
  switch (status) {
    case "Rain":
      return Rain;
    case "Thunderstorm":
      return Thunder;
    case "Clouds":
      return Clouds;
    case "Clear":
      return Sun;
    default:
      return Sun; // Default image if no match found
  }
};

export const convertCToF = (tempC: number): number => (tempC * 9) / 5 + 32;
