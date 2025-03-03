"use client";

import Image from 'next/image';
import { useClientAssetPath } from '../hooks/useClientAssetPath';

interface ClientImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  quality?: number;
  sizes?: string;
}

/**
 * Client-side only Image component that handles asset paths correctly
 * When using fill, width and height are optional
 */
export default function ClientImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  quality,
  sizes,
}: ClientImageProps) {
  const getAssetPath = useClientAssetPath();
  
  // Handle empty src
  if (!src) {
    console.error('ClientImage: src is required');
    return null;
  }
  
  // Resolve the image source path
  const imageSrc = getAssetPath(src);
  
  // When using fill, width and height are not required by Next.js Image
  if (fill) {
    return (
      <Image
        src={imageSrc}
        alt={alt}
        fill={fill}
        className={className}
        priority={priority}
        quality={quality}
        sizes={sizes}
      />
    );
  }
  
  // When not using fill, width and height are required
  if (!width || !height) {
    console.error('ClientImage: width and height are required when fill is false');
    return null;
  }
  
  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
      sizes={sizes}
    />
  );
} 