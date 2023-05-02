import styled from '@emotion/styled';

export const FooterWrap = styled.footer`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  background-color: #f0f4ff;
  color: black;
  text-align: center;
`;

export const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1224px;
  margin: 0 auto;
  gap: 60px;

  & > div {
    display: flex;
    justify-content: space-between;

    &:first-of-type {
      align-items: start;
    }

    &:last-of-type {
      align-items: end;
    }
  }

  .footer-menu {
    display: flex;
    gap: 60px;

    a {
      font-size: 16px;
      font-weight: 500;
      color: #767676;
    }
  }

  .footer-address {
    display: flex;
    gap: 60px;

    ul {
      text-align: start;
      line-height: 200%;
      font-size: 12px;
      color: #767676;
    }
  }

  .copy {
    font-size: 12px;
    color: #767676;
  }
`;
