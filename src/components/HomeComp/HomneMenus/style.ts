import styled from '@emotion/styled';

export const HomeMenusContainer = styled.div`
  display: flex;
  .homeMenu.black {
    margin-right: 27px;
    color: #fff;
  }
  .homeMenu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 500;
      line-height: 26px;
      margin-bottom: 30px;
    }
    p:first-of-type {
      font-size: 40px;
      font-weight: 700;
      line-height: 48px;
    }
    p:last-child {
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      margin-bottom: 0;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    .homeMenu.black {
      margin-right: 0;
      margin-bottom: 30px;
    }
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
