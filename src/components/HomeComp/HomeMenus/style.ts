import styled from '@emotion/styled';

export const HomeMenusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .homeMain {
    width: 306px;
    height: 80px;
    background-color: #1a237e;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    margin-bottom: 30px;
  }
  .homeSub {
    color: #5c5c5c;
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 0em;
    position: relative;
  }

  /* 밑줄 그려주기 위한 after 가상요소.  text-dacoration 썼더니 안 이뻐서.. */
  .homeSub::after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: 0px;
    height: 2px;
    width: 100%;
    background-color: #5c5c5c;
  }
`;

export const HomeMenuIcon = styled.span`
  &.checkIcon {
    margin-right: 10px;
  }
  &.arrowIcon {
    margin-left: 15px;
    stroke: red;
  }
`;
