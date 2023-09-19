

import pino, { Logger } from "pino";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const logLevelData = {
  "*": "silent",
  "home": "info",
}

const logLevels = new Map<string, string>(Object.entries(logLevelData));

export function getLogLevel(logger: string): string {
  return logLevels.get(logger) || logLevels.get("*") || "info";
}

export function getLogger(name: string): Logger {
  return pino({ name, level: getLogLevel(name) });
}