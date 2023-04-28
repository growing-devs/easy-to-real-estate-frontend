import React from 'react';
import styled from '@emotion/styled';

const PropertyInfo = () => {
  return (
    <PraPropertyInfoWrap>
      <div>
        <h1>담보부동산 기본정보</h1>
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
const PropertySub = styled.span``;
const PropertyDetail = styled.span``;
const PropertyImg = styled.img``;
const PropertyInfoBoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
`;

const PropertyInfoBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: beige;
`;

const PraPropertyInfoWrap = styled.div`
  background-color: #6696ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
`;
