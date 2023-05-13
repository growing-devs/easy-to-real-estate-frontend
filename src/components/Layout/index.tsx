import styled from '@emotion/styled';
import { Outlet, useParams, NavLink } from 'react-router-dom';
import { useStepStore } from '@/store/store';
import { LayoutContainer, SummarySection, MainSection, TabMenus } from './style';
import SideBar from './SideBar';
import Title from './Title';
import PraDetail from '@/pages/Pra/PraDetail';

const Layout = () => {
  const { step } = useStepStore();
  const pdfId = useParams().id;
  console.log(pdfId);

  return (
    <LayoutContainer>
      <SideBar />
      <Title />
      {pdfId ? (
        <>
          <SummarySection>
            <PraDetail />
          </SummarySection>
          <MainSection>
            <TabMenus>
              <NavLink to={`review/${pdfId}/pdfsummary`}>등기부 요약</NavLink>
              <NavLink to={`review/${pdfId}/gap`}>등기부 갑구</NavLink>
              <NavLink to={`review/${pdfId}/eul`}>등기부 을구</NavLink>
              <NavLink to={`review/${pdfId}/marketprice`}>시세</NavLink>
              <NavLink to={`review/${pdfId}/location`}>입지</NavLink>
            </TabMenus>
            <div className="praDetail">
              <Outlet />
            </div>
          </MainSection>
        </>
      ) : (
        <div className="pra">
          <Outlet />
        </div>
      )}
    </LayoutContainer>
  );
};

export default Layout;
