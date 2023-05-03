import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Upload from '../../components/Pdf/UploadPDF';
import nextIcon from '../../assets/Pdf/nextIcon.svg';

const PRA = () => {
  return (
    <Wrapper>
      <PageHeader>
        <Title>상세 심사</Title>
        <Subtitle>조회하실 등기부등본 파일을 업로드 해주세요.</Subtitle>
      </PageHeader>

      {/* 업로드기능 */}
      <Upload />
      <HelpLinks>
        <HelpTitle>등기부등본이 없으신가요?</HelpTitle>
        <HelpBoxWrap>
          <HelpBox>
            <HelpSub>
              등기부등본 발급 바로가기 <NextIcon alt="nextIcon" src={nextIcon} />
            </HelpSub>
            <HelpLink to="/">등기부등본을 발급받을 수 있는 사이트로 이동</HelpLink>
          </HelpBox>
          <HelpBox>
            <HelpSub>
              간편심사 바로가기
              <NextIcon alt="nextIcon" src={nextIcon} />
            </HelpSub>
            <HelpAnchor href="https://www.iros.go.kr/pos1/jsp/help2/jsp/001001001002.jsp">
              등기부등록 발급 필요없는 간편심사 이용
            </HelpAnchor>
          </HelpBox>
        </HelpBoxWrap>
      </HelpLinks>
    </Wrapper>
  );
};

export default PRA;

const NextIcon = styled.img`
  width: auto;
  height: auto;
`;

const HelpSub = styled.span`
  display: inline-flex;
  align-items: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: bold;
`;

const HelpBoxWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

const HelpBox = styled.div`
  border: 1px solid #d2d2dc;
  width: 100%;
  height: 90px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding-left: 30px;
  border-radius: 5px;
`;

const HelpTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const HelpLink = styled(Link)`
  font-size: 12px;
`;

const HelpAnchor = styled.a`
  font-size: 12px;
`;

const HelpLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 65px;
`;

const Wrapper = styled.div`
  width: 684px;
  height: auto;
  align-items: center;
  margin-top: 156px;
  padding-bottom: 30px;
`;

const PageHeader = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const Title = styled.span`
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  color: #000000;
`;

const Subtitle = styled.p`
  color: #8f8f8f;
  font-size: 22px;
  margin-top: 32px;
`;
