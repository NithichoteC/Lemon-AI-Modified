'use client';

import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';
import { createStyles } from 'antd-style';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const useStyles = createStyles(({ token, css }) => ({
  button: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${token.marginXS}px;
    font-weight: 500;
    transition: all ${token.motionDurationMid};

    &:hover {
      transform: translateY(-1px);
      box-shadow: ${token.boxShadowSecondary};
    }

    &:active {
      transform: translateY(0);
    }
  `,
}));

export interface ButtonProps extends Omit<AntdButtonProps, 'type'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'text' | 'link';
  animate?: boolean;
  icon?: ReactNode;
}

export function Button({
  variant = 'primary',
  animate = true,
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  const { styles, cx } = useStyles();

  const buttonTypeMap: Record<ButtonProps['variant'] & string, AntdButtonProps['type']> = {
    primary: 'primary',
    secondary: 'default',
    ghost: 'text',
    text: 'text',
    link: 'link',
  };

  const buttonElement = (
    <AntdButton
      type={buttonTypeMap[variant]}
      className={cx(styles.button, className)}
      icon={icon}
      {...props}
    >
      {children}
    </AntdButton>
  );

  if (!animate) {
    return buttonElement;
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      {buttonElement}
    </motion.div>
  );
}
