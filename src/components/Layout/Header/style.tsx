import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1240px;
  margin: 0 auto;
  color: black;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &:last-of-type {
      a {
        color: #767676;
        font-weight: 400;
      }
    }
  }

  h1 {
    display: inline-block;
    width: 120px;
    height: 60px;
    margin-right: 20px;

    a {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  a {
    display: inline-block;
    margin: 10px 5px;
    padding: 10px 5px;
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    color: #171717;
    &:hover {
      color: gray;
    }
  }
`;
