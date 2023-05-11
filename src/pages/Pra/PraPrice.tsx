import styled from '@emotion/styled';
import React from 'react';
import { PrimaryButton } from '@/components/common';
import Chart from '@/components/Chart/';

const PraPrice = () => {
  return (
    <PraPriceWrap>
      <PraPriceContent>
        <PraPriceTitle>1. 시세 및 실거래가 정보</PraPriceTitle>
        <PraPriceFlexDiv
          style={{ justifyContent: 'space-between', gap: '15px', marginTop: '25px' }}
        >
          <Chart />
          <PraPriceFlexColumnDiv style={{ width: '100%', gap: '20px', alignItems: 'center' }}>
            <PraPriceNow style={{ gap: '15px' }}>
              <PraPriceTitle>시세가</PraPriceTitle>
              <PraPriceFlexDiv style={{ justifyContent: 'space-around' }}>
                <div style={{ textAlignLast: 'center' }}>
                  <PraValue>22억</PraValue>
                  <PraPriceTitle>하한가</PraPriceTitle>
                </div>
                <PraHR />
                <div style={{ textAlignLast: 'center' }}>
                  <PraValue>23억</PraValue>
                  <PraPriceTitle>상한가</PraPriceTitle>
                </div>
                <PraHR />
                <div style={{ textAlignLast: 'center' }}>
                  <PraValue style={{ color: '#616161' }}>54~58%</PraValue>
                  <PraPriceTitle>매매가대비전세가</PraPriceTitle>
                </div>
              </PraPriceFlexDiv>
              <PraAnnotation>2023.4.23 한국부동산기준 / 국토교통부기준</PraAnnotation>
            </PraPriceNow>
            <PraPriceFlexDiv style={{ width: '100%', height: '100%', gap: '15px' }}>
              <PraPriceHighLow>
                <PraPriceTitle>최고 실거래가</PraPriceTitle>
                <div>6억 5000</div>
                <PraAnnotation>23.05 기준 출처 국토교통부</PraAnnotation>
              </PraPriceHighLow>

              <PraPriceHighLow>
                <PraPriceTitle>최저 실거래가</PraPriceTitle>
                <div>6억 5000</div>
                <PraAnnotation>23.05 기준 출처 국토교통부</PraAnnotation>
              </PraPriceHighLow>
            </PraPriceFlexDiv>
          </PraPriceFlexColumnDiv>
        </PraPriceFlexDiv>
      </PraPriceContent>
      <PraPriceContent>
        <PraPriceFlexDiv style={{ justifyContent: 'space-between' }}>
          <PraPriceTitle>2. 실거래가</PraPriceTitle>
          <PraPriceTitle>필터버튼</PraPriceTitle>
        </PraPriceFlexDiv>
        <PraPriceTable>테이블</PraPriceTable>
      </PraPriceContent>

      <PraPriceContent>
        <PraPriceFlexDiv style={{ justifyContent: 'space-between' }}>
          <PraPriceTitle>3. 시세</PraPriceTitle>
          <PraPriceTitle>필터버튼</PraPriceTitle>
        </PraPriceFlexDiv>
        <PraPriceTable>테이블</PraPriceTable>
      </PraPriceContent>

      <PraPriceContent>
        <PraPriceFlexDiv style={{ justifyContent: 'space-between' }}>
          <PraPriceTitle>1. 호가</PraPriceTitle>
          <PraPriceTitle>필터버튼</PraPriceTitle>
        </PraPriceFlexDiv>
        <PraPriceTable>테이블</PraPriceTable>
      </PraPriceContent>
      <PraNaverButton>네이버 부동산에서 더보기</PraNaverButton>
    </PraPriceWrap>
  );
};

export default PraPrice;
const PraNaverButton = styled.button`
  margin-top: 20px;
  font-size: 16px;
  background: white;
  color: #4caf50;
  width: 100%;
  height: 50px;
  margin: 10 auto;
  border: 0.3px solid #4caf50;
`;
const PraValue = styled.div`
  color: #1a237e;
`;

const PraAnnotation = styled.div`
  text-align: end;
  color: #858585;
  font-size: 10px;
`;
const PraHR = styled.div`
  border-left: 1px solid #bdbdbd;
  height: 30px;
`;

const PraPriceChart = styled.div`
  padding: 8px;
  background-color: #cccccc;
  width: 100%;
  height: 210px;
  border-radius: 5px;
`;

const PraPriceNow = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  gap: 10px;
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #e8eaf6;
  border: 1px solid #cccccc;
`;
const PraPriceHighLow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: 100%;
  border: 1px solid #cccccc;
  color: #7d6117;
  font-weight: bold;
  background-color: #e8e5d6;
  border-radius: 5px;
  gap: 10px;
`;

const PraPriceFlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const PraPriceFlexDiv = styled.div`
  display: flex;
`;
const PraPriceTable = styled.div`
  height: 220px;
  margin-top: 25px;
  border: 1px solid black;
`;

const PraPriceTitle = styled.span`
  color: black;
  font-size: 14px;
  font-weight: bold;
`;

const PraPriceContent = styled.div`
  padding: 20px;
  margin: 10px;
`;

const PraPriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 988px;
  height: 100%;
`;
