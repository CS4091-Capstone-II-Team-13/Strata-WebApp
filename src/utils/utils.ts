export function getRelativeTime(dateString: string) {
  const date = new Date(dateString).getTime();
  const now = new Date().getTime();

  const diffInSeconds = (date - now) / 1000;

  const units: { unit: Intl.RelativeTimeFormatUnit; seconds: number }[] = [
    { unit: "year", seconds: 31536000 },
    { unit: "month", seconds: 2592000 },
    { unit: "day", seconds: 86400 },
    { unit: "hour", seconds: 3600 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 },
  ];

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  for (const { unit, seconds } of units) {
    const value = Math.round(diffInSeconds / seconds);

    if (Math.abs(value) >= 1 || unit === "second") {
      return rtf.format(value, unit);
    }
  }
}
