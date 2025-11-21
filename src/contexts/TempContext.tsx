/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";
import { convertCToF } from "../utils/weatherUtils";

// 1. Định nghĩa kiểu cho context
type TempContextType = {
  isCelsius: boolean;
  setIsCelsius: React.Dispatch<React.SetStateAction<boolean>>;
  formatTemperature: (temp: number) => string;
};

// 2. Tạo context với giá trị mặc định là undefined hoặc null
export const TempContext = createContext<TempContextType | undefined>(
  undefined
);

// 3. Định nghĩa kiểu props của TempProvider
type TempProviderProps = {
  children: React.ReactNode;
};

// 4. Component Provider
const TempProvider = ({ children }: TempProviderProps) => {
  const [isCelsius, setIsCelsius] = useState<boolean>(true);

  const formatTemperature = (temp: number) =>
    isCelsius ? `${Math.round(temp)}°C` : `${Math.round(convertCToF(temp))}°F`;

  return (
    <TempContext.Provider
      value={{ isCelsius, setIsCelsius, formatTemperature }}
    >
      {children}
    </TempContext.Provider>
  );
};

export default TempProvider;
