'use client';

import { AppShell } from '@/components/AppShell';
import { createStyles } from 'antd-style';
import { Send } from 'lucide-react';
import { Button, Input } from 'antd';

const useStyles = createStyles(({ token, css }) => ({
  container: css`
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  messages: css`
    flex: 1;
    overflow-y: auto;
    padding: ${token.paddingLG}px;
  `,
  welcome: css`
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    margin-top: ${token.marginXXL * 2}px;
  `,
  title: css`
    font-size: ${token.fontSizeHeading2}px;
    font-weight: 600;
    margin-bottom: ${token.marginMD}px;
    color: ${token.colorText};
  `,
  subtitle: css`
    font-size: ${token.fontSize}px;
    color: ${token.colorTextSecondary};
  `,
  inputArea: css`
    border-top: 1px solid ${token.colorBorderSecondary};
    padding: ${token.paddingLG}px;
    background: ${token.colorBgContainer};
  `,
  inputContainer: css`
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    gap: ${token.marginMD}px;
  `,
}));

export default function ChatPage() {
  const { styles } = useStyles();

  return (
    <AppShell>
      <div className={styles.container}>
        <div className={styles.messages}>
          <div className={styles.welcome}>
            <h2 className={styles.title}>Welcome to Lemon AI</h2>
            <p className={styles.subtitle}>Start a conversation with your AI assistant</p>
          </div>
        </div>

        <div className={styles.inputArea}>
          <div className={styles.inputContainer}>
            <Input.TextArea
              placeholder="Type your message..."
              autoSize={{ minRows: 1, maxRows: 6 }}
              style={{ flex: 1 }}
            />
            <Button type="primary" icon={<Send size={18} />} size="large">
              Send
            </Button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
