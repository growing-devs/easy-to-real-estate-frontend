import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import Chart from './PriceChart';
import { ChartButton } from './PriceChartButton';

type ResultItem = {
  층: any;
  거래: any;
  거래금액: string;
  계약일: string;
};

const index = ({ result }: { result: ResultItem[] }) => {
  console.log('chartData', result);

  const actualTransactionPriceData = result
    .map((item) => ({
      contract_date: item.계약일,
      transaction_type: item.거래,
      price: parseInt(item.거래금액.replace(/,/g, ''), 10),
      floor: item.층,
      asking_price: 0, // 추가 필드 값
    }))
    .reverse();

  const marketPriceData = result
    .map((item) => ({
      reference_date: item.계약일,
      transaction_type: item.거래,
      lower_avg_price: parseInt(item.거래금액.replace(/,/g, ''), 10) * 0.9,
      avg_price: parseInt(item.거래금액.replace(/,/g, ''), 10),
      upper_avg_price: parseInt(item.거래금액.replace(/,/g, ''), 10) * 1.1,
      sales_vs_rent_price: '50',
    }))
    .reverse();

  return (
    <ChartWrap>
      {/* <ChartButton
        dealType={dealType}
        year={year}
        handleDealTypeChange={handleDealTypeChange}
        handleYearChange={handleYearChange}
      /> */}
      <Chart actualTransactionPrice={actualTransactionPriceData} marketPrice={marketPriceData} />
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
