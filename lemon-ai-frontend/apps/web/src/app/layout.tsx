import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { TRPCProvider } from '@/lib/trpc/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lemon AI - Intelligent Assistant',
  description: 'Production-ready AI platform for Greypillar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TRPCProvider>
          {children}
        </TRPCProvider>
      </body>
    </html>
  );
}
