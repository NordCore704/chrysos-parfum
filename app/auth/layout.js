"use client";  // This makes it a Client Component
import React from 'react';
import { usePathname } from 'next/navigation';
import SharedLayout from "@/components/shared/SharedLayout";

export default function ClientRootLayout({ children }) {
  const pathname = usePathname();

  const noLayoutPaths = ['/auth/login', '/auth/signup'];
  const hideLayout = noLayoutPaths.includes(pathname);

  return (
    <>
      {hideLayout ? (
        <main>{children}</main>
      ) : (
        <SharedLayout>{children}</SharedLayout>
      )}
    </>
  );
}