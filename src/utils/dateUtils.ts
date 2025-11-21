export const formatDate = (
  timestamp: number,
  timezoneOffset: number, // seconds
  variant: "date" | "day" = "date"
): string => {
  const localDate = new Date((timestamp + timezoneOffset) * 1000); // timestamp là giây

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (variant === "day") {
    return dayNames[localDate.getUTCDay()];
  }

  const day = localDate.getUTCDate();
  const month = monthNames[localDate.getUTCMonth()];
  // const year = localDate.getUTCFullYear();

  return `${day.toString().padStart(2, "0")} ${month}`;
};

export const getDateTime = (time: number, timezone: number): string => {
  const date = new Date((time + timezone) * 1000);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    return `${hours}:${minutes} ${ampm}`;
  };

  return formatTime(date);
};
export function greetByTime() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
