import styled from '@emotion/styled';
import logo from '@/assets/logo_moneyparking.svg';
import { HomeMenus, HomeTitle } from '@/components/HomeComp';
import Footer from '@/components/Layout/Footer';

const Home = () => {
  return (
    <>
      <HomeLayout>
        <img src={logo} alt="logo" />
        <HomeTitle />
        <HomeMenus />
      </HomeLayout>
      <Footer />
    </>
  );
};

const HomeLayout = styled.div`
  background: linear-gradient(180deg, #e8eaf6 0%, rgba(255, 255, 255, 0) 100%);
  min-height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 104px 0 250px 0;
  img {
    width: 94px;
    margin-bottom: 40px;
  }
`;

export default Home;
