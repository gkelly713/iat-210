
import React from 'react';
import { cn } from '@/lib/utils';

interface ImageDisplayProps {
  src: string;
  alt: string;
  position?: 'left' | 'right' | 'center';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({
  src,
  alt,
  position = 'center',
  size = 'medium',
  className
}) => {
  const sizeClasses = {
    small: 'max-w-xs',
    medium: 'max-w-md',
    large: 'max-w-xl'
  };

  const positionClasses = {
    left: 'float-left mr-6 mb-4',
    right: 'float-right ml-6 mb-4',
    center: 'mx-auto my-8'
  };

  return (
    <figure className={cn(
      'overflow-hidden rounded-lg shadow-md',
      sizeClasses[size],
      positionClasses[position],
      className
    )}>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover"
      />
    </figure>
  );
};

export default ImageDisplay;
