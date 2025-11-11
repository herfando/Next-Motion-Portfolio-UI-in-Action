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