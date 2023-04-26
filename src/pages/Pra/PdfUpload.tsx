import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import ViewPDF from '../../components/Pdf/ViewPDF';
import Upload from '../../components/Pdf/UplodPDF';
import DragAndDrop from '@/components/Pdf/DragAndDrop';

//  업로드 상태변화를 감지하여 페이지를 이동해주는 컴포넌트
const PRA = () => {
  return (
    <WrapContainer>
      <PageContainer>
        <PageName>상세심사</PageName>
        <PageDetail>조회하실 등기부등본 파일을 업로드 해주세요.</PageDetail>
      </PageContainer>

      <LinkContainer>
        <LinkDetail>
          <p>등기부등본이 없으신가요?</p>
        </LinkDetail>
        <LinkDetail>
          <StyledLink to="/">등기부등본 없는 간편심사 바로가기</StyledLink>
          <StyledLink to="/">등기부등록 발급 바로가기</StyledLink>
        </LinkDetail>
      </LinkContainer>
      <Upload />
    </WrapContainer>
  );
};

export default PRA;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const LinkDetail = styled.div`
  display: flex;
  gap: 20px;
  font-weight: bold;
  margin-top: 22px;
  margin-bottom: 22px;

  font-size: 20px;
  align-self: flex-end;
`;
const StyledLink = styled(Link)`
  text-decoration: underline;
`;

const WrapContainer = styled.div`
  width: 1200px;
  height: auto;
  align-items: center;
  margin-top: 70px;
  padding-top: 50px;
  padding-bottom: 30px;
  font-family: 'Pretendard';
  font-style: normal;
`;

const PageContainer = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const PageName = styled.span`
  margin-top: 40px;
  text-align: center;
  font-weight: bold;
  font-size: 60px; /* default font-size */
  color: #e8e5d6;
  /* 화면 너비가 768px보다 작을 때 */
  @media (max-width: 768px) {
    font-size: 36px;
  }

  /* 화면 너비가 768px 이상일 때 */
  @media (min-width: 768px) {
    font-size: 60pxpx;
  }
`;
const PageDetail = styled.p`
  margin-top: 16px;
  color: #8f8f8f;
  font-weight: 600;
  font-size: 30px;
  line-height: 70px;
`;
