import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <MainSection>
        <Outlet />
      </MainSection>
      <Footer />
    </>
  );
};

const MainSection = styled.main`
  min-height: calc(100vh - 350px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Layout;
