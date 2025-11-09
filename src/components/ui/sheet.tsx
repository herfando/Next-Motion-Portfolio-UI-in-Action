'use client';

import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useMedia } from 'react-use';

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  const isLargeIsh = useMedia('(min-width:1024px', false);

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (isLargeIsh) {
      setOpen(false);
    }
  }, [isLargeIsh]);

    return (
    <SheetPrimitive.Root
      data-slot='sheet'
      open={open}
      onOpenChange={setOpen}
      {...props}
    />
  );
  function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot='sheet-trigger' {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot='sheet-close' {...props} />;
}