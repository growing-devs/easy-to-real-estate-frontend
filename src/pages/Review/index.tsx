import { NavLink, Outlet } from 'react-router-dom';
import { ReviewLayout } from './style';

const Review = () => {
  return (
    <ReviewLayout>
      <div className="titleContainer">
        <p>심사하기</p>
        <div>
          <NavLink to="/">다른 담보 물건 심사하기 </NavLink>
          <NavLink to="/">PDF로 저장하기</NavLink>
        </div>
      </div>
      <div className="main">
        <div className="summary">
          <p className="summaryTitle">매물 요약</p>
          <div>요약표 컴포넌트</div>
        </div>
        <div className="detail">
          <div className="tabMenus">
            <NavLink to="/review">등기부 요약</NavLink>
            <NavLink to="/review/gap">등기부 갑구</NavLink>
            <NavLink to="/review/eul">등기부 을구</NavLink>
            <NavLink to="/review/marketprice">시세</NavLink>
            <NavLink to="/review/location">입지</NavLink>
          </div>
          <div className="reviewDetail">
            상세 내용들
            <Outlet />
          </div>
        </div>
      </div>
    </ReviewLayout>
  );
};

export default Review;
