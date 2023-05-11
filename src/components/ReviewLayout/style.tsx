import styled from '@emotion/styled';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: calc(100% - 408px);
  min-width: 1080px;
  position: fixed;
  top: 0;
  left: 408px;
  height: 170px;
  padding: 30px 58px;
  background-color: #f1efe8;
  z-index: 3;
  p {
    height: 40px;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: #1a237e;
  }
  div {
    display: flex;
    a,
    button {
      display: block;
      height: 40px;
      background: blue;
      padding: 0 20px;
      font-weight: 600;
      font-size: 16px;
      line-height: 40px;
      border-radius: 4px;
    }
    a {
      background-color: #fff;
      color: #9f9f9f;
      border: 1px solid #9f9f9f;
    }
    button {
      margin-left: 10px;
      background-color: #1a237e;
      color: #fff;
      border: 0;
    }
  }
`;

export const ReviewContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 170px;
  .summarySection {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 524px;
    height: inherit;
    background-color: #fafafa;
    .summaryTitle {
      margin: 50px 0 17px 0;
      font-weight: 700;
      font-size: 22px;
      color: #ccac55;
    }
    .summaryTable {
      width: 444px;
      height: 978px;
    }
  }
  .detailSection {
    width: 100%;
    .reviewDetail {
      position: relative;
      padding: 30px;
    }
  }
`;

export const TabMenus = styled.div`
  display: flex;
  align-items: flex-end;
  width: inherit;
  height: 88px;
  border-bottom: 1px solid #bdbdbd;
  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 48px;
    font-size: 14px;
    color: #7d7d7d;
    &.active {
      font-weight: 700;
      font-size: 16px;
      color: #1a237e;
      &:after {
        position: absolute;
        content: '';
        width: inherit;
        display: block;
        border-bottom: 2px solid #1a237e;
        bottom: -1px;
        left: 0;
      }
    }
  }
`;
