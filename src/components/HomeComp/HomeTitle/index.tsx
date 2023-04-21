import { Pretendard } from '@/styles/DesignSystem';
import { HomeTitleContainer } from './style';

const HomeTitle = () => {
  return (
    <HomeTitleContainer>
      <Pretendard className="mainTitle" weight={800} size="60px" lineHeight="84px" align="center">
        흩어진 정보를 한 번에 조회하고
        <br />
        빠르게 대출 심사를 해보세요
      </Pretendard>
      <Pretendard
        className="subTitle"
        weight={400}
        size="20px"
        lineHeight="30px"
        align="center"
        color="#5C5C5C"
      >
        복잡한 서류 검토는 그만!
        <br />
        담보물 탐색, 등기부등본 검토, 심사 중인 서류 내역 관리까지
        <br />
        간단한 대출 심사 프로세스를 경험해보세요.
      </Pretendard>
    </HomeTitleContainer>
  );
};

export default HomeTitle;
