import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import PraPropertyInfo from '../../components/Pdf/PropertyInfo';

const PraDetail = () => {
  const title = '관악구 신림동 어쩌구 저쩌구';

  return (
    <PraDetailWrap>
      <PraDetailTitle>
        <TitleHeader>
          <h1>상세심사</h1>
          <Link to="/pra">다른 담보 부동산 검색하기</Link>
        </TitleHeader>
        <div>
          <h1>
            조회하신 <strong>{title}</strong> 의 정보입니다.
          </h1>
        </div>
      </PraDetailTitle>
      <PraNavigationButtons>
        <NavButton>등기부등본 분석</NavButton>
        <NavButton>시세/입지 및 경매정보</NavButton>
      </PraNavigationButtons>
      {/* 담보 부동산 기본정보 */}
      <PraPropertyInfo />
    </PraDetailWrap>
  );
};

export default PraDetail;
const NavButton = styled.button``;
const PraNavigationButtons = styled.div`
  background-color: #070704;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const TitleHeader = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
const PraDetailTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
  gap: 30px;
  background-color: #ffff4e;
  height: 150px;
  align-items: center;
`;
const PraDetailWrap = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 1100px;
  height: 1100px;
  background-color: #ff1313;
`;
