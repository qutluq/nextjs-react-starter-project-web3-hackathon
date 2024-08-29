import '@/shared/style/globals.css';

import { ReactNode } from 'react';

import { Toast } from '@/shared/components';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Zippy',
  description: 'Best app',
};

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      {children}
      <Toast />
    </>
  );
}
