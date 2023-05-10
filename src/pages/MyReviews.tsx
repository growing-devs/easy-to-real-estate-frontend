import styled from '@emotion/styled';

const MyReviews = () => {
  return (
    <PreparingPage>
      <p className="mainTitle">
        내 심사관리 서비스가
        <br />곧 출시됩니다.
      </p>
      <p className="subTitle">
        담보물 탐색, 등기부등본 검토, 심사 중인 서류 내역 관리까지
        <br />
        등기부등본 업로드 한번으로 간편한 대출 심사 프로세스를 경험해보세요.
      </p>
      <SubscribeFormContainer>
        <p>
          지금 사전 등록하고, 서비스 출시 일정을 이메일로 안내받으시겠어요?
          <br />
          사전등록하신 분에게는 10% 할인쿠폰을 드립니다.
        </p>
      </SubscribeFormContainer>
    </PreparingPage>
  );
};

export default MyReviews;

const PreparingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  width: 100%;
  p {
    text-align: center;
  }
  .mainTitle {
    font-weight: 700;
    font-size: 84px;
    line-height: 105px;
    color: #333;
    margin-bottom: 50px;
  }
  .subTitle {
    font-weight: 400;
    font-size: 28px;
    line-height: 38px;
    color: #616161;
  }
`;

const SubscribeFormContainer = styled.div`
  margin-top: 40px;
  padding: 40px 58px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  background-color: #fdfdfd;
  p {
    font-weight: 300;
    font-size: 22px;
    line-height: 33px;
    color: #333;
  }
`;
