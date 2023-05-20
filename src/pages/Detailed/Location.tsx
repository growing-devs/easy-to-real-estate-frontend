import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useSearchStore } from '@/store/store';
import Map from '@/components/Map';
import EstateAgentLists from '@/components/Map/EstateAgentLists';
import FacilityLists from '@/components/Map/FacilityLists';

const Location = () => {
  const { address, newLat, newLng, setLat, setLng } = useSearchStore();
  const link = `https://new.land.naver.com/complexes?ms=${newLat},${newLng},19`;

  // 주소 받으면 좌표로 변환해서 전역 상태로 저장
  useEffect(() => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, (result: any, status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setLat(result[0].y);
        setLng(result[0].x);
      }
    });
  }, [address]);

  return (
    <LocationContainer>
      <p>1. 지도/로드뷰</p>
      <Map />
      <p>
        2. 주변 시설<span>(담보물건 1km 이내에서 가장 가까운 장소를 표시합니다.)</span>
      </p>
      <FacilityLists />
      <p>3. 주변 부동산 정보</p>
      <EstateAgentLists />
      <a href={link} target="_blank" rel="noreferrer">
        네이버 부동산에서 더보기<span className="material-symbols-outlined">arrow_forward_ios</span>
      </a>
    </LocationContainer>
  );
};

export default Location;

const LocationContainer = styled.div`
  width: 100%;
  p {
    font-weight: 500;
    font-size: 14px;
    margin: 24px 0;
    span {
      font-size: 12px;
    }
    &:first-of-type {
      margin-top: 0;
    }
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;
    margin-top: 24px;
    font-weight: 700;
    font-size: 12px;
    color: #53a74a;
    border: 1px solid #4caf50;
    border-radius: 4px;
    span {
      margin-left: 10px;
      font-weight: 700;
      font-size: 12px;
    }
  }
`;
