import styled from '@emotion/styled';

export const ReviewLayout = styled.div`
  width: 100%;
  .titleContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: calc(100% - 408px);
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
      a {
        display: block;
        height: 40px;
        background: blue;
        padding: 0 20px;
        font-weight: 600;
        font-size: 16px;
        line-height: 40px;
        border: 1px solid #9f9f9f;
        border-radius: 4px;
      }
      a:first-of-type {
        background-color: #fff;
        color: #9f9f9f;
      }
      a:last-of-type {
        margin-left: 10px;
        background-color: #1a237e;
        color: #fff;
      }
    }
  }
  .main {
    display: flex;
    margin-top: 170px;
  }
  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 524px;
    background-color: #fafafa;
    height: inherit;
    .summaryTitle {
      margin: 50px 0 17px; 0;
      font-weight: 700;
      font-size: 22px;
      color: #ccac55;
    }
  }
  .detail {
    width: 988px;
    height: 2500px;
    /* min-width: 400px; */
  }
  .tabMenus {
    display: flex;
    align-items: flex-end;
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
  }
  .testbox {
    padding: 10px;
    background: red;
  }
`;
