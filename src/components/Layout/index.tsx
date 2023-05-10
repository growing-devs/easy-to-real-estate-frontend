import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Layout = () => {
  return (
    <>
      <SideBar />
      <MainSection>
        <Outlet />
      </MainSection>
    </>
  );
};

const MainSection = styled.main`
  display: flex;
  justify-content: center;
  margin-left: 408px;
  width: calc(100% - 408px);
  min-height: 100vh;
`;

export default Layout;
