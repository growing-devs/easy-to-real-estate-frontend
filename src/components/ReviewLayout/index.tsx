import { NavLink, Outlet } from 'react-router-dom';
import { TitleContainer, ReviewContainer, TabMenus } from './style';
import PraDetail from '@/pages/Pra/PraDetail';

const ReviewLayout = () => {
  return (
    <>
      <TitleContainer>
        <p>심사하기</p>
        <div>
          <NavLink to="/pra">다른 담보 물건 심사하기 </NavLink>
          <button type="button">PDF로 저장하기</button>
        </div>
      </TitleContainer>
      <ReviewContainer>
        <div className="summarySection">
          <div className="summaryTable">
            <PraDetail />
          </div>
        </div>
        <div className="detailSection">
          <TabMenus>
            <NavLink to="pra/summary">등기부 요약</NavLink>
            <NavLink to="pra/gap">등기부 갑구</NavLink>
            <NavLink to="pra/eul">등기부 을구</NavLink>
            <NavLink to="pra/marketprice">시세</NavLink>
            <NavLink to="pra/location">입지</NavLink>
          </TabMenus>
          <div className="reviewDetail">
            <Outlet />
          </div>
        </div>
      </ReviewContainer>
    </>
  );
};

export default ReviewLayout;
