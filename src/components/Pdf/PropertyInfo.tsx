import React from 'react';
import styled from '@emotion/styled';
import { useDataStore } from '../../store/DataStore';
import { PrimaryButton } from '../common';

const PropertyInfo = () => {
  // const { responseItems } = useDataStore();
  // const latestItem = responseItems[responseItems.length - 1];
  // <PraPropertyInfoJson>{JSON.stringify(latestItem, null, 2)}</PraPropertyInfoJson>
  // console.log(latestItem);
  return (
    <PraPropertyInfoWrap>
      <FlexColomnWrap>
        <FlexColomnDiv>
          <FileNameDate>2023.05.03</FileNameDate>
          <FileNameSpan>3순위 7억원 삼성아이파크 103동</FileNameSpan>
        </FlexColomnDiv>
        <HrLine />

        <FlexColomnDiv>
          <TitleSpan>물건</TitleSpan>
          <ContentSpan>경기도 성남시 분당구 정자동 6 파크뷰 제 18층 제 605-1804호 </ContentSpan>
        </FlexColomnDiv>
        <FlexColomnDiv>
          <TitleSpan>등기번호</TitleSpan>
          <ContentSpan>1356-2004-012044 </ContentSpan>
        </FlexColomnDiv>
        <FlexDiv>
          <ContentWrap>
            <FlexColomnDiv>
              <TitleSpan>대지권</TitleSpan>
              <ContentSpan>대지권 유</ContentSpan>
            </FlexColomnDiv>
          </ContentWrap>
          <ContentWrap>
            <FlexColomnDiv>
              <TitleSpan>면적</TitleSpan>
              <ContentSpan>전용 84.99 ㎡ </ContentSpan>
            </FlexColomnDiv>
          </ContentWrap>
        </FlexDiv>
        <FlexDiv>
          <ContentWrap>
            <FlexColomnDiv>
              <TitleSpan>소유자</TitleSpan>
              <ContentSpan>전용 84.99</ContentSpan>
            </FlexColomnDiv>
          </ContentWrap>
          <ContentWrap>
            <FlexColomnDiv>
              <TitleSpan>지분율</TitleSpan>
              <ContentSpan>100%</ContentSpan>
            </FlexColomnDiv>
          </ContentWrap>
        </FlexDiv>
        <FlexColomnDiv>
          <TitleSpan>@@@지분전부이전</TitleSpan>
          <ContentSpan>2016년 2월 25일 </ContentSpan>
        </FlexColomnDiv>
        <HrLine />
        <FlexColomnDiv>
          <TitleSpan>시세</TitleSpan>
          <ContentSpan>네이버 부동산 하위 179.000</ContentSpan>
          <ContentSpan>일반 183만원</ContentSpan>
        </FlexColomnDiv>
        <FlexColomnDiv>
          <TitleSpan>실거래가</TitleSpan>
          <ContentSpan>160000만원 (판매월 층수)</ContentSpan>
        </FlexColomnDiv>
        <FlexColomnDiv>
          <TitleSpan>호가</TitleSpan>
          <ContentSpan>160000만원 </ContentSpan>
        </FlexColomnDiv>
        <FlexColomnDiv>
          <TitleSpan>세대수</TitleSpan>
          <ContentSpan>1829세대 / 13동</ContentSpan>
        </FlexColomnDiv>

        <FlexDiv>
          <ContentWrap>
            <FlexColomnDiv>
              <TitleSpan>세대수</TitleSpan>
              <ContentSpan>1829세대 / 13동</ContentSpan>
            </FlexColomnDiv>
          </ContentWrap>
          <ContentWrap>
            <FlexColomnDiv>
              <TitleSpan>층수</TitleSpan>
              <ContentSpan>18층/ 35층</ContentSpan>
            </FlexColomnDiv>
          </ContentWrap>
        </FlexDiv>
        <HrLine />
        <FlexColomnDiv>
          <TitleSpan>대환 말소대상</TitleSpan>
          <FlexDiv>
            <ContentSpan>주식회사 조은은행</ContentSpan>
            <ContentPercent>150%</ContentPercent>
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
                  fontSize: '16px',
                  resize: 'none',
                  border: 'none',
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
  font-size: 16px;
`;
const HrLine = styled.div`
  border: 0.5px solid #dfdcdc7b;
`;
const FileNameSpan = styled.span`
  color: #1a237e;
  font-size: 11px;
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
  font-size: 16px;
  font-weight: bold;
`;
const TitleSpan = styled.span`
  color: #8f8f8f;
  font-size: 14px;
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
  border: 0.5px solid #c9c9c9;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-right: 50px;
`;
