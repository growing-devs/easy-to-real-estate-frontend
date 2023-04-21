import { Link } from 'react-router-dom';
import RadiusBox from '../../common/RadiusBox';
import { HomeMenusContainer, HomeMenuIcon } from './style';
import Checkicon from '@/assets/homemenucheck.svg';
import Arrowicon from '@/assets/arrow-right.svg';

const HomeMenus = () => {
  return (
    <HomeMenusContainer>
      <Link to="/simple">
        <RadiusBox className="homeMenu black" width="585px" height="315px" color="#020407">
          <p>간편 심사하기</p>
          <p>
            <HomeMenuIcon className="checkIcon white" src={Checkicon} alt="checkIcon" />
            등기부등본 없이 간단하게 조회할 수 있습니다
          </p>
          <p>
            <HomeMenuIcon className="checkIcon white" src={Checkicon} alt="checkIcon" />
            담보 부동산의 시세, 입지, 경매 정보를 확인할 수 있습니다
          </p>
          <p>
            담보 부동산 탐색하러가기
            <HomeMenuIcon className="arrowIcon white" src={Arrowicon} alt="→" />
          </p>
        </RadiusBox>
      </Link>
      <Link to="/upload">
        <RadiusBox className="homeMenu" width="585px" height="315px" color="#F5F5F5">
          <p>상세 심사하기</p>
          <p>
            <HomeMenuIcon className="checkIcon" src={Checkicon} alt="checkIcon" />
            등기부등본(요약포함)으로 상세 정보를 조회할 수 있습니다
          </p>
          <p>
            <HomeMenuIcon className="checkIcon" src={Checkicon} alt="checkIcon" />
            등기부등본 해석, 시세, 입지, 경매 정보를 확인할 수 있습니다
          </p>
          <p>
            등기부등본 살펴보러가기
            <HomeMenuIcon className="arrowIcon" src={Arrowicon} alt="→" />
          </p>
        </RadiusBox>
      </Link>
    </HomeMenusContainer>
  );
};

export default HomeMenus;
