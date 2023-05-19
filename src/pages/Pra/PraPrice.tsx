import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Chart from '@/components/Chart/';
import Table from '@/components/common/Table';
import { useDataStore } from '@/store/DataStore';

const PraPrice = () => {
  const { id } = useParams();
  const { responseItems } = useDataStore();
  const [praPriceData, setPraPriceData] = useState<any>(null);

  let minPrice = '';
  let maxPrice = '';
  let allMinPrice = '';
  let allMaxPrice = '';
  useEffect(() => {
    if (!id) {
      console.log('URL에 아이디가 제공되지 않았습니다.');
      return;
    }

    const parsedId: number = +id;
    const selectedItem: any = responseItems.find((item) => item.id === parsedId);

    if (selectedItem) {
      setPraPriceData(selectedItem.data.customData.filterDATA);
    } else {
      console.log(`아이디 ${id}에 해당하는 아이템을 찾을 수 없습니다.`);
    }
  }, [id]);

  const result = praPriceData
    ? Object.entries(praPriceData)
        .flatMap(([date, records]) => {
          return (records as any[]).map((record, index) => ({
            계약일: date + String(record.일).padStart(2, '0'),
            아파트명: `${record.아파트 + Math.floor(record.전용면적 / 3.3)}평`,
            거래: '매매',
            거래금액: record.거래금액.trim(),
            전용면적: record.전용면적,
            층: record.층,
          }));
        })
        .sort((a, b) => b.계약일.localeCompare(a.계약일))
    : [];

  console.log('result', result);

  const getPrice = (price: string) => parseInt(price.replace(/,/g, ''), 10);

  const findMinPrice = (data: any[]) =>
    data.reduce((min, record) => {
      const price = getPrice(record.거래금액);
      return price < min ? price : min;
    }, Infinity);

  const findMaxPrice = (data: any[]) =>
    data.reduce((max, record) => {
      const price = getPrice(record.거래금액);
      return price > max ? price : max;
    }, -Infinity);

  const formatPrice = (price: number) => {
    if (price === Infinity) return '데이터 없음';
    const billions = Math.floor(price / 10000);
    const millions = price % 10000;
    return millions !== 0 ? `${billions}억 ${millions}만원` : `${billions}억`;
  };

  if (result && result.length > 0) {
    const latestFourRecords = result.slice(0, 4);
    minPrice = formatPrice(findMinPrice(latestFourRecords));
    maxPrice = formatPrice(findMaxPrice(latestFourRecords));
    allMinPrice = formatPrice(findMinPrice(result));
    allMaxPrice = formatPrice(findMaxPrice(result));
  }
  useEffect(() => {
    console.log('praPrice', praPriceData);
  }, [praPriceData]);

  const ColumnsPrice = [
    {
      Header: '계약일',
      accessor: '계약일',
    },
    {
      Header: '아파트명',
      accessor: '아파트명',
    },
    {
      Header: '거래',
      accessor: '거래',
    },
    {
      Header: '거래금액',
      accessor: '거래금액',
    },
    {
      Header: '전용면적',
      accessor: '전용면적',
    },
    {
      Header: '층',
      accessor: '층',
    },
  ];
  const tableProps = {
    tableData: result,
    tableColumns: ColumnsPrice,
    maxHeight: '500px',
    width: ['150px', '240px', '88px', '230px', '88px', '108px'],
  };

  return (
    <PraPriceWrap>
      <PraPriceContent>
        <PraPriceTitle>1. 시세 및 실거래가 정보</PraPriceTitle>
        <PraPriceFlexDiv
          style={{ justifyContent: 'space-between', gap: '15px', marginTop: '25px' }}
        >
          <PraPriceChart>
            <Chart result={result} />
          </PraPriceChart>
          <PraPriceFlexColumnDiv style={{ width: '70%', gap: '10px', alignItems: 'center' }}>
            <PraPriceNow style={{ gap: '10px' }}>
              <PraPriceTitle>최근 실거래가</PraPriceTitle>
              <PraPriceFlexDiv style={{ justifyContent: 'center', gap: '30px' }}>
                <div style={{ textAlignLast: 'center' }}>
                  <PraValue>{minPrice}</PraValue>
                  <PraPriceTitle>하한가</PraPriceTitle>
                </div>
                <PraHR />
                <div style={{ textAlignLast: 'center' }}>
                  <PraValue>{maxPrice}</PraValue>
                  <PraPriceTitle>상한가</PraPriceTitle>
                </div>
              </PraPriceFlexDiv>
              <PraAnnotation>최근 4개 거래건 / 국토교통부기준</PraAnnotation>
            </PraPriceNow>
            <PraPriceFlexDiv style={{ width: '100%', height: '100%', gap: '15px' }}>
              <PraPriceHighLow>
                <PraPriceTitle>최고 실거래가</PraPriceTitle>
                <div>{allMaxPrice}</div>
                <PraAnnotation>전체데이타 / 국토교통부</PraAnnotation>
              </PraPriceHighLow>

              <PraPriceHighLow>
                <PraPriceTitle>최저 실거래가</PraPriceTitle>
                <div>{allMinPrice}</div>
                <PraAnnotation>전체데이타 / 국토교통부</PraAnnotation>
              </PraPriceHighLow>
            </PraPriceFlexDiv>
          </PraPriceFlexColumnDiv>
        </PraPriceFlexDiv>
      </PraPriceContent>
      <PraPriceContent>
        <PraPriceFlexDiv style={{ justifyContent: 'space-between' }}>
          <PraPriceTitle>2. 실거래가</PraPriceTitle>
        </PraPriceFlexDiv>
        <PraPriceTable>{result.length > 0 ? <Table {...tableProps} /> : <div />}</PraPriceTable>
      </PraPriceContent>
    </PraPriceWrap>
  );
};

export default PraPrice;

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
  max-width: 100%;
  height: 100%;
`;

const PraPriceNow = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  justify-content: center;
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
  justify-content: center;
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
  min-width: 280px;
  max-width: 100%;
`;
const PraPriceFlexDiv = styled.div`
  display: flex;
`;
const PraPriceTable = styled.div`
  height: 510px;
  margin-top: 25px;
  border: 0.5px solid #3333;
`;

const PraPriceTitle = styled.span`
  color: black;
  font-size: 14px;
  font-weight: bold;
`;

const PraPriceContent = styled.div`
  width: 860px;
  padding-bottom: 30px;
`;

const PraPriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
