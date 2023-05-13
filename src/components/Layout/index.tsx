import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Title from './Title';
import { useStepStore } from '@/store/store';

const Layout = () => {
  const { step } = useStepStore();

  return (
    <>
      <SideBar />
      <MainSection>
        {step >= 1 ? <Title /> : null}
        <Outlet />
      </MainSection>
    </>
  );
};

const MainSection = styled.main`
  margin-left: 370px;
  width: calc(100% - 370px);
  height: 100vh;
  overflow-y: hidden;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #616161;
    background-clip: padding-box;
    border: 2px solid transparent;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ddd;
  }

  /* 1920 미만 */
  @media (max-width: 1919px) {
    margin-left: 250px;
    width: calc(100% - 250px);
  }
`;

export default Layout;
