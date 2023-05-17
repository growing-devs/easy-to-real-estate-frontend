import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { TitleContainer, ReviewContainer, TabMenus } from './style';
import PraDetail from '@/pages/Pra/PraDetail';
import { useDataStore } from '@/store/DataStore';

const ReviewLayout = () => {
  const { id } = useParams();
  const { responseItems } = useDataStore();

  useEffect(() => {
    if (!id) {
      console.log('URL에 아이디가 제공되지 않았습니다.');
      return;
    }

    const parsedId: number = +id;
    const selectedItem = responseItems.find((item) => item.id === parsedId);

    if (!selectedItem) {
      console.log(`아이디 ${id}에 해당하는 아이템을 찾을 수 없습니다.`);
      return;
    }

    console.log(selectedItem);
  }, [id]);

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
        <div className="summaryTable">{id && <PraDetail />}</div>
        <div className="detailSection">
          <TabMenus>
            {id && (
              <>
                <NavLink to={`/pra/${id}/summary`}>등기부 요약</NavLink>
                <NavLink to={`/pra/${id}/gap`}>등기부 갑구</NavLink>
                <NavLink to={`/pra/${id}/eul`}>등기부 을구</NavLink>
                <NavLink to={`/pra/${id}/marketprice`}>시세</NavLink>
                <NavLink to={`/pra/${id}/location`}>입지</NavLink>
              </>
            )}
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
