'use client';

import { Input as AntdInput, InputProps as AntdInputProps } from 'antd';
import { TextAreaProps } from 'antd/es/input';
import { createStyles } from 'antd-style';
import { forwardRef } from 'react';

const useStyles = createStyles(({ token, css }) => ({
  input: css`
    border-radius: ${token.borderRadius}px;
    transition: all ${token.motionDurationMid};

    &:hover,
    &:focus {
      box-shadow: ${token.boxShadowSecondary};
    }
  `,
  textarea: css`
    border-radius: ${token.borderRadius}px;
    transition: all ${token.motionDurationMid};

    &:hover,
    &:focus {
      box-shadow: ${token.boxShadowSecondary};
    }
  `,
}));

export interface InputProps extends AntdInputProps {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const { styles, cx } = useStyles();

    return <AntdInput ref={ref} className={cx(styles.input, className)} {...props} />;
  }
);

Input.displayName = 'Input';

export interface TextAreaComponentProps extends TextAreaProps {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaComponentProps>(
  ({ className, ...props }, ref) => {
    const { styles, cx } = useStyles();

    return <AntdInput.TextArea ref={ref} className={cx(styles.textarea, className)} {...props} />;
  }
);

TextArea.displayName = 'TextArea';
