'use client';

import { ConfigProvider, ThemeProvider as LobehubThemeProvider } from '@lobehub/ui';
import { ReactNode, useMemo } from 'react';
import { ThemeMode } from 'antd-style';

interface ThemeProviderProps {
  children: ReactNode;
  defaultAppearance?: ThemeMode;
  defaultPrimaryColor?: string;
  defaultNeutralColor?: string;
}

export default function ThemeProvider({
  children,
  defaultAppearance = 'auto',
  defaultPrimaryColor,
  defaultNeutralColor,
}: ThemeProviderProps) {
  return (
    <LobehubThemeProvider
      customTheme={{
        primaryColor: (defaultPrimaryColor as any) ?? 'green',
        neutralColor: (defaultNeutralColor as any) ?? 'slate',
      }}
      defaultAppearance={defaultAppearance}
      theme={{
        cssVar: true,
        token: {
          colorPrimary: defaultPrimaryColor ?? '#00b96b',
          borderRadius: 8,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        },
      }}
    >
      <ConfigProvider config={{ aAs: 'a', imgAs: 'img' }}>{children}</ConfigProvider>
    </LobehubThemeProvider>
  );
}
