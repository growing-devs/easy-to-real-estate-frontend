import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import PraPropertyInfo from '../../components/Pdf/PropertyInfo';
import { PrimaryButton } from '@/components/common';
import PraPrice from './PraPrice';

const PraDetail = () => {
  return (
    <PraContainer>
      <PraDetailWrap>
        <PraDetailTitle>
          <TitleHeader>매물 요약</TitleHeader>
        </PraDetailTitle>
        <PraPropertyInfo />
        <FlexDiv>
          <PrimaryButton width={180} height={50} color="#CCAC55">
            매물 요약 저장하기
          </PrimaryButton>
          <PrimaryButton width={240} height={50}>
            전체 보고서 pdf 저장
          </PrimaryButton>
        </FlexDiv>
      </PraDetailWrap>

      <div>
        <PraPrice />
      </div>
    </PraContainer>
  );
};

export default PraDetail;

const PraContainer = styled.div`
  display: flex;
`;
const FlexDiv = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const TitleHeader = styled.span`
  display: flex;
  font-size: 22px;
  font-weight: bold;
  place-content: center;
  color: #ccac55;
`;
const PraDetailTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 17px;
  align-items: center;
`;
const PraDetailWrap = styled.div`
  background-color: #ececec6a;
  padding: 40px;
  display: flex;
  flex-direction: column;
  width: 558px;
  height: auto;
`;
