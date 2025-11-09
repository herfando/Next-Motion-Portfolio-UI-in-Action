import * as React from 'react';

import { cn } from '@/lib/utils';

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card'
      className={cn(
        'z-5 rounded-2xl border border-[rgba(253,253,253,0.1)] bg-[rgba(40,40,40,0.2)] text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-2xl dark:border-[rgba(255,255,255,0.4)] dark:bg-[rgba(255,255,255,0.2)] dark:text-black',
        className
      )}
      {...props}
    />
  );
}

export { Card };
