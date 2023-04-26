import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';

const style = css`
  ${reset}
  *, *::after, *::before {
    box-sizing: border-box;
    @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
        format('woff');
    }
  }
  html {
    font-family: 'Pretendard-Regular';
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    cursor: pointer;
  }
  .textTest {
    font-size: 48px;
    font-weight: 600;
    line-height: 67px;
    letter-spacing: -0.02em;
    text-align: center;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
