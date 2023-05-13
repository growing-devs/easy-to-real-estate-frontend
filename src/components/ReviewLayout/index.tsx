import { NavLink, Outlet } from 'react-router-dom';
import { ReviewLayoutContainer, ReviewContainer, TabMenus } from './style';
import PraDetail from '@/pages/Pra/PraDetail';
import Summary from './Summary';

const ReviewLayout = () => {
  return (
    <ReviewLayoutContainer>
      <ReviewContainer>
        <div className="summarySection">
          <Summary />
        </div>
        <div className="detailSection">
          <TabMenus>
            <NavLink to="pdfsummary">등기부 요약</NavLink>
            <NavLink to="gap">등기부 갑구</NavLink>
            <NavLink to="eul">등기부 을구</NavLink>
            <NavLink to="marketprice">시세</NavLink>
            <NavLink to="location">입지</NavLink>
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
