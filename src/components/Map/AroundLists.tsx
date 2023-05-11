import { useState, useEffect } from 'react';
import { PlaceListWrapper } from './style';
import { useSearchStore } from '@/store/store';

const AroundLists = () => {
  const { newLat, newLng } = useSearchStore(); // 위도, 경도
  const [agentLists, setAgentLists] = useState<any>();
  const [schoolLists, setSchoolLists] = useState<any>();
  const [theaterLists, setTheaterLists] = useState<any>();

  useEffect(() => {
    // 장소 검색 객체를 생성
    const ps = new window.kakao.maps.services.Places();
    const centerLocation = new window.kakao.maps.LatLng(newLat, newLng); // 검색하는 중심 위치 설정

    // 카테고리로 장소를 검색합니다
    ps.categorySearch('AG2', searchAG2, {
      location: centerLocation,
      radius: 1000, // 검색 반경
      sort: window.kakao.maps.services.SortBy.DISTANCE, // 검색되는 리스트 정렬 기준을 거리 기준으로
    });
    ps.categorySearch('SC4', searchSC4, {
      location: centerLocation,
      radius: 1000, // 검색 반경
      sort: window.kakao.maps.services.SortBy.DISTANCE,
    });
    ps.keywordSearch('영화관', searchMT, {
      location: centerLocation,
      radius: 1000, // 검색 반경
      sort: window.kakao.maps.services.SortBy.DISTANCE,
    });

    // 부동산 리스트 검색 시 호출되는 콜백함수
    function searchAG2(data: any, status: any) {
      const AgLists = []; // 검색될 리스트
      if (status === window.kakao.maps.services.Status.OK) {
        // 5개 까지만 검색해서
        for (let i = 0; i < 5; i += 1) {
          if (data[i] === undefined) break; // 데이터가 없으면 스톱.;
          AgLists.push(data[i]); // 리스트에 push해서
        }
        setAgentLists(AgLists); // 상태로 저장
      } else {
        setAgentLists(null); // 검색 결과 없으면 상태값 비우기
      }
    }

    // 학교 리스트 검색 시 호출되는 콜백함수
    function searchSC4(data: any, status: any) {
      if (status === window.kakao.maps.services.Status.OK) {
        setSchoolLists(data); // 상태로 저장
      } else {
        setSchoolLists(null); // 검색 결과 없으면 상태값 비우기
      }
    }

    // 영화관 리스트 검색 시 호출되는 콜백함수
    function searchMT(data: any, status: any) {
      if (status === window.kakao.maps.services.Status.OK) {
        setTheaterLists(data); // 상태로 저장
      } else {
        setTheaterLists(null); // 검색 결과 없으면 상태값 비우기
      }
    }
  }, [newLat]);

  return (
    <PlaceListWrapper>
      <ul>
        <li className="listTitle">부동산 리스트</li>
        {agentLists ? (
          agentLists.map((list: any) => {
            return (
              <li className="placelist" key={list.id}>
                <span className="listName">
                  {list.place_name}({list.distance}m)
                </span>
                <span className="listAddress">{list.address_name}</span>
                <span className="listPhone">{list.phone}</span>
              </li>
            );
          })
        ) : (
          <li>리스트 없습니다</li>
        )}
      </ul>
      <ul>
        <li className="listTitle">학교 리스트</li>
        {schoolLists ? (
          schoolLists.map((list: any) => {
            return (
              <li className="placelist" key={list.id}>
                <span className="listName">
                  {list.place_name}({list.distance}m)
                </span>
                <span className="listAddress">{list.address_name}</span>
                <span className="listPhone">{list.phone}</span>
              </li>
            );
          })
        ) : (
          <li>리스트 없습니다</li>
        )}
      </ul>
      <ul>
        <li className="listTitle">영화관 리스트</li>
        {theaterLists ? (
          theaterLists.map((list: any) => {
            return (
              <li className="placelist" key={list.id}>
                <span className="listName">
                  {list.place_name}({list.distance}m)
                </span>
                <span className="listAddress">{list.address_name}</span>
                <span className="listPhone">{list.phone}</span>
              </li>
            );
          })
        ) : (
          <li>리스트 없습니다</li>
        )}
      </ul>
    </PlaceListWrapper>
  );
};

export default AroundLists;
