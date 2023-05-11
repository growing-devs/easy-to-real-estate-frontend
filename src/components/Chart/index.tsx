/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import data from './data';
import Chart from './PriceChart';
import { ChartButton } from './PriceChartButton';

// 백앤드가 기술적 이해 부족으로 데이타를 나눠서 보내주겠다고함
const actualTransactionPrice = data.actual_transaction_price.map(
  ({ contract_date, price, transaction_type }) => ({
    contract_date,
    price,
    transaction_type,
  }),
);

const marketPrice = data.market_price.map(
  ({ reference_date, lower_avg_price, upper_avg_price, transaction_type }) => ({
    reference_date,
    lower_avg_price,
    upper_avg_price,
    transaction_type,
  }),
);

// 데이터 전처리 타입을 기준으로 나눔

const filterByTransactionType = (items: any[], transactionType: string) =>
  items.filter((item) => item.transaction_type === transactionType);

// 필터링
const sales = filterByTransactionType(actualTransactionPrice, 'sale');
const rents = filterByTransactionType(actualTransactionPrice, 'rent');
const saleMarketPrice = filterByTransactionType(marketPrice, 'sale');
const rentMarketPrice = filterByTransactionType(marketPrice, 'rent');

const index = () => {
  const [dealType, setDealType] = useState('sale');
  const [year, setYear] = useState('3');

  useEffect(() => {
    console.log('변경', dealType, year);
  }, [dealType, year]);

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
      <Chart
        actualTransactionPrice={data.actual_transaction_price}
        marketPrice={data.market_price}
      />
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
