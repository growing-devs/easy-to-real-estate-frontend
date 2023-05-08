import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const Layout = () => {
  return (
    <>
      <Nav />
      <MainSection>
        <Outlet />
      </MainSection>
    </>
  );
};

const MainSection = styled.main`
  margin-left: 408px;
  /* min-height: calc(100vh - 350px); */
  min-height: 100vh;
`;

export default Layout;
