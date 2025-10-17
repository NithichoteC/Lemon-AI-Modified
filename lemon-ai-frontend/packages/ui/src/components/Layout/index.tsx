'use client';

import { Flexbox, FlexboxProps } from 'react-layout-kit';
import { createStyles } from 'antd-style';
import { ReactNode, CSSProperties } from 'react';

const useStyles = createStyles(({ token }) => ({
  flexbox: {
    gap: token.marginMD,
  },
}));

export interface LayoutProps extends Omit<FlexboxProps, 'children'> {
  children?: ReactNode;
  gap?: number | string;
}

export function Layout({ children, gap, style, className, ...props }: LayoutProps) {
  const { styles, cx } = useStyles();

  const mergedStyle: CSSProperties = {
    ...style,
    ...(gap !== undefined && { gap }),
  };

  return (
    <Flexbox className={cx(styles.flexbox, className)} style={mergedStyle} {...props}>
      {children}
    </Flexbox>
  );
}

export function HorizontalLayout({ children, ...props }: LayoutProps) {
  return (
    <Layout horizontal {...props}>
      {children}
    </Layout>
  );
}

export function VerticalLayout({ children, ...props }: LayoutProps) {
  return (
    <Layout {...props}>
      {children}
    </Layout>
  );
}

export function Center({ children, ...props }: LayoutProps) {
  return (
    <Layout align="center" justify="center" {...props}>
      {children}
    </Layout>
  );
}

// Re-export Flexbox for direct use
export { Flexbox } from 'react-layout-kit';
