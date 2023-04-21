import styled from '@emotion/styled';
import HomeTitle from '@/components/HomeComp/HomeTitle';
import HomeMenus from '@/components/HomeComp/HomneMenus';
import Footer from '@/components/Layout/Footer';

const Home = () => {
  return (
    <HomeLayout>
      <HomeTitle />
      <HomeMenus />
      <Footer />
    </HomeLayout>
  );
};

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 188px;
  footer {
    margin-top: 140px;
  }
`;

export default Home;
