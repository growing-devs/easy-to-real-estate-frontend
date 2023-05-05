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

const PraPropertyInfoWrap = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  gap: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
