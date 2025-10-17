import type { Metadata } from 'next';
import './globals.css';
import { TRPCProvider } from '@/lib/trpc/react';
import ThemeProvider from '@/providers/ThemeProvider';
import GlobalStyle from '@/styles/GlobalStyle';

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
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider defaultAppearance="auto">
          <GlobalStyle />
          <TRPCProvider>{children}</TRPCProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
