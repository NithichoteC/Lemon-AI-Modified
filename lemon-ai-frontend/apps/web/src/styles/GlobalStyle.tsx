'use client';

import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css, token }) => ({
  global: css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html,
    body {
      height: 100%;
      font-family: ${token.fontFamily};
      color: ${token.colorText};
      background: ${token.colorBgLayout};
    }

    #__next {
      height: 100%;
    }

    /* Scrollbar styles */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: ${token.colorFill};
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${token.colorFillSecondary};
    }

    /* Firefox scrollbar */
    * {
      scrollbar-width: thin;
      scrollbar-color: ${token.colorFill} transparent;
    }

    /* Focus styles */
    :focus-visible {
      outline: 2px solid ${token.colorPrimary};
      outline-offset: 2px;
    }

    /* Selection styles */
    ::selection {
      background: ${token.colorPrimaryBg};
      color: ${token.colorPrimaryText};
    }
  `,
}));

export default function GlobalStyle() {
  const { styles } = useStyles();
  return <style dangerouslySetInnerHTML={{ __html: styles.global }} />;
}
