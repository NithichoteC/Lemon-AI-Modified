'use client';

import { createStyles } from 'antd-style';
import { Moon, Sun, User, LogOut } from 'lucide-react';
import { useThemeMode } from 'antd-style';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { useRouter } from 'next/navigation';

const useStyles = createStyles(({ token, css }) => ({
  header: css`
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 ${token.paddingLG}px;
    border-bottom: 1px solid ${token.colorBorderSecondary};
    background: ${token.colorBgContainer};
    gap: ${token.marginMD}px;

    @media (max-width: ${token.screenMD}px) {
      padding: 0 ${token.paddingMD}px;
    }
  `,
  iconButton: css`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${token.borderRadius}px;
    cursor: pointer;
    transition: all ${token.motionDurationMid};
    color: ${token.colorText};

    &:hover {
      background: ${token.colorFillSecondary};
    }
  `,
  userButton: css`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: ${token.colorPrimaryBg};
    color: ${token.colorPrimary};
    cursor: pointer;
    transition: all ${token.motionDurationMid};

    &:hover {
      background: ${token.colorPrimaryBgHover};
    }
  `,
}));

export function Header() {
  const { styles } = useStyles();
  const { themeMode, setThemeMode } = useThemeMode();
  const router = useRouter();

  const isDark = themeMode === 'dark' || (themeMode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const toggleTheme = () => {
    setThemeMode(isDark ? 'light' : 'dark');
  };

  const handleLogout = async () => {
    // Clear demo session cookie
    document.cookie = 'lemon-ai-demo-session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    router.push('/auth/sign-in');
  };

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <User size={16} />,
      label: 'Profile',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogOut size={16} />,
      label: 'Logout',
      onClick: handleLogout,
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.iconButton} onClick={toggleTheme}>
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </div>

      <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
        <div className={styles.userButton}>
          <User size={20} />
        </div>
      </Dropdown>
    </header>
  );
}
