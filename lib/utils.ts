"use client"

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get the correct path for assets accounting for basePath in production
 * @param path The path to the asset, starting with '/'
 * @returns The correct path with basePath if needed
 */
export function getAssetPath(path: string): string {
  // Always assume client-side in a client component
  // Get basePath from <base> tag or default to empty string
  try {
    const baseElement = document.querySelector('base');
    const basePath = baseElement ? baseElement.getAttribute('href') || '' : '';
    return `${basePath}${path}`.replace('//', '/');
  } catch (e) {
    // Fallback for any unexpected errors
    return path;
  }
}

/**
 * React hook for getting asset paths in components
 * @returns A function to get the correct asset path
 */
export function useAssetPath() {
  return (path: string) => {
    try {
      // Get basePath from <base> tag or default to empty string
      const baseElement = document.querySelector('base');
      const basePath = baseElement ? baseElement.getAttribute('href') || '' : '';
      return `${basePath}${path}`.replace('//', '/');
    } catch (e) {
      // Fallback for any unexpected errors
      return path;
    }
  };
} 