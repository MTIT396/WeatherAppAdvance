import type { ForecastItem } from "../types/type";

export const getDailyForecast = (
  list: ForecastItem[],
  timezone: number
): ForecastItem[] => {
  const dailyMap = new Map<string, ForecastItem>();

  list.forEach((item) => {
    const localDate = new Date((item.dt + timezone) * 1000);
    const key = `${localDate.getUTCFullYear()}-${localDate.getUTCMonth()}-${localDate.getUTCDate()}`;
    const hour = localDate.getUTCHours();

    // Ưu tiên chọn mốc giờ gần 12:00 trưa
    if (
      !dailyMap.has(key) ||
      Math.abs(hour - 12) <
        Math.abs(
          new Date((dailyMap.get(key)!.dt + timezone) * 1000).getUTCHours() - 12
        )
    ) {
      dailyMap.set(key, item);
    }
  });

  return Array.from(dailyMap.values()).slice(0, 5);
};
