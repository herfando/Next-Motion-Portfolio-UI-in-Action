import * as React from 'react';

import { cn } from '@/lib/utils';

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card'
      className={cn(
        'z-5 rounded-2xl border-[1] border-[#FDFDFD1A] bg-[#28282833] text-white',
        className
      )}
      {...props}
    />
  );
}

export { Card };
