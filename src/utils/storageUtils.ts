export const getStorageValue = <T>(key: string, defaultValue: T): T => {
  const data = localStorage.getItem(key);
  try {
    return data ? (JSON.parse(data) as T) : defaultValue;
  } catch (err) {
    console.log("Failed to get value", err);
    return defaultValue;
  }
};

export const setStorageValue = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log("Failed to set value", err);
  }
};
