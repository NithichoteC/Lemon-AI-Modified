'use client';

import { Card as AntdCard, CardProps as AntdCardProps } from 'antd';
import { createStyles } from 'antd-style';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const useStyles = createStyles(({ token, css }) => ({
  card: css`
    border-radius: ${token.borderRadiusLG}px;
    box-shadow: ${token.boxShadow};
    transition: all ${token.motionDurationMid};

    &:hover {
      box-shadow: ${token.boxShadowSecondary};
    }
  `,
}));

export interface CardProps extends AntdCardProps {
  animate?: boolean;
  children?: ReactNode;
}

export function Card({ animate = true, className, children, ...props }: CardProps) {
  const { styles, cx } = useStyles();

  const cardElement = (
    <AntdCard className={cx(styles.card, className)} {...props}>
      {children}
    </AntdCard>
  );

  if (!animate) {
    return cardElement;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      {cardElement}
    </motion.div>
  );
}
