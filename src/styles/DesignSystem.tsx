import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Theme from './Theme';

// !! 분석
// 폰트 및 버튼 관련 디폴트 세팅.
// 폰트를 스타일 태그화.  필요한 곳에서 import하고 스타일 태그로 사용하고, 원하는 값만 props로 커스텀 사용토록 만들었음.
// 버튼을 따로 컴포넌트로 분리하지 않고 여기서 export만 하도록 했음, 사이트 곳곳에서 쓰인다면 컴포넌트로 분리하는 게 사용성이 더 좋을 수 있을 거 같음.

interface FontProps {
  color?: string;
  size?: string;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

export const Pretendard = styled.span<FontProps>`
  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
    Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  font-style: normal;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;

  font-weight: ${(props) => props.weight || 400};
  font-size: ${(props) => props.size || '16px'};
  color: ${(props) => props.color || Theme.Font_BL};
`;

export const subLargeButton = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 100%;
  height: 72px;

  background: #fff;
  color: ${Theme.Main};
  border: 1px solid ${Theme.Main};
  border-radius: 12px;

  // font
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.05em;
  &:disabled {
    background: ${Theme.Disable};
    span {
      color: ${Theme.Font_grey_03};
    }
  }
  &:hover {
    background: #eaedfb;
  }

  &:focus {
    border: 1px solid ${Theme.Main};
    outline: 2px dashed ${Theme.MainBG};
  }
  &:focus-visible {
    outline-offset: 4px;
    outline: 3px dashed ${Theme.Font_BL};
  }
  &:active {
    background: #c0c8f2;
  }
`;

export const mainLargeButton = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 72px;

  background: ${Theme.Main};
  border: none;
  outline: none;
  border-radius: 12px;

  // font
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.05em;
  span {
    color: #fff;
  }
  color: #fff;
  &:disabled {
    background: ${Theme.Disable};
    span {
      color: ${Theme.Font_grey_03};
    }
  }
  &:hover {
    background: #6c7de0;
  }
  &:focus {
    border-style: none;
    outline: 2px dashed ${Theme.MainBG};
  }
  &:focus-visible {
    outline-offset: 4px;
    outline: 3px dashed ${Theme.Font_BL};
  }
  &:active {
    background: #283ebd;
  }
`;
