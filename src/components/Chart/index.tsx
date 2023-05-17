/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

import Chart from './PriceChart';
import { ChartButton } from './PriceChartButton';
import ApartData from '@/api/ApartDataApi';
import { KakaoApi } from '@/api/kakaoApi';

// 클라이언트에서 API 요청

// const AreaPrice = data.actual_transaction_price.map(
//   ({ contract_date, price, transaction_type }) => ({
//     contract_date,
//     price,
//     transaction_type,
//   }),
// );

// const MarketPrice = data.market_price.map(
//   ({ contract_date, lower_avg_price, upper_avg_price, transaction_type }) => ({
//     contract_date,
//     lower_avg_price,
//     upper_avg_price,
//     transaction_type,
//   }),
// );

const index = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const apart = await KakaoApi('서울 특별시 벚꽃로 100');
        const apartdt = await ApartData('서울특별시 관악구 신림동 1735');

        // console.log('apart', apart);
        console.log('ChartResponse', apartdt);

        // 동기 처리 후에 다음 작업 수행
        // ...
      } catch (error) {
        console.log('error', error);

        // 에러 처리
      }
    };

    fetchData();
  }, []);

  const [sail, setSail] = useState<any[]>([]);
  const [dealType, setDealType] = useState('sale');
  const [year, setYear] = useState('3');

  const filterByYear = (items: any[], selectyear: string) =>
    items.filter((item) => {
      const itemYear = new Date(item.contract_date).getFullYear();
      const currentYear = new Date().getFullYear();
      return itemYear === currentYear - parseInt(selectyear, 10);
    });

  const groupByTransactionType = (items: any[], transactionType: string) =>
    items.filter((item) => item.transaction_type === transactionType);

  useEffect(() => {
    console.log(dealType, year);
  }, [dealType, year]);

  useEffect(() => {
    console.log(dealType, '타입', year, '년 변경', sail);
  }, [sail]);

  const handleDealTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDealType(event.target.value);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  };

  return (
    <ChartWrap>
      <ChartButton
        dealType={dealType}
        year={year}
        handleDealTypeChange={handleDealTypeChange}
        handleYearChange={handleYearChange}
      />
      {/* <Chart
        actualTransactionPrice={data.actual_transaction_price}
        marketPrice={data.market_price}
      /> */}
    </ChartWrap>
  );
};

export default index;

const ChartWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 220px;
  border: 1px solid #cacaca81;
  border-radius: 5px;
  padding-top: 10px;
`;
