import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import PraPropertyInfo from '../../components/Pdf/PropertyInfo';

const PraDetail = () => {
  return (
    <PraDetailWrap>
      <PraDetailTitle>
        <TitleHeader>
          <h1>매물 요약</h1>
        </TitleHeader>
      </PraDetailTitle>

      {/* 담보 부동산 기본정보 */}
      <PraPropertyInfo />
    </PraDetailWrap>
  );
};

export default PraDetail;

const TitleHeader = styled.div`
  width: 90%;
  display: flex;
  font-size: 45px;
  font-weight: bold;
  place-content: center;
`;
const PraDetailTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  gap: 30px;
  background-color: #ffffff;
  align-items: center;
`;
const PraDetailWrap = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  width: 558px;
  height: auto;
  background-color: #000000;
`;
