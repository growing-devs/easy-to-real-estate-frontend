import styled from '@emotion/styled';
import HomeTitle from '@/components/HomeComp/HomeTitle';
import HomeMenus from '@/components/HomeComp/HomneMenus';
import Footer from '@/components/Layout/Footer';

const Home = () => {
  return (
    <>
      <HomeLayout>
        <HomeTitle />
        <HomeMenus />
      </HomeLayout>
      <Footer />
    </>
  );
};

const HomeLayout = styled.div`
  min-height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 188px 0 140px 0;
`;

export default Home;
