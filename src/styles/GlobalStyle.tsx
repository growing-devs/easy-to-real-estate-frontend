import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';
import Theme from './Theme';

const style = css`
  ${reset}
  html, body {
    background-color: #fff;

    color: ${Theme.Font_BL};
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    a {
      color: ${Theme.Font_BL};
      text-decoration: none;
    }
  }
  * {
    box-sizing: border-box;
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    position: relative;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
