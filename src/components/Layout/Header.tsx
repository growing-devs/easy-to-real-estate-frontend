import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <div>
          <h1>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </h1>
          <Link to="/pra">등기부등본 해석</Link>
          <Link to="/simple">담보 부동산 탐색</Link>
        </div>
        <div>
          <Link to="/support">고객센터</Link>
        </div>
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const HeaderWrap = styled.div`
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
