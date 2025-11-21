import { useEffect, useState } from "react";

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);
  useEffect(() => {
    const hanlder = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(hanlder);
    };
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;
