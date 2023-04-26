import { Link } from 'react-router-dom';
import RadiusBox from '../../common/RadiusBox';
import { HomeMenusContainer, HomeMenuIcon } from './style';

const HomeMenus = () => {
  return (
    <HomeMenusContainer>
      <Link to="/pra" className="homeMain">
        심사 시작하기
      </Link>
      <Link to="/simple" className="homeSub">
        등기부등본이 없으시다면?
      </Link>
    </HomeMenusContainer>
  );
};

export default HomeMenus;
