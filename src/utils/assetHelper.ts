/**
 * Helper function to get the correct asset path with base URL
 * @param path - The path to the asset relative to the public directory
 * @returns The full path to the asset including the base URL in production
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, use the path as is
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // In production, prepend the base URL
  return `/InterFaithResearchPanel/${cleanPath}`;
};
