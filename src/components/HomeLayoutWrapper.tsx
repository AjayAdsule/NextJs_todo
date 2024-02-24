'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

export const HomeLayoutWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const path = usePathname();
  const isAllRoute =
    path.includes('/home/all') || path.includes('/next-seven-day');
  return (
    <div
      className={`${isAllRoute ? "bg-[url('https://app.any.do/assets/themes/dark/hd/31.webp')]" : ''} flex ${path.includes('/next-seven-day') && 'overflow-y-hidden'} ${path.includes('/next-seven-day') && 'h-[605px]'}`}>
      {children}
    </div>
  );
};
