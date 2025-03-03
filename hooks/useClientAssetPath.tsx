"use client";

/**
 * React hook for getting asset paths in components - CLIENT SIDE ONLY
 * This hook should only be used in client components
 * @returns A function to get the correct asset path
 */
export function useClientAssetPath() {
  return (path: string) => {
    // Early return for null/undefined paths
    if (!path) return '';
    
    // Early return for external URLs
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
      return path;
    }
    
    // Only run client-side
    if (typeof window === 'undefined') {
      console.warn('useClientAssetPath hook should only be used in client components');
      return path;
    }
    
    // Get basePath from <base> tag or default to empty string
    const baseElement = document.querySelector('base');
    const basePath = baseElement ? baseElement.getAttribute('href') || '' : '';
    
    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    
    // Combine and normalize
    return `${basePath}${normalizedPath}`.replace('//', '/');
  };
} 