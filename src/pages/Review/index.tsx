import { NavLink, Outlet } from 'react-router-dom';
import { ReviewLayout, TitleContainer, ReviewContainer, TabMenus } from './style';

const Review = () => {
  return (
    <ReviewLayout>
      <TitleContainer>
        <p>심사하기</p>
        <div>
          <NavLink to="/pra">다른 담보 물건 심사하기 </NavLink>
          <NavLink to="/">PDF로 저장하기</NavLink>
        </div>
      </TitleContainer>
      <ReviewContainer>
        <div className="summarySection">
          <p className="summaryTitle">매물 요약</p>
          <div>요약표 컴포넌트</div>
        </div>
        <div className="detailSection">
          <TabMenus>
            <NavLink to="/summary">등기부 요약</NavLink>
            <NavLink to="/gap">등기부 갑구</NavLink>
            <NavLink to="/eul">등기부 을구</NavLink>
            <NavLink to="/marketprice">시세</NavLink>
            <NavLink to="/location">입지</NavLink>
          </TabMenus>
          <div className="reviewDetail">
            <Outlet />
          </div>
        </div>
      </ReviewContainer>
    </ReviewLayout>
  );
};

export default Review;
