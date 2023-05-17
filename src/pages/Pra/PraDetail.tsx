import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import PraPropertyInfo from '../../components/Pdf/PropertyInfo';
import { PrimaryButton } from '@/components/common';
import PraPrice from './PraPrice';
import { useDataStore } from '@/store/DataStore';

const PraDetail = () => {
  const { id } = useParams();
  const { responseItems } = useDataStore();

  useEffect(() => {
    if (!id) {
      console.log('URL에 아이디가 제공되지 않았습니다.');
      return;
    }

    const parsedId: number = +id;
    const selectedItem = responseItems.find((item) => item.id === parsedId);

    if (!selectedItem) {
      console.log(`아이디 ${id}에 해당하는 아이템을 찾을 수 없습니다.`);
      return;
    }

    console.log('PraDetail', selectedItem);
  }, [id]);
  return (
    <PraContainer>
      <PraDetailWrap>
        <PraDetailTitle>
          <FlexDiv>
            <TitleHeader>매물 요약</TitleHeader>
            <PrimaryButton width={180} height={50} color="#CCAC55">
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
  margin-top: 50px;
  margin-bottom: 20px;
`;
const PraDetailTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 17px;
  align-items: center;
`;
const PraDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 558px;
  height: auto;
`;
