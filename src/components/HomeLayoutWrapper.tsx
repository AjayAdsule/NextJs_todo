'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

export const HomeLayoutWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const path = usePathname();
  const isAllRoute = path.includes('/home/all');
  return (
    <div
      className={`${isAllRoute ? "bg-[url('https://app.any.do/assets/themes/dark/hd/31.webp')]" : ''} flex`}>
      {children}
    </div>
  );
};
