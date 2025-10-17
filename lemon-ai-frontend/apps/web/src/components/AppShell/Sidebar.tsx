'use client';

import { createStyles } from 'antd-style';
import { MessageSquare, Settings, Users, Plus } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const useStyles = createStyles(({ token, css }) => ({
  sidebar: css`
    width: 260px;
    height: 100vh;
    background: ${token.colorBgContainer};
    border-right: 1px solid ${token.colorBorderSecondary};
    display: flex;
    flex-direction: column;
    padding: ${token.paddingLG}px;

    @media (max-width: ${token.screenMD}px) {
      display: none;
    }
  `,
  logo: css`
    display: flex;
    align-items: center;
    gap: ${token.marginSM}px;
    padding: ${token.paddingMD}px;
    margin-bottom: ${token.marginLG}px;
    font-size: ${token.fontSizeHeading4}px;
    font-weight: 600;
    color: ${token.colorPrimary};
  `,
  newChatButton: css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${token.marginXS}px;
    padding: ${token.paddingMD}px;
    margin-bottom: ${token.marginMD}px;
    border: 1px solid ${token.colorPrimary};
    border-radius: ${token.borderRadiusLG}px;
    background: ${token.colorPrimary};
    color: ${token.colorWhite};
    font-weight: 500;
    cursor: pointer;
    transition: all ${token.motionDurationMid};

    &:hover {
      background: ${token.colorPrimaryHover};
      transform: translateY(-2px);
      box-shadow: ${token.boxShadowSecondary};
    }

    &:active {
      transform: translateY(0);
    }
  `,
  nav: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${token.marginXS}px;
  `,
  navLink: css`
    display: flex;
    align-items: center;
    gap: ${token.marginSM}px;
    padding: ${token.paddingMD}px ${token.paddingLG}px;
    border-radius: ${token.borderRadius}px;
    color: ${token.colorText};
    text-decoration: none;
    transition: all ${token.motionDurationMid};
    cursor: pointer;

    &:hover {
      background: ${token.colorFillSecondary};
    }
  `,
  navLinkActive: css`
    background: ${token.colorPrimaryBg};
    color: ${token.colorPrimary};
    font-weight: 500;
  `,
}));

export function Sidebar() {
  const { styles, cx } = useStyles();
  const pathname = usePathname();

  const navItems = [
    { href: '/chat', icon: MessageSquare, label: 'Chat' },
    { href: '/agents', icon: Users, label: 'Agents' },
    { href: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <span>🍋</span>
        <span>Lemon AI</span>
      </div>

      <motion.button
        className={styles.newChatButton}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Plus size={18} />
        <span>New Chat</span>
      </motion.button>

      <nav className={styles.nav}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cx(styles.navLink, isActive && styles.navLinkActive)}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
