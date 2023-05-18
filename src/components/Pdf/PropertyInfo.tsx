import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import { useDataStore } from '../../store/DataStore';
import { PrimaryButton } from '../common';

const PropertyInfo = () => {
  const { id } = useParams();
  const { responseItems } = useDataStore();
  const [summry, setSummary] = useState<any>(null);
  useEffect(() => {
    if (!id) {
      console.log('URL에 아이디가 제공되지 않았습니다.');
      return;
    }

    const parsedId: number = +id;
    const selectedItem: any = responseItems.find((item) => item.id === parsedId);
    if (selectedItem) {
      setSummary(selectedItem);
    } else {
      console.log(`아이디 ${id}에 해당하는 아이템을 찾을 수 없습니다.`);
    }
  }, [id]);

  useEffect(() => {
    console.log(summry);
  }, [summry]);

  return (
    <PraPropertyInfoWrap>
      <FlexColomnWrap>
        <FlexColomnDiv>
          <FileNameDate>{summry?.data?.summary.viewedAt || '-'}</FileNameDate>
          <FileNameSpan>{summry?.filename || '-'}</FileNameSpan>
        </FlexColomnDiv>
        <HrLine />
        <FlexColomnDiv>
          <TitleSpan>물건</TitleSpan>
          <ContentSpan>{summry?.data?.summary.address || '-'}</ContentSpan>
        </FlexColomnDiv>
        <FlexColomnDiv>
          <TitleSpan>등기번호</TitleSpan>
          <ContentSpan>{summry?.data?.summary.registryNumber || '-'}</ContentSpan>
        </FlexColomnDiv>
        <FlexDiv>
          <ContentWrap>
            <FlexColomnDiv>
              <TitleSpan>유형</TitleSpan>
              <ContentSpan>{summry?.data?.summary.type || '-'}</ContentSpan>
            </FlexColomnDiv>
          </ContentWrap>
          <ContentWrap>
            <FlexColomnDiv>
              <TitleSpan>면적</TitleSpan>
              <ContentSpan>
                {summry?.data?.summary.area}㎡ / {summry?.data?.summary.pyeong || '-'} 평
              </ContentSpan>
            </FlexColomnDiv>
          </ContentWrap>
        </FlexDiv>
        <FlexDiv>
          <ContentWrap>
            <FlexColomnDiv>
              <TitleSpan>소유자</TitleSpan>
              <ContentSpan>{summry?.data?.ownership_list[0]?.name || '-'}</ContentSpan>
            </FlexColomnDiv>
          </ContentWrap>
          <ContentWrap>
            <FlexColomnDiv>
              <TitleSpan>지분율</TitleSpan>
              <ContentSpan>{summry?.data?.ownership_list[0].percent || '-'}</ContentSpan>
            </FlexColomnDiv>
          </ContentWrap>
        </FlexDiv>
        <FlexDiv>
          <ContentWrap>
            <FlexColomnDiv>
              <TitleSpan>소유권 이전</TitleSpan>
              <ContentSpan>{summry?.data?.summary.ownerTransfer || '-'}</ContentSpan>
            </FlexColomnDiv>
          </ContentWrap>
          <ContentWrap>
            <FlexColomnDiv>
              <TitleSpan>대지권</TitleSpan>
              <ContentSpan>{summry?.data?.summary.landRights || '-'}</ContentSpan>
            </FlexColomnDiv>
          </ContentWrap>
        </FlexDiv>
        <HrLine />
        <FlexColomnDiv>
          <TitleSpan>시세</TitleSpan>
          <ContentSpan>{summry?.data?.summary.actual_transaction_price || '-'}</ContentSpan>
        </FlexColomnDiv>
        <FlexColomnDiv>
          <TitleSpan>실거래가</TitleSpan>
          <ContentSpan>{summry?.data?.summary.actual_transaction_price || '-'}</ContentSpan>
        </FlexColomnDiv>
        <FlexDiv>
          <ContentWrap>
            <FlexColomnDiv>
              <TitleSpan>세대수</TitleSpan>
              <ContentSpan>
                {summry?.data?.summary.units} / {summry?.data?.summary.dong || '-'}
              </ContentSpan>
            </FlexColomnDiv>
          </ContentWrap>
          <ContentWrap>
            <FlexColomnDiv>
              <TitleSpan>층수</TitleSpan>
              <ContentSpan>
                {summry?.data?.summary.floors} / {summry?.data?.summary.total_floors || '-'}
              </ContentSpan>
            </FlexColomnDiv>
          </ContentWrap>
        </FlexDiv>
        <HrLine />
        <FlexColomnDiv>
          <TitleSpan>대환 / 말소대상</TitleSpan>
          <TitleSpan>[채권 최고액(원금) / 비례율]</TitleSpan>

          <FlexDiv>
            <ContentSpan>-</ContentSpan>
            <ContentPercent>-</ContentPercent>
          </FlexDiv>
        </FlexColomnDiv>
        <FlexColomnDiv>
          <FlexColomnDiv>
            <TitleSpan>메모</TitleSpan>
            <ContentSpan>
              <textarea
                required
                style={{
                  width: '100%',
                  height: '100px',
                  fontSize: '13px',
                  resize: 'none',
                  border: 'none',
                  backgroundColor: '#F5F5F5',
                  padding: '15px',
                }}
                placeholder="메모사항을 입력하세요"
              />
            </ContentSpan>
          </FlexColomnDiv>
        </FlexColomnDiv>
      </FlexColomnWrap>
    </PraPropertyInfoWrap>
  );
};

export default PropertyInfo;

const ContentPercent = styled.div`
  color: #458af2;
  font-weight: bold;
  font-size: 12px;
`;
const HrLine = styled.div`
  border: 0.5px solid #dfdcdc7b;
`;
const FileNameSpan = styled.span`
  color: #1a237e;
  font-weight: bold;

  font-size: 12px;
`;

const FileNameDate = styled.span`
  color: #1a237e;

  font-weight: bold;
  font-size: 14px;
`;
const ContentWrap = styled.span`
  width: 100%;
`;
const ContentSpan = styled.span`
  font-size: 12px;
  font-weight: bold;
`;
const TitleSpan = styled.span`
  color: #8f8f8f;
  font-size: 12px;
`;
const FlexColomnWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FlexColomnDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PraPropertyInfoWrap = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
