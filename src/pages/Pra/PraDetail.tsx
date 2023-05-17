import React from 'react';
import styled from '@emotion/styled';
import PraPropertyInfo from '../../components/Pdf/PropertyInfo';
import { PrimaryButton } from '@/components/common';

const PraDetail = () => {
  return (
    <PraContainer>
      <PraDetailWrap>
        <PraDetailTitle>
          <FlexDiv>
            <TitleHeader>담보물건 요약</TitleHeader>
            <PrimaryButton
              onClick={() => {
                alert('클릭하셧습니다');
              }}
              style={{ fontSize: '10px', border: 'none' }}
              width={100}
              height={24}
              color="#CCAC55"
            >
              매물 요약 저장하기
            </PrimaryButton>
          </FlexDiv>
          <PraPropertyInfo />
        </PraDetailTitle>
      </PraDetailWrap>
    </PraContainer>
  );
};

export default PraDetail;

const PraContainer = styled.div`
  padding: 32px;
  display: flex;
`;
const FlexDiv = styled.div`
  padding-top: 30px;
  align-items: center;
  width: 100%;
  display: flex;
  gap: 90px;
  justify-content: space-around;
`;
const TitleHeader = styled.span`
  display: flex;
  font-size: 14px;
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
  border: 0.5px solid #c9c9c9;

  display: flex;
  flex-direction: column;
  width: 558px;
  height: auto;
`;
