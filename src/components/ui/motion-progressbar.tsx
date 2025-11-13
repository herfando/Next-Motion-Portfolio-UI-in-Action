'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface MotionProgressBarProps {
  percentage: number;
  colorbar?: string;
  duration?: number;
}

function ProgressBar({
  percentage,
  colorbar,
  duration,
}: MotionProgressBarProps) {
  return (
    <div className='h-14 w-full bg-[#D5D7DA]'>
      <motion.div
        className='h-full'
        style={{ backgroundColor: colorbar || '#6600EB' }}
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: duration || 1 }}
      />
    </div>
  );
}

export default ProgressBar;
