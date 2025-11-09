import { cn } from '@/lib/utils';
import React from 'react';
import SkewMotion from './ui/skew-motion';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  animationDelay?: number;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
  animationDelay,

  }) => {
  return (
    <SkewMotion asChild delay={animationDelay}>
      <div
        className={cn(
          'rounded-md bg-gradient-to-b from-[#0093DD] to-transparent p-0.25',
          className
               )}
        style={{
          width: 'clamp(6.375rem, 15.89vw, 12rem)',
          borderRadius: 'clamp(0.25rem, 0.66vw, 0.5rem)',
        }}
      ></div>
       <div
          className='rounded-md bg-neutral-900'
          style={{
            borderRadius: 'clamp(0.25rem, 0.66vw, 0.5rem)',
            padding: 'clamp(0.5rem, 1.25vw, 1rem)',
          }}
        ></div>

         <div
            className='bg-primary-300 flex-center aspect-square rounded-full shadow-[0_0_17px_rgba(0,147,221,0.6)] [&>*]:h-auto [&>*]:w-full'
            style={{
              width: 'clamp(1.38rem, 3.31vw, 2.5rem)',
              padding: 'clamp(0.31rem, 0.83vw, 0.63rem)',
            }}
          ></div>