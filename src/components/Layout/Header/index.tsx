import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderWrap } from './style';
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
          <Link to="/search">담보 부동산 탐색</Link>
        </div>
        <div>
          <Link to="/support">고객센터</Link>
        </div>
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
