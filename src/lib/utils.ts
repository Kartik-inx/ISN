import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "K";
  return num.toString();
}

export function calculateColorization(candleCount: number): number {
  // Returns grayscale value (0 = full color, 1 = fully monochrome)
  if (candleCount >= 10000) return 0;
  if (candleCount >= 2000) return 0.5 * (1 - (candleCount - 2000) / 8000);
  if (candleCount >= 500) return 0.5 + 0.2 * (1 - (candleCount - 500) / 1500);
  if (candleCount >= 100) return 0.7 + 0.25 * (1 - (candleCount - 100) / 400);
  return 0.95;
}
