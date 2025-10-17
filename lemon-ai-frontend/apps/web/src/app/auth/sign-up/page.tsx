'use client';

import { signUp } from '../actions/sign-up';
import { createStyles } from 'antd-style';
import { Card, Input, Button } from 'antd';
import { Mail, Lock, User, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const useStyles = createStyles(({ token, css }) => ({
  container: css`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, ${token.colorPrimaryBg} 0%, ${token.colorBgLayout} 100%);
    padding: ${token.paddingLG}px;
  `,
  card: css`
    width: 100%;
    max-width: 440px;
    border-radius: ${token.borderRadiusLG}px;
    box-shadow: ${token.boxShadowSecondary};
  `,
  logo: css`
    text-align: center;
    font-size: 48px;
    margin-bottom: ${token.marginMD}px;
  `,
  title: css`
    text-align: center;
    font-size: ${token.fontSizeHeading2}px;
    font-weight: 600;
    margin-bottom: ${token.marginXS}px;
    color: ${token.colorText};
  `,
  subtitle: css`
    text-align: center;
    font-size: ${token.fontSize}px;
    color: ${token.colorTextSecondary};
    margin-bottom: ${token.marginXL}px;
  `,
  form: css`
    display: flex;
    flex-direction: column;
    gap: ${token.marginLG}px;
  `,
  inputGroup: css`
    display: flex;
    flex-direction: column;
    gap: ${token.marginMD}px;
  `,
  footer: css`
    text-align: center;
    margin-top: ${token.marginLG}px;
    font-size: ${token.fontSizeSM}px;
    color: ${token.colorTextSecondary};

    a {
      color: ${token.colorPrimary};
      font-weight: 500;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `,
}));

export default function SignUpPage() {
  const { styles } = useStyles();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    try {
      await signUp(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className={styles.card}>
          <div className={styles.logo}>🍋</div>
          <h1 className={styles.title}>Create Account</h1>
          <p className={styles.subtitle}>Join Lemon AI and start your journey</p>

          <form action={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <Input
                name="full_name"
                type="text"
                size="large"
                prefix={<User size={18} />}
                placeholder="Full name (optional)"
                autoComplete="name"
              />
              <Input
                name="email"
                type="email"
                size="large"
                prefix={<Mail size={18} />}
                placeholder="Email address"
                required
                autoComplete="email"
              />
              <Input.Password
                name="password"
                size="large"
                prefix={<Lock size={18} />}
                placeholder="Password (min 6 characters)"
                required
                autoComplete="new-password"
              />
            </div>

            <Button
              type="primary"
              size="large"
              htmlType="submit"
              icon={<UserPlus size={18} />}
              loading={isSubmitting}
              block
            >
              Create Account
            </Button>
          </form>

          <div className={styles.footer}>
            Already have an account?{' '}
            <Link href="/auth/sign-in">Sign in</Link>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
