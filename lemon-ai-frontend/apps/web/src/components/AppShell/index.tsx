'use client';

import { createStyles } from 'antd-style';
import { ReactNode } from 'react';
import { Flexbox } from 'react-layout-kit';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

const useStyles = createStyles(({ token, css }) => ({
  container: css`
    height: 100vh;
    overflow: hidden;
    background: ${token.colorBgLayout};
  `,
  main: css`
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  `,
  content: css`
    flex: 1;
    overflow-y: auto;
    padding: ${token.paddingLG}px;

    @media (max-width: ${token.screenMD}px) {
      padding: ${token.paddingMD}px;
    }
  `,
}));

export interface AppShellProps {
  children: ReactNode;
  showSidebar?: boolean;
}

export function AppShell({ children, showSidebar = true }: AppShellProps) {
  const { styles } = useStyles();

  return (
    <Flexbox horizontal className={styles.container}>
      {showSidebar && <Sidebar />}
      <div className={styles.main}>
        <Header />
        <div className={styles.content}>{children}</div>
      </div>
    </Flexbox>
  );
}
