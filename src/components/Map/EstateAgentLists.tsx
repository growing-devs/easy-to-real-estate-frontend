import { Column } from 'react-table';
import { useState, useEffect } from 'react';
import { PlaceListWrapper } from './style';
import { useSearchStore } from '@/store/store';
import Table, { TableProps } from '../common/Table';

const EstateAgentLists = () => {
  const { newLat, newLng } = useSearchStore(); // 위도, 경도
  const [agentLists, setAgentLists] = useState<any>();

  useEffect(() => {
    // 장소 검색 객체를 생성
    const ps = new window.kakao.maps.services.Places();
    const centerLocation = new window.kakao.maps.LatLng(newLat, newLng); // 검색하는 중심 위치 설정

    // 카테고리로 부동산 리스트 검색
    ps.categorySearch('AG2', searchAG2, {
      location: centerLocation,
      radius: 1000, // 검색 반경
      sort: window.kakao.maps.services.SortBy.DISTANCE, // 검색되는 리스트 정렬 기준을 거리 기준으로
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
      console.log(agentLists);
    }
  }, [newLat]);

  const COLUMNS: Column<{
    place_name: string;
    distance: string;
    address_name: string;
    phone: string;
  }>[] = [
    {
      Header: '공인중개사명',
      accessor: 'place_name',
    },
    {
      Header: '거리',
      accessor: 'distance',
    },
    {
      Header: '주소',
      accessor: 'address_name',
    },
    {
      Header: '전화번호',
      accessor: 'phone',
    },
  ];

  const tableProps: TableProps = {
    tableData: agentLists,
    tableColumns: COLUMNS,
    maxHeight: '100%',
    disableScroll: true, // 스크롤 없음
    width: ['240px', '200px', '320px', '180px'],
  };

  return <div>{agentLists ? <Table {...tableProps} /> : null}</div>;
};

export default EstateAgentLists;
