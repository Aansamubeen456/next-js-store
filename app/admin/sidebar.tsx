'use client';

import { Button } from '@/components/ui/button';
import { adminLinks } from '@/utils/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Sidebar() {
  const pathname = usePathname();
  return (
    <aside>
      {adminLinks.map((link) => {
        const isActive = link.href === pathname;
        const variant = isActive ? 'default' : 'ghost';
        return (
          <Button
            asChild
            key={link.href}
            variant={variant}
            className="w-full justify-start mb-2 font-normal capitalize
         "
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </aside>
  );
}

export default Sidebar;
