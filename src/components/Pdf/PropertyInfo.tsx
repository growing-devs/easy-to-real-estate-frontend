import React from 'react';
import styled from '@emotion/styled';
import { useDataStore } from '../../store/DataStore';

const PropertyInfo = () => {
  const { responseItems } = useDataStore();
  const latestItem = responseItems[responseItems.length - 1];
  console.log(latestItem);
  return (
    <PraPropertyInfoWrap>
      <div>
        <PraPropertyInfoTitle>
          <div>담보부동산 기본정보</div>
          <PraPropertyInfoJson>{JSON.stringify(latestItem, null, 2)}</PraPropertyInfoJson>
        </PraPropertyInfoTitle>
      </div>
      <PropertyInfoBoxContainer>
        <PropertyInfoBox>
          <PropertySub>부동산구분</PropertySub>
          <PropertyDetail>아파트</PropertyDetail>
          <PropertyImg alt="이미지" />
        </PropertyInfoBox>
        <PropertyInfoBox>
          <PropertySub>전용 면적</PropertySub>
          <PropertyDetail>147m2</PropertyDetail>
          <PropertyImg alt="이미지" />
        </PropertyInfoBox>
        <PropertyInfoBox>
          <PropertySub>물건 층수</PropertySub>
          <PropertyDetail>13/31층</PropertyDetail>
          <PropertyImg alt="이미지" />
        </PropertyInfoBox>
      </PropertyInfoBoxContainer>
    </PraPropertyInfoWrap>
  );
};

export default PropertyInfo;
const PraPropertyInfoJson = styled.pre`
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
`;
const PraPropertyInfoTitle = styled.span`
  display: flex;
  flex-direction: column;
`;
const PropertySub = styled.span``;
const PropertyDetail = styled.span``;
const PropertyImg = styled.img``;
const PropertyInfoBoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
`;

const PropertyInfoBox = styled.div`
  width: auto;
  height: auto;
  background-color: beige;
`;

const PraPropertyInfoWrap = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  gap: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
