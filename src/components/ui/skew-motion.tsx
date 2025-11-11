'use client';

import { Slot } from '@radix-ui/react-slot';
import { HTMLMotionProps, motion } from 'motion/react';

interface SkewMotionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  asChild?: boolean;
}
