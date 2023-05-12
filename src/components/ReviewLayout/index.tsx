import { NavLink, Outlet } from 'react-router-dom';
import { ReviewLayoutContainer, TitleContainer, ReviewContainer, TabMenus } from './style';
import PraDetail from '@/pages/Pra/PraDetail';

const ReviewLayout = () => {
  return (
    <ReviewLayoutContainer>
      <TitleContainer>
        <p>심사하기</p>
        <div>
          <button type="button">PDF로 저장하기</button>
          <button type="button">심사 종료하기</button>
        </div>
      </TitleContainer>
      <ReviewContainer>
        <div className="summarySection">
          <div className="summaryTable">
            {/* <PraDetail /> */}
            매물요약표
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
    </ReviewLayoutContainer>
  );
};

export default ReviewLayout;
